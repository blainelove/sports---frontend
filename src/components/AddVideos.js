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

        const button = {
          marginTop: '1.5rem',
          marginRight: '1.5rem',
          display: 'inline',
         textAlign: 'center',
         fontSize: '12px',
         borderRadius: '8px',
         backgroundColor: 'antiquewhite',
         color:'red',
         fontWeight: '900',
         padding: '7px 7px'
        }

        const formDesign = {
          width: '18%',
          padding: '5px 10px',
          margin: '8px 0',
          boxSizing: 'border-box'
        }
        
    return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="title"
        value={newVideo.title}
        onChange={handleChange}
        style={formDesign}
      ></input>
      <input
        type="text"
        name="pic"
        placeholder="pic"
        value={newVideo.pic}
        onChange={handleChange}
        style={formDesign}
      ></input>
      <input
        type="text"
        name="url"
        placeholder="url"
        value={newVideo.url}
        onChange={handleChange}
        style={formDesign}
      ></input>
      <select
      value={newVideo.channel_id}
        onChange={handleChange}
        name="channel_id" 
        style={formDesign}
        >
      <option value='1'> World Chess Boxing</option>
      <option value='2'> Downhill Cheese-Chasing </option>
      <option value='3'> Bo-Taoshi </option>
      <option value='4'> Quidditch </option>
      <option value='5'> Cycleball </option>
      </select>
      <select value={newVideo.user_id} onChange={handleChange} name='user_id' style={formDesign}>
      <option value='1'> Blaine </option>
      <option value='2'> Jaskomal </option>
      </select>
      <button type="submit" style={button}>Submit</button>
    </form>
    )
}

export default AddVideos

