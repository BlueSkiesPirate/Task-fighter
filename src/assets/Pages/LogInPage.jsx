import { useState,useEffect } from "react"
import {auth} from "../firebase-config"
import {createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        onAuthStateChanged,
        signOut
    } from "firebase/auth"



export default function LogIn(){

    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPass, setRegisterPass] = useState("")
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPass, setLoginPass] = useState("")
    const [user, setUser] = useState({})

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
        });
        return () => unsubscribe();
      }, []);

    const register = async () => {
        try{
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPass
            )
        } catch (error) {
            console.log(error.message)
        }
  
    }

    const login = async () => {
        try{
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPass
            )
        } catch (error) {
            console.log(error.message)
        }
    }

    const logOut = async () => {
        await signOut(auth)
    }
    return(
        <>
            <div>
                <h3>Create user</h3>
                <input placeholder="Email" onChange={(event) => {setRegisterEmail(event.target.value) }}/>
                <input placeholder="Password" onChange={(event) => {setRegisterPass(event.target.value) }}/>
                <button onClick={register}>Register</button>
                <h3>Log in</h3>
                <input placeholder="Email"  onChange={(event) => {setLoginEmail(event.target.value) }}/>
                <input placeholder="Password"  onChange={(event) => {setLoginPass(event.target.value) }}/>
                <button onClick={login}>Log in</button>

             <h1>user logged in</h1>
             {user?.email}
             <button onClick={logOut}>Log Out</button>
            </div>

        </>
    )
}