import React, { Component } from 'react';
import TopicsStore from '../../api/TopicsStore';
import StoryList from './storyList';

export default class StoryPage extends Component {
   constructor(){
        super();

        this.state = {
            stories: []
        }
    }

    componentWillMount(){
        this._fetchListData()
    }

    _fetchListData(){
        TopicsStore.getAll().then(data => {
            this.setState({stories: data});
        })
    }

    render(){
        let stories = this.state.stories;
        return (
            <StoryList stories={stories} />
        );
    }  
}