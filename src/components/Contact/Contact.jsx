import React from 'react'
import "./Contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { ThemeContext } from '../../Context'
import { useContext } from "react"


const Contact = () => {
    const theme = useContext(ThemeContext);
  const  darkMode =theme.state.darkMode;
    
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
          <form >
              <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name"/>
              <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject"/>
              <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email"/>
              <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message"/>
              <button>Submit</button>
          </form>
          
           </div>
       </div>
        </div>
  )
}

export default Contact