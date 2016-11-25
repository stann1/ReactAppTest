import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import WelcomePage from './components/WelcomePage';
import CommentsPage from './components/comments/CommentsPage';
import StoryPage from "./components/stories/StoryPage";
import UsersPage from './components/users/UsersPage';
import SettingsPage from './components/settings/SettingsPage';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={WelcomePage} />
        <Route path="stories" component={StoryPage} />
        <Route path="users" component={UsersPage} />
        <Route path="comments" component={CommentsPage} />
        <Route path="settings" component={SettingsPage} />
    </Route>
);