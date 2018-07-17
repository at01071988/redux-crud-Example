const initialState = {
    view: 'list',
    selectedPersonId: undefined,
    people: [
        {id: 1, firstName: 'Brent', lastName: 'Gardner'},
        {id: 2, firstName: 'Rachel', lastName: 'Koldenhoven'}
    ]
};

const reducer = (state, action) => {
    if (!state) {
        state = initialState;
    }
    console.log('action!', action);
    switch (action.type) {
        case 'PERSON_SELECTED':
            return personSelected(state, action);
        case 'PERSON_UPDATE':
            return personUpdated(state, action);
        case 'PERSON_ADD':
            return createPerson(state);
        case 'PERSON_DELETE':
            return personDeleted(state);
        case 'CANCEL':
            return cancel(state);

        default:
            return state;
    }
}


const personSelected = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    newState.view = 'edit';
    newState.selectedPersonId = action.id;
    return newState;
}

const personUpdated = (state, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    const newPerson = newState.people.find(p => p.id === action.newPerson.id);
    Object.assign(newPerson, action.newPerson);
    newState.selectedPersonId = undefined;
    newState.view = 'list';
    return newState;
}


const createPerson = (state) => {
    const newState = JSON.parse(JSON.stringify(state));
    const newPerson = {
        id: newState.people.reduce((acc, cur) => Math.max(acc, cur.id), -1) + 1,
        firstName: '',
        lastName: ''
    };
    newState.people.push(newPerson);
    newState.selectedPersonId = newPerson.id;
    newState.view = 'add';
    return newState
}

const personDeleted = (state) => {
    const newState = JSON.parse(JSON.stringify(state));
    newState.people = newState.people.filter(p => p.id !== state.selectedPersonId);
    newState.selectedPersonId = undefined;
    newState.view = 'list';
    return newState;
}

const cancel = (state) => {
    const newState = JSON.parse(JSON.stringify(state));
    newState.selectedPersonId = undefined;
    newState.view = 'list';
    return newState;
}

export default reducer;


