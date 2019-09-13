import React, { Component } from 'react';
import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from "./gif_list.jsx";
import giphy from "giphy-api";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: "fxNBu7hGQLvzWeetCo"
    }
    this.search("Xinyi says Hello");
  }

  search = (query) => {
    giphy('RQEt7xhpqziAAXJhzXHB7PPumOpi7lO0').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  render() {
    // const gifs = [
    // { id: "WqRg8hP2wrghwwEiNX" },
    // { id : "UWUvVJYZavVLNiGU01" }
    // ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
             <div className="selected-gif">
                <Gif id={this.state.selectedGifId} />
            </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
