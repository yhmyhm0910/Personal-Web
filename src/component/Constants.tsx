import React from 'react'

export interface UserInfos {
    id: number;
    name: string;
    gender: string;
    email: string;
    password: string;
    isPremium: boolean;
    location: string;
    age?: number;
    job?: string;
    school?: string;
}

class Users implements UserInfos{
    id: number;
    name: string;
    gender: string;
    email: string;
    password: string;
    isPremium: boolean;
    location: string;
    age?: number;
    job?: string;
    school?: string;
    constructor(
        id: number,
        name: string,
        gender: string,
        email: string,
        password: string,
        isPremium: boolean,
        location: string,
        age?: number,
        job?: string,
        school?: string,
    ){
        this.id = id
        this.name = name
        this.gender = gender
        this.email = email
        this.password = password
        this.isPremium = isPremium
        this.location = location
        this.age = age
        this.job = job
        this.school = school
    }
}

export const firstUser = new Users(2, 'Mavis Yip', 'female', 'mavisyip@gmail.com','$$$ZzYyXx', false, 'Taiwan', 19, 'None', 'ABC Primary School')

export const AdminUser = new Users(1, 'Jerry Yip', 'male', 'jerryyip@gmail.com', '$$$AaBbCc123', true, 'Hong Kong')


const CheckCircle: React.FC<{size: number, color: string, display: string}> = (props) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" stroke={props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="bevel" className='blueTick' display={props.display}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>)
    }

    export default CheckCircle;