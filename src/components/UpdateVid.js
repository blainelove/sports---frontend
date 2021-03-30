import React,{useState} from 'react'

const UpdateVid = ({handleUpdateTitle}) => {


    return (
      <form>
        <input 
      
          type="text"
          name="title"
          placeholder="Update Title"
        //   value={}
         
        ></input>
        <button type='submit'>Update</button>
     </form>
    )
}

export default UpdateVid
