import { useEffect, useState } from "react"
// import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut  } from "firebase/auth";
import initializeFirebase from "../Firebase/Firebase.init";

initializeFirebase();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error,  setError] = useState('')

    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();

    const singInUsingGoogle = () =>{
       return signInWithPopup(auth, googleProvider)
        
        // .catch((error)=>{
        //     setError(error.message)
        // })
    };

    const logOut = ()=>{
        signOut(auth)
        .then(() => {
            setUser({})
          })
          .catch((error) => {

          });
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } 
          });
    },[])

    return{
        user,
        // error,
        singInUsingGoogle,
        logOut
    }
}

export default useFirebase;