import React, { useState } from "react";
import ReactDom from "react-dom/client";
import { TextField } from "@mui/material";

function Option() {
    const [visible, setvisible] = useState(true)
    const [ivisible, getvisible] = useState(true)

    return (
        <>
            <div className='first'>
                <div className='second'>
                    {/* <h1>   Internship Request at KGE Technologies Pvt Ltd    </h1> */}
                </div>
                <div className='third'>
                    <h6> </h6>
                </div>
                <form>
                    {/* 1 */}
                    <div className='fourth'>

                        <hr /><br />
                        {/* 2 */}
                        <p>Please Read The Complete Details below and Choosse your option</p>
                        <br />
                        <br />
                        {/* 3 */}

                        <div>
                            <ul><h5>Option 1: Only Certificate</h5><br />
                                <li> We Would issue you an Internship offer letter, completion letter on company letterhead, corporate email id, linkedIn profile tagging & Recommendation.</li>
                                <li>Still, you can work on a project but we won't expect a 100% output from you.</li>
                                <li>Enrollment Charges Applicable: 1500Inp or 30USD/-for Up to 6 Months Intern Date. </li>
                                <li>
                                    Like Training Institute or coaching center we don't give any project report or documentation on any project, if you create we will review and provide recommendation for correction's and fixed
                                </li>
                            </ul><br />
                            <br /></div>

                        {/* 4 */}
                        <ul><h5>Option 2: if you want to do the project work for KGE Technologies for real-time projects for free, <u>lets see how this works.</u></h5><br />
                            <li>
                                we will mail you an offer of internship via email for a minimum of 1-6 months,based on your needs.
                            </li>
                            <l1>
                                Regularly work on assigned work and give 100% output.
                            </l1>
                            <li>
                                Office Timing Mon-Sat on your time zone, attendance mandatory with min 4hrs per day, you need to login to the tool in your desktop/laptop to track the same.Allowed to leave during exams.
                            </li>
                            <li>
                                You need to have desktop or laptop to work on project,we don't give machines or any account to use for cloud project.
                            </li>
                            <li>
                                Once completed the project work with at least 90% output- we would give Internship Offer and completion Letter,LinkedIn profile tagging with Company.
                            </li>
                            <li>
                                Stipend: Nil during an internship, one time incentive based on output at last if contribution is excellent and min 90% output is given.
                            </li>
                            <li>
                                <u>For Time passers this is not suitable option,</u> we need candidate to be dedicated to work on assigned task by contributing min 4hrs per day.
                            </li>
                            <li>
                                Like Training Institute or coaching  center we don't give any project report or documentation on any project, if you create we will review and provide recommendation for correction's and fixed.
                            </li>
                        </ul><br /><br />
                        {/* 5 */}
                        <p className="required">What Option you want to Choose After Reading Above Program</p>
                        <br />
                        {/* 6 */}
                        <input type='radio' autoComplete='off' name='Internship Looking For' value='Option 1' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />Option 1
                        <br />
                        <input type='radio' autoComplete='off' name='Internship Looking For' value='Option 2' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} onClick={() => getvisible(false)} />Option 2
                        <br />
                        <br />
                        <hr /><br />
                        {/* 7 */}
                        <h1>Internship Availability for UI Designer (Figma,etc)</h1><br /><hr />
                        {/* 8 */}
                        <br />
                        <p>Sometimes Internship will not be available in Option 2,HR Team will update you on the same during evaluating your form</p>
                        <br />
                        {visible ||
                            <div>

                                <h2> <p className="required">Internship Duration</p><br /></h2>
                                <input type='radio' autoComplete='off' name='Internship Looking For' value='1 Month' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />1 Month
                                <br />
                                <input type='radio' autoComplete='off' name='Internship Looking For' value='2 Month' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />2 Month
                                <br />
                                <input type='radio' autoComplete='off' name='Internship Looking For' value='3 Month' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />3 Month
                                <br />
                                <input type='radio' autoComplete='off' name='Internship Looking For' value='4 Month' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />4 Month
                                <br />
                                <input type='radio' autoComplete='off' name='Internship Looking For' value='5 Month' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />5 Month
                                <br />
                                <input type='radio' autoComplete='off' name='Internship Looking For' value='6 Month' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />6 Month
                                <br />
                                <input type='radio' autoComplete='off' name='Internship Looking For' value='Other' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />Other
                                <br /><br />
                                <input type="text" />
                                <br /><br />
                            </div>
                        }
                        {ivisible ||
                            <div>
                                <input type='checkbox' autoComplete='off' name='Internship Looking For' value='Option 2' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} /> I read above all details and I know <br />
                                <ol>
                                    <li> There is no salary or Stipend paid</li>
                                    <li> I Contribute to real time project work</li>
                                    <li> I will work and report all task on Time </li>
                                    <li> Not working or joining post Offer or Absconding will lead to report to Nasscomm as Absconded case by Company</li>
                                </ol><br />
                                <p> I Agree to it When I Choose option 2</p>
                                <br /><br />
                                <div>

                                    <h2><p className="required">Internship Duration</p><br /></h2>
                                    <input type='radio' autoComplete='off' name='Internship Looking For' value='1 Month' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />1 Month
                                    <br />
                                    <input type='radio' autoComplete='off' name='Internship Looking For' value='2 Month' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />2 Month
                                    <br />
                                    <input type='radio' autoComplete='off' name='Internship Looking For' value='3 Month' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />3 Month
                                    <br />
                                    <input type='radio' autoComplete='off' name='Internship Looking For' value='4 Month' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />4 Month
                                    <br />
                                    <input type='radio' autoComplete='off' name='Internship Looking For' value='5 Month' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />5 Month
                                    <br />
                                    <input type='radio' autoComplete='off' name='Internship Looking For' value='6 Month' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />6 Month
                                    <br />
                                    <input type='radio' autoComplete='off' name='Internship Looking For' value='Other' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />Other
                                    <br /><br />
                                    <input type="text" />
                                    <br /><br />
                                </div>
                            </div>

                        }

                        <br />






                        <label htmlFor=' ' className='required' >Tentative Internship Start Date
                        </label><br /><br />
                        <TextField
                            autoComplete="off"
                            placeholder=""
                            name=""
                            id=""
                            label=""
                            variant="filled"
                            // fullWidth
                            type="date"
                            required
                        />
                        <br />
                        <br />
                        <br />
                        <p className="required">
                            Do you Have Laptop/Desktop with Internet connectivity to work
                        </p>
                        <br />
                        <input type='radio' autoComplete='off' name='Internship Looking For' value='Yes' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />Yes
                        <br />
                        <input type='radio' autoComplete='off' name='Internship Looking For' value='No' id='Internship Looking For' placeholder='' style={{ margin: "1rem" }} />No
                        <br />


                        
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

export default Option;