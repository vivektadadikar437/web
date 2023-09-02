import React from "react";
import ReactDom from "react-dom/client";
import { TextField } from "@mui/material";

function Education() {
    return (
        <>
            <div className='first'>
                <div className='second'>
                    {/* <h1>    Internship Request at KGE Technologies Pvt Ltd   </h1> */}
                </div>
                <div className='third'><br />
                    <h2>  </h2>
                </div>
                <form>
                    {/* 1 */}
                    <div className='fourth'><hr/>
                        <label htmlFor='Current Degree & Branch ' className='required' ><br />
                            Current Degree & Branch
                        </label><br /><br />
                        <TextField
                            autoComplete="off"
                            placeholder="Your Recent Degree and Branch"
                            name=""
                            id=""
                            label=""
                            variant="outlined"
                            fullWidth
                            type="text"
                            required
                        />
                        <br />
                        {/* <div className=''>
                    <label htmlFor='name' className='required'><br /><hr /><br />
                      Current Degree & Branch 
                   </label><br />
                    <input type='name' autoComplete='off' name='name' id='name' placeholder='Your Recent Degree and Branch' />
                     <br /><br /><hr /><br />
                     </div> */}

                        {/* 2 */}
                        <label htmlFor='Passed Out ' className='required' ><br /><br />
                            Passed Out
                        </label><br /><br />
                        <TextField
                            autoComplete="off"
                            placeholder=""
                            name=""
                            id=""
                            label=""
                            variant="outlined"
                            fullWidth
                            type="number"
                            required
                        />
                        <br />
                        {/* <div className=''>
                    <label htmlFor='name' className='required'><br /><hr /><br />
                      Passed Out 
                   </label><br />
                    <input type='name' autoComplete='off' name='name' id='name' placeholder='' />
                     <br /><br /><hr /><br />
                     </div> */}

                        {/* 3 */}

                        
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

export default Education;