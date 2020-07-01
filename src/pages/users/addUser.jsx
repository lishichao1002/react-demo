import React from 'react';
import {connect} from 'react-redux';
import {ReactFormHandler} from '../../common/ReactFormHandler';
import {addUser} from '../../store/users/action';

export class UserAdd extends ReactFormHandler {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            age: '',
            gender: 'man'
        };
    }

    addUser = () => {
        console.log(this);
        console.log(this.props.addUser.toString());
        this.props.addUser(this.state);
        this.props.history.goBack();
    };

    render() {
        return (
            <div>
                <div className="row">
                    <span className="label">ID</span>
                    <span className="col">
            <input type="text" name={'id'} value={this.state.id} onChange={this.handleFormChange}/>
          </span>
                </div>
                <div className="row">
                    <span className="label">Name</span>
                    <span className="col">
            <input type="text" name={'name'} value={this.state.name} onChange={this.handleFormChange}/>
          </span>
                </div>
                <div className="row">
                    <span className="label">Age</span>
                    <span className="col">
            <input type="text" name={'age'} value={this.state.age} onChange={this.handleFormChange}/>
          </span>
                </div>
                <div className="row">
                    <span className="label">Gender</span>
                    <span className="col">
            <select name="gender" value={this.state.gender} onChange={this.handleFormChange}>
              <option value="man">man</option>
              <option value="woman">woman</option>
            </select>
          </span>
                </div>
                <div className="row">
                    <button onClick={this.addUser}>submit</button>
                </div>
            </div>
        );
    }
}

export const UserAddPage = connect(null, {
    addUser
})(UserAdd);
