# Flutter



### 설치











### 앱 생성

##### 

1. visual studio code 에서 `ctrl + shift + p` 를 누르고

2. `flutter: New Project` 입력 후 엔터

3. application에서 한번더 엔터
4. 해당 폴더 경로를 클릭후 `Select a folder to create the project in` 클릭
5. 프로젝트 이름 입력후 엔터







### 기본 Widget layout

참고 사이트 [https://medium.com/flutter-community/...]



##### appBar

- AppBar

  - title

  - backgroundColor

  - centerTitle

  - elevation



##### body

- SafeArea
  - 미 사용시 상태바에 넘거가거나 하는 현상 발생

- Text

  - style
    - TextStyle

  - color

  - letterSpacing

  - fontSize

  - fontWeight
    - FontWeight.bold
  - textAlign
    - TextAlign



- Center



- Colors



- Column

  - crossAxisAlignment
    - CrossAxisAlignment.start // 시작점으로 정렬
    - CrossAxisAlignment.end // 가로축 끝으로 정렬
    - CrossAxisAlignment.stretch // 가로축 끝까지 길이를 채운다

  - mainAxisAlignment
    - MainAxisAlignment.center //세로 가운데 정렬
    - MainAxisAlignment.spaceEvenly //동일한 간격으로 정렬
    - MainAxisAlignment.spaceBetween //끝에서 끝까지 동일한 간격으로 정렬
  - mainAxisSize
    - MainAxisSize.min //최소 길이
  - verticalDirectoin
    - VerticalDirection.up  //아래서부터 1,2,3으로 올라간다
    - VerticalDirection.down //위에서부터 1,2,3으로 내려온다



- Row // 가로로 나열시 사용  //Column의 하위 속성을 비슷하게 사용



- Icon
  - Icons
    - check_circle_outline



- Padding
  - padding
    - EdgeInsets.fromLTRB(0, 0, 0, 0)



- SizedBox
  - height
  - width



- Divider //선 긋기
  - height //선의 두께가 아닌 마진
  - color
  - thickness //선 두께
  - endIndent //끝 부분 패딩



- CircleAvatar
  - backgroundImage
  - radius



- SnackBar
  - content
    - Text
  - backgroundColor
  - duration
    - Duration
      - milliseconds



- FlutterToast.showToast
  - msg
  - gravity
    - ToastGravity
  - backgroundColor
  - fontSize
  - textColor
  - toastLength
    - Toast



- Container





#### snack bar

- show
- body 부분을 builder로 감싼다

```main.dart
body: Builder(
  builder: (context) {
    return Widget(
    );
  }
```

- 다음과 같이 사용

```snackbar.dart
void showSnackBar(BuildContext context) {
  Scaffold.of(context).showSnackBar(
    SnackBar(
      content: Text(
        '스낵바 메세지',
        textAlign: TextAlign.center,
      ),
      duration: Duration(
        seconds: 2, //스낵바가 떠있는 시간
      ),
      backgroundColor: Colors.blue,
    )
  );
}
```





#### toast

- pubspec.yaml 에서 dev_dependencies 부분에 라이브러리 등록

```pubspec.yaml
dev_dependencies:
  flutter_test:
    sdk: flutter
  fluttertoast:	^8.0.8
```

- `import 'package:fluttertoast/fluttertoast.dart';` 입력
- 다음과 같이 사용

```toast.dart
void showToast(String message) {
  Fluttertoast.showToast(
    msg: message,
    backgroundColor: Colors.white,
    toastLength: Toast.LENGTH_SHORT, //토스트 띄우는 시간
    gravity: ToastGravity.BOTTOM, //토스트 위치
  );
}
```



- `showToast("message content");`







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

