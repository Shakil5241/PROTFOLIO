import React from 'react'
import "./footer.css"
function Footer() {
  return (
    <div className="footer">
    <div fluid>
      &copy; Copyright {new Date().getFullYear()} : <a  href="https://www.facebook.com/profile.php?id=100026197114552" style={{textDecoration: 'none', color:"white"}}> Shakil Mia </a>
    </div>
  </div>
  )
}

export default Footer