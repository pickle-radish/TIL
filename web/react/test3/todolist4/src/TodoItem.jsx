import React, {Component} from 'react';
import './css/TodoList.css';


class TodoItem extends Component{

    render(){
        const myItems=this.props.items.map((item)=>{
            return <li key={item.key} onClick={this.props.superDel.bind(null, item.key)}>{item.text}</li>
        });

        return(
            <ul className="theList">
                {myItems}
            </ul>
        );
    }
}

export default TodoItem;