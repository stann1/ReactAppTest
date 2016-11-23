import React, { PropTypes } from 'react';
import UserListRow from './userListRow'

const UsersList = ({users}) => {
    return(
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(u => <UserListRow key={u.id} user={u} />)}
                </tbody>
            </table>
        </div>
    )
}

UsersList.propTypes = {
    users: PropTypes.array.isRequired
}

export default UsersList;