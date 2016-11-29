import React from 'react';
import Dispatcher from '../dispatcher/appDispatcher';
import ActionTypes from './actionTypes';
import UsersApi from '../api/UsersApi';

const UserActions = {
    createUser(user){
        UsersApi.save(user).then(newUser => {
            Dispatcher.dispatch({
                actionType: ActionTypes.CREATE_USER,
                user: newUser
            })
        });
    }
}

export default UserActions;