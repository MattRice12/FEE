import React from 'react';
import ReactDOM from 'react-dom'

class AlbumCover extends React.Component {
  clickHandler(e) {
    this.props.clickHandler(e)
  }

  render() {
    return(
      <li className="page-album" onClick={this.clickHandler.bind(this)}>
        <div className="img-container">
          <img src={this.props.src} className="albums-img" />
        </div>
        <p>{this.props.text}</p>
      </li>
    )
  }
}

export default AlbumCover;
