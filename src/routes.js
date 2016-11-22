import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import CommentBox from './components/commentBox';
import StoryPage from "./components/stories/storyPage";

export default(
    <Route path="/" component={App}>
        <IndexRoute path="/" component={CommentBox} />
        <Route path="stories" component={StoryPage} />
    </Route>
);