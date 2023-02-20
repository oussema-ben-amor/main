import axios from 'axios'
import React, { useState } from 'react'

function Account(props) {
  const[fname,setFname]=useState('')
  const[lname,setlname]=useState('')
  const[view,setview]=useState(true)
  const changeName=(id,fname,lname)=>{
  axios.put(`/bank/changeName/${id}`,{firstName:fname,lastName:lname}).then(res=>console.log(res)).catch(err=>console.log(err))}
  return (
    <form className='prof'>
      <img className='image' src={props.user.pdp}>
      </img>
      <div>
      <div className='name'>
        <h4>{props.user.firstName +" "+ props.user.lastName}</h4>
        {view&&<button type='button' onClick={()=>setview(!view)}>change name</button>}
          {view||<div><input required type="text" placeholder='first name' onChange={(e)=>setFname(e.target.value)}/>
                <input required type="text" placeholder='last name' onChange={(e)=>setlname(e.target.value)}/>
                <button type='button' onClick={()=>{changeName(props.user._id,fname,lname)
                setview(!view)}}>change name</button></div>}
      </div>
      <div>
        <h1>
          Phone :
        {props.user.phoneNumber}
        </h1>
      </div>
      <div>
        <h1>
          Email :
          {props.user.email}
        </h1>
      </div>
      </div>
    </form>
  )
}

export default Account