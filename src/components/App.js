import React, {useState, useEffect} from "react"
import ChannelContainer from "./ChannelContainer"
import AddVideos from "./AddVideos"
import User from "./User"



const App = () => {
    const[ channelArr, setChannels ] = useState([])
    const[ videosArr, setVideosArr ] = useState([])
    console.log({channelArr,videosArr})
   
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
    
    function addVideo(video,channelId){
        console.log(video, channelId)
        let channel = [...channelArr].filter(channel => channel.id === channelId)
        console.log(channel)
        let allChannels = [...channelArr].filter(channel => channel.id !== channelId)
        console.log(allChannels)
        // channel.videos = [...channel.videos, video]
        // allChannels = [...allChannels, channel]
        // setChannels(allChannels) 
    }
    return (
        <div>
            <h3>hello</h3>
            <User />
            <ChannelContainer channels={channelArr} videos ={videosArr}/>
            <AddVideos addVideo={addVideo}/>
        </div>
    )
}

export default App
