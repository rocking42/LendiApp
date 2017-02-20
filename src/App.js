import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Album } from './Album';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      albums: []
    }
  }

  componentDidMount () {
    let items;
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then((res) => {
        this.setState({
          albums: res.data
        })
      });
  }

  render () {
      const allAlbums = this.state.albums.map((album) => {
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
