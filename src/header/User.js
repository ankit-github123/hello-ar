import React from 'react'
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img from "../images/header/profile.jpg"
export default function User() {
  return (
    <div><img className='header_user' src={img} alt="profile" /><span className='headerUser_container'>Ankit Kumar      <FontAwesomeIcon icon={faChevronDown} size={'sm'} /></span>
    </div>
  )
}
