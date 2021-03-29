import React, {useState} from 'react'

const AddVideos = ({setVideosArr}) => {
    const [newVideo, setNewVideo] = useState({
        title:"",
        pic:"",
        url:"",
        user_id:"",
        channel_id:""
    })
        function handleChange(e){
            const key = e.target.name
            const value = e.target.value

            setNewVideo({...newVideo, [key]: value})
        }
        function handleSubmit(e) {
            e.preventDefault ()

            fetch("http://localhost:3000/videos", {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(newVideo)
            })
            .then((r)=> r.json())
            .then((newItem) => setVideosArr((videosArr)=>[...videosArr, newItem]))

        }
    return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="title"
        value={newVideo.title}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="pic"
        placeholder="pic"
        value={newVideo.pic}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="url"
        placeholder="url"
        value={newVideo.url}
        onChange={handleChange}
      ></input>
      <option
        type="?"
        name="?"
        placeholder="user"
        value={newVideo.user_id}
        onChange={handleChange}
      ></option>
       <option
        type="?"
        name="?"
        placeholder="channel_id"
        value={newVideo.channel_id}
        onChange={handleChange}
      ></option>
      <button type="submit">Submit</button>
    </form>
    )
}

export default AddVideos

