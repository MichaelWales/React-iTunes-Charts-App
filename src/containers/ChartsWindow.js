import React, {Component} from 'react';

class ChartsWindow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      selectedSong: ""
    };
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    fetch(url)
      .then(response => response.json())
      .then(songs => this.setState({songs: songs}))
      .catch(err => console.error);
  }

  handleChange(song) {
    this.setState({selectedSong: song})
  }

  render() {

    const selectedSong = this.state.songs.find(song => {
      return song.entry[im:name]label === this.state.selectedSong
    })

    return(
      <div>
        <h2>UK iTunes Charts</h2>
        
      </div>
    )
  }
}

export default ChartsWindow;
