import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './component/CustomNavbar';
import Home from './component/Home';

const App:React.FC = () => {
  return (
    <div>
      <CustomNavbar/>
      <Home/>
    </div>
  );
}

export default App;
