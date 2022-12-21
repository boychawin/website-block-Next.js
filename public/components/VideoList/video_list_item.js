import React from "react";

function VideoListItem(props) {
  const videoData = {
    title: props.snippet.title,
    img: props.snippet.thumbnails.default.url,
    channel: props.snippet.channelTitle
  };
  return (
    <div className="col-sm-12">
      <li className="list-item" onClick={() => props.onVideoSelect(props)}>
        <img src={videoData.img} alt={videoData.title} className="img-fluid" />
        <div className="text-you">
          <span className="video-list-title"><b>{videoData.title}</b><b></b></span>
          <small className="channelName">{videoData.channel}</small>
        </div>
      </li>
    </div>
  );
};

export default VideoListItem;

