import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    let users = this.props.users.map((user,i) => <li>{user.userName}</li>);
    return (
      <div>
        <ul>
          {users};
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users
  }
}
export default connect(mapStateToProps)(Users)
