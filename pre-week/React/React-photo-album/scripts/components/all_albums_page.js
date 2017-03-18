import React from 'react';
import ReactDOM from 'react-dom';
import Images from '../store';

class AllAlbums extends React.Component {
  constructor(props) {
    super(props)

    this.state = {  }

    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(e) {
    this.props.changeHomePage(e)
  }

  render() {
    return (
        <ul className="albums-img-ul">
          <li className="page-album" onClick={this.clickHandler}>
            <img src={Images.bikes[0]} className="albums-img" />Album 1
          </li>

          <li className="page-album" onClick={this.clickHandler}>
            <img src={Images.foods[0]} className="albums-img" />Album 2
          </li>

          <li className="page-album" onClick={this.clickHandler}>
            <img src={Images.skylines[0]} className="albums-img" />Album 3
          </li>
        </ul>
    )
  }
}

export default AllAlbums;
