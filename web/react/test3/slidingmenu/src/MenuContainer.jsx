import React, {Component} from 'react';

import MenuButton from './MenuButton';
import Menu from './Menu';

import {Route, NavLink, HashRouter} from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import Contact from './Contact';

class MenuContainer extends Component {
    state={
        visibility:false,

    }
    handleMouseDown=(e)=>{
        this.toggle()
        e.stopPropagation();
    }

    toggle=()=>{
        this.setState({
            visibility:!this.state.visibility
        })
    }

    render(){

        return (

            <div>
                <MenuButton handleMouseDown={this.handleMouseDown}></MenuButton>
                <Menu Menu_v={this.state.visibility} handleMouseDown={this.handleMouseDown}></Menu>

                <HashRouter>
                    <div>
                        <h1>Simple SAP</h1>
                        <ul className="header">
                            <li><NavLink exact to="/">Home</NavLink></li>
                            <li><NavLink to="/post">Post   </NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                        <div id="content">
                            <Route exact path="/" component={Home} />
                            <Route path="/post" component={Post} />
                            <Route path="/contact" component={Contact} />

                        </div>
                    </div>
                </HashRouter>
            </div>
        );
    }
}

export default MenuContainer;