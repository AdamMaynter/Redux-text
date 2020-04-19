import React from 'react';
import { createStore } from "redux";
import { connect, Provider } from 'react-redux'

const initialState = {
    firstName: '',
    secondName: ''
}

const ACTION_CHANGE_FIRST_NAME = 'ACTION_CHANGE_FIRST_NAME';
const ACTION_CHANGE_SECOND_NAME = 'ACTION_CHANGE_SECOND_NAME';

const actionChangeFirstName = {
    type: ACTION_CHANGE_FIRST_NAME,
    payload: null
};

const actionChangeSecondName = {
    type: ACTION_CHANGE_SECOND_NAME,
    payload: null
}

const rootReducer = (state = initialState, action) => {
    return state;
};

const store = createStore(rootReducer);

console.log(store.getState())

class App  extends React.Component {
    render() {
        return <div>
            <div><input type="text" placeholder="First Name"/></div>
            <div><input type="text" placeholder="Second Name"/></div>
            <div/>
        </div>
    }
}

export default App;
