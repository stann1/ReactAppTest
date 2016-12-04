import Dispatcher from '../dispatcher/appDispatcher';
import * as ActionTypes from '../actions/actionTypes';
import {EventEmitter} from 'events';

let _users = [];
let _user = {};

function setUsers(users){
    _users = users;
}
function setUser(user){
    _user = user;
}

class UserStoreClass extends EventEmitter {
    addChangeListener(callback){
        this.on('change', callback);
    }

    removeChangeListener(callback){
        this.removeListener('change', callback);
    }

    emitChange(){
        this.emit('change');
    }

    getAll(){
        return _users;
    }

    getById(id){
        // debugger;
        // let user = _users.find((c) => c.id === id);
        return _user;
    }
}

const UserStore = new UserStoreClass();

Dispatcher.register(function(action){
    switch(action.actionType){
        case ActionTypes.CREATE_USER: 
            _users.push(action.user);
            UserStore.emitChange();
            break;
        case ActionTypes.UPDATE_USER: 
            let existingUser = _users.find((u) => u.id === action.user.id);
            let usrIndex = _users.indexOf(existingUser);
            _users.splice(usrIndex, 1, action.user);
            UserStore.emitChange();
            break;
        case ActionTypes.INITIALIZE_USERS:
            setUsers(action.users);
            UserStore.emitChange();
            break;
        case ActionTypes.INITIALIZE_USER:
            setUser(action.user);
            UserStore.emitChange();
            break;
        default:
    }
});


export default UserStore;