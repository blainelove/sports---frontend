import React, {useState, useEffect} from "react"
import ChannelContainer from "./ChannelContainer"
import User from "./User"



const App = () => {
    const[ channelArr, setChannels ] = useState([])
    console.log(channelArr)
   
    useEffect(() => {
        fetch("http://localhost:3000/channels")
        .then ((r) => r.json())
        .then (channelList => {
            setChannels(channelList)

            })
    },[])
    return (
        <div>
            <h3>hello</h3>
            <User />
            <ChannelContainer channels={channelArr}/>
        </div>
    )
}

export default App
