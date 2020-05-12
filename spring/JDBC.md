## JDBC



### 1. Vendor 에서 제공하는 Driver 클래스를 생성

Class.forName("orcle.jdbc.OracleDriver");





### 2. Connection 생성

:Conntection은 DB와 연결을 담당하는 객체

url = "jdbc:oracle.jdbc:thin@IP:port:SID"

user="scott"

pass="tiger"

Connection con =DriverManager.getConnection(url, user, pass);



### 3. Statement 생성

: Statement는 SQL문을 DB에 전송하는 역할을 담당하는 객체

Statement stmt = con.createStatement();



### 4. SQL 실행

executeQuery() : ResultSet

- select 문

executeUpdate() : int

- insert, update, delete구문을 실행하는 쿼리



##### 결과 받아오기

```java
ResultSet rs = stmt.executeQuery("select * from users");

while(rs.next){	
	String userid = rs.getString("userid");
	String addr = rs.getString(2);

}
```



### 5. Resource 반납

:Statemen, Connection 의 close메서드를 호출



