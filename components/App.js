import React, {useState, useEffect} from "react"
import Channels from "./Channels"
import User from "./User"



const App = () => {
   
    useEffect(() => {
        fetch("http://localhost:3000/channels")
        .then ((r) = r.json())
        .then (list => {
            console.log(list)
        })

    },[])
    return (
        <div>
            <User />
            <Channels />
        </div>
    )
}

export default App
