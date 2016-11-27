import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const UserListRow = ({user}) => {
    return (
        <tr>
            <td><Link to={'/users/edit/' + user.id}>{user.username}</Link></td>
            <td>{user.name}</td>
            <td>{user.role}</td>
            <td>{user.email}</td>
            <td><Link to={'/users/edit/' + user.id} className="btn btn-primary">Edit</Link><span>{"\u00a0"}</span>
                <Link to={'/users/edit/' + user.id + '/permisions'} className="btn btn-success">Permissions</Link>
            </td>
        </tr>
    );
};

UserListRow.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserListRow;