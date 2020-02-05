# React



#### 사용방법

리엑트 시작할 때 리엑트 cdn이 들어가야 한다

```html
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```



어떤 태그를 어디에 쓸꺼냐

```html
<script>
ReactDom.render(
	태그(화면에 출력하고 싶은 HTML), 
    위의 태그를 랜더링해서 보여줄 DOM의 위치
);

ReactDOM.render(
    <h1>hello</h1>, document.body
);
</script>
```



### JAX

xml을 닮은 javascript

xml처럼 태그의 이름이 자유롭다



## 리액트 컴포넌트

리액트 프로그램의 단위





## 화면에 여러가지 방법으로 출력하기



#### Javascript 이용하기

```js
<h1 id="demo"></h1>

<script>
    document.getElementById("demo").innerHTML="Hello Javascript";
</script>
```



#### Jquery 이용하기

jquery를 사용하기위해 head태그에 다음 스크립트를 추가해준다

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
```

jquery를 사용한 코드

```js
<h1 id="demo"></h1>

<script>
	$('#demo').text("Hello Jquery");
</script>

```



#### React 이용하기

react를 사용하기 위해 head 태그에 cdn을 다음과 같이 추가해준다

```html
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

body부분의 script

```react
<script type="text/babel">
    ReactDOM.render(
        <h1>Hello React</h1>,
        document.body
    )
</script>
```



## React 컴포넌트

리액트에서 ReactDOM.render를 사용할 때는 하나의 태그만 사용이 가능하다. 따라서 h1태그를 여러개 사용하고 싶다면 다음과 같이 div태그로 감싸줘서 사용해야 한다

```react
<script type="text/babel">
    ReactDOM.render(
    	<div>
    	  	<h1>Hello React</h1>
  	     	<h1>Hello React</h1>
        </div>,
        document.body
    )
</script>
```



그런데 위와 같이 중복되는 내용들은 컴포넌트를 만들어서 간편하게 호출이 가능하다

HelloWorld 라는 클래스를 정의 하고 React.Component를 extends한다(대소문자 구별)

```react
<script type="text/babel">
    class HelloWorld extends React.Component{
    	render(){
    		return(
    			<h1>Hello React</h1>
    		);
    	}
    }
    
    ReactDOM.render(
    	<div>
    	  	<HelloWorld />
    	  	<HelloWorld />
        </div>,
        document.body
    )
</script>
```

결과는 똑같이 <h1>Hello React</h1> 가 두번 출력 된다



또 컴포넌트를 호출할 때 프롬포트 속성을 전달할 수 있다

```react
<script type="text/babel">
    class HelloWorld extends React.Component{
    	render(){
    		return(
    			<h1>{this.props.a}{this.props.b}</h1>
    		);
    	}
    }
    
    ReactDOM.render(
    	<div>
    	  	<HelloWorld a="Hello " b="React"/>
    	  	<HelloWorld a="Good" b="bye~"/>
        </div>,
        document.body
    )
</script>
```



HelloWorld 컴포넌트를 호출할 때 프롬포트 값을 다르게 줬기 때문에 결과는 다음과 같이 나온다

Hello React
Good bye~

우리가 랜더링해서 보여줄 DOM의 위치는 body말고도 다른 태그도 가능하다

```react
<script type="text/babel">
    class HelloWorld extends React.Component{
    	render(){
    		return(
    			<h1>{this.props.a}{this.props.b}</h1>
    		);
    	}
    }
    
    ReactDOM.render(
    	<div>
    	  	<HelloWorld a="Hello " b="React"/>
    	  	<HelloWorld a="Good" b="bye~"/>
        </div>,
        document.querySelector('#container');
    )
</script>
```

위와 같이 작성하면

Hello React
Good bye~

위의 값이 id가 container인 태그를 찾아가서 그 안에 작성된다.

















