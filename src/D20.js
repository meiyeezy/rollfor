import React, { Component } from 'react';
import './D20.css';

//TODO: onClick handler
    //random number generator
    //create div that sits inside d20 logo
    //pass this info to the initiative form

class D20 extends Component {
    constructor(props) {
        super(props);
        this.state = {number: ''};
    }

    onClickHandler = () => {
        //todo: maths
        const min = 1;
        const max = 20;
        this.setState({number: Math.round(min + Math.random() * (max - min))});
    }

    render() {
        return (
            <div className="logoHolder">
                <img src={require("./d20.png")} className="logo" alt="dice" onClick={this.onClickHandler}/>
                <div className="randomNumber">{this.state.number}</div>
            </div>
        )
    }
}

export default D20;