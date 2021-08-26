# elasticsearch

[![GitHub stars](https://img.shields.io/badge/version-7.8.0-brightgreen.svg)]()



### 옵션

#### config/elasticsearch.yml

https://esbook.kimjmin.net/02-install/2.3-elasticsearch/2.3.2-elasticsearch.yml

- cluster.name #클러스터이름
  - 엘라스틱 실행시 클러스터 이름이 다르면 다른 클러스터로 실행된다
- node.name  #노드이름

- path.data #데이터 저장하는 경로
- network.hot 
  - 외부에서도 접근 가능 
  - 값 변경시 운영환경으로 전환되면서 부트스트랩 체크
- http:port  #포트 설정
- discovery.seed_hosts  #다른 호스트를 찾을 때 찾을 네트워크 주소
- cluster.initial_master_node #마스터 노드 후보들을 지정



#### config/jvm.options

- 자바의 힙 메모리
- -Xms1g
- -Xmx1g



#### 실행옵션

- bin/elasticsearch -d #백그라운드 실행

- bin/elasticsearch -d -p es.pid
  - es.pid 라는 파일을 생성
  - cat es.pid 로 확인하면 프로세스 아이디가 찍힌다
  - `kill 'cat es.pid'` 명령어로 elasticsearch 실행 종료
- -E node.name="node-new"
  - 실행시 파라미터로 환경변수 설정 가능





### 부트스트랩 체크

- filie descriptors
  - https://www.elastic.co/guide/en/elasticsearch/reference/current/file-descriptors.html
  - ulimit -n 65535
    - 일회용 세션
  - /etc/security/limits.conf
    - [user_name]  -  nofile 65535
    - 시스템 재시작

- vurtial memory
  - https://www.elastic.co/guide/en/elasticsearch/reference/current/vm-max-map-count.html
  - sysctl -w vm.max_map_count=262144
  - /etc/sysctl.conf
    - vm.max_map_count=262144
    - 시스템 재시작

- discovery setting
  - elasticsearch.yml
    - `discovery.seed_hosts: ["host1", "host2"]` 추가 (호스트 이름 or ip)
    - `cluster.initial_master_nodes: ["node-1"]` 추가



###  보안 적용

- https://www.elastic.co/guide/en/elasticsearch/reference/7.6/security-settings.html
- elasticsearch.yml
  - https://www.elastic.co/guide/en/elasticsearch/reference/7.11/encrypting-internode.html
  - `xpack.security.enabled: true` 추가
  - `xpack.security.transport.enabled: true`

- security transport key 생성

  - https://www.elastic.co/guide/en/elasticsearch/reference/7.11/encrypting-communications-certificates.html

  - `bin/elasticsearch-certutil ca` 공개키 생성

    - 파일이름
    - 패스워드

  - `mkdir config/cert` config파일 및에 cert 파일 생성

  - ```sh
    ./bin/elasticsearch-certutil cert \
    --ca elastic-stack-ca.p12 \ #방금 만든 공개키 파일
    --dns localhost \ #elastic-1,elastic-2,elastic-3
    --ip 127.0.0.1,::1 \ # 사용하는 ip를 , 로 구분 
    --out config/certs/node-1.p12 #이름 변경 가능 es-cluster.p12
    ```

  - 공개키 패스워드 입력

  - cert 파일의 패스워드 입력

  - elasticsearch.yml

    - `xpack.security.transport.ssl.keystore.path: certs/${node.name}.p12 ` #es-cluster
    - `xpack.security.transport.ssl.truststore.path: certs/${node.name}.p12`
      - path 입력시 절대경로를 붙이지 않으면 config부터 시작
    - `./bin/elasticsearch-keystore add xpack.security.transport.ssl.keystore.secure_password: password`
    - `./bin/elasticsearch-keystore add xpack.security.transport.ssl.truststore.secure_password: password`

- keystore 생성

  - `./bin/elasticsearch-keystore create`
  - `./bin/elasticsearch-keystore add xpack.security.transport.ssl.keystore.secure_password`
    - 패스워드 입력
  - `./bin/elasticsearch-keystore add xpack.security.transport.ssl.truststore.secure_password`
    - 패스워드 입력
  - `bin/elasticsearch-keystore list` 명령어로 확인

- bin/elasticsearch-setup-passwords

  - `bin/elasticsearch-setup-passwords auto`
    - 자동으로 패스워드 할당
  - `bin/elasticsearch-setup-passwords interactive`
    - 모든 패스워드를 하나씩 설정

- `curl localhost:9200 -u [user_name]:[password]` 

- 임시방편

  - `bin/elasticsearch-users user add [user_name] -p [password] -r [level]`
    - config 파일 밑에 users에 생성
    - 해당 노드에서만 사용 가능

  

  

  

  

  

  





































