import React from 'react'

function OneActivity(props) {
  return (
    <div className='activity'>
        <h2>from :
        {props.el.from+' '}
        </h2>
        <h2>to :
        {props.el.to+' '}
        </h2>
        <h2>amount :
        {props.el.amount+' '} $
        </h2>
        <h2>date :
        {props.el.date+' '}
        </h2>
    </div>
  )
}

export default OneActivity