import React from 'react'
import './Navbar.css'
import { images } from '../../images/images'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={images.foodiee_logo_icon} alt="" />
            <img src={images.foodiee_logo_name} alt="" />
        </div>
        <img className='profile-image' src={images.profile_image} alt="" />
    </div>
  )
}

export default Navbar