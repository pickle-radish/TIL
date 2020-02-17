import React, {Component} from 'react';
import axios from 'axios';



class Contact extends Component {
    state={
        name:""
    }

    register=()=>{
        const send_param={
            name:this.nameE.value,
            email:this.email.value,
            pw:this.pw.value,
            comments:this.commentE.value
        }
        axios.post('http://localhost:8080/member/insert', send_param)
        .then((returnData)=>{
            alert(returnData.data.message+"님 환영합니다");
            this.setState({
                name:returnData.data.message,
            })
        })
        .catch((err)=>{
            console.log(err);
        });
    }


    render(){
        if(this.state.name){
            return (
                <div>
                    <h2>{this.state.name}님 회원 가입 되셨습니다</h2>
                </div>
            )
        }else{

            return (
                <div>
                    <h2>Contact</h2>
                    <p>회원가입</p>
                    이름:<input ref={ref=>this.nameE=ref}/><br/>
                    이메일:<input ref={ref=>this.email=ref}/><br/>
                    비밀번호:<input ref={ref=>this.pw=ref}/><br/>
                    comments:<input ref={ref=>this.commentE=ref}/><br/>
                    <button onClick={this.register}>register</button>
                </div>
            )
        }
    }
}

export default Contact;
