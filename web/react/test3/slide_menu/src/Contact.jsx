import React, {Component} from 'react';

class Contact extends Component{
    render(){

        return (
            <div>
                <h2>Contact</h2>
                <p>Register</p>
                Name<input /><br/>
                E-mail<input/><br/>
                PW<input /><br/>
                <button>register</button>
            </div>
        )
    }
}

export default Contact