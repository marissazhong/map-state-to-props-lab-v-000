import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map((user,i) => <li>{user.userName}</li>)};
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users,
    userCount: state.users.length
  }
}
export default connect(mapStateToProps)(Users)
