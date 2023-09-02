import React from "react";
import ReactDom from "react-dom/client";
import { TextField } from "@mui/material";

function Sub() {
    return (
        <>
            <div className='first'>
                <div className='second'>
                    {/* <h1>   Internship Request at KGE Technologies Pvt Ltd   </h1> */}
                </div>
                <div className='third'>
                    <h2>  </h2>
                </div>
                <form>
                    {/* 1 */}
                    <div className='fourth'>
                        <hr /><br />
                        <p className="required">Terms and Conditions</p>
                        <br />

                        {/* 2 */}
                        <div className="p">
                            <p style={{ margin: "1rem" }}>  I Agree, KGE Technology Pvt Ltd to contact me via Email,Call,SMS,Whatsapp to discuss on my Form Submission for Internship<br /><br /><br /><br /></p>
                        </div>
                        {/* 3 */}
                        <br />
                        <input type='checkbox' autoComplete='off' name='Internship Looking For' value='I accept the terms and Conditions.' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />I accept the terms and Conditions.
                        <br /><br />
                        {/* 4 */}
                        <hr />


                        {/* 5 */}
                        <label htmlFor='Recaptcha' className='' ><br />
                            <p className="required">Recaptcha</p>
                        </label><br />
                        <TextField
                            autoComplete="off"
                            placeholder=""
                            name="Recaptcha"
                            id="Recaptcha"
                            label=" To Block Bot Form Submission"
                            variant="filled"
                            fullWidth
                            type="text"
                            required
                        />
                        {/* 6 */}

                        {/* 7 */}
                        
                        {/* 8 */}
                        <div className=''>
                            <button style={{
                                backgroundColor: "deepskyblue", color: "white", margin: "1rem",
                                paddingLeft: "10px", paddingTop: "5px", paddingRight: "10px", paddingBottom: "5px", float: "right"
                            }}>SUBMIT</button>
                        </div><br /><br />
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

export default Sub;