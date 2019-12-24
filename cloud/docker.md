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

**#4 도커 이미지를 빌드**root@server:~/docker# docker image build -t example/echo:latest .Sending build context to Docker daemon 3.072kBStep 1/4 : FROM golang:1.91.9: Pulling from library/golang55cbf04beb70: Pull complete 1607093a898c: Pull complete 9a8ea045c926: Pull complete d4eee24d4dac: Pull complete 9c35c9787a2f: Pull complete 8b376bbb244f: Pull complete 0d4eafcc732a: Pull complete 186b06a99029: Pull complete Digest: sha256:8b5968585131604a92af02f5690713efadf029cc8dad53f79280b87a80eb1354Status: Downloaded newer image for golang:1.9 ---> ef89ef5c42a9Step 2/4 : RUN mkdir /echo ---> Running in d574ae29436d ---> f629052dbb9cRemoving intermediate container d574ae29436dStep 3/4 : COPY main.go /echo ---> 365a8e8b706aRemoving intermediate container f9086399c9feStep 4/4 : CMD go run /echo/main.go ---> Running in 43ef8d52b72f ---> be867a4ba9d0Removing intermediate container 43ef8d52b72fSuccessfully built be867a4ba9d0Successfully tagged example/echo:latest**#5 도커 이미지 확인**root@server:~/docker# docker image lsREPOSITORY     TAG                 IMAGE ID      CREATED             SIZEexample/echo    latest              be867a4ba9d0    5 minutes ago       750MBgolang       1.9                 ef89ef5c42a9    17 months ago       750MBroot@server:~/docker# docker imagesREPOSITORY     TAG                 IMAGE ID      CREATED             SIZEexample/echo    latest              be867a4ba9d0    5 minutes ago       750MBgolang       1.9                 ef89ef5c42a9    17 months ago       750MB**#6 도커 컨테이너 실행**root@server:~/docker# docker container run -p 9000:8080   example/echo:latestroot@server:~/docker# docker container run -p 9000:8080 -d  example/echo:latestroot@server:~/docker# docker container run -p 9000:8080 -it example/echo:latestroot@server:~/docker# docker container run -p 9000:8080 -itd example/echo:latestroot@server:~/docker# docker container run -p 9000:8080 -it example/echo:latest /bin/bashroot@server:~/docker# docker container run -p 9000:8080 -itd example/echo:latest /bin/bash
root@server:~/docker# docker container run -p 9003:8080 -itd --name CONTAINER_NAME example/echo:latest /bin/bashroot@server:~/docker# docker container run -p 8080 -itd example/echo:latest /bin/bash**#7 백그라운드에 실행되는 컨테이너에 접속**root@server:~/docker# docker attach *CONTAINER_ID_or_NAME***#8 도커 컨테이터에서 빠져 나오는 방법**입력을 받을 수 없는 경우 ⇒ (다른 터미널에서) docker container stop *CONTAINER_ID_or_NAME*입력을 받을 수 있는 경우 ⇒ Ctrl+C or Ctrl+PQ쉘이 제공되는 경우 ⇒ exit or Ctrl+PQ**#9 도커 컨테이너 실행/중지**root@server:~/docker# docker container stop *CONTAINER_ID_or_NAME*root@server:~/docker# docker container start *CONTAINER_ID_or_NAME***#10 도커 컨테이너 상태 확인**root@server:~/docker# docker container psroot@server:~/docker# docker container lsroot@server:~/docker# docker container ps -aroot@server:~/docker# docker container ls -a**#11 실행 중인 컨테이너를 모두 중지**root@server:~/docker# docker container stop $(docker container ls -q)

https://hub.docker.com/ 회원가입

레퍼지터리/이미지명:태그명
**도커 이미지 태그 설정**root@server:~/docker# docker imagesREPOSITORY     TAG                 IMAGE ID      CREATED             SIZEexample/echo    latest              11c732eb2923    About an hour ago   750MB<none>       <none>              be867a4ba9d0    2 hours ago         750MBgolang       1.9                 ef89ef5c42a9    17 months ago       750MBroot@server:~/docker# docker image tag example/echo:latest example/echo:1.0root@server:~/docker# docker imagesREPOSITORY     TAG                 IMAGE ID      CREATED             SIZEexample/echo    1.0                 11c732eb2923    About an hour ago   750MBexample/echo    latest              11c732eb2923    About an hour ago  750MB<none>       <none>              be867a4ba9d0    2 hours ago         750MBgolang       1.9                 ef89ef5c42a9    17 months ago       750MB
**도커 이미지를 도커 허브에 등록**#1 이미명을 **DOCKERHUB_ID/**IMAGE_NAME:TAG_NAME 형식을 준수
\#2 docker login 명령어로 docker hub에 로그인 
\#3 docker image push 명령어로 이미지를 등록
root@server:~/docker# docker imagesREPOSITORY     TAG                 IMAGE ID      CREATED             SIZEexample/echo    1.0                 11c732eb2923    About an hour ago   750MBexample/echo    latest              11c732eb2923    About an hour ago   750MB<none>       <none>              be867a4ba9d0    2 hours ago         750MBgolang       1.9                 ef89ef5c42a9    17 months ago       750MBroot@server:~/docker# docker image tag example/echo:latest **myanjini**/echo:latestroot@server:~/docker# docker imagesREPOSITORY     TAG                 IMAGE ID      CREATED             SIZEexample/echo    1.0                 11c732eb2923    2 hours ago         750MBexample/echo    latest              11c732eb2923    2 hours ago         750MBmyanjini/echo    latest              11c732eb2923    2 hours ago         750MB<none>       <none>              be867a4ba9d0    2 hours ago         750MBgolang       1.9                 ef89ef5c42a9    17 months ago       750MBroot@server:~/docker# docker login -u myanjiniPassword: Login Succeededroot@server:~/docker# docker image push **myanjini**/echo:latestThe push refers to a repository [docker.io/myanjini/echo]0c307581eb12: Pushed 584dc2febfe9: Pushed 186d94bd2c62: Layer already exists 24a9d20e5bee: Layer already exists e7dc337030ba: Layer already exists 920961b94eb3: Layer already exists fa0c3f992cbd: Layer already exists ce6466f43b11: Layer already exists 719d45669b35: Layer already exists 3b10514a95be: Layer already exists latest: digest: sha256:ffd9106c199dae435377038d41735b0594a22cd1825d71ac00cedef9083bd9a9 size: 2417root@server:~/docker# 