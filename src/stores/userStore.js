import React from 'react';
import Dispatcher from '../dispatcher/appDispatcher';
import ActionTypes from '../actions/actionTypes';
import EventEmitter from 'events';

const _users = [];

const UserStore = Object.assign({}, EventEmitter.prototype, {
    addChangeListener(callback){
        this.on('change', callback);
    },

    removeChangeListener(callback){
        this.removeListener('change', callback);
    },

    emitChange(){
        this.emit('change');
    },

    getAll(){
        return _users;
    },

    getById(id){
        let user = _users.find((c) => c.id === id);
        return user;
    }
});

Dispatcher.register(function(action){
    switch(action.actionType){
        case ActionTypes.CREATE_USER: // do smt
            _users.push(action.user);
            UserStore.emitChange();
        break;
        case ActionTypes.UPDATE_USER: // do smt
        break;
        default:
        break;
    }
});

export default UserStore;