import React, {Component} from 'react';
import "./css/TodoList.css";

class TodoItems extends Component{

    subDelete=(key)=>{
        this.props.superDelete(key);
    }

    render(){  
        const listItems = this.props.entries.map((item)=>{
            return (
                <li key={item.key} >
                    <span onClick={()=>this.subDelete(item.key)}>{item.text}</span>
                    <input value={item.text} className="editInput" ref={ref=>this.editText=ref} />
                    <button id="edit" onClick={this.props.edit.bind(null, item.key, this.editText.value)}>edit</button>    
                </li>
        )
        });

        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
}
export default TodoItems
