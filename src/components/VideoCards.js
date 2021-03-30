import React, {useState, useEffect} from "react"



const VideoCards = ({video, deleteVideo}) => {
//     const []
    
   function handleClick(){
    fetch(`http://localhost:3000/videos/${video.id}`, {
        method: 'DELETE',
        headers: {'content-type': 'application/json'},

    })
        deleteVideo(video)
   }
    
   
    return (
        <div>
            <h3>{video.title}</h3>
            <h2>{video.url}</h2>
            <img src={video.pic}/>
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}

export default VideoCards
