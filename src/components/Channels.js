import React, {useState, useEffect} from "react"
import VideoCards from "./VideoCards"


const Channels = ({channel}) => {
    const[video, setVideos] = useState([])
   
    function videoArr(){

    }
    
    return (
        <div>
            <div>
            <h1>{channel.name}</h1>
            <h2>{channel.title}</h2>
            </div>
           
           
            <VideoCards />
            
           
        </div>
         
    )
}

export default Channels
