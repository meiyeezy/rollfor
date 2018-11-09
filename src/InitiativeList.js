import React, { Component } from 'react';
import InitListEntries from './InitListEntries';
import './InitiativeList.css';

class InitiativeList extends Component {
    constructor(props) {
       super(props);

       this.state = {
           items:[],
           value: 'ally'
       };

       this.addItem = this.addItem.bind(this);
       this.deleteItem = this.deleteItem.bind(this);
       this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    addItem(e) {
        if (this._inputElement.value !== "" && this._inputInit.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                init: this._inputInit.value,
                alig: this._inputAlig.value,
                key: Date.now()
            };

            if (this._inputAlig.value === 'ally') {
                //TODO: assign 'ally' class that changes background-color of .theList
            } else if (this._inputAlig.value === 'enemy') {
                //TODO: change bg colour to red
            }

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            //automatically sorts by descending initiative
            this.setState((prevState) => {
                prevState.items.sort((a, b) => (b.init - a.init));
            })
            
            this._inputElement.value = "";
            this._inputInit.value = "";
        }
        //prevents page refresh
        e.preventDefault();
    }

    deleteItem(key) {
        var filteredItems = this.state.items.filter(function(item) {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
    }
 
    render() {
        return (
            <div className="initListMain">
                <div className="header">
                    <form onSubmit={this.addItem} className="form-inline">
                        <input
                            type="text"
                            placeholder="name"
                            ref={(a) => this._inputElement = a}
                        />
                        <input 
                            type="number"
                            placeholder="initiative"
                            ref={(b) => this._inputInit = b} />
                        <div className="select-style">
                        <select 
                            value={this.state.value}
                            onChange={this.handleChange}
                            ref={(c) => this._inputAlig = c}>
                            <option value="ally">ally</option>
                            <option value="enemy">enemy</option>
                        </select>
                        </div>
                        <button type="submit">add</button>
                    </form>
                </div>
                <InitListEntries entries={this.state.items}
                                 delete={this.deleteItem} />
            </div>
        )
    }
}

export default InitiativeList;