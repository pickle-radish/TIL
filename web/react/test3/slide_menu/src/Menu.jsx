import React, {Component} from 'react';
import "./Menu.css";
import $ from 'jquery';
import MenuButton from './MenuButton';


class Menu extends Component{
    state={
        loginStyle:"inline-block",
        logoutStlye:"none"
    }
    login=()=>{
        const send_param={
            email:this.emailE.value,
            pw: this.pwE.value,
        }
        $.post('http://localhost:8080/member/login', send_param, (returnData)=>{
            if(returnData.message){
                this.setState({
                    loginStyle:"none",
                    logoutStlye:"inline-block"
                })
            }
            this.emailE.value="";
            this.pwE.value="";

        })
    }
    logout=()=>{
        $.get('http://localhost:8080/member/logout', (returnData)=>{
            if(returnData.message){
                this.setState({
                    loginStyle:"inline-block",
                    logoutStlye:"none"
                })

            }
        })
    }

    render(){
        const loginStyle={
            display: this.state.loginStyle
        }
        const logoutStyle={
            display: this.state.logoutStlye
        }
        let visibility = "hide";
        
        if(this.props.menuVisibility){
            visibility="show";
        }
        
        return (
            <div id="flyoutMenu" onDrag={this.props.handleMouseDown} className={visibility}>
                
                <MenuButton handleMouseDown={this.props.handleMouseDown} />
                <br/>
                <div id="login" style={loginStyle}>
                    email<br/><input ref={ref=>this.emailE=ref}></input> <br/>
                    passwd<br/><input ref={ref=>this.pwE=ref}></input> <br/>
                    <button onClick={this.login}>로그인</button>
                    <button>회원가입</button>
                </div>
                <div id="logout" style={logoutStyle}>
                    <button onClick={this.logout}>로그아웃</button>
                </div>
                <h2><a href="/">Home</a></h2>
                <h2><a href="/">About</a></h2>
                <h2><a href="/">Contact</a></h2>
                <h2><a href="/">Search</a></h2>

            </div>
        )
    }
}

export default Menu;