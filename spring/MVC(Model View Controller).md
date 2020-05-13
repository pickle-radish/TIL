## MVC(Model View Controller)

- Seperation of Concerns(Responsibility)

  관심사의 분리, 책임의 분리



### Model1 Architecture

- Model : Java(DAO, Service, VO)
- View : JSP(html, css, js)
- Controller : JSP



### Model2 Architecture

- Model : Java(DAO, Service, VO)
- View : JSP(html, css, js)
- Controller : Servlet
  - Spring MVC, Struts



### Servlet과 JSP 차이점

#### Servlet

- Java class 내부에 html태그를 삽입할 수 있다

- 컴파일이 가능

##### JSP

- html에 java code를 삽입할 수 있다.







##### out : PrinterSteam (내장객체 implicit object)



#### JSTL(Java Standard Tag Library)

- Jsp에서 java code를 없애자 <% %>, <%= %>
- 개발자들이 자주 사용하는 java 구문을 jsp표준 태그로 만들어 놓은 라이브러리



##### Servlet

- session.setAttribute("userList");

##### JSP

- ${sessionScope.userList} == ${userList}