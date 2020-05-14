## Request, Response



#### query string 형태로 전달

deleteUser.do?userid=gildong

@RequsetParam



#### 데이터를 url에 /(슬래쉬) base로 전달

deleteUser.do/gildong

@Pathvariable



DispatcherServlet의 url-pattern :  *do => /

Tomcat이 먼저 호출해주는 DefaultServlet의 url-pateern도 /