import Dispatcher from '../dispatcher/appDispatcher';
import * as ActionTypes from './actionTypes';
import TopicStore from '../api/TopicsApi';

const TopicActions = {
    getTopics(){
        TopicStore.getAll().then(topics => {
            Dispatcher.dispatch({
                actionType: ActionTypes.RECEIVE_TOPICS,
                topics: topics
            });
        });
    },
    getTopic(topicId){
        TopicStore.getById(topicId).then(topic => {
            Dispatcher.dispatch({
                actionType: ActionTypes.RECEIVE_TOPIC,
                topic: topic
            });
        })
    },
    createTopic(topic){
        TopicStore.save(topic).then(updatedTopic => {
            Dispatcher.dispatch({
                actionType: ActionTypes.CREATE_TOPIC,
                topic: updatedTopic
            })
        });
    },
    updateTopic(topic){
        TopicStore.save(topic).then(updatedTopic => {
            Dispatcher.dispatch({
                actionType: ActionTypes.UPDATE_TOPIC,
                topic: updatedTopic
            })
        });
    }
}

export default TopicActions;