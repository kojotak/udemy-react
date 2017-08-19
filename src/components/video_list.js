import React from 'react';
import VideoItem from './video_item';

//function is enough here, we are only displaying things
const VideoList = (props) => {

  //is actually an array...
  const videoItems = props.videos.map( (video) => {
    //should provide key in order to avoid:
    //  "Warning: Each child in an array or iterator should have a unique "key" prop.
    //  Check the render method of `VideoList`.
    //  See https://fb.me/react-warning-keys for more information."
    return (
      <VideoItem
        video={video}
        key={video.etag}
        onVideoSelect={props.onVideoSelect}
      />
    )
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
};

export default VideoList
