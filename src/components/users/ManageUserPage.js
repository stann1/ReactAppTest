import React, {Component} from 'react';
import UserStore from '../../stores/userStore';
import UserActions from'../../actions/userActions';
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

        this.onChange = this.onChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({user: UserStore.getById(nextProps.params.id)});
    }

    componentWillMount(){ 
        UserStore.addChangeListener(this.onChange);  
    }

    componentDidMount(){
        UserActions.getUser(this.props.params.id);
    }

    componentWillUnmount(){
        UserStore.removeChangeListener(this.onChange);
    }

     onChange() {
        this.setState({user: UserStore.getById(this.props.params.id)});
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
        console.log(this.state.user);
        UserActions.updateUser(this.state.user);
         toastr.options = {
                "positionClass": "toast-bottom-full-width",
                "showDuration": 300,
                "hideDuration": 5000,
                "timeOut": 5000,
                "extendedTimeOut": 1000
            }
        toastr.success('User saved.');
        browserHistory.push('/users')
    }
}

export default ManageUserPage;