import React, {Component} from 'react';

class TodoItem extends Component{

    subDelete=(key)=>{
        this.props.delItem(key);
    }
    
    render(){
        const listItem = this.props.item.map((item)=>{
            return <li key={item.key} onClick={()=>this.subDelete(item.key)}>{item.text}</li>
        })

        return (
            <ul>
                {listItem}
            </ul>
        );
    }
}

export default TodoItem;