import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const UserListRow = ({user}) => {
    return (
        <tr>
            <td>{user.id}</td>
            <td><Link to={'/user/' + user.id}>{user.username}</Link></td>
            <td>{user.name}</td>
            <td>{user.role}</td>
            <td><Link to={'/user/edit/' + user.id} className="btn btn-primary">Edit</Link></td>
        </tr>
    );
};

UserListRow.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserListRow;