import React, {Component} from 'react';
import UsersStore from '../../api/UsersStore';
import UserForm from './userForm';
import { browserHistory } from 'react-router';
import toastr from 'toastr';

class ManageUserPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            user: {},
            errors: {},
            saving: false
        };
    }

    componentWillReceiveProps(nextProps) {
        debugger;
        // if (this.props.params.id != nextProps.user.id) {
        // // Necessary to populate form when existing course is loaded directly.
        //     this.setState({user: Object.assign({}, nextProps.user)});
        // }
    }

    componentWillMount(){
        let userId = this.props.params.id;
        UsersStore.getById(userId).then(userData => {
            this.setState({user: userData});
        })
    }

    render() {
        return (
            <UserForm 
                user={this.state.user} 
                onChange={this._updateUserState.bind(this)} 
                onSave={this._saveUser.bind(this)} 
                saving={this.state.saving} 
             />
        );
    }

    _updateUserState(event){
        let field = event.target.name;
        let user = this.state.user;;
        user[field] = event.target.value;
        
        return this.setState({user: user});
    }

    _saveUser(event){
        event.preventDefault();
         toastr.options = {
                "positionClass": "toast-bottom-full-width",
                "showDuration": 300,
                "hideDuration": 5000,
                "timeOut": 5000,
                "extendedTimeOut": 1000
            }
        toastr.warning('Saving of users is not yet implemented.');
    }
}

export default ManageUserPage;