export interface UserInfos {
    id: number;
    name: string;
    gender: string;
    age?: number;
    email: string;
    password: string;
    isPremium: boolean;
    location: string;
    job?: string;
    school?: string;
}

export const AdminUser: UserInfos = {
    id: 12,
    name: 'Jerry Yip',
    gender: 'male',
    email: 'abc123@gmail.com',
    password: '$$$AaBbCc123',
    isPremium: false,
    location: 'Hong Kong',
    school: 'ABC Kindergarten'
}