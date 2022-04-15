import React from 'react'
import "./Contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
const Contact = () => {
  return (
    <div className="c">
       <div className="c-bg"></div>
       <div className="c-wrapper">
           <div className="c-left">
               <h1 className="c-title">Let`s discuss<br/> your project</h1>
               <div className="c-info">
                   <div className="c-info-item">
                       <img
                        src={Phone} 
                        alt="" 
                        className="c-icon" />
                        +8801782815241
                   </div>
                   <div className="c-info-item">
                       <img src={Email} alt="" className="c-icon" />
                       Wahiduzzaman719@gmail.com
                   </div>
                   <div className='c-info-item'>
                       <img className='c-icon' src={Address} alt=""/>
                       167 3/D,Shamimsharoni,Shawrapara,Dhaka,Bangladesh
                   </div>
               </div>
           </div>
           <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
           </div>
       </div>
        </div>
  )
}

export default Contact