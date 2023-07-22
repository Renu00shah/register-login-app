import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";


function App() {
  const [isSignup, setIsSignup] = useState(false);
  const [input, setInput] = useState({
    name:"",email:"",password:"",
  })

  
  const handleChange = (e) => {
    setInput((oldItems) => ({
      ...oldItems,
              [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => { 
    e.preventDefault();
    console.log(input)
  }

  const resetState = () => {
    setIsSignup(!isSignup)
    setInput({
      name:"",email:"",password:"",
    })
  }

  const styles = {
    main: {
      backgroundColor: "cadetblue",
      width: '100%',
      height: "100vh",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
    center: {
      backgroundColor: "aliceblue",
      borderRadius:'15px',
      color:"black",
      width: '25%',
      height: "70vh",
      boxShadow:"5px 5px 10px #ccc",
                ":hover":{
                    boxShadow:"10px 10px 20px #ccc",
                }
    },
    typo: {
      color: "black",
      fontSize: "40px",
      fontWeight: "bold",
      marginTop: "20px",

    },
    text: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      marginTop: '20px',
      marginBottom: '20px',
    },
    btn: {
      width:'50%',
      marginTop: '20px',
      padding: "15px",
      ":hover": {
            backgroundColor: "alicablue",
          }
        },
      
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
      <Box sx={styles.main}>
        <Box sx={styles.center}>
          <Typography sx={styles.typo}>{ isSignup ? "Signup":"Login"}</Typography>
          <Box sx={styles.text}>
            {isSignup && <TextField onChange={ handleChange} value={input.name} name="name" type="text" margin="normal"  label="Name" variant="outlined" />}

          <TextField onChange={ handleChange} name="email" value={input.email} type="email" margin="normal"  label="Email" variant="outlined" />
            <TextField onChange={ handleChange} value={input.password} name="password" type="password" margin="normal"  label="Password" variant="outlined" />
            <Button type="submit" onClick={()=> setIsSignup(!isSignup)} sx={styles.btn} variant="contained" color="warning">{isSignup ? "Signup":"Login" }</Button>
            <Button onClick={resetState} sx={styles.btn} >Change to { isSignup ? "Login":"Signup"}</Button>
            </Box>


        </Box>
        </Box>
        </form>
    </>
  );
}

export default App;
