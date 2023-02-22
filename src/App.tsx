import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './component/CustomNavbar';
import AboutMe from './component/AboutMe';

const App:React.FC = () => {
  return (
    <div>
      <CustomNavbar/>
      <AboutMe/>
    </div>
  );
}

export default App;
