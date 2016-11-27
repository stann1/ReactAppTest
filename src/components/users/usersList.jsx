import React, { PropTypes } from 'react';
import UserListRow from './userListRow'

const UsersList = ({users}) => {
    return(
        <div className="table-responsive">
            <table className="table table-condensed">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Email</th>
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