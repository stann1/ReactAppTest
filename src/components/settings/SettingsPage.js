import React, { Component } from 'react';
import SettingsForm from './settingsForm';
import ProfileApi from '../../api/ProfileApi';
import { browserHistory } from 'react-router';
import toastr from 'toastr';

export default class SettingsPage extends Component{
    constructor(props, context) {
        super(props, context);

        this.state = {
            currentUser: {},
            locales:[],
            errors:{},
            saving:false,
            showSuccess: false
        };
    }

    render(){
        return(
            <div className="settings-form">
                <SettingsForm 
                    profile={this.state.currentUser} 
                    onChange={this._updateProfileState.bind(this)}
                    onSave={this._saveProfile.bind(this)}
                    saving={this.state.saving}
                    errors={this.state.errors}
                    allLocales={this.state.locales}
                 />
                <br/>
                {this.state.showSuccess &&
                    <div className="alert alert-success row" role="alert">Profiled data saved successfully.</div>
                }
            </div>
        )
    }

    componentWillMount(){
        ProfileApi.getMyProfile().then(p => {
            this.setState({currentUser: p});
            this.setState({locales: [{value: 1, text: "English(UK)"}, {value: 2, text: "German"}, {value: 3, text: "Bulgarian"}]});
            this.setState({errors: Object.assign({}, {"title": ""})});
        })
    }

    validProfileForm(){
        let formIsValid = true;
        let error = {};

        if (this.state.currentUser.username.length < 3) {
            error.title = "Username must be at least 3 characters.";
            formIsValid = false; 
        }
        if (this.state.currentUser.firstname.length < 1) {
            error.title = "First name cannot be empty.";
            formIsValid = false; 
        }
        if (this.state.currentUser.lastname.length < 1) {
            error.title = "Last name cannot be empty.";
            formIsValid = false; 
        }

        this.setState({errors: error});
        return formIsValid;
    }

    _updateProfileState(event){
        let field = event.target.name;
        let userProfile = this.state.currentUser;;
        userProfile[field] = event.target.value;
        
        return this.setState({currentUser: userProfile});
    }

    _saveProfile(event){
        event.preventDefault();
        if(!this.validProfileForm()){
            return;
        }
        
        ProfileApi.save(this.state.currentUser).then(updatedUser => {
             toastr.options = {
                "positionClass": "toast-bottom-full-width",
                "showDuration": 300,
                "hideDuration": 5000,
                "timeOut": 5000,
                "extendedTimeOut": 1000
            }
            toastr.success('Profiled data saved.');
           
            browserHistory.push('/');
        })
    }    
}