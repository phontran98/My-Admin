import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import {firebaseAuth} from './firebase'

const Authenticated = (props) => {
    const [loggedIn , setLoggedIn] = useState(null);

    firebaseAuth.onAuthStateChanged((user) => {
        user ? setLoggedIn(true) : setLoggedIn(false)
    })

    if(loggedIn === null) {
        return "Loading"
    } else if (loggedIn) {
        return props.children
    } else if (!loggedIn) {
        return <Redirect to='/login'/>
    }

}

export default Authenticated
