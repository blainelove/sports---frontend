import React from 'react'
import { YoutubePlayer } from "reactjs-media"


const Video = ({video}) => {

    return (
        <div>
            <YoutubePlayer
                src={video.url}
                width={650}
                height={600}
            />

            
        </div>
    )
}

export default Video

