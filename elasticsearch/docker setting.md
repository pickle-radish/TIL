# elasticseasrch - docker

[![GitHub stars](https://img.shields.io/badge/version-7.8.0-brightgreen.svg)]()



# 파일 생성

#### env

- `vi .env`  .env 파일 생성

  ```
  COMPOSE_PROJECT_NAME=es
  CERTS_DIR=/usr/share/elasticsearch/config/certificates
  ELASTIC_PASSWORD=PleaseChangeMe
  KIBANA_PASSWORD=PleaseChangeMe
  VERSION=7.8.0
  ```





#### elastic

- `mkdir elasticsearch ` elasticsearch 폴더 생성

- `vi elasticsearch/Dockerfile` 해당 폴더에 Dockerfile 생성

  ```
  FROM elasticsearch:${VERSION}
  RUN bin/elasticsearch-plugin install analysis-nori
  ```

  - `FROM elasticsearch:${VERSION}`  elastic 해당 버전의 이미지 선택
  - `RUN bin/elasticsearch-plugin install analysis-nori` nori 플러그인 설치



#### 암호화를 위한 키 생성

- `vi instances.yml`

  ```yml
  instances:
    - name: es01
      dns:
        - es01
        - localhost
      ip:
        - 127.0.0.1
  
    - name: es02
      dns:
        - es02
        - localhost
      ip:
        - 127.0.0.1
  
    - name: es03
      dns:
        - es03
        - localhost
      ip:
        - 127.0.0.1
  
    - name: 'kib01'
      dns:
        - kib01
        - localhost
  ```

- `vi create-certs.yml`

  ```yml
  version: '2.2'
  
  services:
    create_certs:
      image: docker.elastic.co/elasticsearch/elasticsearch:${VERSION}
      container_name: create_certs
      command: >
        bash -c '
          yum install -y -q -e 0 unzip;
          if [[ ! -f /certs/bundle.zip ]]; then
            bin/elasticsearch-certutil cert --silent --pem --in config/certificates/instances.yml -out /certs/bundle.zip;
            unzip /certs/bundle.zip -d /certs;
          fi;
          chown -R 1000:0 /certs
        '
      working_dir: /usr/share/elasticsearch
      volumes:
        - certs:/certs
        - .:/usr/share/elasticsearch/config/certificates
      networks:
        - elastic
  
  volumes:
    certs:
      driver: local
  
  networks:
    elastic:
      driver: bridge
  ```



#### docker-compose

- `vi docker-compose.yml`

  ```yml
  version: '2.2'
  
  services:
    es01:
      build:
        context: elasticsearch/
      container_name: es01
      environment:
        - node.name=es01
        - cluster.name=es-docker-cluster
        - discovery.seed_hosts=es02,es03
        - cluster.initial_master_nodes=es01,es02,es03
        #- ELASTIC_PASSWORD=$ELASTIC_PASSWORD
        - bootstrap.memory_lock=true
        - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
        - xpack.license.self_generated.type=trial
        - xpack.security.enabled=true
        - xpack.security.http.ssl.enabled=true
        - xpack.security.http.ssl.key=$CERTS_DIR/es01/es01.key
        - xpack.security.http.ssl.certificate_authorities=$CERTS_DIR/ca/ca.crt
        - xpack.security.http.ssl.certificate=$CERTS_DIR/es01/es01.crt
        - xpack.security.transport.ssl.enabled=true
        - xpack.security.transport.ssl.verification_mode=certificate
        - xpack.security.transport.ssl.certificate_authorities=$CERTS_DIR/ca/ca.crt
        - xpack.security.transport.ssl.certificate=$CERTS_DIR/es01/es01.crt
        - xpack.security.transport.ssl.key=$CERTS_DIR/es01/es01.key
      ulimits:
        memlock:
          soft: -1
          hard: -1
      volumes:
        - data01:/usr/share/elasticsearch/data
        - certs:$CERTS_DIR
      ports:
        - 9201:9200
      networks:
        - elastic
  
      healthcheck:
        test: curl --cacert $CERTS_DIR/ca/ca.crt -s https://localhost:9200 >/dev/null; if [[ $$? == 52 ]]; then echo 0; else echo 1; fi
        interval: 30s
        timeout: 10s
        retries: 5
  
    es02:
      build:
        context: elasticsearch/
      container_name: es02
      environment:
        - node.name=es02
        - cluster.name=es-docker-cluster
        - discovery.seed_hosts=es01,es03
        - bootstrap.memory_lock=true
        #- ELASTIC_PASSWORD=$ELASTIC_PASSWORD
        - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
        - xpack.license.self_generated.type=trial
        - xpack.security.enabled=true
        - xpack.security.http.ssl.enabled=true
        - xpack.security.http.ssl.key=$CERTS_DIR/es02/es02.key
        - xpack.security.http.ssl.certificate_authorities=$CERTS_DIR/ca/ca.crt
        - xpack.security.http.ssl.certificate=$CERTS_DIR/es02/es02.crt
        - xpack.security.transport.ssl.enabled=true
        - xpack.security.transport.ssl.verification_mode=certificate
        - xpack.security.transport.ssl.certificate_authorities=$CERTS_DIR/ca/ca.crt
        - xpack.security.transport.ssl.certificate=$CERTS_DIR/es02/es02.crt
        - xpack.security.transport.ssl.key=$CERTS_DIR/es02/es02.key
      ulimits:
        memlock:
          soft: -1
          hard: -1
      volumes:
        - data02:/usr/share/elasticsearch/data
        - certs:$CERTS_DIR
      networks:
        - elastic
  
    es03:
      build:
        context: elasticsearch/
      container_name: es03
      environment:
        - node.name=es03
        - cluster.name=es-docker-cluster
        - discovery.seed_hosts=es01,es02
        - cluster.initial_master_nodes=es01,es02,es03
        - bootstrap.memory_lock=true
        #- ELASTIC_PASSWORD=$ELASTIC_PASSWORD
        - "ES_JAVA_OPTS=-Xms512m -Xmx512m"
        - xpack.license.self_generated.type=trial
        - xpack.security.enabled=true
        - xpack.security.http.ssl.enabled=true
        - xpack.security.http.ssl.key=$CERTS_DIR/es03/es03.key
        - xpack.security.http.ssl.certificate_authorities=$CERTS_DIR/ca/ca.crt
        - xpack.security.http.ssl.certificate=$CERTS_DIR/es03/es03.crt
        - xpack.security.transport.ssl.enabled=true
        - xpack.security.transport.ssl.verification_mode=certificate
        - xpack.security.transport.ssl.certificate_authorities=$CERTS_DIR/ca/ca.crt
        - xpack.security.transport.ssl.certificate=$CERTS_DIR/es03/es03.crt
        - xpack.security.transport.ssl.key=$CERTS_DIR/es03/es03.key
      ulimits:
        memlock:
          soft: -1
          hard: -1
      volumes:
        - data03:/usr/share/elasticsearch/data
        - certs:$CERTS_DIR
      networks:
        - elastic
    kib01:
      image: kibana:${VERSION}
      container_name: kib01
      depends_on: {"es01": {"condition": "service_healthy"}}
      ports:
        - 5601:5601
      environment:
        SERVERNAME: localhost
        ELASTICSEARCH_URL: https://es01:9200
        ELASTICSEARCH_HOSTS: https://es01:9200
        ELASTICSEARCH_USERNAME: kibana_system
        ELASTICSEARCH_PASSWORD: $KIBANA_PASSWORD
        ELASTICSEARCH_SSL_CERTIFICATEAUTHORITIES: $CERTS_DIR/ca/ca.crt
        SERVER_SSL_ENABLED: "true"
        SERVER_SSL_KEY: $CERTS_DIR/kib01/kib01.key
        SERVER_SSL_CERTIFICATE: $CERTS_DIR/kib01/kib01.crt
      volumes:
        - certs:$CERTS_DIR
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



##### docker-compose 실행

- `docker-compose -f create-certs.yml run --rm create_certs`
- `docker-compose up -d`



##### key 생성

- `docker exec es01 /bin/bash -c "bin/elasticsearch-setup-passwords auto --batch --url https://es01:9200"`



##### docker-compose 재실행

- `docker-compose stop`
  - down을 하게 되면 컨테이너 삭제이므로 설정된 key값이 날라간다
- `docker-compose up -d`



##### query

- `curl "https://localhost:9201" -k -u 'elastic:[elasticpassword]'`
  - 운영 전환으로 사용하게 되면 https로 접근





## 모니터링

- https://localhost:5601 키바나 접근

- id: elastic, pw: [elasticpassword]

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



