import React, { Component } from 'react';

export default class SettingsForm extends Component {
    render() {
        let user = this.props.user;
        return (
            <div className="row">
                <form className="form-horizontal col-sm-6 col-sm-offset-3" onSubmit={this._handleSubmit.bind(this)}>
                    <h2>Your account info</h2>
                    <br />
                    <div className="form-group">
                        <label htmlFor="username" className="col-sm-2">Username</label>
                        <div className="col-sm-10">
                            <input id="username" className="form-control" placeholder="Username" defaultValue={user.username} disabled="true" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="col-sm-2">Password</label>
                        <div className="col-sm-10">
                            <input id="password" className="form-control" placeholder="Password" type="password" disabled="true" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="firstname" className="col-sm-2">First name</label>
                        <div className="col-sm-10">
                            <input id="firstname" className="form-control" placeholder="First Name" ref={(input) => this._firstName = input} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname" className="col-sm-2">Last name</label>
                        <div className="col-sm-10">
                            <input id="lastname" className="form-control" placeholder="Last Name" ref={(input) => this._lastName = input} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone" className="col-sm-2">Phone number</label>
                        <div className="col-sm-10">
                            <input id="phone" className="form-control" placeholder="Phone number" ref={(input) => this._phone = input} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="language" className="col-sm-2">Locale</label>
                        <div className="col-sm-10">
                            <select id="language" className="form-control" ref={(input) => this._language = input}>
                                <option value="one">One</option>
                                <option value="two">Two</option>
                                <option value="three">Three</option>
                                <option value="four">Four</option>
                                <option value="five">Five</option>
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
        this.props.updateUser(this._firstName.value, this._lastName.value, this._phone.value, this._language.value);
    }
}