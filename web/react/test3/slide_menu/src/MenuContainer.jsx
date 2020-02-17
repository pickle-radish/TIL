import React, {Component} from "react";
import MenuButton from './MenuButton';
import Menu from './Menu';
import Home from './Home';
import Stuff from './Stuff';
import Contact from './Contact';
import {Route,NavLink,HashRouter} from 'react-router-dom';
import './MenuButton.css';

class MenuContainer extends Component{
    state={
        visible: false
    }

    handleMouseDown=(e)=>{
        this.toggleMenu();

        console.log("clicked");
        e.stopPropagation();
    }

    toggleMenu=()=>{
        this.setState({
            visible: !this.state.visible
        });
    }
    render(){
        return(
            <div>
                <MenuButton handleMouseDown={this.handleMouseDown} />
                <Menu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible} />
                <HashRouter>
                    <div>
                        <h1>Simple SPA</h1>
                        <ul className="header">
                            <li><NavLink exact to="/">Home</NavLink></li>
                            <li><NavLink to="/stuff">Stuff</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                        <div className="content">
                            <Route exact path="/" component={Home}></Route>
                            <Route path="/stuff" component={Stuff}></Route>
                            <Route path="/contact" component={Contact}></Route>
                        </div>

                    </div>  
                </HashRouter>

            </div>
        )
    }
}

export default MenuContainer;
