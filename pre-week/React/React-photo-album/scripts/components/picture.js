import React from 'react';
import ReactDOM from 'react-dom';
import Images from '../store';

class Picture extends React.Component {
  constructor(props) {
    super(props)

    this.state = { }

    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(e) {
    var allPics = document.querySelectorAll('.pictures')
    allPics.forEach(function(pic) {
      pic.classList.remove('selected');
    })

    e.target.className += ' selected big-pic'

    this.props.selectPicture(e)
  }

  render() {
    return(
      <img className="pictures" id="img-albums" src={this.props.src} onClick={this.clickHandler} />
    )
  }
}

export default Picture;
