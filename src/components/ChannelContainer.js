import React, {useState, useEffect} from "react"
import Channels from "./Channels"




const ChannelContainer = ({channels}) => {
    const displayChannels =channels.map((channel)=> {
       return <Channels channel={channel}/>
    })
    return (
        <div>
            {displayChannels}
        </div>
    )
}

export default ChannelContainer

