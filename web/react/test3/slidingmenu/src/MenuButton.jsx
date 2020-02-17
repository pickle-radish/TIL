import React, {Component} from 'react';

class MenuButton extends Component{

    render(){

        return(
            <div>
                <button id="roundButton" onMouseDown={this.props.handleMouseDown}></button>
            </div>
        );
    }
}

export default MenuButton;