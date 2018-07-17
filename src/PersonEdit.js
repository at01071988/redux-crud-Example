import React, {Component} from 'react';
import {connect} from 'react-redux';


class PersonEdit extends Component {

    constructor(props) {
        super(props);
        const person = this.props.people.find(p => p.id === this.props.personId)
        this.state = JSON.parse(JSON.stringify(person));
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
                <input type="button" onClick={() => this.props.personUpdated(this.state)} value="Save"/>
                <input type="button" onClick={() => this.props.personDeleted()} value="Delete"/>
                <input type="button" onClick={() => this.props.cancel()} value="Cancel"/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        people: state.people,
        personId: state.selectedPersonId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        personUpdated: (newPerson) => dispatch({type: 'PERSON_UPDATE', newPerson}),
        personDeleted: () => dispatch({type: 'PERSON_DELETE'}),
        cancel: () => dispatch({type: 'CANCEL'})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PersonEdit);
