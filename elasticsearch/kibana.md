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



### 실행

- https://www.elastic.co/guide/en/kibana/current/start-stop.html
- `bin/kibana`

- `bin/kibana &` #백그라운드 실행
  - `ps -ef | grep node` #kibana는 node로 실행된다

- pm2
  - 해당 kibana의 node 버전을 서버에 깔아준다
    - package.json 에서 node버전 확인
    - nvm 다운 추천
    - https://github.com/nvm-sh/nvm
    - `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash`
    - `source .bach`
    - `nvm install [node version]`
    - `node -v`
  - `npm install -g pm2`
  - `pm2 start [kibana/src/cli/cli.js] --name kibana`
  - `pm2 stop kibana`
  - `pm2 delete kibana`

