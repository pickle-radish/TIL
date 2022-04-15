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
  
  ```main.dart
  ScaffoldMessenger.of(context).showSnackBar(
  	SnackBar(
  		content: Text('You canceled "Like!"'),
  		duration: Duration(seconds: 3),
  		backgroundColor: Colors.grey,
  	),
  );
  ```
  
  



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



###### 

##### form

- TextFormField
  - `obscureText: true`  : 비밀번호 type
  - keyboardType
    - `TextInputType.`
  - onSaved
  - onChanged





##### button

- TextButton

  ```main.dart
  TextButton(
  	onPressed:(){},
  	child: Text(
  		'Text button',
      	style: TextStyle(
      		fontSize: 20,
      	)
      ),
      style: TextButton.styleForm(
      	primary: Colors.red //글자색깔
      	backgroundColor: Colors.blue, //배경색깔
      	
      )
  )
  ```

  - onLongPress - 버튼을 길게 누를시 동작

  







- ElevatedButton

  ```main.dart
  ElevatedButton(
  	onPressed:(){},
  	child: Text(
  		'Text button',
      	style: TextStyle(
      		fontSize: 20,
      	)
      ),
      style: ElevatedButton.styleForm(
      	primary: Colors.red //배경색깔
  
  		//버튼 모양 디자인
          shape: RoundedRectangleBorder(
  			borderRadius: BorderRadius.circular(10)
  		),
  		elevation: 0,
      )
  )
  ```



- OutlinedButton

  ```main.dart
  OutlinedButton(
  	onPressed: () {},
  	child: Text('Outlined button'),
  	style: OutlinedButton.styleForm(
  		priamr: Colors.green, //글자색깔
  		//윤곽선 디자인
  		side: BorderSide(
  			color: Colors.black87,
  			width: 2,
  		)
  	)
  )
  ```

  

- icon

  ```main.dart
  TextButton.icon(
  	onPressed: (){},
  	icon: Icon(
  		Icons.home,
  		size: 30,
  		color: Colors.yellow,
  	),
  	label: Text('Go to home'),
  	style: TextButton.styleForm(
  		primary: Colors.purple, // icon 색상 미설정시 같이 적용
  		minimumSize: Size(100, 100),
  		
  	)
  )
  ```

  - `TextButton.icon`, `ElevatedButton`, `OutlinedButton.icon` 동일하게 사용 가능



- 비활성

  - onPressed 값을 빈 값인 `() {}` 이 아닌 null을 주면 비활성화 버튼이 된다.

  ```main.dart
  TextButton(
  	onPressed: null,
  	child: Text(
  		'Text button',
      	style: TextStyle(
      		fontSize: 20,
      	)
      ),
      style: TextButton.styleForm(
      	primary: Colors.red
      	backgroundColor: Colors.blue,
      	onSurface: Colors.pink //비활성화시 색상
      )
  )
  ```

  

- Button Bar

  - 버튼들을 가로방향으로 끝까지 적용 (default)
  - 공간이 모자를 시 자동으로 세로 정렬

  ```main.dart
  ButtonBar(
  	alignment: MainAxisAlignment.center, //가운데 정렬
  	buttonPadding: EdgeInsets.all(20), //버튼들의 패딩
  	children: [
  		TextButton(
  			onPressed:() {},
  			child: Text('Text Button'),
  		),
  		ElevatedButton(
  			onPressed:() {},
  			child: Text('ElevatedButton'),
  		)
  	]
  )
  ```

  







##### snack bar

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

- 글로벌 key를 이용

```main.dart
void main() {
	runApp(MyApp());
}

fianl rootScaffoldKey = GlobalKey<ScaffoldMessengerState>();

class MyApp extends StatelessWidget {
	@override
	Widget build(BuildContext context) {
		return MateriaApp(
			scaffoldMessengerKey: rootScaffoldKey,
            home: MyPage(),
		)
	}
}

class MyPage extends StatelessWidget {
	@override
	Widget build(BuildContext context) {
		return Scaffold(
			body: HomeBody(),
			floatingActionButton: FloatingActionButton(
				child: Icon(Icons.thumb_up),
                onPressed: () {
					rootScaffoldKey.currentState.showSnackBar(
						SnackBar(
							content: Text('Like a new Snack bar!'),
				            duration: Duration(seconds: 5),
						)
					)
				}
			)
		)
	
	}
}
```





##### toast

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





##### loading_indicator

- 여러가지 로딩 인디케이터
- https://pub.dev/packages/loading_indicator
- https://pub.dev/packages/flutter_spinkit





## Page route

```main.dart
Navigator.push(
    context,
    MaterialPageRoute(builder: (context) {
    	return ClassName();
    }),
);
```





## library

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











## Key

https://youtu.be/lQB6HjleLMs

코딩쉐프 조금 매운맛 18번 강좌
