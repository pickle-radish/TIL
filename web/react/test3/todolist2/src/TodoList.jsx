import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component{
    state={
        items:[]
    }

    delItem=(key)=>{
        const filteredItems = this.state.items.filter((item)=>{
            return item.key !== key;
        })
        this.setState({
            items:filteredItems
        })
    }
    
    addItem=()=>{
        this.state.items.unshift({
            text:this.itemName.value,
            key:Date.now()
        })
        this.setState({
            items: this.state.items
        })
        this.itemName.value="";
        this.itemName.focus();
    }

    render(){

        return (
            <div>
                <input ref={ref=>this.itemName=ref}/>
                <button onClick={this.addItem}>add</button>
                <TodoItem item={this.state.items} delItem={this.delItem}/>
            </div>
        );  
    }
}

export default TodoList