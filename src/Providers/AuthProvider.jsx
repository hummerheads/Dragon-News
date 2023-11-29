import { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password); 
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect( () =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('Auth state changed', currentUser);
            setUser(currentUser);
        });
        return () => {
            unSubscribe();
        }
    } ,[])

    const AuthInfo = {
        user,
        createUser,
        logOut
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;