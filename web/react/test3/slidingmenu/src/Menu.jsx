import React, {Component} from 'react';
import MenuButton from "./MenuButton";
import $ from 'jquery';
import { } from "jquery.cookie";
import axios from 'axios';
import { NavLink, HashRouter} from 'react-router-dom';

axios.defaults.withCredentials = true;
const headers={withCredentials:true};


class Menu extends Component{
    state={
        login_nick:"",
        login: "show",
        logout: "hide",
        logined: false,
    }

   
    login=()=>{
        const send_param={
            headers,
            email:this.emailE.value,
            pw: this.pwE.value,
        }

        axios.post('http://localhost:8080/member/login', send_param)
        .then((returnData)=>{
            if(returnData.data.nick){
                $.cookie('login_nick', returnData.data.nick);
                $.cookie('login_id', returnData.data.id);
                this.loginout(returnData.data.nick);
            }else{
                alert('login fail');
            }
            this.emailE.value="";
            this.pwE.value="";

        })
    }
    logout=()=>{
        axios.get('http://localhost:8080/member/logout',{
            headers
        }).then((returnData)=>{
            if(returnData.data.message){
                $.removeCookie("login_nick");
                $.removeCookie("login_id");
                let nick="";
                this.loginout(nick);
            }
        })
    }

    loginout=(nick)=>{

        this.setState({
            login_nick:nick,
            login: this.state.logout,
            logout: this.state.login,
        })
    }

    sessionCheck=()=>{
        axios.post('http://localhost:8080/member/session/', {headers})
        .then((returnData)=>{
            if(returnData.data.message){
                console.log(returnData.data.message);
            }
        })
    }

    componentWillMount(){
        
    }

    render(){
        let login_nick;
        if($.cookie("login_nick")){
            login_nick=$.cookie('login_nick');
            
            if(this.state.login==="show"){
                this.loginout();
            }
        }
       
        let visibility="hide";


        if(this.props.Menu_v){
            visibility="show";
        }
        return(
            <div id="flyoutMenu" className={visibility}>
                <MenuButton handleMouseDown={this.props.handleMouseDown}></MenuButton>
                <div id="login" className={this.state.login}>
                    id:<input ref={ref=>this.emailE=ref}></input><br/>
                    pw:<input ref={ref=>this.pwE=ref}></input><br/>
                    <button onClick={this.login}>login</button>
                </div>
                <div id="logout" className={this.state.logout}>
                    {login_nick}님 환영합니다<br/>
                    <button onClick={this.logout}>logout</button>
                </div>
                <HashRouter>
                    <h2><NavLink exact to='/' onClick={this.props.handleMouseDown}>Home</NavLink></h2>
                    <h2><a href="/">About</a></h2>
                    <h2><NavLink to='/contact' onClick={this.props.handleMouseDown}>Contact</NavLink></h2>
                    <h2><a href="/">Search</a></h2>
                    <button onClick={this.sessionCheck}>session check</button>
                </HashRouter>
            </div>
        );
    }

}

export default Menu;