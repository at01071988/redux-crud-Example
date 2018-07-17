import React, {Component} from 'react';
import {connect} from 'react-redux';
import PersonList from './PersonList';
import PersonEdit from './PersonEdit';
import './App.css';

class App extends Component {


    render() {
        console.log('render', this.state);
        switch (this.props.view) {
            case 'list':
                return <PersonList/>
            case 'edit':
                return <PersonEdit/>
            case 'add':
                return <PersonEdit/>
            default:
                throw new Error('Unknown view: ', this.props.view)
        }
    }
}


const mapStateToProps = (state) => {
    return {
        view: state.view,
        people: state.people
    }
}

export default connect(mapStateToProps)(App);
