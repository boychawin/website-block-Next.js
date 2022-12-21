import React from 'react';
import VideoListItem from './video_list_item';

function VideoList(props) {

  let videos = props.videos.map(video => <VideoListItem {...video} key={video.etag} onVideoSelect={props.onVideoSelect} />);
  return (
    <ul className="video-youtube-list">
      {videos}
    </ul>
  );
}

export default VideoList
