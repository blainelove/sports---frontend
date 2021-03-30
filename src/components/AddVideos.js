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

        // function handleUpdate(e) {
        //   e.preventDefault()
        //   const title = e.target.title.value
        //   const pic = e.target.pic.value
        //   const url = e.target.url.value
        //   fetch(`http://localhost:3000/videos/${video.id}`, {
        //     method: "PATCH",
        //     headers: {"content-type": "application/json"},
        //     body: JSON.stringify({title: title, pic: pic, url: url })
        //   })
        //   .then((r)=> r.json())
        //   .then((updatedVideo)=> update
        //   (updatedVideo))
        // }
        
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
      <option value='1'> portttt1 </option>
      <option value='2'> porttttt2 </option>
      <option value='3'> porttttt3 </option>
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

