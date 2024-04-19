import React from 'react'

import Icon from "../assets/success-icon.png"

import "./success.scss"

const Success = () => {

  return (
    <div className='main-success'>
        <img className='success-img' src={Icon} alt=""/>
     <br/>
    <div className='success_txt'>
        Payment Successfull
    </div>
    <h3>Thank You !</h3>
    </div>

  )
}

export default Success;