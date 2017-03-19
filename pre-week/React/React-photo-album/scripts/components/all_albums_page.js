import React from 'react';
import ReactDOM from 'react-dom';
import Images from '../store';
import AlbumCover from './album_cover';

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
          <AlbumCover clickHandler={this.clickHandler} text={"Album 1"} src={Images.bikes[0]} />
          <AlbumCover clickHandler={this.clickHandler} text={"Album 2"} src={Images.foods[0]} />
          <AlbumCover clickHandler={this.clickHandler} text={"Album 3"} src={Images.skylines[0]} />
        </ul>
    )
  }
}

export default AllAlbums;
