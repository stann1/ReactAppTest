import React, { Component } from 'react';
import TopicsApi from '../../api/TopicsApi';
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
        TopicsApi.getAll().then(data => {
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