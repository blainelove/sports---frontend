import React, {useState} from 'react'

const AddVideos = ({addVideo, video}) => {
    const [newVideo, setNewVideo] = useState({
        title:"",
        pic:"",
        url:"",
        user_id:1,
        channel_id:1
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
            .then((newItem) => addVideo(newItem))

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
      <select
      value={newVideo.channel_id}
        onChange={handleChange}
        name="channel_id">
      <option value='1'> World Chess Boxin</option>
      <option value='2'> Downhill Cheese-Chasing </option>
      <option value='3'> Bo-Taoshi </option>
      <option value='4'> Quidditch </option>
      <option value='5'> Cycleball </option>
      </select>
      <select value={newVideo.user_id} onChange={handleChange} name='user_id'>
      <option value='1'> Blaine </option>
      <option value='2'> Jaskomal </option>
      </select>
      <button type="submit">Submit</button>
    </form>
    )
}

export default AddVideos

