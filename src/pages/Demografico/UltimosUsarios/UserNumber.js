import React, { Component } from 'react'

export class UserNumber extends Component {
  render() {
    if(this.props.userNumber) {
      return (
        <span className="user-number-span">
          {this.props.userNumber}
        </span>
      )
    }
    return null
  }
}

export default UserNumber
