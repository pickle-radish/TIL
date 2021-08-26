# Kibana

[![GitHub stars](https://img.shields.io/badge/version-7.8.0-brightgreen.svg)]()



### 옵션

#### config/kinaba.yml

- server.hosts #외부에서 접근시 ip 주소
- server.port #사용 포트

- elasticsearch.hosts [] #키바나가 접속할 elasticsearch 주소
- kibana.index #키바나의 설정들을 elasticsearch에 인덱스로 저장하는데 해당 인덱스의 이름
- elasticsearch.username: "kibana_system" #엘라스틱에 보안 적용시 활성 패스워드는 keystore를 통해 생성



#### kibana-keystore

- `bin/kibana-keystore create`
- `bin/kibana-keystore add elasticsearch.password`
  - 패스워드 값 입력