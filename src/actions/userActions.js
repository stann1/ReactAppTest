import Dispatcher from '../dispatcher/appDispatcher';
import * as ActionTypes from './actionTypes';
import UsersApi from '../api/UsersApi';

const UserActions = {
    getUsers(){
        UsersApi.getAll().then(users => {
            Dispatcher.dispatch({
                actionType: ActionTypes.RECEIVE_USERS,
                users: users
            });
        });
    },
    getUser(userId){
        UsersApi.getById(userId).then(user => {
            Dispatcher.dispatch({
                actionType: ActionTypes.RECEIVE_USER,
                user: user
            });
        })
    },
    createUser(user){
        UsersApi.save(user).then(updatedUser => {
            Dispatcher.dispatch({
                actionType: ActionTypes.CREATE_USER,
                user: updatedUser
            })
        });
    },
    updateUser(user){
        UsersApi.save(user).then(updatedUser => {
            Dispatcher.dispatch({
                actionType: ActionTypes.UPDATE_USER,
                user: updatedUser
            })
        });
    }
}

export default UserActions;