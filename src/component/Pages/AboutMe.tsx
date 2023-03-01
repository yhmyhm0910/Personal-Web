import React, { useState } from 'react'
import './AboutMe.css'
import { AdminUser, UserInfos } from '../Constants'
import CheckCircle from '../img/svg/CheckCircle'

const AboutMe:React.FC = () => {

    const showBlueTick = (selectedUser: UserInfos): string => {
        if (selectedUser.isPremium === true){
            return 'inline'
        }
        else {
            return 'none'
        }
    }

    const myInfos: {id: number, title: string, body:string, shown: boolean}[] = [
        {
            id: 1,
            title: 'hobby',
            body: 'These are my hobbies',
            shown: false
        },
        {
            id: 2,
            title: 'links',
            body: 'These are my links',
            shown: false
        }
    ]

    const [infos, setInfos] = useState(myInfos)
    
    const handleExpandClick = (idPassed: number) => {
        setInfos(
            infos.map((info) => 
                info.id === idPassed
                ?{...info, shown: !info.shown}  //? == if (last statement) is true
                :{...info}  //: == else 
            )
        )
    }

 return (
    <div className='maincontent'>
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
                This is my first page.
                <div className="dropdown">
                    {
                        infos.map((info) => (
                            <div key={info.id}>
                                <button style={{marginTop: '1rem'}} onClick={() => {handleExpandClick(info.id)}}>{info.title}</button>
                                <div className={info.shown? 'dropdown-info-visible':'dropdown-info-invisible'}>{info.body}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe