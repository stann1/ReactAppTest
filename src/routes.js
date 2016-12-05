import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import WelcomePage from './components/WelcomePage';
import CommentsPage from './components/comments/CommentsPage';
import TopicPage from "./components/topics/TopicPage";
import UsersPage from './components/users/UsersPage';
import SettingsPage from './components/settings/SettingsPage';
import ManageUserPage from './components/users/ManageUserPage';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={WelcomePage} />
        <Route path="topics" component={TopicPage} />
        <Route path="users" component={UsersPage} />
        <Route path="users/edit/:id" component={ManageUserPage} />
        <Route path="comments" component={CommentsPage} />
        <Route path="settings" component={SettingsPage} />
    </Route>
);