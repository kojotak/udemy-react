import React from 'react';

const VideoList = (props) => {
  //function is enough here, we are only displaying things

  return (
    <ul className="col-md-4 list-group">
      {props.videos.length}
    </ul>
  )
};

export default VideoList
