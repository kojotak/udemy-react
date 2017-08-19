import React from 'react';

const VideoDetail = ({video}) => {
  //in order to avoid an error: video is undefined
  if(!video){
    return <div>loading...</div>;
  }

  const videoId = video.id.videoId;
  //const videoUrl = 'https://www.youtube.com/embed/' + videoId;
  //can be rewritten using ES6 string interpolation
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={videoUrl}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );

};

export default VideoDetail;
