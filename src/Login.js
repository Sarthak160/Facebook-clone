import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"
import {auth,provider} from './firebase'
import {actionTypes} from './reducer'
import {useStateValue} from './StateProvider'

function Login() {

    const [state,dispatch] = useStateValue();
    const signIn = () => {
        //sign in 
        auth
        .signInWithPopup(provider)
        .then((result)=>{
            
        dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
        });
    })
         .catch((error)=> alert(error.message));  //if catch error log it


    }
    return (
        <div className="login">
            <div className="login__logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png"
                    alt=""
                />
                <div className = "logo"> 
                   <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1920px-Facebook_Logo_%282019%29.svg.png"
                    alt=""
                />
                </div>
    
            </div>

                <Button type="submit" onClick={signIn}>
                    Sign in
        </Button>
            </div>
    )
}

export default Login 
