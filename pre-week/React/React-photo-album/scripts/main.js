import React from 'react';
import ReactDOM from 'react-dom';
import AllAlbums from './components/all_albums_page';
import AlbumPage from './components/album_page';
import Images from './store'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      homePage: true,
      album: '',
      pictures: []
     }

    this.changeHomePage = this.changeHomePage.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  changeHomePage(e) {
    var albumPics
    var albumName = e.target.innerText || e.target.parentNode.innerText

    if (albumName === 'Album 1') {
      albumPics = Images.bikes
    } else if (albumName === 'Album 2') {
      albumPics = Images.foods
    } else {
      albumPics = Images.skylines
    }

    this.setState({
      homePage: !this.state.homePage,
      album: albumName,
      pictures: albumPics
    })
  }

  handleClick() {
    this.setState({
      homePage: true,
      album: '',
      pictures: []
    })
  }

  render() {
    var page;
    if (this.state.homePage) {
      page = <div><AllAlbums changeHomePage={this.changeHomePage}  /></div>
    } else {
      page = <div><AlbumPage album={this.state.album} pictures={this.state.pictures} /></div>
    }

    return(
      <div>
        <header><h1 onClick={this.handleClick}>My Albums</h1></header>
        {page}
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector('.container'));
