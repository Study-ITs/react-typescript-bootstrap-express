import React from 'react'
import Header from '../organisms/Header'
import SideBar from '../organisms/SideBar'
import PostCardList from '../organisms/PostCardList'

function HomeTemplate(){
  return (
    <div className='container-fluid vh-100'>
      <div className='row' style={{height: "15%"}}>
        <div className='col-md-12 p-0 h-100'>
          <Header />
        </div>
      </div>
      <div className='row' style={{height: "85%"}}>
        <div className='col-md-3 p-0 h-100'>
          <SideBar />
        </div>
        <div className='col-md-9 p-0 h-100'>
          <PostCardList />
        </div>
      </div>
    </div>
  )
}

export default HomeTemplate