import React, {Component} from 'react';
import {connect} from 'react-redux';

class PersonList extends Component {

    get people() {
        return this.props.people.map((person, idx) => {
            return (<a key={idx} href="#" onClick={() => this.props.personSelected(person.id)}>
                <li>{person.firstName} {person.lastName}</li>
            </a>)
        });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.people}
                </ul>
                <input type="button" onClick={() => this.props.createPerson()} value="New Person"/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        people: state.people
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        personSelected: (id) => dispatch({type: 'PERSON_SELECTED', id}),
        createPerson: () => dispatch({type: 'PERSON_ADD'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonList);
