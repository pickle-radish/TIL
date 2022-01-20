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

- 다음과 같이 사용

```snackbar.dart
onPressed: (){
    ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
            content: Text('Like a new Snack bar!'),
            duration: Duration(seconds: 5),
        )
    );
},
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







#### timer_builder, intl

[https://pub.dev/packages/timer_builder/versions] timer_builder (get current time)

[https://pub.dev/packages/intl/versions] intl (date_format)

```main.dart
import 'package:timer_builder/timer_builder.dart';
import 'package:intl/intl.dart';

TimerBuilder.periodic(
	(Duration(minutes: 1)),
	builder: (context) {
		return Text(
			'${getSystemTime()}',
		);
	}
),


String getSystemTime() {
    var now = DateTime.now();
    return DateFormat("h:mm a").format(now);  // h: 시, mm: 분, a: am,pm
}
```



