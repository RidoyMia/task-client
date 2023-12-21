import React, { createContext, useEffect, useState } from 'react';
export const authContext = createContext(null);
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import app from '../../../config.firebase';


const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const logOut= ()=> {
        setLoading(true)
        return signOut(auth)
    }
    const updateProfileData = (name,image)=>{
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
          })
    }

    useEffect(() => {
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            
            
        });
        return () => {
            return unsubscribe();
        }
    }, [])
    const info = {user,setUser,createUser,loading,setLoading,googleLogin,signIn,logOut,updateProfileData}
    return (
        <authContext.Provider value={info}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;