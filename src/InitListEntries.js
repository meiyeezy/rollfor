import React, { Component } from "react";

class InitListEntries extends Component {
    constructor(props) {
        super(props);
        this.state = {activeKeys: []};
        this.createTasks = this.createTasks.bind(this);
    }

    delete(key) {
        this.props.delete(key);
    }

    handleClick(key) {
        var newKey = key;

        if (this.state.activeKeys.indexOf(newKey) === -1) { //if key does not exist in array
            this.setState((prevState) => {
                return {
                    activeKeys: prevState.activeKeys.concat(newKey) //add key to array
                };
            })
        } else if (this.state.activeKeys.indexOf(newKey) !== -1) {
            var filteredKeys = this.state.activeKeys.filter(a => a !== newKey);
            this.setState({activeKeys: filteredKeys});
        }
        console.log(this.state.activeKeys); //print out arrays
    }

    //TODO: add 'downed' option
    createTasks(item) {
        return <li  className={(this.state.activeKeys.indexOf(item.key) !== -1 && 'downed')  || item.alig}
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