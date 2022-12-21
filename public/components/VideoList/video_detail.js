
import { thaidate2 } from "../Function";
import React from 'react'

export default function VideoDetail(props) {
  if (!props.videos) return null;

  let videoId = props.videos.id.videoId,
    url = `https://youtube.com/embed/${videoId}`;
  return (
    <div className="row">
      <div className="col-sm-8 video-you-de-wp">
        <iframe src={url} title={props.videos.title} className="video-player" />
        <h4 className="main-video-title"> <b>{props.videos.snippet.title}</b> </h4>
        <small className="main-video-channelTitle">
          โดย {props.videos.snippet.channelTitle}
        </small>
        <br />
        <small>
          {thaidate2(props.videos.snippet.publishedAt)}
        </small>
      </div>
      <div className="col-sm-4">
        {props.children}
      </div>
    </div>
  );
};
