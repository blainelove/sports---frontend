import React, {useState, useEffect} from "react"
import VideoCards from "./VideoCards"


const Channels = ({channel, deleteVideo}) => {
   const[video, setVideos] = useState([])
   const videos = channel.videos.map((video)=> {
       
       return <VideoCards key = {video.id} video= {video} deleteVideo={deleteVideo} />
   })
    
    


    
    return (
        <div>
            <div>
            <h1>{channel.name}</h1>
            <h2>{channel.category}</h2>
            <h3>{videos}</h3>
            </div>
           
           
            
            
           
        </div>
         
    )
}

export default Channels
