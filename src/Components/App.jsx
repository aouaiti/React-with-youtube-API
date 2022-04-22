import React from "react";
import "semantic-ui-css/semantic.min.css";
import "../Main.css";
import BlocA from "./UI/BlocA";
import Contained from "./UI/Contained";
import SearchBar from "./SearchBar";
import youtube from "./Apis/youtube";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  onSubmitHandler = async (term) => {
    const fetchedData = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ videos: fetchedData.data.items });
    console.log(this.state.videos);
  };
  highestLevelSelector = (selected) => {
    this.setState({ selectedVideo: selected });
    console.log(selected);
  };
  render() {
    return (
      <Contained>
        <BlocA>
          <SearchBar onSubmit={this.onSubmitHandler} />
          <div className="column">
            <VideoDetails video={this.state.selectedVideo} />
            <VideoList
              data={this.state.videos}
              highestLevelSelector={this.highestLevelSelector}
            />
          </div>
        </BlocA>
      </Contained>
    );
  }
}
export default App;
