import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Album } from './Album';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      albums: [],
      sampleAlbums: []
    };

    this.scrollUpdate = this.scrollUpdate.bind(this);
  }

  componentDidMount () {
    window.addEventListener('scroll', this.scrollUpdate);
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then((res) => {
        // All albums are kept in state as well as a sample of all albums
        this.setState({
          albums: res.data,
          sampleAlbums: res.data.slice(0, 10)
        })
      });
  }
  // Decided on an endless scroll as rendering 10000 elements at once added performance issues
  scrollUpdate(e) {
      if(document.documentElement.scrollHeight - e.currentTarget.scrollY < 1000) {
        this.setState({
          sampleAlbums: this.state.albums.slice(0, this.state.sampleAlbums.length + 10)
        })
      };
  }

  render () {
      const allAlbums = this.state.sampleAlbums.map((album) => {
        return (
          <Album
            thumbnail={album.thumbnailUrl}
            title={album.title}
            url={album.url}
            key={album.id}
          />
        );
      });
    return (
      <div className="App">
        {allAlbums}
      </div>
    );
  }
}

export default App;
