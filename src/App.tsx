import React from 'react';
import AboutMe from './component/Pages/AboutMe';
import { Link, Route, Routes } from 'react-router-dom'
import Home from './component/Pages/Home';
import './App.css'
import MenuIcon from './component/img/svg/MenuIcon';

const App:React.FC = () => {



  return (
    <div className='flex-container'>
      <div className='header'>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 122.88 76.91" className='companyImage'><g><path d="M15.78,0h91.32c4.34,0,8.29,1.77,11.15,4.63c2.86,2.86,4.63,6.8,4.63,11.15v45.35c0,4.34-1.77,8.29-4.63,11.15 c-2.86,2.86-6.8,4.63-11.15,4.63H15.78c-4.34,0-8.29-1.78-11.15-4.63C1.77,69.42,0,65.47,0,61.13V15.78 c0-4.34,1.77-8.29,4.63-11.15C7.49,1.77,11.44,0,15.78,0L15.78,0z M25.33,20.75h10.93v12.36h11.97V20.75H59.2v35.4H48.22V41.82 H36.26v14.34H25.33V20.75L25.33,20.75z M64.97,20.75h16.26c3.2,0,5.79,0.44,7.76,1.3c1.97,0.87,3.6,2.12,4.9,3.74 c1.29,1.63,2.22,3.52,2.79,5.68c0.59,2.16,0.87,4.44,0.87,6.86c0,3.78-0.43,6.72-1.29,8.8c-0.86,2.09-2.05,3.83-3.58,5.24 c-1.53,1.41-3.17,2.35-4.93,2.82c-2.4,0.64-4.57,0.96-6.52,0.96H64.97V20.75L64.97,20.75z M75.89,28.76V48.1h2.69 c2.29,0,3.92-0.26,4.9-0.76c0.96-0.51,1.72-1.39,2.27-2.65c0.55-1.27,0.82-3.31,0.82-6.15c0-3.75-0.61-6.31-1.84-7.7 c-1.23-1.38-3.26-2.08-6.11-2.08H75.89L75.89,28.76z M107.1,6.49H15.78c-2.55,0-4.88,1.05-6.56,2.73 c-1.69,1.69-2.73,4.01-2.73,6.56v45.35c0,2.55,1.05,4.88,2.73,6.56c1.69,1.69,4.01,2.73,6.56,2.73h91.32 c2.55,0,4.88-1.05,6.56-2.73s2.73-4.01,2.73-6.56V15.78c0-2.55-1.05-4.88-2.73-6.56S109.65,6.49,107.1,6.49L107.1,6.49z"/></g></svg>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about-me'>About Me</Link></li>
          <li><Link to='/'>To Be Discovered..</Link></li>
        </ul>
        <button className='menubtn'><MenuIcon size={50} color={"black"}/></button>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-me' element={<AboutMe/>}/>
      </Routes>
    </div>
  );
}

export default App;
