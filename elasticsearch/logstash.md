# Logstash



### db에서 값 불러오기



##### jdbc connector

- [https://dev.mysql.com/downloads/] 에서 Connector/J
- Platform independent.zip 다운로드
- 압축해재 후 jar 파일 사용



##### pipeline 작성

```conf
input {
  jdbc {
    jdbc_driver_library => "[jdbc_path]/mysql-connector-java-8.0.27.jar"
    jdbc_driver_class => "com.mysql.jdbc.Driver"
    jdbc_connection_string => "jdbc:mysql://[ip_address]:[port]/[db_name]"
    jdbc_user => "user"
    jdbc_password => "password"
    schedule => "* * * * * *"
    tracking_column => "unix_ts_in_secs"
    use_column_value => true
    tracking_column_type => "numeric"
    statement => "SELECT *, UNIX_TIMESTAMP(target_time) AS unix_ts_in_secs FROM target_table WHERE target_time < NOW() ORDER BY target_time ASC"
  }
}

filter {
  mutate {
    copy => { "id" => "[@metadata][_id]"}
    remove_field => ["@version", "unix_ts_in_secs"]
  }
}

output {
  elasticsearch {
    ssl => true
    ssl_certificate_verification => true
    cacert => "/usr/share/elasticsearch/config/certificates/ca/ca.crt"
    hosts => "https://es01:9200"
    user => "elastic"
    password => "[elastic_password]"
    index => "[index_name]"
    document_id => "%{[@metadata][_id]}"
  }
}
```

- `[ ]` 부분에는 사용하는 환경에 맞춰서 작성 (filter와 output에 document_id 는 예외)

- `statement` 부분에 원하는 데이터를 불러오는 쿼리 작성

- filter > mutate > copy

  - index에 `_id` 로 사용하려는 컬럼을 copy
  - output 에서 document_id 로 지정

- ssl

  ```conf
   ssl => true
   ssl_certificate_verification => true
   cacert => "/usr/share/elasticsearch/config/certificates/ca/ca.crt"
  ```

  - ssl 설정을 사용하는 경우 사용

- 데이터베이스의 데이터를 불러와 index를 자동 생성시 소문자로 매핑됨

  - copy 대상 컬럼은 소문자로 작성

  - `*` 표시 말고 직접 컬럼 작성시에는 대문자로 작성

