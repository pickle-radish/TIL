# create-react-app 사용하기

#### 설치

`npm install -g create-react-app` 명령어로 설치한다

설치 후에 해당 경로에서 `create-react-app projectname` 을 치면 project가 생성이 된다



## Todo List 만들기

`create-react-app TodoList` 명령어로 TodoList 프로젝트 생성 (powershell에서는 안된다)

생성된 프로젝트에서 src폴더와 public 폴더 안에 파일들을 다 지우고 시작한다



#### index.html

public 폴더에 index.html 파일을 생성 body태그 안에 아이디는 container로 div태그 하나를 만든다



#### index.jsx

src폴더 밑에 생성 다음과 같이 코딩한다

```jsx
import React from 'react'
import ReactDOM from 'react-dom';

const destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <TodoList/>
    </div>,
    destination
);	
```

TodoList를 불러오려면 TodoList 클래스를 만드는데 외부 파일로 만들어서 가져온다



#### TodoList.jsx

src폴더 밑에 생성

```jsx
import React, {Component} from 'react';

class TodoList extends Component{

    render(){

        return (
            <div>
                <input />
                <button>add</button>
            </div>
        );  
    }
}

export default TodoList
```

TodoList.jsx 파일을 만든 후에 index.jsx에서 사용하기 위해서 import 해준다

```jsx
import React from 'react'
import ReactDOM from 'react-dom';
import TodoLst from './TodoList'   // TodoList 클래스를 import 해서 사용

const destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <TodoList/>
    </div>,
    destination
);	
```

현재까지 저장하고 실행 하면 입력창과 버튼이 하나 뜬다

이제 입력해서 받은 값을 띄울 리스트를 만든다



#### TodoItem.jsx

똑같이 src파일 밑에 생성 다음과 같이 코드를 작성한다

```jsx
import React, {Component} from 'react';

class TodoItem extends Component{
    render(){
        return (
            <ul>
                
            </ul>
        );
    }
}

export default TodoItem;
```

그리고 TodoList.jsx에 TodoItem을 import 해준다

```jsx
import React, {Component} from 'react';
import TodoItem from './TodoItem';     // TodoItem 클래스를 import 해준다

class TodoList extends Component{

    render(){

        return (
            <div>
                <input />
                <button>add</button>
                <TodoItem />			//여기서 TodoItem 클래스 호출
            </div>
        );  
    }
}

export default TodoList
```

이제 input 태그의 값을 입력 받아서 TodoItem으로 값을 넘겨준다

먼저 값을 입력 받아서 state변수에 저장한다

```jsx
class TodoList extends Component{
    state={
        items:[]    //state 변수 생성
    }
    
    addItem=()=>{
        this.state.items.unshift({		//push랑 반대로 새로 들어온 값으 0번 인덱스에 저장
            text:this.itemName.value,  //입력 받은 값을 text에 저장
            key:Date.now()				//현재 시간을 저장함으로 key가 겹치지 않게 저장
        })
        this.setState({
            items: this.state.items   //state변경
        })
        this.itemName.value="";			//input태그의 값을 비워줌
        this.itemName.focus();			//버튼을 눌른 후에 focus가 다시 input 태그로가게
    }
    
    render(){

        return (
            <div>
                <input ref={ref=>this.itemName=ref}/>
                <button onClick={this.addItem}>add</button>
                <TodoItem item={this.state.items}/>  //state에 저장된 값을 넘겨준다
            </div>
        );  
    }
}

```

이제 TotoItem 에서 전달 받은 item의 값들을 list형태로 보여준다

```jsx
import React, {Component} from 'react';

class TodoItem extends Component{
    render(){
        
        const listItem = this.props.item.map((item)=>{		//map함수로 전달받은 값을 
            return <li key={item.key}>{item.text}</li>		//li태그로 만들어줌
        })

        return (
            <ul>
                {listItem}
            </ul>
        );
    }
}

export default TodoItem;
```

이제 리스트 중에 클릭하면 해당 아이탬이 삭제되는 기능을 만든다

먼저 TodoList.jsx에서 삭제하는 함수를 만들고 함수의 이름을 TodoItem클래스에 던져준다

```jsx
delItem=(key)=>{
        const filteredItems = this.state.items.filter((item)=>{  //filter함수 이용
            return item.key !== key;	// 해당 키 이외의 모든 item을 반환
        })
        this.setState({
            items:filteredItems  //해당 key를 가진 item만 빼고 저장
        })
}
```



TodoItem호출시 함수의 이름을 전달

```jsx
<TodoItem item={this.state.items} delItem={this.delItem}/>
```



전달받은 TodoItem에서 해당 함수를 onClick에서 바로 사용할 수 없기 때문에 서브함수를 만들고 화살표 함수를 또 이용한다 먼저 onClick 함수 사용부분	

```jsx
const listItem = this.props.item.map((item)=>{
    return <li key={item.key} onClick={()=>this.subDelete(item.key)}>{item.text}</li>
})
```

subDelete 함수

```jsx
subDelete=(key)=>{
    this.props.delItem(key);
}
```

이제 저장하고 실행







