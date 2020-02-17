import React, {Component} from 'react';
import TodoItem from './TodoItem'
import './css/TodoList.css';
import $ from 'jquery';

class TodoList extends Component {
    componentWillMount(){
        //rendering 전에 서버에 접속
        $.get('http://localhost:8080/', (returnData)=>{
            console.log(returnData.message);
        })
    }

    state={
        items:[]
    }

    delItem=(key)=>{
        const send_param={
            key
        }
        $.post('http://localhost:8080/item/delete', send_param, (returnData)=>{
            if(returnData.message){
                const filtered=this.state.items.filter((item)=>{
                    return item.key !== key
                });
        
                this.setState({
                    items:filtered
                })
            }else{
                alert("delete error");
            }
        })
    }

    addItem=()=>{   
        const send_param={
            text:this.inputE.value,
            key:Date.now()
        }

        $.post('http://localhost:8080/item/add', send_param, (returnData)=>{
            if(returnData.message){
                this.state.items.unshift(send_param);
                this.setState({
                    items:this.state.items
                })
            }else{
                alert("일정 추가 오류");
            }
            
            this.inputE.value="";
            this.inputE.focus();
        });

        // this.state.items.unshift({
        //     text:this.inputE.value,
        //     key:Date.now()
        // });
        // this.setState({
        //     items:this.state.items
        // })
        // this.inputE.value="";
        // this.inputE.focus();

    }

    render(){
        return(
            <div className="todoListMain">
                <div className="header">
                    <input ref={ref=>this.inputE=ref}></input>
                    <button onClick={this.addItem}>add</button>
                    <TodoItem items={this.state.items} superDel={this.delItem}></TodoItem>
                </div>
            </div>
        );
    }
}

export default TodoList;