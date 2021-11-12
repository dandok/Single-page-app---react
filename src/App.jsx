import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Main from './Components/Main'
import { ImHome3 } from 'react-icons/im';
import { RiMessage2Fill } from 'react-icons/ri';
import { GiRank3 } from 'react-icons/gi';
import { GiBroadsword } from 'react-icons/gi';
import { GiPartyPopper } from 'react-icons/gi';
import { GiBreakingChain } from 'react-icons/gi';
import { GiPoliceOfficerHead } from 'react-icons/gi'
import { GrGroup } from 'react-icons/gr';
import { GiCube } from 'react-icons/gi';

function App() {
  
  return (
    <div className='App'>
      <div className='app-sidebar'>
        <h2 id='bluecube'>{<GiCube size={30} color='#3A319E' />}bluecube</h2>
        <Sidebar title='Home' link='/home' icon={<ImHome3/>}/>
        <Sidebar title='Message' link='/message' icon={<RiMessage2Fill/>}/>
        <h3 id='share'>SHARE</h3>
        <Sidebar title='Ranking' link='/ranking' icon={<GiRank3/>}/>
        <Sidebar title='Challenge' link='/challenge' icon={<GiBroadsword/>}/>
        <Sidebar title='Party' link='/party' icon={<GiPartyPopper/>}/>
        <Sidebar title='Connect' link='/connect' icon={<GiBreakingChain/>}/>
        <Sidebar title='Parade' link='/parade' icon={<GiPoliceOfficerHead/>}/>
        <Sidebar title='Group' link='/group' icon={<GrGroup/>}/>
      </div>
      <Main />
    </div>
  )
}

export default App
