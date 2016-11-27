import React, {PropTypes} from 'react';

const TextInput = ({name, label, onChange, placeholder, value, error, disabled}) => {
  let wrapperClass = 'form-group';
  if (error && error.length > 0) {
    wrapperClass += " " + 'has-error'; // eslint-disable-line
  }
  let disableInput = disabled === "true" ? "disabled" : "";

  return (
    <div className={wrapperClass}>
      <label htmlFor={name} className="col-sm-2">{label}</label>
      <div className="field col-sm-10">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disableInput}
          />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
