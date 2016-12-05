import Dispatcher from '../dispatcher/appDispatcher';
import * as ActionTypes from '../actions/actionTypes';
import {EventEmitter} from 'events';

let _topics = [];
let _topic = {};

function setTopics(topics){
    _topics = topics;
}
function setTopic(topic){
    _topic = topic;
}

class TopicStoreClass extends EventEmitter {
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
        return _topics;
    }

    getById(id){
        return _topic;
    }
}

const TopicStore = new TopicStoreClass();

Dispatcher.register(function(action){
    switch(action.actionType){
        case ActionTypes.CREATE_TOPIC: 
            _topics.push(action.topic);
            TopicStore.emitChange();
            break;
        case ActionTypes.UPDATE_TOPIC: 
            let existingtopic = _topics.find((u) => u.id === action.topic.id);
            let usrIndex = _topics.indexOf(existingtopic);
            _topics.splice(usrIndex, 1, action.topic);
            TopicStore.emitChange();
            break;
        case ActionTypes.RECEIVE_TOPICS:
            setTopics(action.topics);
            TopicStore.emitChange();
            break;
        case ActionTypes.RECEIVE_TOPIC:
            setTopic(action.topic);
            TopicStore.emitChange();
            break;
        default:
    }
});


export default TopicStore;