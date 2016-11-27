import React from 'react';
import Input from '../common/textInput';

const UserForm = ({user, onSave, onChange, saving}) => {
    return (
        <div className="row">
            <form className="form-horizontal col-sm-6 col-sm-offset-3">
                <h2>Edit user</h2>
                <br />
                <input type="hidden" name="id" value={user.id}/>
                <Input name="username" label="Username" value={user.username} onChange={onChange}/>
                <Input name="name" label="Name" value={user.name} onChange={onChange} />
                <Input name="role" label="Role" value={user.role} onChange={onChange} />
                <Input name="email" label="Email" value={user.email} onChange={onChange} />
                <input value="Save" className="btn btn-primary" type="submit" disabled={saving} onClick={onSave} />
            </form>
        </div>
    );
}

export default UserForm;