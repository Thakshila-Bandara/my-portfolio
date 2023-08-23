import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {GiGraduateCap} from 'react-icons/gi'
import {GoChecklist} from 'react-icons/go'
import {BiMessageSquareDetail} from 'react-icons/bi'

const Nav = () => {
  return (
    
    <nav>
       <a href="#" className='active'><AiOutlineHome/></a>
       <a href="#about"><BiUser/></a>
       <a href="#experience"><GiGraduateCap/></a>
       <a href="#myprojects"><GoChecklist/></a>
       <a href="#contacts"><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav