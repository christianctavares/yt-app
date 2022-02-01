import React from 'react';
import './VideoItem.css';

function VideoItem({ video, onVideoSelect }) {
    return (
        <div onClick={() => onVideoSelect(video)} className='video-item item'>
            <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url}></img>
            <div className="content">
                <a className="header">{video.snippet.title}</a>
            </div>
        </div>
    );
}

export default VideoItem;