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





### 여러개의 파이프 라인 실행

- 실행할 파이프라인을 만들어준다

  ```
  [pipeline]$ ll
  total 12
  -rw-rw-r-- 1 cmp cmp 874 Nov  9 10:53 pipeline_1.conf
  -rw-rw-r-- 1 cmp cmp 875 Nov  9 10:54 pipeline_2.conf
  -rw-rw-r-- 1 cmp cmp 963 Nov  9 10:54 pipeline_3.conf
  ```

  

- 파일 예시

  ```conf
  input {
    jdbc {
      jdbc_driver_library => "/usr/share/logstash/jdbc/mysql-connector-java-8.0.27.jar"
      jdbc_driver_class => "com.mysql.jdbc.Driver"
      jdbc_connection_string => "jdbc:mysql://${ip}:${port}/${dbname}"
      jdbc_user => "user"
      jdbc_password => "password"
      schedule => "0 0 * * * *"
      tracking_column => "unix_ts_in_secs"
      use_column_value => true
      tracking_column_type => "numeric"
      last_run_metadata_path => "/usr/share/logstash/metadata/pipeline1_sql_last_value.yml"
      statement => "SELECT *, UNIX_TIMESTAMP(EDIT_DATE) AS unix_ts_in_secs FROM pipeline_table_1 WHERE EDIT_DATE < NOW() ORDER BY EDIT_DATE ASC"
    }
  }
  
  filter {
    mutate {
      copy => { "id" => "[@metadata][_id]"}
      remove_field => ["@version", "@timestamp", "unix_ts_in_secs"]
    }
  }
  
  output {
    elasticsearch {
      hosts => "http://es01:9200"
      index => "pipeline_1"
      document_id => "%{[@metadata][_id]}"
    }
  }
  
  ```

  - `last_run_metadata_type` : 값을 지정해주지 않으면 다른 pipe 라인에서 sql_last_value 값을 같이 사용하게 된다

  

- `logstash/pipelines.yml` 파일 생성

  ```yml
  - pipeline.id: v_search_unity_txbk
    path.config: "/usr/share/logstash/pipeline/pipeline_1.conf"
  - pipeline.id: v_search_mid_special
    path.config: "/usr/share/logstash/pipeline/pipeline_2.conf"
  - pipeline.id: v_search_pms_special
    path.config: "/usr/share/logstash/pipeline/pipeline_3.conf"
  - pipeline.id: [pipeline_id]
    path.config: [path]/*.conf #정규식으로 여러파일 지정 가능
  ```

  - id를 정해주고 실행하려는 파이프라인을 정의한 conf 경로를 지정해준다
  - 같은 id 에서 다른 파일이지만 파이프라인 여러개 실행할 경우 인덱스가 달라도 데이터가 겹치는 등 예상과 다른 결과가 나온다



- `docker-compose` 파일 logstash의 volumes 부분 수정

  ```yml
    logstash:
      build:
        context: logstash/
        args:
          VERSION: $VERSION
      container_name: logstash
      depends_on:
        - es01
      environment:
        LS_JAVA_OPTS: "-Xmx256m -Xms256m"
      volumes:
        - type: bind
          source: ./logstash/logstash.yml
          target: /usr/share/logstash/config/logstash.yml
          read_only: true
        - type: bind
          source: ./logstash/pipelines.yml
          target: /usr/share/logstash/config/pipelines.yml
          read_only: true
        - type: bind
          source: ./logstash/pipeline
          target: /usr/share/logstash/pipeline
          read_only: true
        - ./jdbc:/usr/share/logstash/jdbc
      ports:
        - "5000:5000/tcp"
        - "5000:5000/udp"
        - 9600:9600
      networks:
        - elastic
  ```

  





## log

- nginx에서 log를 읽을 때 grok을 통해 한줄로 된 log를 각각의 key:value로 파싱할 수 있다

- nginx log 패턴을 변수화 해서 파일로 저장한다 위치는 `./logstash/patterns/nginx.pattern`

  ```
  NGINX_ACCESS %{IPORHOST:clientip} (?:-|(%{WORD}.%{WORD})) \[%{HTTPDATE:timestamp}\] "(?:%{WORD:verb} %{NOTSPACE:request}(?: HTTP/%{NUMBER:httpversion})?|%{DATA:rawrequest})" %{NUMBER:response} (?:%{NUMBER:bytes}|-) %{QS:referrer} %{QS:agents} %{QS:forwarder} %{GREEDYDATA:jsonstring}
  ```

- nginx 에서 한글이 깨지지 않으려면 log 설정을 해줘야 한다

  ```conf
  log_format main escape=none '$remote_addr - [$time_local] "$request" '
                        '$status $body_bytes_sent "$http_referer" '
                        '"$http_user_agent" "$http_x_forwarded_for" '
                        '$request_body';
  ```

  - `escape=none` 을 추가해 줬다
  - nginx로그와 logstash 의 패턴이 일치해야 한다 (일치하지 않으면 모든 필드가 다 실패)

- conf 파일설정은 filebeat로 값을 받는 경우로 작성한다

  ```conf
  input {
      beats {
          port=> 5044
      }
  }
  
  filter {
      grok {
          patterns_dir => "/usr/share/logstash/patterns"
          match => { "message" => "%{NGINX_ACCESS}" }
          add_field => [ "received_at", "%{@timestamp}" ]
      }
  }
  
  output {
      elasticsearch {
          hosts => "http://es01:9200"
      }
      stdout {
      }
  }
  ```

  

##### json 값 파싱

- json 값

  ```json
  {
      "query": {  
          "match": {
              "txbk_nm": "수능" 
          }
      }
  }
  ```

  

- body 부분으로 들어오는 json 값을 따로 원하는 값을 지정해서 빼고 싶다면 다음과 같이 사용한다

  ```conf
  input {
      beats {
          port=> 5044
      }
  }
  
  filter {
      grok {
          patterns_dir => "/usr/share/logstash/patterns"
          match => { "message" => "%{NGINX_ACCESS}" }
          add_field => [ "received_at", "%{@timestamp}" ]
      }
  	
  	#nginx.pattern 파일의 끝부분을 보면 %{GREEDYDATA:jsonstring} 으로 파싱 되있다 (GREEDYDATA(json)를 jsonstring 필드로 값 파싱)
      json {
          source => "jsonstring" #jsonstring 을 소스로 받는다
          
          #target => "search" #search 필드로 값을 저장 target을 지정하지 않으면 json의 첫 key값(query)으로 필드가 저장된다
      }
  
      grok {
          match => { "[query][match]" => '%{WORD}\"=>\"(?<word>[^"]+)' } # "txbk_nm" => "수능" 형태로 저장된 값에서 값을 파싱
      }
  
      grok {
      #   match => { "[search]" => '%{WORD}\":\"(?<word>[^\"]+)' } #string형태로 저장된 json형태를 파싱할 때 사용
      }
      
      #elastic이 date 형식으로 인식하는 format으로 변경
      date {
          match => [ "timestamp", "dd/MMM/YYYY:H:m:s Z" ]
          target => "search_time"
      }
      
  
  	#message에서 파싱된 불필요한 필드
      mutate {
          remove_field => ["clientip", "timestamp", "verb", "httpversion", "rawrequest:", "response", "bytes", "referrer", "agents", "forwarder", "request", "jsonstring", "query"]
      }
  
  	#기본적으로 파싱되는 시스템 필드
      mutate {
          remove_field => ["@version", "@timestamp", "host", "input", "log", "agent", "ecs", "message", "tags"]
      }
  
  }
  
  output {
      elasticsearch {
          hosts => "http://es01:9200"
      }
      stdout {
      }
  }
  
  ```
  
  

