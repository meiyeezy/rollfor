import React, { Component } from "react";

class InitListEntries extends Component {
    constructor(props) {
        super(props);
        this.state = {addClass: false};
        this.createTasks = this.createTasks.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }

    delete(key) {
        this.props.delete(key);
    }

    handleClick() {
        this.setState({addClass: !this.state.addClass});
    }

    //TODO: add 'downed' option
    createTasks(item) {
        return <li  className={this.state.addClass ? "downed" : item.alig}
                    key={item.key}
                    onClick={this.handleClick}>
                    <b>{item.text}</b> – {item.init}
                <button className="destroy" onClick={() => this.delete(item.key)}>x</button>   
                </li>    
    }

    render() {
        var initEntries = this.props.entries;
        var listItems = initEntries.map(this.createTasks);
        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
};

export default InitListEntries;