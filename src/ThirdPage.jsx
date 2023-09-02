import React from "react";
import ReactDom from "react-dom/client";
import { TextField } from "@mui/material";

function Field() {
    return (

        <>
            <div className='first'>
                <div className='second'>
                    {/* <h1>   Internship Request at KGE Technologies Pvt Ltd  </h1> */}
                </div>
                <div className='third'><br />
                    <h2>  </h2>
                </div>
                <form>
                    {/* 1 */}
                    <div className='fourth'>
                        <hr />

                        <div className=' a'>
                            <label htmlFor='Internship Looking For' className='required'><br />
                                Internship Looking For
                            </label><br />

                            <div >
                                <label htmlFor='.Net MVC' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='.Net MVC' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    .Net MVC
                                </label>


                                <label htmlFor='Angular'  > <input type='radio' autoComplete='off' name='Internship Looking For' value='Angular' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Angular
                                </label>


                                <label htmlFor='BBA/MBA' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='BBA/MBA' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    BBA/MBA
                                </label><br />


                                <label htmlFor='Business Development' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='Business Development' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Business Development
                                </label>


                                <label htmlFor='Digital Marketing' style={{ margin: "1rem" }}><input type='radio' autoComplete='off' name='Internship Looking For' value='Digital Marketing' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Digital Marketing
                                </label>


                                <label htmlFor='Finance' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='Finance' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Finance
                                </label><br />


                                <label htmlFor='Flutter/Android/Ios' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='Flutter/Android/Ios' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Flutter/Android/Ios
                                </label>


                                <label htmlFor='HR' className='aa'><input type='radio' autoComplete='off' name='Internship Looking For' value='HR' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    HR
                                </label>


                                <label htmlFor='Hardware' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='Hardware' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Hardware
                                </label><br />


                                <label htmlFor='Html UI' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='Html UI' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Html UI
                                </label>


                                <label htmlFor='IOT' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='IOT' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    IOT
                                </label>


                                <label htmlFor='Java' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='Java' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Java
                                </label><br />
                                <label htmlFor='Laravel' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='Laravel' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Laravel
                                </label>


                                <label htmlFor='Legal / Law Firm' className='a'>  <input type='radio' autoComplete='off' name='Internship Looking For' value='Legal / Law Firm' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Legal / Law Firm
                                </label>


                                <label htmlFor='Marketing' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='Marketing' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Marketing
                                </label><br />


                                <label htmlFor='Networking' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='Networking' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Networking
                                </label>


                                <label htmlFor='Photoshop' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='Photoshop' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Photoshop
                                </label>


                                <label htmlFor='Php' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='Php' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Php
                                </label><br />


                                <label htmlFor='Project Manager' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='Project Manager' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Project Manager
                                </label>


                                <label htmlFor='Python' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='Python' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Python
                                </label>


                                <label htmlFor='React ' className='a'> <input type='radio' autoComplete='off' name='Internship Looking For' value='React' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    React
                                </label><br />


                                <label htmlFor='SQL-Pl/Sql Oracle/MsSql' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='SQL-Pl/Sql Oracle/MsSql' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    SQL-Pl/Sql Oracle/MsSql
                                </label>


                                <label htmlFor='Sales' className='a'> <input type='radio' autoComplete='off' name='Internship Looking For' value='Sales' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Sales
                                </label>


                                <label htmlFor='Software Development' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='React' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Software Development
                                </label><br />


                                <label htmlFor='Testing' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='Testing' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Testing
                                </label>


                                <label htmlFor='UI Designer(Figma,etc)' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='UI Designer(Figma,etc)' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    UI Designer(Figma,etc)
                                </label>


                                <label htmlFor='Web Development ' className='a'><input type='radio' autoComplete='off' name='Internship Looking For' value='Web Development' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Web Development
                                </label><br />

                                <label htmlFor='Other ' className='a'> <input type='radio' autoComplete='off' name='Internship Looking For' value='' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />
                                    Other
                                </label>

                            </div>
                            <br /><br />
                            <input type="text" placeholder="Other" />

                            <br />
                            <br />

                            <br />
                            <div>
                                <h1>Knowledge Requirement</h1>
                            </div><br /><hr /><br />
                            <div>
                                <p>
                                    You are comfortable working on Real-time Tasks from Day on the Above chosen Option,as we don't give training or coaching like a training institute or coaching center.
                                </p>
                            </div>
                            <br /><br /><br />
                        </div>




                        {/* 2 */}

                        
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

export default Field;