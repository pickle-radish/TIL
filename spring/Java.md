# Java



- 객체지향 프로그래밍

- 디자인 패턴

- ioc, di

- aop

- List

  ```java
  List<User> userList = Arrays.asList(user1, user2);
  ```

- object mapper

  - jsonfile

    ```json
    {
        "name":"홍길동",
        "age":10,
        "cars":[
            {
                "name":"K5",
                "carNumber":"11가 1111",
                "type":"sedan"
            },
            {
                "name":"Q5",
                "carNumber":"22가 2222",
                "type":"SUV"
            }
        ]
    }
    ```

    

  - object to json

    ```java
    String json = objectMapper.wirteValueAsString(user);
    ```

  - Json to object

    ```java
    JsonNode jsonNode = objectMapper.readTree(json);
    String name = jsonNode.get("name").asText();
    String age = jsonNode.get("age").asInt();
    
    JsonNode cars = jsonNode.get("cars");
    ArrayNode arrayNode = (ArrayNode)cars;
    
    List<Car> cars = objectMapper.convertValue(arrayNode, new TypeReference<List<Car>>(){});
    ```



- Annotaion
- Spring Validation
- Spring boot Exception 처리
- filter
- interceptor



## Rest template

- RestTemplate

- UirComponentsBuilder

  ```java
  //get
  URI uri = UriComponentsBuilder
      		.fromUriString("http://localhost:8080")
      		.path("/api/server/hello")
      		.queryParam("name", "steve")
     			.encode()
      		.build()
      		.toUri();
  
  RestTemplate restTemplate = new RestTemplate();
  
  //getForObject
  String result = restTemplate.getForObjet(uri, String.class);
  
  //getForEntity
  ResponseEntity<String> result = restTemplate.getForEntity(uri, String.class/*return type*/);
  result.getStatusCode();
  result.getBody();
  
  
  //post
  URI uri = UriComponentsBuilder
      		.fromUriString("http://localhost:8080")
      		.path("/api/server/{id}/{name}")
     			.encode()
      		.build()
      		.expand(100, "steve")
      		.toUri();
  
  UserRequest req = new UserRequest();
  req.setName("steve");
  
  RestTemplate restTemplate = new RestTemplate();
  ResponseEntity<UserResponse> result = restTemplate.postForEntity(uri, req, UserResponse.class);
  
  ```

- RequestEntity

  ```java
  RequestEntity<UserRequest> requestEntity = RequestEntity
      .post(uri)// or .get(uri)
      .contentType(MediaType.APPLICATION_JSON)
      .header("x-authorization", "abcd")
      .header("custom-header", "adbcd")
      .body(req);
  
  RestTemplate restTemplate = new RestTemplate();
  ResponseEntity<UserResponse> response restTemplate.exchange(requestEntity, UserResponse.class);
  ```

- Json body(제너릭 타입으로 재사용)

  ```java
  private T body;
  ```






## JUnit Test



#### test

```java
@SpringBootTest
public class Test {
    @Mock
    public someApi api;
    
    @BeforeEach
    public void init() {
        Mockito.lenient().when(api.connect()).tehnRetrun(1000);
    }
    
    @Test
    public void test() {
        
        //do test
        SomeClass somClass = new SomeClass();
        
        String result = someClass.someMethod('a', 'b');
        
        Assertions.assertEquals("result", result);
    }
}
```





#### controller test

- test packpage 와 실제 package 는 동일해야 한다

```java
@WebMvcTest(TargetController.class)
@AutoConfigureWebMvc
@Import({ServiceClass.class})
public class TestClass {
    
    @Autowired
    private MockMvc mockMvc;
 
    //그때 그때 리턴 되는 값이 다른 객체
    @MockBean
    private someApi api;
    
    @BeforeEach
    public void init() {
        Mockito.when(api.connect()).thenReturn(value);
    }
    
    @Test
    public void sumTest() {
        // http://localhost:8080/api/sum
        
        mockMvc.perform(
        	MockMvcRequestBuilders.get("http://localhost:8080/api/sum")
            	.queryParam("x", 10)
            	.queryParam("y", 10)
        ).andExpect(
        	MockMvcResultMatchers.status().isOk()
        ).andExpect(
        	MockMvcResultMatchers.content().string("sumValue")
        ).andDo(
        	MockMvcResultHandlers.print()
        );
    }
    
    @Test
    public void minusTest() throws Exception {
        Req req = new Req();
        req.setX(10);
        req.setY(10);
        
        String json = new ObjectMapper().writeValueAsString(req);
        
        mockMvc.perform(
        	MockMvcRequestBuilders.post("http://localhost:8080/api/minus")
            .contentType(MediaType.APPLICATION_JSON)
            .content(json)
        ).andExpect(
        	MockMvcResultMatchers.status().isOk()
        ).andExpect(
        	MockMvcResultMatchers.jsonPath("$.result").value("0")
        ).andExpect(
            MockMvcResultMatchers.jsonPath("$.response.resultCode").value("OK")
        ).andDo(
       		MockMvcResultMatchers.print() 
        );
    }
    
    
    
}
```



- jacoco
  - gradle 에 plugins{ id  'jacoco'} 추가
  - Tasks > verification > test 완료후 jacocoTestReport
  - build > reports > index.html 파일 확인





## Spring security
