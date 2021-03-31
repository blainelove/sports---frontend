import React, {useState, useEffect} from "react"
import VideoCards from "./VideoCards"


const Channels = ({channel, deleteVideo, handleUpdateTitle}) => {
   const[video, setVideos] = useState([])
   const videos = channel.videos.map((video)=> {
       
       return <VideoCards key = {video.id} video= {video} deleteVideo={deleteVideo} handleUpdateTitle={handleUpdateTitle}/>
   })
    
    


    
    return (
        <div>
            <div>
            <h2>{channel.name}</h2>
           
            <h3>{videos}</h3>
            </div>
           
           
            
            
           
        </div>
         
    )
}

export default Channels
