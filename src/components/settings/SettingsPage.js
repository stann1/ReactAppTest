import React, { Component } from 'react';
import SettingsForm from './settingsForm';

export default class SettingsPage extends Component{
    constructor() {
        super();

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
        let currUsr = {"id": 1,
         "username": "buzz-kill",
         "firstname": "Bai",
         "lastname":"Pesho",
         "language": "English(UK)",
          "phone": "0882345678"
        };
        this.setState({currentUser: currUsr});
    }

    _updateUser(firstname, lastname, phone, language){
        let updatedUser = {"id": 1,
         "username": "buzz-kill",
         "firstname": firstname,
         "lastname": lastname,
         "language": language,
          "phone": phone
        };

        console.log(updatedUser);
        this.setState({currentUser: updatedUser});
        this.setState({showSuccess: true});
    }
}