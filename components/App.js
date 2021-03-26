import React, {useState, useEffect} from "react"
import Channels from "./Channels"
import User from "./User"



const App = () => {
    const [channels, setChannels] = useState([])
   
    useEffect(() => {
        fetch("http://localhost:3000/channels")
        .then ((r) => r.json())
        .then (list => {
            setChannels(list)
        })

    },[])
    return (
        <div>
            <User />
            <Channels channels={channels}/>
        </div>
    )
}

export default App
