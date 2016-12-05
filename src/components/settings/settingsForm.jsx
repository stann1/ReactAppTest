import React from 'react';
import Input from '../common/textInput';
import Select from '../common/selectInput';

const SettingsForm = ({profile, allLocales, onSave, onChange, saving, errors}) => {
    
        return (
            <div className="row">
                <form className="form-horizontal col-sm-6 col-sm-offset-3">
                    <h2>Your account info</h2>
                    <br />
                    <Input name="username" label="Username" value={profile.username} onChange={onChange} error={errors.username} />
                    <Input name="password" label="Password" disabled="true" value={profile.password} onChange={onChange} error={errors.password} />
                    <Input name="firstname" label="First name" value={profile.firstname} onChange={onChange} error={errors.firstname} />
                    <Input name="lastname" label="Last name" value={profile.lastname} onChange={onChange} error={errors.lastname} />
                    <Input name="phone" label="Phone" value={profile.phone} onChange={onChange} error={errors.phone} />
                    <Select name="locale" label="Locale" value={profile.locale} defaultOption={profile.language} options={allLocales} onChange={onChange} error={errors.language} />
                    <input value="Save" className="btn btn-primary" type="submit" disabled={saving} onClick={onSave} />
                </form>
            </div>
        )
}

export default SettingsForm