import React, {useState, useEffect} from "react"
import Channels from "./Channels"




const ChannelContainer = ({channels, videos}) => {
   
  

    const displayChannels =channels.map((channel)=> {
       return <Channels key = {channel.id} channel={channel}/>
    })
    return (
        <div>
            {displayChannels}
        </div>
    )
}

export default ChannelContainer

