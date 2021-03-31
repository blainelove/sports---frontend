import React,{useState} from 'react'

const UpdateVid = ({handleUpdateTitle, video}) => {
  const[newTitle, setNewTitle] = useState('')
  const [reset, setReset] = useState('')
  const [updatePic, setUpdatePic] = useState('')
  const [updateUrl, setUpdateUrl] = useState('')
  
  function handleChange(e){
    const title = e.target.value
    setNewTitle(title)
  }

  function changePic(e) {
    const pic = e.target.value
    setUpdatePic(pic)

  }

  function changeUrl(e){
    const url = e.target.value
    setUpdateUrl(url)

  }

  function resetForm(){
    setReset(reset = '')
  }

  function handleUpdate(e) {
      e.preventDefault()
      
  
      fetch(`http://localhost:3000/videos/${video.id}`, {
        method: "PATCH",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({title: newTitle, pic: updatePic, url: updateUrl})
      })
      .then((r)=> r.json())
      .then((update) => {
        handleUpdateTitle(update)
      })
      
    }

    return (
      <form onSubmit={handleUpdate} onReset={resetForm}>
        <input
      
          type="text"
          name="title"
          placeholder="Update Title"
          value={newTitle}
          onChange={handleChange}
         
        >
        </input>

        <input
      
          type="text"
          name="pic"
          placeholder="Update Pic"
          value={updatePic}
          onChange={changePic}
         
        >
        </input>

        <input
      
          type="text"
          name="title"
          placeholder="Update Url"
          value={updateUrl}
          onChange={changeUrl}
         
        >
        </input>
        <button type='submit'>Update</button>
     </form>
    )
  }

export default UpdateVid
