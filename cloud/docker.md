도커 설치공식문서 ⇒ https://docs.docker.com/install/linux/docker-ce/ubuntu/

\#1 도커 저장소 추가 (아래 내용 추가 후 저장)

root@server:~# gedit /etc/apt/sources.list          

deb https://apt.dockerproject.org/repo ubuntu-xenial main

<br>

\#2 apt-get udpate 

<br>

\#3 HTTPS 통신을 위한 패키지와 공개키를 설치

root@server:~# apt-get install -y apt-transport-https ca-certificates curl gnupg-agent software-properties-common
root@server:~# apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D

<br>

\#4 linux-image extra 및 docker-engine 패키지 설치

root@server:~# apt-get install linux-image-extra-$(uname -r)

root@server:~# apt-get install docker-engine ⇐ 설치 여부 질문에 Yes 입력

<br>

\#5 도커 설치 확인

root@server:~# docker version

Client: Version:   17.05.0-ce 
API version: 1.29 
Go version:  go1.7.5 
Git commit:  89658be 
Built:    Thu May  4 22:10:54 2017 
OS/Arch:   linux/amd64

Server: 
Version:   17.05.0-ce
API version: 1.29 (minimum version 1.12) 
Go version:  go1.7.5 
Git commit:  89658be 
Built:    Thu May  4 22:10:54 2017 
OS/Arch:   linux/amd64 Experimental: false

**도커 이미지 생성** 

**#1 작업 디렉터리 및 main.go 파일 생성**

root@server:~# cd ~

root@server:~# mkdir docker

root@server:~# cd docker

root@server:~/docker# gedit main.go

// 8080 포트로 대기하는 웹 서버에 /로 요청이 들어오면 Hello Docker!!라는 응답 메시지를 반환

package main
import (	

"fmt"	"log"	"net/http"

)
func main() {

​	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {	
​	log.Println("received request")		
fmt.Fprintf(w, "Hello Docker!!")	
})
​	log.Println("start server")	
server := &http.Server{Addr: ":8080"}	
if err := server.ListenAndServe(); err != nil {	
log.Println(err)
}}

<br>

**#2 main.go 실행 및 확인**

