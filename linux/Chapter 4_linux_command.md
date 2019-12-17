# Chapter 4

<br>

## 시작과 종료

#### 터미널/콘솔에서 시스템 종료 명령 실행

- poweroff
- shutdown -P now
- halt -p
- init 0

<br>

##### shuwdown 

- shutdown -P +10 --> 10분 후에 종료(P: poweroff)
- shutdown -r 22:00 --> 오후 10시에 재부팅(r: reboot)
- shutdown -c --> 예약된 shutdown을 취소(c: cancel)
- shutdown -k +15 --> 현재 접속한 사용자에게 15분 후에 종료된다는 메시지를 보내지만 실제로 종료는 안됨

<br>

#### 시스템 재부팅

- reboot
- shutdonw -r now
- init 6

<br>

#### 로그아웃

- logout
- exit

<br>

#### 가상 콘솔

우분투에서는 총 7개의 가상 콘솔을 제공한다. 즉 컴퓨터 한 대에 일곱 개가 연결된 효과를 낼 수 있다

각각의 가상 콘솔로 이동하는 명령어는 `Ctrl`+`Alt`+`F1`~`F7`  이다 1~6번 가상 콘솔은 텍스트 모드로 제공고 7번째 콘솔은 우분투를 처음에 부팅하면 나오는 화면이라고 생각하면 된다.

<br>

#### 런레벨

런레벨 모드는 /lib/systemd/system 디렉터리의 runlevel?.target 파일을 확인한다

7개의 파일은 링크 파일이고, 각각의 링크 파일은 실제 파일과 연결되어 있다.

init 0 명령은 runlevel0.target 파일을 실행하라는 의미다

<br>

##### 런 레벨 변경하기

- 현재 런 레벨 확인 
  - ls -l /lib/systemd/system/default.target

- 런 레벨 변경
  - ln -sf /lib/systemd/system/multi-user.target /lib/systemd/system/default.target
  - reboot 으로 시스템을 재부팅한다
- 재부팅시에 텍스트 모드로 부팅된다
  - root 사용자로 접속
  - ln -sf /lib/systemd/system/graphical.taget /lib/systemd/system/default.target
  - reboot

<br>

#### 자동 완성과 히스토리

터미널 창에서 방향키 위, 아래 버튼을 통해서 이전에 실행했던 명령어를 다시 불러올 수 있다

자동 완성 기능은 test.txt 라는 파일이 있을 때 t를 입력하고 `tap`을 눌러주면 자동으로 text.txt 라고 글이 완성되어 써진다. 만약에 t로 시작하는 파일이 여러개 있을 경우에는 `tap`을 연속으로 두번 눌러주면 해당하는 파일의 목록이 나온다



#### 에디터 사용

gedit : 일반적으로 윈도우에서 사용하는 메모장과 유사

- 파일을 실행하는 명령어
  - gedit test.txt

vi : 리눅스에서 gui모드를 지원하지 않는 경우에는 gedit를 아예 사용할 수 없기 때문에 명령어 창에서 사용할 수 있는 편집기

- vi 명령어 
  - 입력
    - i : 현재 커서의 위치부터 입력
    - I : 현재 커서 줄의 맨 앞에서부터 입력
    - a : 현재 커서의 위치 다음 칸부터 입력
    - A : 현재 커서 줄의 맨 마지막부터 입력
    - o : 현재 커서의 다음 줄에 입력
    - O : 현재 커서의 이전 줄에 입력
    - s : 현재 커서 위치의 한 글자를 지우고 입력
    - S : 현재 커서의 한 줄을 지우고 입력
  - 이동
    - h : 커서를 왼쪽으로 한칸 이동
    - j : 커서를 아래로 한 칸 이동
    - k : 커서를 위로 한 칸 이동
    - l : 커서를 오른쪽으로 한 칸 이동
    - ^ : 현재 행의 처음으로 이동
    - $ : 현재 행의 마지막으로 이동
    - 숫자 gg : 해당 숫자의 행으로 이동
    - G : 제일 끝 행으로 이동
  - 삭제, 복사, 붙여넣기
    - x : 현재 커서가 위치한 글자 삭제
    - X : 현재 커서가 위치한 앞 글자 삭제
    - dd : 현재 커서의 행 삭제 (잘라내기)
    - 숫자dd : 현재 커서부터 숫자만큼의 행 삭제
    - yy : 현재 커서가 있는 행을 복사(복사하기)
    - 숫자yy : 현재 커서부터 숫자만큼의 행을 복사
    - p : 복사한 내용을 현재 행 이후에 붙여넣기
    - P : 복사한 내용을 현재 행 이전에 붙여넣기
  - 문자열 찾기
    - /문자열 : 해당 문자열을 찾음
    - n : 해당 문자열을 찾는 명령어 실행 후 찾은 문자 중에서 다음 문자로 이동

