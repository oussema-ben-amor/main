import axios from 'axios'
import React, { useEffect, useState } from 'react'
import OneActivity from './OneActivity.jsx'
import Wallet from './Wallet.jsx'



function DashBoard(props) {

  return (
    <div className='dashboard'>
    <div className='dashboardHistory'>
      {props.user.history.filter((el,i)=>i<=5).map((el,i)=>{
      return <div><OneActivity el={el} key={i}/></div>})}
    </div>
    <div className='dashWallet'>
      <Wallet user={props.user}/>
    </div>
    </div>
  )
}

export default DashBoard