root@server:~/docker# apt-get install golang-go
root@server:~/docker# go run main.go2019/12/23 15:00:03 start server
(새 터미널에서)root@server:~# curl http://localhost:8080/Hello Docker!!root@server:~# 
(브라우져에서)![img](https://lh4.googleusercontent.com/AU48W16vQ5hcSq7VUrj2hxjOlWL4-QDtXrAM3hlgLGasSKg3yTzyZBUijoYYdAlTJCFEPg929LVkDUTXqcwII6rQMmdrIqZ5ZHURlavdom_Uu_gtYrPCnW6n-VSnEDKhn7YsLDNa)
**#3 Dockerfile 작성**root@server:~/docker# gedit DockerfileFROM golang:1.9  ⇐ 베이스 이미지를 가져온다.(저장소 이름이 생략 → 도커 허브의 공식 이미지)
RUN mkdir /echo  ⇐ 컨테이너 내부에 /echo 디렉터리 생성하라 COPY main.go /echo
CMD [ "go", "run", "/echo/main.go" ]

**#4 도커 이미지를 빌드**

root@server:~/docker# docker image build -t example/echo:latest .
Sending build context to Docker daemon 3.072kB
Step 1/4 : FROM golang:1.9
1.9: Pulling from library/golang
55cbf04beb70: Pull complete 
1607093a898c: Pull complete 
9a8ea045c926: Pull complete 
d4eee24d4dac: Pull complete 
9c35c9787a2f: Pull complete 
8b376bbb244f: Pull complete
0d4eafcc732a: Pull complete 
186b06a99029: Pull complete 
Digest: sha256:8b5968585131604a92af02f5690713efadf029cc8dad53f79280b87a80eb1354
Status: Downloaded newer image for golang:1.9 
---> ef89ef5c42a9
Step 2/4 : RUN mkdir /echo 
---> Running in d574ae29436d 
---> f629052dbb9c
Removing intermediate container d574ae29436d
Step 3/4 : COPY main.go /echo 
---> 365a8e8b706a
Removing intermediate container f9086399c9fe
Step 4/4 : CMD go run /echo/main.go 
---> Running in 43ef8d52b72f 
---> be867a4ba9d0
Removing intermediate container 43ef8d52b72f
Successfully built be867a4ba9d0
Successfully tagged example/echo:latest

<br>

**#5 도커 이미지 확인**

root@server:~/docker# docker image lsREPOSITORY     TAG                 IMAGE ID      CREATED             SIZEexample/echo    latest              be867a4ba9d0    5 minutes ago       750MBgolang       1.9                 ef89ef5c42a9    17 months ago       750MBroot@server:~/docker# docker imagesREPOSITORY     TAG                 IMAGE ID      CREATED             SIZEexample/echo    latest              be867a4ba9d0    5 minutes ago       750MBgolang       1.9                 ef89ef5c42a9    17 months ago       750MB**#6 도커 컨테이너 실행**root@server:~/docker# docker container run -p 9000:8080   example/echo:latestroot@server:~/docker# docker container run -p 9000:8080 -d  example/echo:latestroot@server:~/docker# docker container run -p 9000:8080 -it example/echo:latestroot@server:~/docker# docker container run -p 9000:8080 -itd example/echo:latestroot@server:~/docker# docker container run -p 9000:8080 -it example/echo:latest /bin/bashroot@server:~/docker# docker container run -p 9000:8080 -itd example/echo:latest /bin/bash
root@server:~/docker# docker container run -p 9003:8080 -itd --name CONTAINER_NAME example/echo:latest /bin/bashroot@server:~/docker# docker container run -p 8080 -itd example/echo:latest /bin/bash**#7 백그라운드에 실행되는 컨테이너에 접속**root@server:~/docker# docker attach *CONTAINER_ID_or_NAME***#8 도커 컨테이터에서 빠져 나오는 방법**입력을 받을 수 없는 경우 ⇒ (다른 터미널에서) docker container stop *CONTAINER_ID_or_NAME*입력을 받을 수 있는 경우 ⇒ Ctrl+C or Ctrl+PQ쉘이 제공되는 경우 ⇒ exit or Ctrl+PQ**#9 도커 컨테이너 실행/중지**root@server:~/docker# docker container stop *CONTAINER_ID_or_NAME*root@server:~/docker# docker container start *CONTAINER_ID_or_NAME***#10 도커 컨테이너 상태 확인**root@server:~/docker# docker container psroot@server:~/docker# docker container lsroot@server:~/docker# docker container ps -aroot@server:~/docker# docker container ls -a**#11 실행 중인 컨테이너를 모두 중지**root@server:~/docker# docker container stop $(docker container ls -q)

https://hub.docker.com/ 회원가입

레퍼지터리/이미지명:태그명
**도커 이미지 태그 설정**root@server:~/docker# docker images
REPOSITORY     TAG                 IMAGE ID      CREATED             SIZE
example/echo    latest              11c732eb2923    About an hour ago   750MB
<none>       <none>              be867a4ba9d0    2 hours ago         750MB
golang       1.9                 ef89ef5c42a9    17 months ago       750MB
root@server:~/docker# docker image tag example/echo:latest example/echo:1.0
root@server:~/docker# docker images
REPOSITORY     TAG                 IMAGE ID      CREATED             SIZE
example/echo    1.0                 11c732eb2923    About an hour ago   750MB
example/echo    latest              11c732eb2923    About an hour ago  750MB
<none>       <none>              be867a4ba9d0    2 hours ago         750MB
golang       1.9                 ef89ef5c42a9    17 months ago       750MB

<br>

**도커 이미지를 도커 허브에 등록**

#1 이미지명을 **DOCKERHUB_ID/**IMAGE_NAME:TAG_NAME 형식을 준수
\#2 docker login 명령어로 docker hub에 로그인 
\#3 docker image push 명령어로 이미지를 등록
root@server:~/docker# docker imagesREPOSITORY     TAG                 IMAGE ID      CREATED              SIZE
example/echo    1.0                 11c732eb2923    About an hour ago   750MB
example/echo    latest              11c732eb2923    About an hour ago   750MB
<none>       <none>              be867a4ba9d0    2 hours ago         750MB
golang       1.9                 ef89ef5c42a9    17 months ago       750MB
root@server:~/docker# docker image tag example/echo:latest **myanjini**/echo:latest
root@server:~/docker# docker imagesREPOSITORY     TAG                 IMAGE ID      CREATED             SIZE
example/echo    1.0                 11c732eb2923    2 hours ago         750MB
example/echo    latest              11c732eb2923    2 hours ago         750MB
myanjini/echo    latest              11c732eb2923    2 hours ago         750MB
<none>       <none>              be867a4ba9d0    2 hours ago         750MB
golang       1.9                 ef89ef5c42a9    17 months ago       750MB
root@server:~/docker# docker login -u myanjiniPassword: 
Login Succeeded
root@server:~/docker# docker image push **myanjini**/echo:latest
The push refers to a repository [docker.io/myanjini/echo]
0c307581eb12: Pushed 
584dc2febfe9: Pushed 
186d94bd2c62: Layer already exists 
24a9d20e5bee: Layer already exists 
e7dc337030ba: Layer already exists 
920961b94eb3: Layer already exists 
fa0c3f992cbd: Layer already exists 
ce6466f43b11: Layer already exists 
719d45669b35: Layer already exists 3b10514a95be: Layer already exists latest: digest: sha256:ffd9106c199dae435377038d41735b0594a22cd1825d71ac00cedef9083bd9a9 size: 2417
root@server:~/docker# 





/bin/sh -c mkdir /echo

build context

<br>

docker run -itd -e workspace=/tmp envimage /bin/bash

- -e는 환경변수 설정
- /bin/bash를 써 줘야지 attach 로 컨테이너 안에 붙을 때 리눅스 터미널 창에서 명령어를 입력하는 것 과 같은 상태가 된다

<br>

컨테이너 안으로 파일 밀어넣기

docker container cp ./hello3.html mywebserver:/var/www/html/hello3.html

컨테이너에서 파일 가져오기

docker container cp CONTAINER_ID_or_NAME:CONTAINER_FILE_PATH HOST_FILE_PATH

<br>

docker stats

- 컨테이너의 실시간 자원 사용 현황

<br>

사용중인 컨테이너를 이용해 이미지를 만들고 새 컨테이너 만들기

- docker **commit** -m "add hello3.html" mywebserver tkdansg/mywebserverimage:1.0

- docker run --name mws_1.0 -d -P myanjini/mywebserverimage:1.0 

<br>

inspect : 세부 정보를 확일 할 수 있는 옵션

- docker image inspect
- docker container inspect



#### 컨테이너 내부에서 명령어 실행 

docker exec

<br>

#### 도커 볼륨

컨테이너 외부에 데이터를 저장

1. 호스트의 특정 디렉토리를 공유
2. 다른 컨테이너와 공유
3. 도커에서 제공해 주는 볼륨

<br>

1. 호스트의 특정 디렉터리 공유

- docker run -d \
  --name wordpressdb_hostvolume \
  -e MYSQL_ROOT_PASSWORD=password \
  -e MYSQL_DATABASE=wordpress \
  **-v /home/wordpress_db:/var/lib/mysql** \ 
  mysql:5.7

<br>

2.  워드프레스 이미지를 이용해서 웹 서버 컨테이너를 생성
   root@server:~/docker# docker run -d --name wordpress_hostvolume 
   \> -e WORDPRESS_DB_PASSWORD=password 
   \> --link wordpressdb_hostvolume:mysql 
   \> -p 80 
   \> wordpress
3. 호스트 볼륨 공유를 확인
   root@server:~/docker# ls /home/wordpress_db/
4. 컨테이너 삭제 후 볼륨 데이터가 유지되는지 확인
   root@server:~/docker# docker container stop wordpress_hostvolume wordpressdb_hostvolume
   root@server:~/docker# docker container rm wordpress_hostvolume wordpressdb_hostvolume
   root@server:~/docker# ls /home/wordpress_db/

<br>

 볼륨 컨테이너

docker run -it --name volume_overide -v /home/wordpress_db:/home/testdir_2 alicek106/volume_test

root@server:~/docker# docker run -it 

 --name volumes-from-container 

\> --volumes-from volume_overide 

\>ubuntu:14.04

<br>

도커 볼륨

1. 볼륨 생성

root@server:~/docker# docker volume create --name myvolume

2. 생성한 볼륨을 사용하는 컨테이너를 생성
   -v [볼륨이름]:[컨테이너 디렉터리]
   root@server:~/docker# docker run -it --name myvolume_1 
   \> -v myvolume:/root/ 
   \> ubuntu:14.04
3. 동일 볼륨을 사용하는 컨테이너를 생성해서 파일 공유가 되는지 확인
   root@server:~/docker# docker run -it --name myvolume_1 
   \> -v myvolume:/root/
   \> ubuntu:14.04

<br>

도커 클러스터

일반적인 클러스터 구성

- 분산 코디네이터 - 각종 정보를 저장하고 동기화 → 클러스터에 영입할 새로운 서버의 발견, 클러스터의 각종 설정 저장, 데이터 동기화 등에 주로 사용
- 매니저 - 클러스터 내의 서버를 관리하고 제어
- 에이전트 - 각 서버를 제어

도커 스웜과 도커 스웜 모드 

- 여러 대의 도커 서버를 하나의 클러스터로 만들어 컨테이너를 생성하는 기능
- 도커 스웜 → 도커 1.6 버전 이후부터 사용
  - 에이전트 컨테이너가 필요하며 분산 코디네이터가 외부에 존재해야 함
  - 여러 대의 도커 서버를 하나의 지점에서 사용하도록 단일 접근점을 제공
- 도커 스웜 모드 → 도커 1.12 버전 이후부터 사용
  - 에이전트가 도커 자체에 내장 (분산 코디네이터를 외부에 설치할 필요 없음)
  - 클러스터링 기능에 초점

도커 스웜과 스웜 모드는 최소 3개 이상의 도커 서버를 필요로 함

도커 스웜 모드 → 매니저 노드와 워커 노드로 구성

- 매니저 노드 : 워커 노드를 관리하기 위한 도커 노드
- 워커 노드 : 실제 컨테이너가 생성되고 관리되는 도커 노드
- 매니저 노드에도 컨테이너가 생성될 수 있음 = 매니저 노드는 기본적으로 워커 노드 역할을 포함
- 매니저 노드는 반드시 1개 이상 존재해야 하며, 운영 환경에서는 다중화하는 것을 권장 
- 매니저 노드의 절반 이상에 장애가 발생하는 경우 복구를 위해 클러스터 운영을 중지하므로 매니저 노드는 홀수개로 구성하는 것이 효율적

1.  매니저 역할의 서버에서 스웜 클러스를 시작
   root@swarm-manager:~# docker swarm init --advertise-addr 192.168.111.100

docker swarm join \  --token SWMTKN-1-1ijy2o5balgzurh7dd68efv7304iofq3gzn6ijhqx3atxwyont-4f3n7u2beok42q25amqzc0f3e \  192.168.111.100:2377  ⇐ 새로운 워커 노드를 클러스터에 추가할 때 사용하는 비밀키(토큰)

2. 워커 노드를 추가 root@**swarm-worker1**:~# docker swarm join 
   \>   --token SWMTKN-1-1ijy2o5balgzurh7dd68efv7304iofq3gzn6ijhqx3atxwyont-4f3n7u2beok42q25amqzc0f3e 
   \>   192.168.111.100:2377This node joined a swarm as a worker.

3. 도커 서버가 정상적으로 스웜 클러스트에 추가되었는지 확인
   root@**swarm-manager**:~# docker node ls
4. 토큰 확인 및 변경 방법
   root@swarm-manager:~# docker swarm join-token (manager|worker)
   root@swarm-manager:~# docker swarm join-token --rotate manager
5. 노드 삭제
   docker node rm swarm-worker1
6. 서비스 생성
   root@swarm-manager:~# docker service create 
   \> ubuntu:14.04 
   \> /bin/bash -c "while true; do echo Hello Docker; sleep 1; done"
7. 서비스 확인
   root@swarm-manager:~# docker service ls
8. root@swarm-manager:~# docker service ps (서비스 이름)
9. 서비스 삭제 → 서비스 상태와 관계 없이 삭제가 가능
   root@swarm-manager:~# docker service rm 서비스 이름
10. nginx:1.10에서 nginx:1.11로 업데이트
    root@swarm-manager:~# docker service update --image nginx:1.11 myweb2
11. 업데이트 조건과 함께 서비스를 생성
    \# docker service create \
     --replicas 4 \ --name myweb3 \
     --update-delay 10s \ 
     --update-failure-action continue \
     nginx:1.10

root@swarm-manager:~# docker service inspect myweb2

12. 서비스 롤백
    root@swarm-manager:~# docker service update --rollback myweb2