import React, {useState} from "react"



const VideoCards = ({video}) => {
   
   
    return (
        <div>
            <h3>{video.title}</h3>
            <h3>user id {video.user_id}</h3>
            <h3>channel {video.channel_id}</h3>
            
        </div>
    )
}

export default VideoCards
