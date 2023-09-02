import React from "react";
import HorizontalLinearStepper from "./HorizontalLinearStepper";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function App(){
  return(
    <>
    <Container style={{margin:"auto" ,marginTop:"1rem" ,border:"1rem solid deepskyblue "}}>
    <h1 style={{textAlign:"center" ,color:"deepskyblue",border:"1rem solid deepskyblue",margin:"1rem"}}>   Internship Request at KGE Technologies Pvt Ltd  </h1>
        <Box sx={{ bgcolor: 'white' }} style={{padding:"30px 30px 30px 30px"}} >
     <HorizontalLinearStepper/>
     </Box>
    </Container>
    </>
  );
};

export default App;