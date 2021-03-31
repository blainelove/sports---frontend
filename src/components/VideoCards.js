import React, {useState, useEffect} from "react"
import UpdateVid from './UpdateVid'
import Video from "./Video"


const VideoCards = ({video, deleteVideo, handleUpdateTitle}) => {
    const [displayForm, setDisplayForm] = useState(false)
    const [displayVideo, setDisplayVideo] = useState(false)
    
   function handleClick(){
    fetch(`http://localhost:3000/videos/${video.id}`, {
        method: 'DELETE',
        headers: {'content-type': 'application/json'},

    })
        deleteVideo(video)
   }
    
   function handleTitleToogle(){
        setDisplayForm(!displayForm)
   }
   function handleVideoToogle(){
    setDisplayVideo(!displayVideo)
}


    return (
        <div>
            <h3>{video.title}</h3>
           
            <img src={video.pic}/>
            <button onClick={handleClick}>Delete</button>
            {displayForm ? (
            <button onClick={handleTitleToogle}>Hide Form</button>
            ) : (
            <button onClick={handleTitleToogle}>Display Form</button>
            )}
            {(displayForm) &&  <UpdateVid handleUpdateTitle= {handleUpdateTitle} video = {video}/>}
            {displayVideo ? (
            <button onClick={handleVideoToogle}>Hide Video</button>
            ) : (
            <button onClick={handleVideoToogle}>Play Video</button>
            )}
            {(displayVideo) &&  <Video  video = {video}/>}        
        </div>
    )
}

export default VideoCards
