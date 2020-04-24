# Git

1. 코드 관리
2. 협업 도구
3. 배포 도구

   - 개츠비
   - 깃허브 페이지스
   - 스타트 부트스트랩(css 툴)
   - godadday (도메인 구매 사이트)
   - Heroku

   



kubernetes (쿠버네티스)

Platform as a Service => PaaS

Infrastructure as a Service => IaaS

git bransh visualizer

octotree

githubdesktop

mlab



#### 블록체인

- cytographically hashed pointer linked list

--> git과 유사







## 코드관리

### (1) SCM(Source Code Management)

- 버젼을 통해서 관리한다 =>VCS (version control system)

- 디렉토리 중심(Repository)



### (2) 코드 관리를 위한 기본 명령어

1. `git init`

   - .git 파일 생성
     - git 관련 데이터들이 저장된 폴더
   - 현재 위치에 (master) 가 추가됨

   - git 리셋
     - .git파일을 삭제후 다시 `git init`

2. `git status`

   - 현재 git 저장소(repository)의 상태를 확인

3. git add

4. git commit -m "message"

5. git log --oneline

   -  현재까지의 저장된 버전을 조회

6. git checkout 'hash id'

   - 해당 위치로 돌아감

7. git chechout master

8.  git stash

   - 현재 변경 사항을 임시 저장 후 변경사항 전으로 롤백

9. git stash pop

   - 원상복귀

### (3) 원격 저장소 관련 명령어

1. git remote
   - 현재 설정된 모든 원격저장소에 관한 정보를 조회
2. `git remote add [저장소의 별명] [저장소의 주소]
   - `git remote add origin https://github.com/pickle-radish/test_repo`
3. git remote -v (--verbose)
   - 저장소의 주소까지 추가로 정보를 보여준다

4. git push [저장소의 별명] [브렌치의 이름]
   - `git push origin master`
5. git clone [저장소의 주소] [디렉토리 이름]



- git config --global --list  : 메타정보 
- git diff : 변경된 사항의 세부 정보



### (4) Branch

#### !!브랜치는 일회용 : 더이상 쓰이지 않는 브랜치는 항상 정리해줘야 한다

1. git branch 
   
   - 현재 브랜치를 조회하는 명령어 (기본적으로 master)
2. git branch [브랜치명] 
   
   - 새로운 브랜치를 생성하는 명령어
3. git checkout [브랜치명]
   
   - 브랜치 이동
4. git merge [합칠 브랜치명] 
   - **(주의!)**  master에서 test를 병합할 때 master를 이동 후 merge를 진행해야 함
     - `git checkout master`
     - `git merget test`

5. git branch -d [삭제할 브랜치명]   /   git branch -D [브랜치명]

   - 이미 병합된 브랜치를 삭제할 경우 -d : soft deletion
   - 병합되지 않은 브랜치를 삭제할 경우 -D : hard deletion

   

### (5) Merge 시나리오

1. Fast-Forward Merge
   - master 브랜치에서 commit이 없고 다른 브랜치에서  commit 한 내용을 합칠 때
2. Auto Merge
   - master 브랜치에서 commit이 있었지만 test에서 합칠 파일이 master에서는 없을 때
3. Merge Conflict
   - master와 test브랜치 양쪽에서 같은 파일의 같은 라인을 수정했을 때









## 협업 도구

1. Push & Pull
2. Fork & PR
3. Share d Repository with Branching (Branch)



### (1) Push & Pull 모델

- Synchronous 작업
  - 끝말잇기 

- 해당 프로젝트에 대한 push 권한이 있어야함 (공동 작업자로 초대)
- 

### (3) Fork & Pull Request 모델

1. 참여하고 싶은 오픈소스의 깃허브 주소로 들어가서 오른쪽 상단의 fork를 클릭해서 내 repository에 포함시킨다
2. 내 repository에 있는 파일을 clone
3. 내용을 수정후 push
4. 브라우저에 깃 repository에 clone버튼 밑에 pull request 클릭
5. 오른쪽의 초록색 create pull request 버튼 클릭
6. 제목과 메세지 입력후 요청 전송(내용을 마크업 적용 가능)







## Heroku

heroku downlod를 구글에 검색해서 다운로드

heroku login -i  명령어로 로그인

heroku create

git remote -v 명령어시 아무것도 안나옴

git init 후 다시 heroku create

git remote -v 명령어를 치면 이번엔 remote가 생김

똑같이 add, commit, push

















### !주의 사항

.git 폴더가 있는 파일 밑에는 .git 파일이 또 들어가지 않게 주의

해당 저장소 위치에 들어가서 뒤에 /invitations 하면 수락 가능









