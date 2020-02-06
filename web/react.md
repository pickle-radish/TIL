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





## 2/6

#### Children

리액트에서는 html 엘리먼트와 마찬가지로 컴포넌트도 자식을 가질 수 있다

```html
<div>
	<p>a</p>
</div>
```

위의 코드에서는 div태그는 p태그를 자식으로 갖고 있다 div태그에서 this.props.children을 사용해 p 앨리먼트에 접근할 수 있다

예제 코드

```js
class Buttonify extends React.Component{
        render(){
            return(
                <div>
                    <button type={this.props.behavior}>{this.props.children}</button>
                </div>
            );
        }
    }
    ReactDOM.render(
       <div>
           <Buttonify behavior="submit">Send Data</Buttonify>
       </div>,
       document.querySelector('#container')
    );
}
```

Buttonify 컴포넌트에서 하위 앨리먼트 값인 Send Data를 this.props.children으로 사용했다



#### 스타일 적용

예제로 사용할 코드

```html
<div id="container">	
	<div>
        <div>A</div>
        <div>E</div>
        <div>I</div>
        <div>O</div>
        <div>U</div>
   </div>	
</div>
```

기존의 html에서는 style태그 안에 다음과 같이 적용했다

```html
<style>
	div div div{
		padding: 10px;
		margin: 10px;
		background-color: #FFDE00;
		color: #333;
		display: inline-block;
		font-family: monospace;
		font-size: 32px;
		text-align: center;
	}
</style>
```

위의 코드는 기존의 html을 사용한 스타일링 방식이고 이제 리액트 방식으로 스타일링 할 것이다

스타일링 할 스타일을 담은 객체를 정의한다

```react
 render(){
                const letterStyle={
                    padding:10,
                    margin:10,
                    backgroundColor: this.props.a,
                    color: "#333",
                    display: "inline-block",
                    fontFamily: "monospace",
                    fontSize: 32,
                    textAlign: "center",
                };
};
```

정의된 스타일 객체를 지정해준다

```react
class Letter extends React.Component{
    
            render(){
                const letterStyle={
                    padding:10,
                    margin:10,
                    backgroundColor: this.props.a,
                    color: "#333",
                    display: "inline-block",
                    fontFamily: "monospace",
                    fontSize: 32,
                    textAlign: "center",
                };

                return(

                    <div style={letterStyle}>
                        {this.props.children}
                    </div>
                )
            }

}
```

위의 코드처럼 스타일링 하면 모두 같은 색깔의 백그라운드가 나올 것인데 글자마다 색깔을 다르게 하고 싶다면 다음과 같이 적용한다

먼저 backgroundColor를 props 값을 받게 고쳐준다

```react
backgroundColor: this.props.bgcolor, //스타일 객체 안이기 때문에 변수를 사용시 {}불필요
```

이제 컴포넌트를 호출 할 때 값을 넘겨주면 된다

```react
ReactDOM.render(
            <div>
                <Letter bgcolor="red">A</Letter>
                <Letter bgcolor="yellow">E</Letter>
                <Letter bgcolor="green">I</Letter>
                <Letter bgcolor="blue">O</Letter>
                <Letter bgcolor="gray">U</Letter>
            </div>,
            document.querySelector("#container")
        );
```



#### 복잡한 컴포넌트

##### 비주얼 요소 식별하기

컴포넌트를 트리구조로 여러개를 나눌 때 너무 적게나 너무 많지 않게 적절한 갯수로 나눠주는 것이 중요하다

쉽게 말하면 보기에 하나의 컴포넌트로 구성해도 복잡하지 않고 쉽게 볼 수 있다면 굳이 여러개의 컴포넌트로 나눌 필요 없이 하나의 컴포넌트로 만들면 된다



#### 속성 전달

트리구조로 되어있는 컴포넌트 구조에서 속성값을 전달하려고 할 때 직계 자식에게 값을 주는건 가능하지만 자식의 자식에게 직접적으로 값을 전달하는 것은 불가능하다. 

값을 전달하려고 하면 먼저 자식에게 값을 전달하고 자식은 다시 자기의 자식에게 값을 전달하는 방식으로 값을 전달한다

값을 전달 할 때에 여러개의 값을 전달하게 된다면 다음과 같이 코딩해야 한다

```react

        class Display extends React.Component{
    
            render(){
                return(
                    <div>
                        <p>{this.props.color}</p>
                        <p>{this.props.num}</p>
                        <p>{this.props.size}</p>
                    </div>
                );
            }
        }
        class Label extends React.Component{
    
            render(){
                const labelStyle={
                    fontFamily:"sans-serif",
                    fontWeight: "bold",
                    padding: 13,
                    margin: 0
                }
                return(
                    <Display color={this.props.color} num={this.props.color} size=                                   {this.props.size} /> //다시 또 3개의 값을 받아서 전달
                );
            }
        }
        class Shirt extends React.Component{
    
            render(){
                
                return(
                    <div>
                        <Label color={this.props.color} num={this.props.color} size=                                        {this.props.size} /> //3개의 값을 받아서 다시 전달
                    </div>   
                );
            }
        }

        ReactDOM.render(
            <div>
                <Shirt color="steelblue" num="3.14" size="medium" />  // 3개의 값을 전달
            </div>,
            document.querySelector("#container")
        );

```

