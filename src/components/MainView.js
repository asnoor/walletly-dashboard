import React from 'react'
import '../assets/css/MainView.css'
import RightBox from './RightBox'
import Sidebar from './Sidebar'

export default function MainView() {
  return (
    <div className='app'>
      <div id='main'>
        <div className='side'>
            <Sidebar />
        </div>
        <div className='another'>
            <RightBox />
        </div>
      </div>
    </div>
  )
}
