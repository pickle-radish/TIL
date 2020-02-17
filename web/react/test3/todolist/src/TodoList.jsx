import React, {Component} from 'react';
import TodoItems from './TodoItems';
import "./css/TodoList.css";

class TodoList extends Component{
    state={
        items:[]
    }

    editItem=(key, text)=>{
        this.state.items.forEach((value, index)=>{
            if(value.key === key){
                this.state.items[index].text = text
            }
        });

        this.setState({
            items: this.state.items
        })
        
    }

    delItem=(key)=>{
        const filteredItems = this.state.items.filter((item)=>{
            return item.key !== key;
        })
        this.setState({
            items: filteredItems
        })
    }

    addItem=()=>{
        this.state.items.unshift({
            text:this._inputElement.value,
            key:Date.now()
        });
        this.setState({
            items: this.state.items
        });

        this._inputElement.value="";
        this._inputElement.focus();
    }

    

    render(){
        return (
            <div className="todoListMain">
                <div className="header">
                    <input placeholder="enter task" ref={ref=>this._inputElement=ref}></input>
                    <button onClick={this.addItem}>add</button>
                </div>
                <TodoItems entries={this.state.items} superDelete={this.delItem} edit={this.editItem}/>
            </div>
        )
    }
}

export default TodoList