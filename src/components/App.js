import React, {useState, useEffect} from "react"
import ChannelContainer from "./ChannelContainer"
import AddVideos from "./AddVideos"
import User from "./User"



const App = () => {
    const[ channelArr, setChannels ] = useState([])
    const[ videosArr, setVideosArr ] = useState([])
    console.log(channelArr)
   
    useEffect(() => {
        fetch("http://localhost:3000/channels")
        .then ((r) => r.json())
        .then (channelList => {
            setChannels(channelList)

            })
    },[])
    useEffect(() => {
        fetch("http://localhost:3000/videos")
        .then ((r) => r.json())
        .then (videoList => {
            setVideosArr(videoList)

            })
    },[])
    return (
        <div>
            <h3>hello</h3>
            <User />
            <ChannelContainer channels={channelArr}/>
            <AddVideos setVideosArr = {setVideosArr}/>
        </div>
    )
}

export default App
