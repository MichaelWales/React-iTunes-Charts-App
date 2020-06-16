import React, {Component} from 'react';
import ChartsList from '../components/ChartsList.js';

class ChartsWindow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      songs: [],
    };

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    fetch(url)
      .then(response => response.json())
      .then(res => this.setState({songs: res.feed.entry}))
      .catch(err => console.error);
  }

  handleChange(song) {
    this.setState({selectedSong: song})
  }

  render() {
    return(
      <div>
        <h1 align="center">UK iTunes Charts</h1>
        <br/>
        <ChartsList songs={this.state.songs} />
      </div>
    )
  }
}

export default ChartsWindow;
