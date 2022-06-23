import React from 'react'
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function HeaderDescription() {
  return (
    <div className='HeaderDescription_container'>Application <FontAwesomeIcon icon={faChevronDown} size={'sm'} /> <span className='border_right_desc'></span></div>
  )
}
