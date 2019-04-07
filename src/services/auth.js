import jwt from 'jsonwebtoken'
require('dotenv').config();

export async function requireAuth(user) {
    if(!user || !user._id) {
        throw new Error('Unauthorised')
    }
}

export function decodeToken(token) {
    const arr = token.split(' ');

    if(arr[0] === 'Bearer') {
        return jwt.verify(arr[1], process.env.JWT_SECRET);
    }

    throw new Error('Token is not valid')
}