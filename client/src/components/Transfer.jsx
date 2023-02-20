import axios from 'axios'
import React, { useState } from 'react'

function Transfer(props) {
    console.log(props)
    const [user,setUser]=useState({})
    const[amount,setAmount]=useState(0)
    const transfer=(from,to,amount)=>{
        axios.put((`/bank/transfer/${from}/${to}`),{amount:amount},{ headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem("accessToken")}}
            ).then(res=>console.log(res)).catch(err=>console.log(err))
    }
    const getOne=(phoneNumber)=>{
        axios.post('/bank/getOne',{phoneNumber:phoneNumber}).then(res=>{setUser(res.data)
        console.log(res)}).catch(err=>console.log(err))
    }
  return (
    <form className='transfer'>
        <h1>Transfer</h1>
        <div>
            <div>
                <h1>Phone number</h1>
                <input type="text" placeholder='phone number of whom you want to send' onChange={(e)=>getOne(e.target.value)} />
            </div>
            <h1>amount</h1>
            <input type="text" placeholder='amount' onChange={(e)=>setAmount(e.target.value)}/>
            <button className='trbtn' type='button' onClick={()=>{
                if(amount<=props.user.balance){
                transfer(props.user._id,user._id,amount)
                console.log(props.user)
            }
                else{
                    alert("not enough money")
                }
                }}>TRANSFER</button>
        </div>
    </form>
  )
}

export default Transfer