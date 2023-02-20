import React, { useEffect, useState } from 'react'
import LogIn from './components/LogIn.jsx';
import SignUp from './components/SignUp.jsx';
import Account from './components/Account.jsx';
import Transfer from './components/Transfer.jsx';
import ReactDOM from "react-dom";
import Wallet from './components/Wallet.jsx';
import DashBoard from './components/DashBoard.jsx';
import Activity from './components/Activity.jsx';
import axios from 'axios';

function App() {

    const [user,setUser]=useState([])
    const [view,setView]=useState("surface")
    const [navView,setNavView]=useState("")
    const [refresh,setRefresh]=useState(true)
    const connected=(phoneNumber)=>{
        axios.post('/bank/getOne',{phoneNumber:phoneNumber}).then(res=>{setUser(res.data)
            console.log(res.data)}).catch(err=>console.log(err))
    }
    useEffect(()=>{
        connected(user.phoneNumber)
        console.log("user: ",user)
    },[refresh])
  console.log(user)
  return (
    <div>
       {navView!="logged"&&<div>
            <nav>
                <ul>
                    <li onClick={()=>setView("surface")}>
                        <img className='logo' src="https://res.cloudinary.com/dzljqafly/image/upload/v1676726971/online-bank-low-resolution-logo-black-on-transparent-background_hyyuvt.png" />
                    </li>
                    {view==="surface"&&  <li> <button type='button' className='button-navv' onClick={()=>setView("login")}>
                    login</button>
                    </li>}
                    {view==="surface"&&  <li > <button type='button' className='button-nav' onClick={()=>setView("signup")}>
                    signUp</button>
                    </li>}
                </ul>
            </nav>
            </div>}
           {navView==="logged"&&<div>
            <nav className='nav-bar'>
                <ul>

                    <img onClick={()=>setView("profile")} className='logo' src="https://res.cloudinary.com/dzljqafly/image/upload/v1676728368/online-bank-high-resolution-logo-white-on-transparent-background_ibgjlu.png" />
               
                    <li onClick={()=>{
                        setRefresh(!refresh)
                        setView("dashboard")}}>Dashboard</li>
                    <li onClick={()=>{
                        setRefresh(!refresh)
                        setView("transfer")}}>Send</li>
                    <li onClick={()=>{
                        setRefresh(!refresh)
                        setView("wallet")}}>Wallet</li>
                    <li onClick={()=>{
                        setRefresh(!refresh)
                        setView("activity")}}>Activity</li>
                    <li onClick={()=>{
                        setNavView("")
                        setView("surface")
                        setUser([])}}>Log out</li>
                </ul>
            </nav>
            <br></br>
            <br></br>
            <br></br>
            </div>} 
            
            <div>
            {view==="login"&&<LogIn setUser={setUser} setNavView={setNavView} setView={setView}/>}
            {view==="signup"&&<SignUp setView={setView}/>}
            {view==="account"&&<Account user={user}/>}
            {view==="transfer"&&<Transfer connected={connected} setRefresh={setRefresh} refresh={refresh} user={user}/>}
            {view==="wallet" && <Wallet user={user}/>}
            {view==="profile"&& <Account setRefresh={setRefresh} refresh={refresh} user={user}/>}
            {view==="dashboard"&&<DashBoard user={user}/>}
            {view==="activity"&&<Activity user={user}/>}
            </div>


            {view==="surface"&&<div>
            <div className='surface-front'>
                <img src="https://media.istockphoto.com/id/1058505818/vector/sending-money-via-mobile-phone.jpg?s=612x612&w=0&k=20&c=T-1YOszG1nOODxpDHevXyrNhqJQbQxo65isDVGlXJb0="/>
                <h1>Exchange money with whom you want</h1>
            </div>
            </div>}
            <footer><img src="https://res.cloudinary.com/dzljqafly/image/upload/v1676727047/online-bank-high-resolution-color-logo_tgzcee.png"/></footer>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"));