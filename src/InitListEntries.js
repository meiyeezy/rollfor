import React, { Component } from "react";

class InitListEntries extends Component {
    constructor(props) {
        super(props);
        this.state = {activeKey: null};
        this.createTasks = this.createTasks.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }

    handleClick(key) {
        let activeKey = this.state.activeKey === key ? null : key;
        this.setState({activeKey});
    }

    //TODO: add 'downed' option
    createTasks(item) {
        return <li  className={this.state.activeKey === item.key && 'downed' || item.alig}
                    key={item.key}
                    onClick={this.handleClick.bind(this, item.key)}>
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