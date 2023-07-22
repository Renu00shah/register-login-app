import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";


function App() {
  const [isSignup, setIsSignup] = useState(false);
  
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
      width: '30%',
      height: "80vh",
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
      <Box sx={styles.main}>
        <Box sx={styles.center}>
          <Typography sx={styles.typo}>LOGIN</Typography>
          <Box sx={styles.text}>
          <TextField type="text" margin="normal" id="outlined-basic" label="Name" variant="outlined" />

          <TextField type="email" margin="normal" id="outlined-basic" label="Email" variant="outlined" />
            <TextField type="password" margin="normal" id="outlined-basic" label="Password" variant="outlined" />
            <Button sx={styles.btn}  variant="contained" color="warning">Login</Button>
            <Button onClick={()=>{}} sx={styles.btn} >Change to Signup</Button>
            </Box>


        </Box>
      </Box>
    </>
  );
}

export default App;
