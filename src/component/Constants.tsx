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
