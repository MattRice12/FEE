import React from 'react';
import ReactDOM from 'react-dom';
import Picture from './picture';
import Images from '../store';

class AlbumPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      album: this.props.album,
      pictures: this.props.pictures
    }

    this.clickHandler = this.clickHandler.bind(this)
  }

  selectPicture(e) {
    this.setState({
      pictures: [e.target.attributes[2].value]
    })
  }

  imagesInAlbum(pics) {
    var picsInAlbum = [];

    for (var i=0; i<pics.length; i++) {
      picsInAlbum.push(<Picture src={pics[i]} key={pics[i]} selectPicture={this.selectPicture.bind(this)}/>)
    }

    return picsInAlbum
  }

  clickHandler(e) {
    var albumName = e.target.innerText
    var album;

    document.querySelector('.big-pic').classList.remove('big-pic')

    if (albumName === 'Album 1') {
      album = Images.bikes
    } else if (albumName === 'Album 2') {
      album = Images.foods
    } else {
      album = Images.skylines
    }

    this.setState({
      pictures: album
    })
  }

  render() {
    var albumPics = <section className="albums">
        {this.imagesInAlbum(this.state.pictures)}
      </section>

    return (
      <div className="album-pics">
        <nav>
          <div onClick={this.clickHandler}>Album 1</div>
          <div onClick={this.clickHandler}>Album 2</div>
          <div onClick={this.clickHandler}>Album 3</div>
        </nav>
        <div>
          <h2>{this.state.album}</h2>
          {albumPics}
        </div>
      </div>
    )
  }
}

export default AlbumPage;
