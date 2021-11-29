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

