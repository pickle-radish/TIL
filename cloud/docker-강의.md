# docker

- 공식문서 docs.docker.com



## 1. 기본 명령어 

- 공식문서 참고 설치
- centos 경우 설치후 실행
  systemctl start docker
- 서버 재시작시 자동 실행
  systemctl enable docker

- docker 설치 후 권한
  usermod -a -G docker username

- image 검색
   	- docker search [image name]

-  image 다운로드
   	- docker pull [imange name]

- 도커 실행
  	- docker run

- 실행중인 도커 확인
  	- docker ps

- 도커 실행 중지
  	- docker stop [name]

- 도커 삭제
  	- docker rm [name]

- 도커 이미지 삭제 

	- docker rmi [name]



## 2. 이미지 

#### 이미지 생성

- 디렉토리 생성

  - mkdir [name]

- vi dockerfile

  ```
  # comment
  FROM [운영환경]
  LAMEL [이미지 정보]
  RUM [base image에서 실행할 commands]
  COPY [targetfile, save path]
  ADD [targetfile, save path] #tar,url 등 추가 사용가능
  WORKDIR [path] #컨테이너 실행시 시작위치
  ENV [evn] #환경변수
  USER [username] #컨테이너 실행시 적용할 유저 설정
  VOLUME [] #데이타 마운트
  EXPOSE [port] #포트포워딩
  CMD [명려어] #컨테이너 동작시 실행할 명령어
  ENTRYPOINT [명령어] #CMD와 동일
  ```

- docker build - t [name:tag] .

- docker image ls || docker images

- docker images --no-trunc #이미지 명을 풀네임으로 출력



#### 이미지 업로드

##### public repositry

- docker login
- docker tag [imagename:tag] [dockerhub_Id/imagename:tag]
- docker push [dockerhub_Id/imagename:tag]



##### private repositry

1. dochub에는 계정당 하나 무료로 생성 가능

2. 내부 서버에 repositry를 직접 운영

   - docker run -d -p 5000:5000 --restart always --name registry registry:2

   - docker tag [image_name] localhost:5000/[imange_name]

   - docker push localhost:5000/[image_name]

   - 저장소 위치

     -> /var/lib/docker/volumes/[container_id]/_data/docker/registry/v2/repositories/

   

## 4. 컨테이너 실행

1. 실행

   - docker create --name [name] [image_name:version]

   - docker start [name]

   생성 및 실행 동시

   - docker run --name [name] -d [imange_name:version]

2. 확인
   - docker ps
   - docker inspect [name]
     - docker inspect --format '{{.NetworkSettings.IPAddress}}' [name]
       - 필요한 정보를 json 레벨을 선택 가능
3. 중지 및 삭제
   - docker stop [name]
   - docker rm [name]

4. 관리
   - docker ps
   - docker top [name] #해당 도커의  프로세서 확인
   - docker logs [name] #로그 확인
   - docker exec -it [name] [command] #현재 실행중인 컨테이너에 명령어 실행
   - docker attach [option] [container_name] #컨테이너 터미널 연결



## 5. 리소스 관리

1. 메모리

   - --memory, -m

     - docker run -d -m 512m

     - docker run -d -m 1g --memory-reservation 500m

       -> 최대 1G 적어도 500m 보장

   - --memory-swap

     - docker run -d -m 200m --memory-swap 300m

       -> 실제 swap memory = 300m - 200m = 100m

     ! momory-swap - 디스크를 메모리처럼 사용

   - --oom-kill-disable

     - docker run -d -m 200m --oom-kill-disable

       -> 피지컬 메모리가 부족해도 kill 하지 않게 보호

2. CPU

   - --cpus

     - docker run -d --cpus=".5"

       -> .5 core만큼 사용가능

   - --cpuset-cpus

     - docker run -d --cpuset-cpus 0-3

       -> 0부터 3번 코어 사용

   - --cpu-share

     - docekr run -d --cpu-shares 2048

       -> 리소스 할당

