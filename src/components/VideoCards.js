import React, {useState, useEffect} from "react"



const VideoCards = ({video}) => {
    const [videos, setVideos] = useState(false)
   
    
   
    return (
        <div>
            <h3>{video.title}</h3>
            <h2>{video.url}</h2>
            <img src={video.pic}/>
        </div>
    )
}

export default VideoCards
