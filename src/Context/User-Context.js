import React from 'react';



const User = React.createContext({
    user: {},
    updateAuth: () => {}});

export default User;

const updateAuth = (currentUser)=>{
    initState.user=currentUser
    };


export const initState = {
    user:{},
    updateAuth
};