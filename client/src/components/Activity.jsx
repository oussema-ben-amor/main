import React from 'react'
import OneActivity from './OneActivity.jsx'

function Activity(props) {

  return (
    <div>
        <h1>Activity</h1>
        {props.user.history.map((el,i)=><div><OneActivity el={el} key={i}/></div>)}
    </div>
  )
}

export default Activity