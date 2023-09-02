import React from "react";
import ReactDom from "react-dom/client";
import { TextField } from "@mui/material";

function Refer() {
    return (
        <>
            <div className='first'>
                <div className='second'>
                    {/* <h1>   Internship Request at KGE Technologies Pvt Ltd  </h1> */}
                </div>
                <div className='third'>
                    <h2></h2>
                </div>
                <form>
                    {/* 1 */}
                    <div className='fourth'>
                        <hr />

                        
                        <label htmlFor='' className='' ><br />
                            <p className="required"> How You Know about the Internship in KGE Technologies Pvt Ltd</p>
                        </label><br />
                        <TextField
                            autoComplete="off"
                            placeholder=""
                            name=""
                            id=""
                            label=""
                            variant="outlined"
                            fullWidth
                            type="text"
                            required
                        />
                        <br />
                        <br />
                        {/* <input type="text"
                            
                           />
                           <br/><br/><br/>
                           <hr/><br/> */}
                        {/* 2 */}
                        <h2> Refer Your Circle </h2><br /><hr />
                        {/* 3 */}

                        <label htmlFor='' className='' ><br /><br />
                            <p className="required"> Please do provide their Email Address Or Mobile Number, each line 1 Contact</p>
                        </label><br />
                        <TextField
                            autoComplete="off"
                            placeholder=""
                            name=""
                            id=""
                            label=""
                            variant="outlined"
                            fullWidth
                            type="text"
                            required
                        />

                        {/* <input type="text"/>
                           <br/><br/> */}
                        <br />
                        {/* 4 */}

                        {/* 5 */}

                        {/* 6 */}

                        {/* 7 */}
                        
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

export default Refer;