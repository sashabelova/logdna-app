import React, { Component } from 'react';

class MessageHandler extends Component {
  render() {
    const { error, message } = this.props;
    return (
      <div className={'warning-message ' + (error ? 'warning-error' : '')}>
        {error ? <span>Something went wrong, please try again!</span> : <span>{message}</span>}
      </div>
    );
  }
}

export default MessageHandler;
