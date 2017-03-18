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

  render() {
    var albumPics = <section id="album1" className="albums">
        {this.imagesInAlbum(this.state.pictures)}
      </section>

    return (
      <div className="album-pics">
        <nav>
          NAV SECTION
        </nav>
        <div>
          {albumPics}
        </div>
      </div>
    )
  }
}

export default AlbumPage;
