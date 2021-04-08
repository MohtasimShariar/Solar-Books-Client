import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { FaGoogle } from 'react-icons/fa';
import firebaseConfig from '../../firebase.config';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../Header/Header';
//const admin = require('firebase-admin');


const Login = () => {

    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        error: '',
        success: false,

    })
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const updateUserName = name => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name,
        }).then(function () {
            // console.log('updated')
        }).catch(function (error) {
            console.log(error)
        });
    }

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogle = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var token = credential.accessToken;
                const { displayName } = result.user;
                const signedInUser = { name: displayName }
                setLoggedInUser(signedInUser);
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }

    return (
        <div>
            <p>
                <h1>login with google</h1>
                <button onClick={handleGoogle} className="btn btn-lg"> <FaGoogle /> google</button>
            </p>
        </div>
    );
};

export default Login;