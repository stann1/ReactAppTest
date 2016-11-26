import React, { Component } from 'react';

export default class SettingsForm extends Component {
    
    render() {
        let user = this.props.user;
        console.log(user);
        return (
            <div className="row">
                <form className="form-horizontal col-sm-6 col-sm-offset-3" onSubmit={this._handleSubmit.bind(this)}>
                    <h2>Your account info</h2>
                    <br />
                    <div className="form-group">
                        <label htmlFor="username" className="col-sm-2">Username</label>
                        <div className="col-sm-10">
                            <input id="username" className="form-control" placeholder="Username" value={user.username} ref={() => this._userName = user.username } disabled="true" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="col-sm-2">Password</label>
                        <div className="col-sm-10">
                            <input id="password" className="form-control" placeholder="Password" type="password" disabled="true" defaultValue={user.password} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstname" className="col-sm-2">First name</label>
                        <div className="col-sm-10">
                            <input id="firstname" className="form-control" placeholder="First Name" value={user.firstname} ref={(input) => this._firstName = input} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname" className="col-sm-2">Last name</label>
                        <div className="col-sm-10">
                            <input id="lastname" className="form-control" placeholder="Last Name" value={user.lastname} ref={(input) => this._lastName = input} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone" className="col-sm-2">Phone number</label>
                        <div className="col-sm-10">
                            <input id="phone" className="form-control" placeholder="Phone number" value={user.phone} ref={(input) => this._phone = input} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="language" className="col-sm-2">Locale</label>
                        <div className="col-sm-10">
                            <select id="language" className="form-control" ref={(input) => this._language = input}>
                                <option value={user.language}>{user.language}</option>
                                <option value="German">German</option>
                                <option value="Bulgarian">Bulgarian</option>
                            </select>
                        </div>
                    </div>

                    <button className="btn btn-primary" type="submit">
                        Save
                </button>
                </form>
            </div>
        )
    }

    _handleSubmit(event) {
        event.preventDefault();
        this.props.updateUser(this.props.user.id, this._userName, this._firstName.value, this._lastName.value, this._phone.value, this._language.value);
    }
}