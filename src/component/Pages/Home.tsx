import React from 'react'
import './Home.css'

const Home:React.FC = () => {
  
  const mobileOrDesktop = () => {
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      console.log('mobile');
      document.getElementById('id')!.style.color = 'red'; 
      document.getElementById('id')!.style.fontSize = '5rem';
      document.getElementById('id')!.style.transition = '2s';
    }else{
      console.log('not mobile')
      document.getElementById('id')!.style.color = 'black';
    }
  }

  return (
    <div className="maincontent"  id='id'>
      Home
    </div>
  )
}

export default Home