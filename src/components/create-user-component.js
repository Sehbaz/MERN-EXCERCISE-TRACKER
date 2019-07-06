import React, { Component } from "react";
import Axios from "axios";
class CreateUser extends Component {
  constructor(props) {
    super(props);
    // Defining "this"
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    //Setting up the state properties
    this.state = {
      username: ""
    };
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    };

    console.log(user);
    Axios.post("http://localhost:5000/users/add/", user).then(res =>
      console.log(res.data)
    );

    this.setState({
      username: ""
    });
  }
  render() {
    return (
      <div>
        <h3>Create New users</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username: </label>

            <input
              type="text"
              value={this.state.username}
              onChange={this.onChangeUsername}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create user"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
export default CreateUser;
