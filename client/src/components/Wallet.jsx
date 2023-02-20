import React from 'react'

function Wallet(props) {

  return (
    <div className='walletcontainer'>
     <div className="container">
	<div className="card-left">
		<div className="top">
		<img src="https://www.freeiconspng.com/uploads/return-button-png-31.png" className="back"/>
			<img src="https://www.freepnglogos.com/uploads/visa-logo-png-5.png" className="visa"/>
		</div>
		<div className="price-count">
			<p className="total">TOTAL</p>
			<br />
			<p className="amount">${props.user.balance}</p>
		</div>
		<div className="price-count">
			<p className="total">Name</p>
			<br />
			<p className="amount">{props.user.firstName+" "+props.user.lastName}</p>
		</div>
	</div>
	<div className="card-right">
		<div className="expire">
			<p>EXPIRATION</p>
		</div>
		<div className="date">
			<span>Oktober, 14</span>
			<span>2025</span>
			<span><svg width="24" height="24" fill="white" viewBox="0 0 24 24">
  <path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"></path>
</svg></span>
		</div>
		<div className="card-info">
			<p>CARD NUMBER</p>
			<br/> 
			<span> 1234 / 5678 / 910 / </span>
		</div>
		<div className="cvc-code">
			<p>CVC CODE</p>
			<br />
			<span>8</span>
			<span>8</span>
			<span>8</span>
		</div>
		<div className="checkicon"></div>
	</div>
</div>
    </div>
  )
}

export default Wallet