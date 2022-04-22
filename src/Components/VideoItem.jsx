import React from "react";
import { List } from "semantic-ui-react";
import "./VideoItem.css";

const VideoItem = ({ video, higherLevelSelector }) => {
  return (
    <div>
      <List
        divided
        relaxed
        className="list-tune"
        onClick={(e) => higherLevelSelector(video)}
      >
        <List.Item className="video">
          <img
            className="image"
            src={video.snippet.thumbnails.medium.url}
            alt="test"
          />
          <List.Content className="description">
            <List.Header as="a">
              <h4 className="title">{video.snippet.title}</h4>
            </List.Header>
            <List.Description as="a">
              <p>{video.snippet.channelTitle}</p>
            </List.Description>
          </List.Content>
        </List.Item>
      </List>
      <hr />
    </div>
  );
};
export default VideoItem;
