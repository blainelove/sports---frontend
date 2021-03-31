import React,{useState} from 'react'

const UpdateVid = ({handleUpdateTitle, video}) => {
  const[newTitle, setNewTitle] = useState('')
  
  function handleChange(e){
    const title = e.target.value
    setNewTitle(title)
  }
  function handleUpdate(e) {
      e.preventDefault()
      
  
      fetch(`http://localhost:3000/videos/${video.id}`, {
        method: "PATCH",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({title: newTitle})
      })
      .then((r)=> r.json())
      .then((update) => {
        handleUpdateTitle(update)
      })
      
    }

    return (
      <form onSubmit={handleUpdate}>
        <input
      
          type="text"
          name="title"
          placeholder="Update Title"
          value={newTitle}
          onChange={handleChange}
         
        >
        </input>
        <button type='submit'>Update</button>
     </form>
    )
  }

export default UpdateVid
