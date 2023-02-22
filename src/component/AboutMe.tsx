import React from 'react'
import Container from 'react-bootstrap/Container'
import './AboutMe.css'
import { UserInfos, AdminUser } from './interface'

const AboutMe:React.FC = () => {
  return (
    <Container fluid> {/*fluid = 100% width*/}
        <div>
            <img className='coverimg' src={require('./img/coverimg.jpeg')} alt='Cover'/>
        </div>
        <div className='grid'>
            <div className='abstract'>
                <div className='Pic'>
                    <img className='myPic' src={require('./img/myPic.jpg')} alt='Profile Pic'/>
                </div>
                <div className='description'>
                    <h1><p>{AdminUser.name}</p></h1>
                </div>
                
            </div>
            <div className='details'>
                Infossssss
            </div>
        </div>
    </Container>
  )
}

export default AboutMe