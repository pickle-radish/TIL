import React, {Component} from 'react';
import axios from 'axios';
import $ from 'jquery';
import {} from 'jquery.cookie';

axios.defaults.withCredentials = true;
const headers={withCredentials:true};

class Post extends Component {
    state={
        posts:[],
    }

    uploadPost= async ()=>{
        const send_param={
            headers,
            id: $.cookie("login_id"),
            content:this.postE.value,
            img:''
        }

        try{
            await axios.post('http://localhost:8080/post/upload', send_param);
            const result = await axios.post('http://localhost:8080/post/getAllPosts', {headers});
            if(result.data.posts){
                this.setState({
                    posts:result.data.posts,
                })
            }
        }catch(err){
            console.log(err);
        }
    }

    follow=async (nick)=>{
        
        const send_param={
            user:$.cookie('login_nick'),
            following:nick,
        };
        const result = await axios.post('http://localhost:8080/member/follow', send_param);
        if(result.data.message){
            alert("follow success");
        }else{
            alert("follow fail");
        }
    }

    render(){
        const postStyle={
            width:400,
            height: 250,
            border:"solid",
            borderColor:"gray",
            margin:5,
        }
        
        let posts=this.state.posts.map((post)=>{
            let nick=post.user.nick;
            let fbutton=<button onClick={this.follow.bind(null, nick)}>팔로우하기</button>;
            if($.cookie('login_nick')===nick){
                nick='';
                fbutton='';
            }
            return <div key={post.id} style={postStyle}>
                    {nick} {fbutton}<br/>
                    {post.content}
                    </div>
        });

        return (
            <div>
                <h2>SNS Post</h2>
                <textarea rows='5' cols="50" ref={ref=>this.postE=ref}></textarea><br/>
                <button>사진업로드</button>
                <button onClick={this.uploadPost}>짹짹</button>
                <div>
                    {posts}
                </div>
            </div>
        )
    }
}

export default Post;
