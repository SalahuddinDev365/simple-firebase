
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.init';


const Login = () => {

    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            console.log(result.user);
            setUser(result.user)

        })
        .catch(error => {
            console.log('ERROR', error);
            setUser(null)
        })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then((result)=> {
            console.log(result.user)
            setUser(result.user)
        })
        .catch(error => console.log('ERROR',error))
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(() => {
            console.log('Sign out done.')
            setUser(null)
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            {/* <button onClick={handleGoogleSignIn} className='bg-black/30 px-3 py-2 rounded-full font-semibold'>Login with Google</button>
            <button onClick={handleSignOut}>Sign Out</button> */}

            {
                user ? <button onClick={handleSignOut} className='bg-black/30 px-3 py-2 rounded-full font-semibold'>Sign Out</button>
                : 
                <>
                <button onClick={handleGoogleSignIn} className='bg-black/30 px-3 py-2 rounded-full font-semibold'>Login with Google</button>
                <button onClick={handleGithubSignIn} className='bg-black/30 px-3 py-2 rounded-full font-semibold'>Login with GitHub</button>
                </>
            }
            {
                user &&
                 <div>
                    <h4>{user.displayName}</h4>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="" />
                 </div>
            }
        </div>
    );
};

export default Login;