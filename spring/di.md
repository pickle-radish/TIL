Bean : 스프링이 관리를 해주는 객체

BeanFactory: Bean을 생성, 관리해주는 컨테이너 객체

ApplicationContext : BeanFactory와 동일한 기능을 하고 추가적인 기능을 제공한다

Meta Data(Spring Configuration XML) : F/W에 개발자가 정의한 클래스 정보를 알려주기 위함





### POJO클래스

인터페이스 Printer와 이 인터페이스를 상속하는 StringPrinter, ConsolePrinter 가 있을 때

`private StringPrinter printer ` 라고 선언하면 printer 타입을 ConsolePrinter로 교체하려면 소스코드를 수정해야 한다

`private Printer printer` 라고 선언하고 StringPrinter에 의존한다는 것은 xml에 선언 이후에 xml파일을 수정하면 손쉽게 수정이 가능 







### Bean

```xml
<bean id='hello' class='myspring.di.xml.hello'>
	<property name="name" value="String" />
	<property name="pringer" ref="printer" />
</bean>

<bean id="printer" class="myspring.di.xml.StringPrinter" />
```

property에 name 이 반드시 set메서드가 있어야 한다

 => setName과 setPrinter는 반드시 있어야한다





###  Scope

1. singleton (default) : 한개의 객체만 생성한다
2. prototype : 매번 요청 할때 항상 새로운 객체를 생성한다
3. request
4. sessiont





## 전략 

#### 1. 모든 설정을 xml에 정의

##### Bean

- setter injection
  =>`<property>` 

   - name

  - ref

- constructor injection
  => `<contructor-arg>`





#### 2. 설정을 클래드와 xml에 나누어서 한다

##### @Component

- setter injection
  => @Value, @Autowired

- component-scan base-package="" />



#### 3. 설정을 클래스에 한다

**xml을 사용하지 않는다**

@Configuration

@ComponentScan  ==`<context:component-scan>`

@Bean