<br>

#### 리눅스 기본 명령어

- ls : List의 약자로 해당 디렉터리에 있는 파일의 목록을 나열한다
  - ls --> 현재 디렉터리의 파일 목록
  - ls /etc/systemd --> /etc/systemd 디렉터리의 목록
  - ls -a --> 현재 디렉터리의 목록(숨김파일 포함)
  - ls -l --> 현재 디렉터리의 목록을 자세히 보여줌
  - ls *.conf --> 확장자가 conf인 목록을 보여줌
  - ls -l /etc/systemd/b* --> /etc/systemd 디렉터리에 있는 목록 중 앞 글자가 'b'인 것의 목록을보여줌
- cd : Change Directory의 약자로 디렉터리를 이동하는 명령이다
  - cd --> 현재 사용자의 홈 디렉토리로 이동
  - cd -ubuntu --> ubuntu 사용자의 홈 디렉터리로 이동
  - cd .. --> 바로 상위의 디렉터리로 이동
  - cd /etc/systemd --> /etc/systemd 디렉터리로 이동
  - cd ../etc/systemd --> 상대 경로로 이동. 현재 디렉터리의 상위로 이동한 후 다시 /etc/systemd로 이동
- pwd : Print Working Directory의 약자로 디렉터리의 전체 경로를 화면에 보여준다
- rm : ReMove의 약자로 파일이나 디렉토리를 삭제한다
  - rm abc.txt --> 해당 파일을 삭제
  - rm -i abc.txt --> 삭제 시 정말 삭제할 지 확인하는 메세지가 나옴
  - rm -f abc.txt --> 삭제 시 확인하지 않고 바로 삭제함
  - rm -r abc --> abc 디렉터리와 그 아래에 있는 하위 디렉터리를 강제로 전부 삭제
- cp : CoPy의 약자로 파일이나 디렉터리를 복사한다
  - cp abc.txt cba.txt --> abc.txt를 cba.txt라는 이름으로 바꿔서 복사
  - cp -r abc cba --> 디렉터리 복사 abc디렉터리를 cba 디렉터리로 복사
- touch : 크기가 0인 새 파일을 생성하거나, 이미 파일이 존재한다면 파일의 최종 수정 시간을 변경
- mv : MoVe의 약자로 파일이나 디렉터리의 이름을 변경하거나 다른 디렉터리로 옮길 때 사용
  - mv abc.txt /etc/systemd/ --> abc.txt를 /etc/systemd/ 디렉터리로 이동
  - mv aaa bbb ccc ddd --> aaa,bbb,ccc 파일을 '/ddd' 디렉터리로 이동
  - mv abc.txt www.txt --> abc.txt.의 이름을 www.txt로 변경해서 이동
- mkdir : MaKe DIRectory의 약자로 새로운 디렉터리를 생성한다
- rmdir : ReMove DIRectory의 약자로 디렉터리를 삭제한다 해당 디렉터리의 삭제 권한이 있어야 하고 디렉터리는 비어있어야 한다

- cat : cconCATenate의 약자로 파일의 내용을 화면에 보여준다
- head, tail : 텍스트 형식으로 작성된 파일의 앞 10행 또는 마지막 10행만 화면에 출력한다
  - head /etc/systemd/bootchart.conf --> 해당 파일의 앞 10행을 화면에 출력
  - head -3 /etc/systemd/bootchar.conf --> 앞 3행만 화면에 출력
  - tail -5 /etc/systemd/bootchart.conf --> 마지막 5행만 화면에 출력
- more : 텍스트 형식으로 작성된 파일을 페이지 단위로 화면에 출력한다
- less : more 명령어의 확장판
- file : 해당 파일이 어떤 종류의 파일인지 표시해준다
- clear : 현재 사용 중인 터미널 화면을 깨끗하게 지워준다

<br>

#### 사용자 관리와 파일 속성

- vi 에디터로 /etc/passwd 파일을 열어보면 유저의 정보를 볼 수 있다

root​ : x : 0 : 0 : root : /root : /bin/bash

콜론으로 나뉘어져 있는 행의 의미는 다음과 같다

사용자 이름 : 암호 : 사용자 ID : 사용자가 소속된 그룹 ID : 추가 정보 : 홈 디렉터리 : 기본 셀

<br>

- vi 에디터로 /etc/group 파일을 열어보면 그룹과 그룹 아이디를 확인 할 수 있다

##### 사용자 관리 명령어

- adduser : 새로운 사옹자를 추가해 준다
  - adduser user1 : user1이라는 이름의 사용자 생성
  - adduser --uid 1111 user2 --> user2라는 이름의 사용자를 생성하면서 사용자 ID는 1111
  - adduser --gid 1000 user3 --> user3이라는 이름의 사용자를 생성하면서 그룹 ID가 1000인 그룹에 포함
  - adduser --home /newhome user4 --> user4 사용자를 생성하면서 홈 디렉터리를 /newhome으로 지정
  - adduser --shell /bin/csh user5 --> user5를 생성하면서 기본 셸을 /bin/csh 로 지정
- passwd : 사용자의 비밀번호를 변경한다
- usermod : 사용자의 속성을 변경한다
  - usermod --shell /bin/csh user1 --> 사용자의 기본 셸을 /bin/csh로 변경
  - usermod --groups ubuntu user1 --> 사용자의 보조 그룹에 ubuntu 그룹을 추가
- userdel : 사용자를 삭제
  - userdel -r user1 --> 사용자를 삭제하면서 홈 디렉터리까지 삭제
- chage : 사용자의 암호를 주기적으로 변경하도록 설정한다
  - chage -l user1 --> 사용자에 설정된 사항을 확인
  - chage -m 2 user1 --> 사용자에 설정한 암호를 사용해야 하는 최소 일자
  - chage -M 30 user --> 사용자에 설정한 암호를 사용할 수 있는 최대 일자
  - chage -E 2023/12/12 user1 --> 암호가 만료되는 일자
  - chage -W 10 user --> 암호가 만료되기 전에 경고하는 기간 기본값은 7일
- groups : 사용자가 소속된 그룹을 보여준다
- groupadd : 새로운 그룹을 생성
  - groupadd --gid 2222 group2 --> group2를 생성하면서 ID는 2222
- groupmod : 그룹의 속성을 변경한다
- groupdel : 그룹을 삭제한다
- gpasswd : 그룹의 암호를 설정하거나 관리 수행한다

<br>

##### 파일 속성

`touch sample.txt` 명령어를 실행하고 `ls -l` 명령을 실행하면 결과물 앞부분이 다음과 같이 나온다

-rw-r--r--

- 맨 앞부분이 디렉터리일 경우에는 d 일반 파일일 경우에는 -
- 다음은 3개씩 끊어서 인식하면 된다
  - r은 read, w는 write, x는 execute의 약자
  - 첫번째 rwx는 소유자의 권한
  - 두번째 rwx는 그룹의 권한
  - 새번째 rwx는 사용자의 권한

- chmod 명령어로 권한 수정 가능
  - rwx를 이진수로 표현해서 해당 자리의 권한이 있으면 1 없으면 0 임을 계산한다
  - chmod 644 sample.txt --> -rw-r--r-- 의 결과가 나온다

<br>

#### 편리하게 패키지를 설치하는 apt-get

필요한 패키지를 인터넷을 통해 다운받는 명령어

다운받을 URL은 /etc/apt/sources.list 파일에 저장되어 있다

- 기본 명령어

  - apt-get -y install 패키지 이름 : 패키지 설치

  - apt-get update : /etc/apt/sources.list 파일의 내용이 수정되면 이 명령으로 다운 받을 패키지 목록을 업데이트 해준다
  - apt-get remove : 삭제
  - apt-get purge : 기존 설치된 패키지를 설정파일을 포함해서 완전히 제거한다
  - apt-get autoremove : 사용하지 않는 패키지를 모두 지운다
  - apt-get clean 또는 apt-get autoclaen : 설치할 때 내려받기한 파일 및 과거의 파일을 제거
