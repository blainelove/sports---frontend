import React, {useState, useEffect} from "react"
import UpdateVid from './UpdateVid'


const VideoCards = ({video, deleteVideo, handleUpdateTitle}) => {
    const [displayForm, setDisplayForm] = useState(false)
    
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


    return (
        <div>
            <h3>{video.title}</h3>
            <h2>{video.url}</h2>
            <img src={video.pic}/>
            <button onClick={handleClick}>Delete</button>
            {displayForm ? (
            <button onClick={handleTitleToogle}>Hide Form</button>
            ) : (
            <button onClick={handleTitleToogle}>Display Form</button>
            )}
            {(displayForm) &&  <UpdateVid handleUpdateTitle/>}    
        </div>
    )
}

export default VideoCards
