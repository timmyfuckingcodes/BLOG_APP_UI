import './Header.css'

import React from 'react'

export default function Header() {
  return (
    <div className='header'>
     <div className='headerTitles'>
       <span className='headerTitleSm'>TIMMY & CO</span>
       <span className='headerTitleLg'>BLOG </span>
     </div>
     <img className='headerImage' 
     src='https://images.pexels.com/photos/1784577/pexels-photo-1784577.jpeg?auto=compress&cs=tinysrgb&w=600' 
     alt='' />
    </div>
  )
}
