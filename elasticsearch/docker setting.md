# elasticseasrch - docker

[![GitHub stars](https://img.shields.io/badge/version-7.8.0-brightgreen.svg)]()



# 파일 생성

#### env

- `vi .env`  .env 파일 생성

  ```
  COMPOSE_PROJECT_NAME=es
  VERSION=7.8.0
  ```





#### elastic

- `mkdir elasticsearch ` elasticsearch 폴더 생성

- `vi elasticsearch/Dockerfile` 해당 폴더에 Dockerfile 생성

  ```
  ARG VERSION
  FROM elasticsearch:${VERSION}
  RUN bin/elasticsearch-plugin install analysis-nori
  ```
  
  - `FROM elasticsearch:${VERSION}`  elastic 해당 버전의 이미지 선택
  - `RUN bin/elasticsearch-plugin install analysis-nori` nori 플러그인 설치





#### docker-compose

- `vi docker-compose.yml`

  ```yml
  version: '2.2'
  
  services:
    es01:
      build:
        context: elasticsearch/
        args:
        	VERSION: $VERSION
      container_name: es01
      environment:
        - node.name=es01
        - cluster.name=es-docker-cluster
        - discovery.seed_hosts=es02,es03
        - cluster.initial_master_nodes=es01,es02,es03
        - bootstrap.memory_lock=true
        - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
      ulimits:
        memlock:
          soft: -1
          hard: -1
      volumes:
        - data01:/usr/share/elasticsearch/data
      ports:
        - 9201:9200
      networks:
        - elastic
  
    es02:
      build:
        context: elasticsearch/
        args:
        	VERSION: $VERSION
      container_name: es02
      environment:
        - node.name=es02
        - cluster.name=es-docker-cluster
        - discovery.seed_hosts=es01,es03
        - cluster.initial_master_nodes=es01,es02,es03
        - bootstrap.memory_lock=true
        - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
  
      ulimits:
        memlock:
          soft: -1
          hard: -1
      volumes:
        - data02:/usr/share/elasticsearch/data
      networks:
        - elastic
  
    es03:
      build:
        context: elasticsearch/
        args:
        	VERSION: $VERSION
      container_name: es03
      environment:
        - node.name=es03
        - cluster.name=es-docker-cluster
        - discovery.seed_hosts=es01,es02
        - cluster.initial_master_nodes=es01,es02,es03
        - bootstrap.memory_lock=true
        - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
      ulimits:
        memlock:
          soft: -1
          hard: -1
      volumes:
        - data03:/usr/share/elasticsearch/data
      networks:
        - elastic
        
    kib01:
      image: kibana:${VERSION}
      container_name: kib01
      depends_on:
        - es01
      ports:
        - 5601:5601
      environment:
        SERVERNAME: localhost
        ELASTICSEARCH_HOSTS: http://es01:9200
      networks:
        - elastic
  
  volumes:
    data01:
      driver: local
    data02:
      driver: local
    data03:
      driver: local
    certs:
      driver: local
  
  networks:
    elastic:
      driver: bridge
  
  ```
  
  



## 실행

처음 리눅스에서 실행시

```
ERROR: [1] bootstrap checks failed 
[1]: max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]
```

에러가 뜨는데

docker 설정이 아니라 리눅스 환경설정을 변경해야 한다



`sysctl vm.max_map_count`  명령어를 치면 현재 vm.max_map_count의 값을 확인할 수 있다

- 일시적 변경
  - `sysctl -w vm.max_map_count=262144`
- 영구적 변경
  - `vi /etc/sysctl.conf` 명령어로 해당 파일을 열어서
  - `vm.max_map_count=262144` 추가
  - 저장후 `sysctl -p` 명령어 실행하면 재시작 없이 적용 완료



##### docker-compose 실행

- `docker-compose build`

- `docker-compose up -d`



##### query

- `curl "http://localhost:9201"`





## 모니터링

- https://localhost:5601 키바나 접근

- 왼쪽 메뉴창을 열고 management > Dev Tools

- 인덱스 생성(보여주기위한 인덱스 생략해도 무관)

  ```
  PUT /books
  {
    "settings": {
      "number_of_shards": 5,
      "number_of_replicas": 1
    }
  }
  ```

- 다시 메뉴에서  management > Stack Monitoring

- Set up monitoring with Metricbeat 는 Metricbeat를 설치해야 하므로 아래
  Or, set up with self monitoring 클릭

- Turn on monitoring 클릭



- 비활성화 시 Dev Tools로 이동후 다음 명령어실행

  ```
  PUT _cluster/settings
  {
    "persistent" : {
      "xpack" : {
        "monitoring" : {
          "collection" : {
            "enabled" : null
          }
        }
      }
    }
  }
  ```

  - null 값 말고도 false값도 가능
    - false는 설정 값이 남아있고 null은 설정 자체를 지운다







## logstash 추가



#### logstash 설정파일

- `mkdir logstash`

- `Dockerfile` 생성

  ```
  ARG VERSION
  FROM logstash:${VERSION}
  RUN mkdir /usr/share/logstash/metadata
  ```

  

- 해당 폴더 밑에 `logstash.yml` 생성

  ```yml
  config.reload.automatic: true #파일 수정시 자동 재시작
  
  http.host: "0.0.0.0"
  xpack.monitoring.elasticsearch.hosts: ["http://es01:9200"]
                             #https는 ssl사용시,es01 = node 1번의 도메인, 포트는 도커 내부
  ```

- 같은 경로에 logstash.conf 파일도 생성

  ```yml
  input {
    tcp {
      port => 5000
    }
  }
  
  output {
    elasticsearch {
      hosts => "http://es01:9200"  #yml파일의 elastic 도메인과 동일
    }
  }
  ```

  



- `docker-compose` 에 logstash 추가

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
          source: ./logstash/logstash.conf
          target: /usr/share/logstash/pipeline/logstash.conf
          read_only: true
      ports:
        - "5000:5000/tcp"
        - "5000:5000/udp"
        - 9600:9600
      networks:
        - elastic
  ```



- #### logstash확인

  - `echo 'hello logstash' | nc 0.0.0.0 5000` 명령어 실행
  - kibana 에서 logstash index 확인 (logstash-2021.11.05-000001 의 형태)
  - `GET logstash-2021.11.05-000001/_search` 로 입력한 데이터 확인
    - `message`  컬럼에 `hello logstash` 값 확인



## nginx  추가

- `mkdir nginx` 폴더 추가

- `nginx.conf` 파일 생성

  ```conf
  worker_processes 2;
  
  events {
      worker_connections 1024;
  }
  http {
      log_format  main  '$remote_addr - "$request" '
                        '$status $body_bytes_sent "$http_referer" '
                        '"$http_user_agent" $request_time';
  
      server {
          listen 80;
  
          access_log /var/log/nginx/access.log main;
          error_log /var/log/nginx/error.log;
  
          location / {
              proxy_pass http://es01:9200;
          }
      }
  }
  ```

- `docker-compose` 파일에 추가

  ```yml
    nginx:
      image: nginx
      container_name: nginx
      volumes:
        - ./nginx/nginx.conf:/etc/nginx/nginx.conf
      ports:
        - 8080:80
      networks:
        - elastic
  ```

- `curl localhost:8080` 로 요청시 `curl localhost:9201` 과 동일한 결과가 나오면 정상 작동





## filebeat  추가

- `mkdir filebeat` 

- `filebeat.yml` 파일 생성

  ```yml
  # input 설정
  filebeat.inputs:
    - type: log
      enabled: true
      paths:
        - /var/log/nginx/*.log
  # Multiple Log를 수집하는 경우, 아래와 같이 추가로 입력
  # - type: log
  #     enabled: true
  #     paths: []
  
  # output 설정
  output.logstash:
    enabled: true
    hosts: ["logstash:5044"]
    # FIXME: Cannot reach the hosts of Logstash
  # output.elasticsearch:
  #   hosts: ["http://elasticsearch:9200"]
  #   username: "elastic"
  #   password: "changeme"
  
  # filebeat와 함께 제공된 샘플 Kibana 대시보드를 사용하는 경우
  #setup.kibana:
  #  host: "http://kibana:5601"
  #  username: "elastic"
  #  password: "changeme"
  
  ```



- logstash의 메인 pipeline 수정

  ```conf
  input {
      beats {
          port=> 5044
      }
  }
  
  output {
      elasticsearch {
          hosts => "http://es01:9200"
      }
      stdout {}
  }
  ```



- `docker-compose` 파일 수정

  ```yml
    nginx:
      image: nginx
      container_name: nginx
      volumes:
        - ./nginx/nginx.conf:/etc/nginx/nginx.conf
        - ./nginx/log:/var/log/nginx #log 파일 바인딩
      ports:
        - 8080:80
      networks:
        - elastic
  
    filebeat:
      image: elastic/filebeat:$VERSION
      entrypoint: "filebeat -e -strict.perms=false"
      container_name: filebeat
      volumes:
        - ./filebeat/filebeat.yml:/usr/share/filebeat/filebeat.yml
        - ./nginx/log:/var/log/nginx
      networks:
        - elastic
      depends_on:
        - es01
        - nginx
        - logstash
        - kibana
  
  ```

  

- `curl localhost:8080` 으로 요청
- kibana에서 logstash 인덱스에 데이터 확인
