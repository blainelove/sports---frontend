import React, {useState, useEffect} from "react"
import ChannelContainer from "./ChannelContainer"
import AddVideos from "./AddVideos"
import User from "./User"
import index from '../index.css'


const App = () => {
    const[ channelArr, setChannels ] = useState([])
    const[ videosArr, setVideosArr ] = useState([])
   
   
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
        
        let channel = [...channelArr].filter(channel => channel.id === channelId)[0]
        
        let allChannels = [...channelArr].filter(channel => channel.id !== channelId)
        
        channel.videos = [...channel.videos, video]
        allChannels = [...allChannels, channel]//.sort()
        setChannels(allChannels) 
    }

    function deleteVideo(video) {
        const videoId = video.id
        const channelId = video.channel_id 
        let channel = [...channelArr].filter(chan => chan.id === channelId)[0]
        
        let allChannels = [...channelArr].filter(chan => chan.id !== channelId)
        
        channel.videos=channel.videos.filter(video => video.id !== videoId)
        
        allChannels = [...allChannels, channel]//.sort()
        setChannels(allChannels) 
     }


    function handleUpdateTitle(updatedVideo) {
        const allChannels = channelArr.map((channel)=>{
            if (channel.id === updatedVideo.channel_id){
                return{
                    ...channel, videos: channel.videos.map((video) => {
                        if (video.id === updatedVideo.id){
                            return updatedVideo
                        }
                        else{
                            return video
                        }
                    })
                }
            }
            else{
                return channel
            }
        })
        setChannels(allChannels)
      }

      const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
        textAlign: "center"
      };

    return (
        <div>
            <h1 style={mystyle}>World of Weird Sports</h1>
            <User />
            <ChannelContainer channels={channelArr} videos ={videosArr} setVideosArr={setVideosArr} deleteVideo={deleteVideo} handleUpdateTitle={handleUpdateTitle}/>
            <AddVideos video ={videosArr} addVideo={addVideo}/>
        </div>
    )
}

export default App
