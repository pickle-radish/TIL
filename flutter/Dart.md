## Dart



#### Future

- 지연되는 작업을 기다리는 동안 다른 작업을 할수 있다(동시에 여러 작업 병행)

```test.dart
// ignore_for_file: avoid_print, prefer_const_constructors

import 'dart:io';

void main() {
  showData();
}

void showData() {
  startTask();
  accessData();
  fetchData();
}

void startTask() {
  String info1 = '요청수행 시작';
  print(info1);
}

void accessData() {
  Duration time = Duration(seconds: 3);
  
  if(time.inSeconds > 2) {
    Future.delayed(time, () {
      String info2 = '데이터 처리 완료';
      print(info2);0
    });
  } else {
    String info2 = '데이터를 가져왔습니다';
    print(info2);
  }
}

void fetchData() {
  String info3 = '잔액은 8,500만원 입니다';
  print(info3);
}
```





#### List

- generate
  - `List<int>.generate(45, (i) => i+1);`
    - 1 ~ 45 까지 의 리스트 생성
- shuffle
  - `List<int>.generate(45, (i) => i+1)..shuffle();`
    - 1 ~ 45 까지 숫자 생성후 랜덤으로 섞는다
- sublist
  - `List<int>.generate(45, (i) => i+1)..shuffle().sublist(0,6);`
    - 0 번째 인덱스와 6-1번째 인덱스까지 6개를 자른다







#### cascade notaion

```main.dart
class Person {
	String name;
	int age;
	
	void setA(int x) {
		this.age = x;
	}
	
	void show() {
		print(this.age);
		print(this.name);
	}
}

Pserson p1 = new Persion();

p1.age = 20;
p1.name = 'James';
p1.show();

p1..name = 'Jamie'
  ..setA(30)
  ..show();
```

















### Null safety

- 선언시 반드시 변수 값을 초기화 해야하고 null 값을 비교하는 것도 에러가 발생한다

```main.dart
class Person {
	int age;  //error
	
	if(age == null) { //error
		print('age is null');
	}
}
```



- 선언방식

  - 선언시 초기화

    ```main.dart
    class Person {
    	int age = 20;
    }
    ```

  

  - `?` 사용

    - nullable 변수로 선언된다

    ```main.dart
    class Person {
    	int? age;
    	
    	if(age == null) {
    		print('age is null');
    	}
    }
    ```

    - `int?` 로 선언된 변수 값은 `int` 타입에 값을 넣기 위해서 `!`를 사용한다

    ```main.dart
    class Person {
    	int? a;
    	a = 10;
    	
    	int b = a!;
    }
    ```

  

  - `late`  사용

    - 선언 이후에 정의한다

    ```main.dart
    class Person {
    	late int age;
    	age = 20;
    }
    ```

    
