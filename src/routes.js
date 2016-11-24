import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import CommentsPage from './components/comments/CommentsPage';
import StoryPage from "./components/stories/StoryPage";
import UsersPage from './components/users/UsersPage';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={CommentsPage} />
        <Route path="stories" component={StoryPage} />
        <Route path="users" component={UsersPage} />
        <Route path="comments" component={CommentsPage} />
    </Route>
);