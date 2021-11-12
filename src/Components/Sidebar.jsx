import React from 'react'
import '../App.css'

import {SidebarData} from './SidebarData'

function Sidebar ({title, link, icon}) {
  return (
    <div className='Sidebar'>
      <div 
       className='row'  
       id={window.location.pathname == link ? 'active' : ''}
       onClick={()=>window.location.pathname = link}> 
        <div id='icon'>{icon}</div>
        <div id='title'>{title}</div>        
      </div>
    </div>
  )
}

export default Sidebar