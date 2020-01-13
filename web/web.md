Web Server : http deamon	

Web Container : CGI engine

Web Context : my application scope



Web Application = web site + <u>cgi</u>(servlet)



main servlet 하나만 controller로 사용 여러개의 servlet을 만들기 보다 하나의 servlet 안에서 if else문을 통해 여러 페이지를 컨트롤한다



web 1.0 : 동기적 처리

web 2.0 

- AJAX : 비 동기적 java and xml

xml --> JSON



javascript 에서  document.write 같은 함수들은 DOM이라고 부른다

- DOM(Document Object Model)
- BOM(Browser Object Mode)

원래는 DOM도 BOM안에 속한다



객체 - 데이타와 매서드이 합

BOM밑에 document 객체들의 메소드들을 DOM이라고 부른다

데이터는 소괄호가 없다

메서드만 소괄호가 있다



function이나 변수는 다 window 소속이다

document == window.document



function welcome(){

}

welcome() == window.welcome()



변수의 값으로 function도 지정 가능



자료형 - 변수 타입

- 자바스크립트에서는 따로 변수 선언이 필요 없다
- 변수 사용시 변수의 값을 가지고 타입을 유추해서 스스로 정해진다
- 변수의 타입을 사용시 필요에 따라서 자동으로 형변환이 가능하다



이벤트 속성

- onclick : 마우스 클릭
- onmouseover : 마우스가 해당 영역에 위치
- onkeypress : 키보드를 누른 상태
- onkeydown : 한 키를 입력함
-  onload : HTML문서가 웹 브라우저에 적재됨
- onunload : HTML 문서가 엡 브라우저에서 제거됨
- onchange : 사용자가 입력값을 변경함
- onfocus : 사용자가 데이터를 입력할 수 있는 상태임



입력함수

- alert()
- confirm()
- prompt()



제어문

- 선택문 : if, if~else, if~else if, switch
- 반복문 : while, for, do~while, for-in
- 그 외 : continue, break

<u>**반복문 사용시 선언하는 변수들은 let으로 선언하는 습관을 들이자@!!**</u>

switch 구문에서 case사용시 다른 언어에서 쓰던것 처럼 한 case에 ,를 사용해서 여러개의 값을 지정하는 것이 불가능하다

여러개의 case를 사용하고 break를 생략하는 방식으로 사용







