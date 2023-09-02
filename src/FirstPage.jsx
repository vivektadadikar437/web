import React from "react";

 
import { TextField } from "@mui/material";



function FirstPage() {
  return (
    <>
   
      <div className='first'>
        <div className='second'>
          {/* <h1>   Internship Request at KGE Technologies Pvt Ltd  </h1> */}
        </div>
        <div className='third'>
          <h2 style={{ margin: "1rem" }}>--* Personnal Details *-- </h2>
        </div>
        <form><br /><br/>
          {/* 1 */}
          <div className='fourth'>
            <label htmlFor='name' className='required' ><br /><hr /><br />
              Name
            </label><br /><br />
            <TextField
              autoComplete="off"
              placeholder=""
              id=""
              label=""
              variant="outlined"
              fullWidth
              type="text"
              required
            />
            <br /> First
            <br />
            <TextField
              autoComplete="off"
              placeholder=""
              id=""
              label=""
              variant="outlined"
              fullWidth
              type="text"
              required
            />
            <br /> Last
            {/* <label htmlFor='name' className='required' ><br /><hr /><br />
              Name
            </label><br />
            First
            <input type='name' autoComplete='off' name='name' id='name' placeholder='Name' />
            <br /><br /><hr /><br />
            Last
            <input type='name' autoComplete='off' name='name' id='name' placeholder='Last' />
            <br /><br /> */}


            {/* 2 */}
            <br />
            <label htmlFor='Contact Number' className='required' ><br /><br />
              Contact Number
            </label><br /><br />
            <TextField
              autoComplete="off"
              placeholder="Mobile Number"
              id=""
              label=""
              variant="outlined"
              fullWidth
              type="number"
              required
            />
            {/* <div className=''>
              <label htmlFor='name' className='required'><br /><hr /><br />
                Contact Number
              </label><br />
              <input type='name' autoComplete='off' name='name' id='name' placeholder='Contact Number' />
              <br /><br /><hr /><br />
            </div> */}
            {/* 3 */}
            <br />
            <label htmlFor='Email' className='required' ><br /><br />
              Email
            </label><br /><br />
            <TextField
              autoComplete="off"
              placeholder=""
              name="Password"
              id="Password"
              label=""
              variant="outlined"
              fullWidth
              type="email"
              required
            />
            {/* <div className=''>
              <label htmlFor='password' className='required'><br />
                Email
              </label><br />
              <input type='Email' autoComplete='off' name='Password' id='Password' placeholder='Email' />
              <br /><br /><hr /><br />
            </div> */}
            {/* 4 */}
            <br />
            <label htmlFor='Whatsapp' className='required' ><br /><br />
              Whatsapp
            </label><br /><br />
            <TextField
              autoComplete="off"
              placeholder="Whatsapp Number"
              id="Whatsapp"
              name="Whatsapp"
              label=""
              variant="outlined"
              fullWidth
              type="Number"
              required
            />

            {/* <div className=''>
              <label htmlFor='Whatsapp' className='required'><br />
                Whatsapp
              </label><br />
              <input type='' autoComplete='off' name='Whatsapp' id='Whatsapp' placeholder='Whatsapp Number' />
              <br /><br /><hr /><br />
            </div> */}
            {/* 5 */}
            <br />
            <label htmlFor='Country' className='required' ><br /><br />
              Country
            </label><br /><br />
            <TextField
              autoComplete="off"
              placeholder=""
              name="Country"
              id="Country"
              label=""
              variant="outlined"
              fullWidth
              type="text"
              required
            />
            <br />
            {/* <div className=''>
              <label htmlFor='Country' className='required'><br />
                Country
              </label><br />
              <input type='' autoComplete='off' name='Country' id='Country' placeholder='' />
              <br /><br /><hr /><br />
            </div>
            */}
            {/* 6 */}
            <label htmlFor='City' className='required' ><br /><br />
              City
            </label><br /><br />
            <TextField
              autoComplete="off"
              placeholder=""
              name="City"
              id="City"
              label=""
              variant="outlined"
              fullWidth
              type="text"
              required
            />
            <br />
            {/* <div className=''>
              <label htmlFor='City' className='required'><br />
                City
              </label><br />
              <input type='' autoComplete='off' name='City' id='City' placeholder='' />
              <br /><br /><hr /><br />
            </div> */}
            {/* 7 */}
            <div className=''>
              <label htmlFor='Gender' className='required'><br />
                Gender
              </label><br />
              <input type='radio' autoComplete='off' name='Gender' value='Male' id='Gender' placeholder='' style={{ margin: "1rem" }} /> Male
              <input type='radio' autoComplete='off' name='Gender' value='Female' id='Gender' placeholder='' style={{ margin: "1rem" }} />female
              <input type='radio' autoComplete='off' name='Gender' value='Transgender' id='Gender' placeholder='' style={{ margin: "1rem" }} />Transgender
              <br /><br /><br />
            </div>
            {/* 8 */}
            
            {/* 9 */}
            <footer className='footer'><br /> <br /><hr /><br />
              Do not submit confidential information such as credit card detais,mobile and ATM PINs,OTPs,account <br />passwords,ect.<a href=''>Report Abuse</a><br />
              <div><br />
                Powered by <sub>Vivek</sub><sup>Forms</sup>
              </div>
            </footer>

          </div>
        </form>
      </div>

    </>
  );
};

export default FirstPage;


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';

// export default function FirstPage() {
//   return (
//     <Box
//       component="form"
//       sx={{
//         '& .MuiTextField-root': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <div>
//         <TextField
//           id="outlined-multiline-flexible"
//           label="Multiline"
//           multiline
//           maxRows={4}
//         />
//         <TextField
//           id="outlined-textarea"
//           label="Multiline Placeholder"
//           placeholder="Placeholder"
//           multiline
//         />
//         <TextField
//           id="outlined-multiline-static"
//           label="Multiline"
//           multiline
//           rows={4}
//           defaultValue="Default Value"
//         />
//       </div>
//       <div>
//         <TextField
//           id="filled-multiline-flexible"
//           label="Multiline"
//           multiline
//           maxRows={4}
//           variant="filled"
//         />
//         <TextField
//           id="filled-textarea"
//           label="Multiline Placeholder"
//           placeholder="Placeholder"
//           multiline
//           variant="filled"
//         />
//         <TextField
//           id="filled-multiline-static"
//           label="Multiline"
//           multiline
//           rows={4}
//           defaultValue="Default Value"
//           variant="filled"
//         />
//       </div>
//       <div>
//         <TextField
//           id="standard-multiline-flexible"
//           label="Multiline"
//           multiline
//           maxRows={4}
//           variant="standard"
//         />
//         <TextField
//           id="standard-textarea"
//           label="Multiline Placeholder"
//           placeholder="Placeholder"
//           multiline
//           variant="standard"
//         />
//         <TextField
//           id="standard-multiline-static"
//           label="Multiline"
//           multiline
//           rows={4}
//           defaultValue="Default Value"
//           variant="standard"
//         />
//       </div>
//     </Box>
//   );
// }