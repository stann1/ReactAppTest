import React, { Component } from 'react';
import UserList from './usersList';
import Store from '../../api/Store';

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
        Store.getUsers((data) => {
            this.setState({users: data.users});
        })
    }
}