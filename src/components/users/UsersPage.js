import React, { Component } from 'react';
import UserList from './usersList';
import UsersStore from '../../api/UsersStore';

export default class UsersPage extends Component{
    constructor(){
        super();

        this.state = {
            users: []
        }
    }

    componentWillMount(){
        this._fetchListData()
    }

    render(){
        return(
            <UserList users={this.state.users} />
        )
    }

    _fetchListData(){
        UsersStore.getAll().then((data) => {
            this.setState({users: data});
        })
    }
}