import React, { useState } from 'react';
import {Box, Button, CircularProgress, Container, TextField, Typography} from '@material-ui/core';
import {firestore , firebaseAuth} from '../firebase'

import logo from '../media/logoAdmin.png'
const LoginPage = (props) => {
  
    const [inputUser , setInputUser] = useState({
        email: '',
        password : '',
        show_progress : false,
        emailErr : null,
        passwordErr : null
        
    })

    const handleChangeInput = (e) => {
        const {type , value} = e.target;
      
        type === 'email' 
        ? 
            setInputUser({
                ...inputUser , [type] : value , emailErr : null          
            })
        :   
            setInputUser({
                ...inputUser , [type] : value , passwordErr : null          
            })
        
          
    }

    const loginUser = () => {
        let valid_data = true;
             
        // Nếu nhấn login mà không thông tin trong input thì báo lổi ở ô input
        
        if(inputUser.email === '' && inputUser.password === '' ){
            valid_data = false;          
            return setInputUser({
                ... inputUser , emailErr : 'Required' , passwordErr : 'Required' , show_progress : false
            })    
                  
        }
        if(inputUser.email === '' ){
            setInputUser({
                ... inputUser , emailErr : 'Required' , show_progress : false
            })
            valid_data = false      
        }
        if(inputUser.password === '' ){
            setInputUser({
                ... inputUser , passwordErr : 'Required' , show_progress : false
            })
            valid_data = false      
        }

        if(valid_data){
            setInputUser({
                ...inputUser  , show_progress : true
            })

            firestore.collection("USERS")
            .where('email' , '==' , inputUser.email)
            .where('IsAdmin' , '==' , true)
            .get()
            .then((querySnapshot) => {
                    
                if(!querySnapshot.empty) {
                    // Có user
                    firebaseAuth
                    .signInWithEmailAndPassword(inputUser.email , inputUser.password)
                    .then((res) => {
                        props.history.replace('/');
                        console.log(res)
                    })
                    .catch((err) => {
                        if(err.code === 'auth/wrong-password'){
                            setInputUser({
                                ...inputUser , show_progress : false , passwordErr :'Incorrect Password'
                            })
                        }                        
                    })
                    
                    
                }else {
                    // Không có user
                    setInputUser({
                        ...inputUser  , emailErr : 'Not Allowed' , show_progress : false
                    })
                }
            })
        }
      
        
    }

    return ( 
        <Container maxWidth="sm">
          
            <Box bgcolor="white" boxShadow="2" borderRadius="12px" textAlign="center" p="24px" mt="50px">
                <img src={logo} width="80px" height="80px"/>

                <Typography variant="h5" color ="textSecondary">
                   ADMIN
                </Typography>

                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    size="small"
                    type="email"
                    color="secondary"
                    onChange={handleChangeInput}
                    error={inputUser.emailErr !== null}
                    helperText={inputUser.emailErr}
                    value={inputUser.email}
                />

                 <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    size="small"
                    color="secondary"
                    onChange={handleChangeInput}
                    error={inputUser.passwordErr !== null}
                    helperText={inputUser.passwordErr}
                    value={inputUser.password}
                />

                <br/>
                <br/>
                {inputUser.show_progress ? (
                    <CircularProgress color="primary" thickness={4} size={25}/>
                ) : null}
                <br/>
                <br/>

                <Button variant="contained" color="primary" fullWidth onClick={loginUser}>
                    LOGIN
                </Button>
            </Box>
        </Container>
    )
}

export default LoginPage
