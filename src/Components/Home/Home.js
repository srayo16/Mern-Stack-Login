import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import auth from '../../Firebase.init';
import swal from 'sweetalert';

const Home = () => {
    const [value, setValue] = useState();
    const [valueEmail, setValueEmail] = useState();
    const [OTP, SetOTP] = useState("");

    const generateRecaptcha = () => {

        window.recaptchaVerifier = new RecaptchaVerifier('forRecaptcha', {
            'size': 'Visible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                swal("Success", "Mobile verification code sent successfully", "success");
                // swal("CAPTCHA solved", "Allow signInWithPhoneNumber", "success");

            }
        }, auth)
        // window.recaptchaVerifier = new RecaptchaVerifier('forRecaptcha', {}, auth);
    }

    const forSendOtpMobile = () => {
        // console.log(value);
        let plus = "+";
        let phone = plus + value;
        console.log(phone);

        generateRecaptcha();
        let appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, phone, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                swal("Success", "Mobile verification code sent successfully", "success");
                // ...
            }).catch((error) => {
                // Error; SMS not sent
                // ...
                swal("Attention", "Mobile verification code sent unsuccessful", "error");
                console.log(error);
            });

    }

    const setemailValue = (e) => {
        let email = e.target.value;
        setValueEmail(email);
    }

    const verifyOtpMobile = e => {
        let otp = e.target.value;
        SetOTP(otp);
    }

    function emailOTPOrigin(min, max) {
        let otpGenerate = Math.floor(Math.random() * (max - min) + min);
        // let forString = tokenGenarate.toString();
        return otpGenerate;
    }

    const submitIssue = event => {
        event.preventDefault();
        let emailOTP = event.target.emailOtp.value;
        // console.log(emailOTP);


        fetch(`https://polar-wave-34681.herokuapp.com/verifyOtpEmail?emailOrigin=${valueEmail}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(results => {

                let verifying = results.find(result => String(result.getOtp) === emailOTP);
                let finalVerifying = verifying.getOtp;
                let verifyString = String(finalVerifying);
                // console.log(verifyString);
                if (verifyString) {
                    if (OTP.length === 6) {
                        console.log('paisi')
                        let confirmationResult = window.confirmationResult;
                        confirmationResult.confirm(OTP).then((result) => {
                            // User signed in successfully.
                            const user = result.user;
                            // alert("Alhamdulillah, success");
                            swal("Success", "We have received your message. Please allow 48 hours to respond", "success")
                            // console.log(user);


                            // ...
                        }).catch((error) => {
                            // User couldn't sign in (bad verification code?)
                            // ...
                            swal("Attention", "User couldn't sign in (bad verification code?)", "error")
                            console.log(error.message)
                        });

                    }
                }
                else {
                    swal("Attention", "Email verification code is invalid", "error");
                }

            })

        // console.log('success')

    }

    const subOtpEmail = () => {
        let getEmail = valueEmail;
        let getOtp = emailOTPOrigin(100000, 999999);
        // console.log({ getEmail });

        fetch('https://polar-wave-34681.herokuapp.com/sendEmail', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ getEmail, getOtp })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.acknowledged) {
                    // console.log(data);
                    swal("Success", "Please check your email for verification code", "success")
                    // setEmailOtpVerify(getOtp);
                    // console.log(getOtp);
                }

            })
    }
    return (
        <>
            <div class="hero my-h-screen overflow-hidden" style={{ backgroundImage: 'url(https://i.ibb.co/Rg7n89x/shubham-dhage-R2-Ht-YWs5-QA-unsplash.jpg)' }}>
                {/* <div class="hero-overlay bg-opacity-60"></div> */}
                <div class="container mx-auto min-h-screen mt-8">
                    <div class="mx-auto text-center">
                        <h1 class="mb-5 text-3xl lg:text-5xl text-center font-semibold text-red-500 uppercase">Contact</h1>
                        <hr className='w-16 lg:w-28 text-red-500 text-center mx-auto'
                            style={{ marginTop: '-10px' }} />
                        <div className='mt-10 mx-10 lg:mx-0'>
                            <form onSubmit={submitIssue}>
                                <input type="text" placeholder="Name" class="input input-bordered w-full mb-5" required /> <br />
                                <input type="email" placeholder="Email" class="input input-bordered w-full mb-5" required onChange={setemailValue} />
                                <div class="form-control mb-5">
                                    <label class="input-group">
                                        <input type="number" placeholder="Email verification Code" class="input w-full input-bordered" required name='emailOtp' />
                                        <button onClick={subOtpEmail} className='btn btn-error'>Send OTP</button>
                                    </label>
                                </div>
                                {/* <div className='flex justify-center content-center'> */}
                                {/* <input type="text" value={"BD (+880)"} class="input input-bordered w-24 lg:w-24 text-xs" required /> */}
                                <PhoneInput
                                    country={'bd'}
                                    value={value}
                                    onChange={setValue}
                                    className="mb-5 w-full container bg-white rounded"
                                    placeholder="Mobile Number"
                                    inputProps={{
                                        name: 'phone',
                                        required: true,
                                        autoFocus: true
                                    }}

                                />
                                {/* <input type="number" placeholder="Mobile Number" class="input input-bordered w-full mb-5" required /> */}
                                {/* </div> */}
                                <div class="form-control mb-5">
                                    <label class="input-group">
                                        <input type="number" placeholder="Mobile Verification Code" class="input w-full input-bordered" value={OTP} onChange={verifyOtpMobile} required />
                                        <button className='btn btn-error' onClick={forSendOtpMobile}>Send OTP</button>
                                    </label>
                                </div>
                                <input type="text" placeholder="Subject" class="input mb-5 input-bordered w-full " required /> <br />
                                <textarea type='text' class="textarea textarea-bordered w-full" placeholder="Bio" required></textarea>
                                <div className='text-left mt-3'>
                                    <button type='submit' class="btn btn-error">Button</button>
                                </div>
                            </form>
                            <div className=' mt-5' id='forRecaptcha'></div>
                        </div>

                    </div>
                    <Footer></Footer>
                </div >

            </div >

        </>
    );
};

export default Home;