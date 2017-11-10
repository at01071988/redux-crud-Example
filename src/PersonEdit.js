import React, { Component } from 'react';

class PersonEdit extends Component {

    constructor(props) {
        super(props);
        this.state = JSON.parse(JSON.stringify(props.person));
    }

    changed = (event) => {
        const newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(Object.assign({}, this.state, newState));
    }

    render() {
        return (
            <div>
                <div>
                    <span>First Name</span>
                    <input
                        type="text"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.changed}
                    />
                </div>
                <div>
                    <span>Last Name</span>
                    <input
                        type="text"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.changed}
                    />
                </div>
                <input type="button" onClick={() => this.props.update(this.state)} value="Save" />
                <input type="button" onClick={() => this.props.delete(this.state)} value="Delete" />
                <input type="button" onClick={() => this.props.cancel(this.state)} value="Cancel" />
            </div>
        );
    }
}

export default PersonEdit;
