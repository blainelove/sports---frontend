import React, {useState, useEffect} from "react"
import ChannelContainer from "./ChannelContainer"
import AddVideos from "./AddVideos"
import User from "./User"
import UpdateVid from "./UpdateVid"



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
    
    function addVideo(video){
        const channelId = video.channel_id
        console.log(video, channelId)
        let channel = [...channelArr].filter(channel => channel.id === channelId)[0]
        console.log(channel.videos)
        let allChannels = [...channelArr].filter(channel => channel.id !== channelId)
        console.log(allChannels)
        channel.videos = [...channel.videos, video]
        allChannels = [...allChannels, channel]//.sort()
        setChannels(allChannels) 
    }

    function deleteVideo(video) {
        console.log(video)
        const videoId = video.id
        const channelId = video.channel_id 
        let channel = [...channelArr].filter(chan => chan.id === channelId)[0]
        console.log(channel.videos)
        let allChannels = [...channelArr].filter(chan => chan.id !== channelId)
        console.log(allChannels)
        channel.videos=channel.videos.filter(video => video.id !== videoId)
        console.log(channel)
        allChannels = [...allChannels, channel]//.sort()
        setChannels(allChannels) 
    }

    function handleUpdateTitle(updatedVideo) {
        const videoId = updatedVideo.id
        const channelId = updatedVideo.channel_id 
        let channel = [...channelArr].filter(chan => chan.id === channelId)[0]
        console.log(channel.videos)
        let allChannels = [...channelArr].filter(chan => chan.id !== channelId)
        channel.videos=channel.videos.filter(video => video.id !== videoId)
        channel.videos = [...channel.videos, updatedVideo]
        allChannels = [...allChannels, channel]
        setChannels(allChannels) 
      }

    return (
        <div>
            <h3>hello</h3>
            <User />
            <ChannelContainer channels={channelArr} videos ={videosArr} setVideosArr={setVideosArr} deleteVideo={deleteVideo} handleUpdateTitle={handleUpdateTitle}/>
            <AddVideos video ={videosArr} addVideo={addVideo}/>
        </div>
    )
}

export default App
