# Chapter 8 원격지 시스템 관리하기

### 텔넷 서버

오랫동안 전통적으로 사용되어 온 원격 접속 방법. 좀 오래되서 보안 등에 취약하지만 기본적인 것이므로 알아두자

<br>

#### 설치

- `apt-get -y intsall xinetd telnetd`
- /etc/xinetd.d 폴더에서 touch telnet 명령어로 파일 생성
- 다음 내용을 telnet안에 입력한다

```
service telnet
{
	disable = no
    flags = REUSE
    socket_type = stream
    wait = no
    user = root
    server = /usr/sbin/in.telnetd
    log_on_failure += USERID	
}
```

- `adduser teluser` 명령어로 사용자를 만든다 비밀번호도 teluser
- `systemctl restart xinetd` 명령으로 서비스를 가동
- `systemctl enable xinetd` 명령어로 재부팅시에도 가동되도록 설정
- `systemctl status xinetd` 로 가동 여부 확인
- `ufw allow 23/tcp` 로 23번 포트 허용
- telnet 서버IP주소 -> 접속



### OpenSSH 서버

보안이 강화된 SSH 서버 데이터 전송 시 패킷 암호화를 한다

#### 설치

- `apt-get -y install openssh-server`
- `systemctl restart ssh` --> 서비스 재가동
- `systemctl enable ssh` --> 서비스 상시 가동
- `systemctl status ssh` --> 서비스 가동 여부 확인
- `ufw allow 22/tcp` --> 22번 포트 허용
- client에서 (ubuntu gnome) 터미널 창에서 `ssh username@hostIP` 를 입력해서 연결한다



### VNC 서버

텔넷이나 ssh는 X윈도우 환경을 지원하지 않음으로 꼭 텍스트 모드에서 사용 가능한 명령만 써야 한다

VNC는 X윈도 환경 자체를 연격지에서 사용 가능하게 하는 원격 프로그램이다

#### 설치

- `apt-get -y install gnome-panel gnome-settings-daemon metacity vnc4server`
- `reboot`
- `vncserver` 명령으로 서비스 가동 비밀번호는 123456으로 설정하자 그리고 다시 `vncserver -kill :1` 명령으로 서비스를 중지
- ~/.vnc/xstartup 파일을 편집기로 열어서 제일 아래에 다음 4개의 행을 추가

```
gnome-panel &
gnome-settings-daemon &
metacity &
nautilus &
```

<br>

#### 실행

##### 리눅스 client

- client 에서 `sudo apt-get -y install xtightvncviewer`명령어로 패키지 설치
- `vncviewer 서버IP:디스플레이번호` 명령어로 연결

##### 윈도우

- tiger vnc를 다운로드 받는다
- 실행하면 VNC server 에 server의 IP를 입력하고 비밀번호 123456을 입력해준다
