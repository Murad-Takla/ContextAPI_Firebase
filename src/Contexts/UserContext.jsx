import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.init';

const auth = getAuth(app)

export const AuthContext = createContext()



const UserContext = ({ children }) => {

   const [user , setUser] = useState({})


    const userWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const logIn = (email , password) =>{
        return signInWithEmailAndPassword(auth , email , password)
    }


    const logOut = () => {

        return signOut (auth)
    } 


    useEffect( ()=> {
        const unsubscribe =  onAuthStateChanged(auth , (currentUser=> {
            setUser(currentUser)
            console.log("Auth stage changed : " , currentUser)
        }))
        return () => {
            unsubscribe()
        }
    } ,[]) 

    const authUser = { user: user, userWithEmail  ,  logIn , logOut}

    return (
        <AuthContext.Provider value={authUser}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;