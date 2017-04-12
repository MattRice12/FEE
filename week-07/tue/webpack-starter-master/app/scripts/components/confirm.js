import React from 'react';

class Confirm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      prompt: false,
      checked: false
    }

    this.clickHandler = this.clickHandler.bind(this)
    this.confirmHandler = this.confirmHandler.bind(this)
    this.rejectHandler = this.rejectHandler.bind(this)
  }

  clickHandler() {
    this.setState({
      prompt: true
    })
  }

  confirmHandler() {
    this.setState({
      prompt: false,
      checked: true
    })
  }

  rejectHandler() {
    this.setState({
      prompt: false
    })
  }

  render() {
    let isChecked = (this.state.prompt || this.state.checked)

    if (this.state.prompt) {
      var popup = (<div><div className="popup-container">
      </div>
      <div className="popup">
        <h1>Did you really read this?</h1>
        <button className="yes" onClick={this.confirmHandler}>Yes</button>
        <button className="no" onClick={this.rejectHandler}>No</button>
      </div>
    </div>)
    }

    return(
      <div>
        <div>
          <h1>Read this header</h1>
          <p>This is a body of text that you should read. If you do not read it you will regret it! Trust me!</p>
        </div>
        <div>
          <label htmlFor="checkbox">Confirm</label>
          <input type="checkbox" id="checkbox" onClick={this.clickHandler} checked={isChecked} disabled={this.state.checked}/>
        </div>
        {popup}
      </div>
    )
  }
}

export default Confirm;
