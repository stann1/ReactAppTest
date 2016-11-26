import React, { Component } from 'react';
import SettingsForm from './settingsForm';
import ProfileStore from '../../api/ProfileStore';
import { Router, browserHistory } from 'react-router'

export default class SettingsPage extends Component{
    constructor(props, context) {
        super(props, context);

        this.state = {
            currentUser: {},
            showSuccess: false
        };
    }

    render(){
        let curr = this.state.currentUser;
        return(
            <div className="settings-form">
                <SettingsForm user={curr} updateUser={this._updateUser.bind(this)} />
                <br/>
                {this.state.showSuccess &&
                    <div className="alert alert-success row" role="alert">Profiled data saved successfully.</div>
                }
            </div>
        )
    }

    componentWillMount(){
        ProfileStore.getMyProfile().then(p => {
            this.setState({currentUser: p});
        })
    }

    _updateUser(id, username, firstname, lastname, phone, language){
        let user = {"id": id,
         "username": username,
         "firstname": firstname,
         "lastname": lastname,
         "language": language,
          "phone": phone
        };

        console.log(user);

        ProfileStore.save(user).then(updatedUser => {
            browserHistory.push('/');
            //this.setState({showSuccess: true});
        })
       
    }
}