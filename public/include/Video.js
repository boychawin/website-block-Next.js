import React, { Component } from "react";
import YTSearch from 'youtube-api-search';
import VideoList from '../components/VideoList/video_list';
import VideoDetail from '../components/VideoList/video_detail';
const API_KEY = 'AIzaSyCURdWFug7xYBAh2aLCHfKlA603eVppz8Y';

class Video extends Component {

  state = {
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.searchVideoHandler('boychawin.com'); // for default will be guns and roses :>
  }

  searchVideoHandler = term => YTSearch({ key: API_KEY, term }, videos => this.setState({ videos, selectedVideo: videos[1] }));

  render() {
    return (
      <div className="container  bg-sidbar color-ccc">
        <VideoDetail videos={this.state.selectedVideo} >
          <VideoList
            videos={this.state.videos}
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          />
        </VideoDetail>
      </div>
    );
  }
}

export default Video;