3. Block I/O

   - --blkio-weight
     - 100~1000까지 선택 defualt = 500
   - --device-read-bps, --device-write-bps
     - 특정 디바이스의 읽기,쓰기 작업의 초당 크기 제한
   - --device-read-iops, --device-write-iops
     - 특정 디바이스의 읽기,쓰기 작업의 초당 속도 제한

4. 모티너링
   - docker monitoring commands
     - docker stat
     - docker events

## 6. 볼륨

1. 볼륨 연결

   - docker run -d -name -db -v /dbdata:/var/lib/mysql

     -> 디스크의 /dbdata와 컨테이너의 /var/lib/mysql 을 연결

     -> 끝에 :ro 붙이면 readonly 옵션

   - 호스트 경로 생략시 또는 파일 이름만 붙일 경우
     - `/var/lib/docker/volume/UUID/_data` 해당 경로로 자동으로 마운트

2. 데이터 공유

   - 같은 곳을 마운트하면 공유 가능

3. 볼륨 관리
   - docker volume ls
   - docker volume rm id



## 7. 네트워크 설정

1. 포트포워딩
   - 도커 실행시 -p 옵션
     - docker run -p 80:80 nginx #호스트의 80포트와 도커의 80포트를 연결
     - docker run -p 80 nginx #도커의 80포트를 호스트에서 미사용중인 랜덤한 포트를 연결
     - docker run -P nginx #도커에서 expose된 모든 포트를 호스트의 랜덤한 포트와 연결
2. 직접 게이트웨이 생성을 통한 고정 IP할당
   - docker network create --driver bridge --subnet 192.168.100.0/24 --gateway 192.168.100.254 mynet
     - --driver: 생략가능 디폴트 bridge
     - --subnet: 생략가능 디폴트 172.18.0.0, 172.19.0.0 ...
     - --gateway: 생략가능 디폴트 subnet ip
     - mynet: 네트워크이름 (사용자가 원하는 이름으로 입력)
   - docker run -it -name c1 --net mynet --ip 192.168.100.100 busybox
     - --net: 생략가능 디폴트 기본 네트워크 사용시 원하는 네트워크 지정 가능
     - --ip: 생략가능 디폴트 mynet의 게이트웨이 사용시 192.186.100.1 번부터 차례로 할당
   - docker network inspect mynet
     - inspect로 상세보기 가능
3. 컨테이너간 통신
   - docker ru -d --name mysql -v /dbdata:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=wordpress -e MYSQL_PASSWORD=wordpress mysql:5.7
   - docekr run -d --name wordpress --link mysql:mysql -e WORDPRESS_DB_PASSWORD=wordpress -p 80:80 wordpress:4
     - --link [동작중인 컨테이너 이름]:[alias 이름]



## 8. 빌드에서 운영까지

#### docker compose

1. 설치
   - https://docs.docker.com/compose/install/
2. 기본 문법
   - https://docs.docker.com/reference/

```yaml
version: "3.9"
    
services:
  db:
    image: mysql:5.7
    volumes:
      - db_data:/var/lib/mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: somewordpress
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: wordpress
    
  wordpress:
    depends_on:
      - db
    image: wordpress:latest
    volumes:
      - wordpress_data:/var/www/html
    ports:
      - "80:80"
    restart: always
    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_USER: wordpress
      WORDPRESS_DB_PASSWORD: wordpress
      WORDPRESS_DB_NAME: wordpress
    command: /bin/bash
    
volumes:
  db_data: {}
  wordpress_data: {}
```

3. 명령어

- docker-compose config #문법 확인
- docker-compose up #실행
- docker-compose up -d #백그라운드 실행
- docker-compose -f /other-dir/docker-compose.yml #다른 위치의 docker-compose파일 
- docker-compose ps #해당 compose의 컨테이너들만 상태 확인
- docker-compose scale [service_name]=[count] #해당 서비스를 개수만큼 sacle
- docker-compose run [service_name] [command] #특정 서비스에 명령어 전달
- docker-compose logs [service_name] #특정 서비스의 로그 확인
- docker-compose stop
- docker-compose start
- docker-compose down
- docker-compose restart [service_name]

