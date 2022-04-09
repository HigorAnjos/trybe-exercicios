import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { greetingsMessage } = this.props
    console.log(this.props)
    const { match: { params: { id } } } = this.props;
    return (
      <div>
        <h2>Users</h2>
        <p>{id} - { greetingsMessage }, My awesome Users component </p>
      </div>
    );
  }
};

export default Users;
