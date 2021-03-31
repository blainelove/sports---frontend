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

    const cardBorder = {
    backgroundColor: '#E9E9E9',
    textAlign: 'center',
    borderRadius: '25px',
    border: '1px solid #A9A9A9',
    marginLeft: 0,
    marginBottom: '1rem',
    width: '85%',
    backgroundColor: 'gray',
    color: 'black',
    }


    return (
        <div style={cardBorder}>
            <h3>{video.title}</h3>
            {displayVideo ? (
                <Video  video = {video}/>     
                ):(
                <img src={video.pic} 
                width={400}
                height={400}></img>
            )}
            
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
            
        </div>
    )
}

export default VideoCards
