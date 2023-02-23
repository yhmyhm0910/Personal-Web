import React from 'react'
import './AboutMe.css'
import CheckCircle, { AdminUser, UserInfos, firstUser } from '../Constants'

const AboutMe:React.FC = () => {

    const showBlueTick = (selectedUser: UserInfos): string => {
        if (selectedUser.isPremium === true){
            return 'inline'
        }
        else {
            return 'none'
        }
    }

  return (
    <div className='aboutMe'> {/*fluid = 100% width*/}
        <div>
            <img className='coverimg' src={require('../img/coverimg.jpeg')} alt='Cover'/>
        </div>
        <div className='grid'>
            <div className='abstract'>
                <div className='PicDiv'>
                    <img className='myPic' src={require('../img/myPic.jpg')} alt='Profile Pic'/>
                </div>
                <div className='description'>
                    <div className='verified'>
                        <CheckCircle size={20} color={"#4384ff"} display={showBlueTick(AdminUser)}/>
                        <span className='userName'>{AdminUser.name}</span>
                    </div>
                    <div>
                        <span className='email'>{AdminUser.email}</span>
                    </div>
                </div>
                
            </div>
            <div className='details'>
                Infossssss
            </div>
        </div>
    </div>
  )
}

export default AboutMe