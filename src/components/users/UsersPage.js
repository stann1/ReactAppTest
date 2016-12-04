import React, { Component } from 'react';
import UserList from './usersList';
import UserStore from '../../stores/userStore';
import UserActions from'../../actions/userActions';

export default class UsersPage extends Component{
    constructor(){
        super();

        this.state = {
            users: []
        }

        this.onChange = this.onChange.bind(this);
    }

    componentWillMount(){ 
        UserStore.addChangeListener(this.onChange);  
    }

    componentDidMount(){
        UserActions.getUsers();
    }

    componentWillUnmount(){
        UserStore.removeChangeListener(this.onChange);
    }

     onChange() {
        this._fetchListData();
    }

    render(){
        return(
            <UserList users={this.state.users} />
        )
    }

    _fetchListData(){
        let users = UserStore.getAll();
        this.setState({users: users});
    }
}