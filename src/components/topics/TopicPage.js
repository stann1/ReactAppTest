import React, { Component } from 'react';
import TopicStore from '../../stores/topicStore';
import TopicActions from'../../actions/topicActions';
import TopicList from './topicList';

export default class TopicPage extends Component {
   constructor(){
        super();

        this.state = {
            topics: []
        }

        this.onChange = this.onChange.bind(this);
    }

    componentWillMount(){ 
        TopicStore.addChangeListener(this.onChange);  
    }

    componentDidMount(){
        TopicActions.getTopics();
    }

    componentWillUnmount(){
        TopicStore.removeChangeListener(this.onChange);
    }

     onChange() {
        this._fetchListData();
    }
    
    render(){
        let topics = this.state.topics;
        return (
            <TopicList topics={topics} />
        );
    }

    _fetchListData(){
        this.setState({topics: TopicStore.getAll()});
    }
  
}