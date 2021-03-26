import React, {useState, useEffect} from "react"
import VideoCards from "./VideoCards"


const Channels = ({channels}) => {
    const displayChannel = channels.map((channel) => {
        return (
            // key={channel.id}
            channel={channel}

        )
    })
    return (
        <div>
            <h3>{channel.name}</h3>
            
            <VideoCards/>
        </div>
    )
}

export default Channels
