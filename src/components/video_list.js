import React from 'react';
import VideoItem from './video_item';

//function is enough here, we are only displaying things
const VideoList = (props) => {

  //is actually an array...
  const videoItems = props.videos.map( (video) => {
    return <VideoItem video={video} />;
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
};

export default VideoList
