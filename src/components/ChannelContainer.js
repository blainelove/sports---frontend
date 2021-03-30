import React, {useState, useEffect} from "react"
import Channels from "./Channels"




const ChannelContainer = ({channels, videos, setVideosArr, deleteVideo}) => {

    

    const displayChannels =channels.map((channel)=> {
       return <Channels key = {channel.id} channel={channel} deleteVideo={deleteVideo}/>
    })
    return (
        <div>
            {displayChannels}
        </div>
    )
}

export default ChannelContainer

