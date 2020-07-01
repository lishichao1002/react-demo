import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Users extends React.Component {

    addUser = () => {
        console.log(this);
        this.props.history.push('/users/add');
    };

    render() {
        return (
            <div>
                <div>
                    <Link to={'/usersAdd'}>
                        Add User
                    </Link>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>operate</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.age}</td>
                                    <td>{user.gender}</td>
                                    <td>delete</td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export const UsersPage = connect((state) => {
    console.log(state);
    return {
        users: state.user.users
    };
})(Users);