위의 코드와 같이 this.props을 일일이 다 사용해서 값을 받은다음 다시 넘겨줘야 한다

위의 코드를 한결 간편하게 하기 위해  스프레드 연산자 {...this.props}를 사용한다



##### 스프레드 연산자

```js
const items=["1", "2", "3"];
function printStuff(a, b, c){
	console.log(a, b, c);
}
printStuff(...items);
```
... 을 찍어주면 배열이나 객체의 값을 펼쳐서 전달해 준다

위의 스프레드 연산자를 참고해서 코딩을 작성하면 다음과 같다

```react

        class Display extends React.Component{
    
            render(){
                return(
                    <div>
                        <p>{this.props.color}</p>
                        <p>{this.props.num}</p>
                        <p>{this.props.size}</p>
                    </div>
                );
            }
        }
        class Label extends React.Component{
    
            render(){
                const labelStyle={
                    fontFamily:"sans-serif",
                    fontWeight: "bold",
                    padding: 13,
                    margin: 0
                }
                return(
                    <Display {...this.props} /> //받은 값을 스프레드 연산자로 다시 전달
                );
            }
        }
        class Shirt extends React.Component{
    
            render(){
                
                return(
                    <div>
                        <Label {...this.props} /> //받은 값을 스프레드 연산자로 전달
                    </div>   
                );
            }
        }

        ReactDOM.render(
            <div>
                <Shirt color="steelblue" num="3.14" size="medium" /> //값전달
            </div>,
            document.querySelector("#container")
        );

```

코드가 한결 간편해 졌지만 여전히 자식들을 하나하나 거쳐서 값을 전달해야 한다



#### JSX에서 스크립트 사용

리액트에서 script 태그 안의 내용을 잘 살펴보면 javascript 부분과 react 부분으로 구분 할 수 있다

간단하게 생각하면 react코드 안에서 return 분에서 태그가 열리고 닫히는 부분이 react 부분이라고 생각하면 된다

그 외의 javascript 부분에서는 일반적인 javascript 함수와 문법이 사용이 가능하다

예제 코드

```react
		class Stuff extends React.Component{
    
            render(){
                return(
                    <div>
                        <h1 key="1">Boring {Math.random() * 100} content! </h1>
                        <h1 key="2">Boring {Math.random() * 100} content! </h1>
                    </div>
                );
            }
        }
        function b(){
            let a=(key) => <div key={key}><Stuff /></div>
            const arr=[];

            for(let i=0; i<100; i++){
                arr.push(a(i));
            }

            return arr;
        }

        const a=<Stuff />;
        ReactDOM.render(
            <div>
                {b()}
            </div>,
            document.querySelector("#container")
        );

```





#### State

시간의 흐름에 따라 사용자가 어떠한 이벤트를 하는 것이 아니라 브라우저에서 자동으로 값이 변경되고 변경된 값이 다시 보여지게 하려면 스테이터스를 사용한다

예를 들자면 화면에 처음에는 0이 출력되고 1초마다 자동으로 100씩 늘어나게 하려고 한다

먼저 다음과 같이 기본적인 화면을 호출한다

```react
class Counter extends React.Component{
    render(){
        return <h1>0</h1>
    }
}

class CounterDisplay extends React.Component{
    render(){
        
        return (
        	<div>
            	<Counter />
            </div>
        )
    }
}


ReactDOM.render(
	<CounterDisplay />,
	document.querySelector("container")
);
```



다음에 Counter클래스에서 counter 변수를 선언하는데 state 객체 안에서 선언한다

```react
state={counter:0}
```

선언한 변수를 return부분에서 사용한다

```react
render(){
	return(
		<h1>{this.state.counter}</h1>
	);
}
```

위의 코드를 실행시키면 결과는 화면에 똑같이 0 이 출력된다

다음엔 counter를 증가시켜 줄 함수를 정의한다

```react
timerTick=()=>{
	this.setState({
		counter: this.state.counter += 100
	})
}
```

this.setState 라는 정의되 있는 매소드를 오버라이드 한다

화살표 함수를 사용하지 않으면 componentDidMount에서 timerTick 함수를 찾지 못한다



다음은 1초마다 timerTick 함수를 호출하도록 설정한다

```react
componentDidMount() {
	setInterval(this.timerTick, 1000);
}
```

setInterval 함수로 timerTick이라는 함수를 1초마다 호출하도록 설정

위의 코드까지 작성 완료하면 1초마다 숫자가 100씩 늘어난다



**<u>! this를 써주지 않으면 해당 변수나 함수를 react에서 찾을 수 없다</u>**



##### 생명주기

class 호출시 자동으로 호출되는 함수들이 있다

앞부분의 순서만 보면

componentWillMount -> render -> componentDidMount 

순서로 호출이 된다

































































































