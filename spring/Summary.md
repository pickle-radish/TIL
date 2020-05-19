# Summary



### 1. Framework란?

- 비기능적인 요소(로깅, 인증, Tx처리, 성능...)를 구현해 놓은 라이브러리 (구현체, Semi Completed)

- 개발의 생산성을 향상





### 2. Library와 Framework의 차이점

- 제어 흐름의 주도권을 누가 가지고 있느냐의 차이
  - Library : 개발자가 제어 흐름의 주도권을 가지고 있다
  - Framework : 프레임워크(Container)가 제어 흐름의 주도권을 가진다



### 3. Framework의 구성요소

- Library + Design Pattern + Container



### 4. IoC(Inversion of Control)

- 제어의 역전
- 개발자가 가지고 있던 주도권을 가져와서 개발자가 작성한 클래스의 객체를 생성하고, 메서드를 호출해 한다

- Spring Bean Container를 제공
- IoC 구현하는 방법
  - DL (Dependency Lookup) : 의존하는 객체를 Look up  -  JNDI(java naming directory interfacte) 를 사용
  - DI (Dependency Injection) : 의존하는 객체를 주입(injection)을 받는다



### 5. DI

- Setter Injection
  - setter method의 아규먼트로 의존하는 객체의 레퍼런스를 한개씩 주입 받는 방식
- Constructor Injection
  - 객체가 생성될 때 생성자의 아규먼트로 의존하는 객체의 레퍼런스 한꺼번에 여러개를 주입 받는 방식



##### 전략 1

- Bean에 설정을 모두 XML에 한다
  - 공유의 문제가 생긴다
  - `<bean>, <property>, <constructor-arg>`

##### 전략2

- Bean 설정을 어노테이션과  XML을 혼용하여 사용

  - @Component, @Repository, @Service @Controller

  - @Autowired, @Qualifire, @Value

  => `<context:component-scan base-packages= ""/>` : 컴포넌트 스캔을 반드시 해줘야 한다

##### 전략3

- bean 설정을 어노테이션과 Java 설정 클래스를 사용하겠다 - XML을 사용하지 않는다
- 설정을 하는 클래스를 만들 때 @Configuration를 선언한다 => 클래스 위에 선언
- @Bean은 위의 @Configuration과 역할은 동일 => 메서드 위에 선언
- 전략2의 컴포넌트 스캔 역할을 하는 어노테이션 : @ComponentScan



### Spring MVC관련 어노테이션

@Controller

@RestController

- @Controller + @ResponseBody

@RequestMapping

@RequestParam

@Path/Variable

@ModelAcivity







































