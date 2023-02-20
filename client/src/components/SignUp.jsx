import axios from 'axios'
import React, { useState } from 'react'

function SignUp(props) {
  const[fname,setFname]=useState('')
  const[lname,setlname]=useState('')
  const[email,setemail]=useState('')
  const[phone,setPhone]=useState('')
  const[image,setImage]=useState('')
  const[password,setPassword]=useState('')

const addUser=(pdp,fname,lname,email,phone,password,verified)=>{
    axios.post("/bank/signUp",{
        pdp:pdp,firstName:fname,lastName:lname,email:email,phoneNumber:phone,password:password
    }).then(res=>{console.log(res)
      props.setView("login")}).catch(err=>console.log(err))
}
const setFileToBase=(file)=>{
  const img=new FileReader
  img.readAsDataURL(file)
  img.onloadend=()=>setImage(img.result)
}

  return (
    <div className='inscription'>
    <div className='signup'>
        <h1>SignUp</h1>
        <div>
            <form>
              <input type="file" placeholder='pdp'onChange={(e)=>setFileToBase(e.target.files[0])} />
                <input required type="text" placeholder='first name' onChange={(e)=>setFname(e.target.value)}/>
                <input required type="text" placeholder='last name' onChange={(e)=>setlname(e.target.value)}/>
                <input required type="email" placeholder='email' onChange={(e)=>setemail(e.target.value)}/>
                <input required type="text" placeholder='phone number' onChange={(e)=>setPhone(e.target.value)}/>
                <input required type="password" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
                <button type='button' onClick={()=>{
                    addUser(image,fname,lname,email,phone,password)
                }}>sign up</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default SignUp