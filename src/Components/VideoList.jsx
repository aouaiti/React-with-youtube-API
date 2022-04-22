import React from "react";
import VideoItem from "./VideoItem";
import "./VideoList.css";

const VideoList = (props) => {
  const higherLevelSelector = (selected) => {
    props.highestLevelSelector(selected);
  };
  const vids = props.data.map((video) => (
    <VideoItem
      key={video.id.videoId}
      video={video}
      higherLevelSelector={higherLevelSelector}
    />
  ));
  if (props.data.length) {
    return <div className="video-list">{vids}</div>;
  } else {
    return <div></div>;
  }
};
export default VideoList;
