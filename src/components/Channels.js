import React, {useState, useEffect} from "react"
import VideoCards from "./VideoCards"


const Channels = ({channel, deleteVideo, handleUpdateTitle}) => {
   const[video, setVideos] = useState([])
   const videos = channel.videos.map((video)=> {
       
       return <VideoCards key = {video.id} video= {video} deleteVideo={deleteVideo} handleUpdateTitle={handleUpdateTitle}/>
   })
    
    

   const contentContainer = {
    border: "1px solid #A9A9A9",
    gridColumnStart: 2,
    gridRowStart: 2,
    display: "flex",
    justifyContent: "flex-start",
    overflowX: "scroll",
    paddingTop: '25px' 

}
    
    return (
        <div>
            <h2>{channel.name}</h2>
            <div style={contentContainer}>
           <br></br>
            <h3>{videos}</h3>
            </div>
           
           
            
            
           
        </div>
         
    )
}

export default Channels
