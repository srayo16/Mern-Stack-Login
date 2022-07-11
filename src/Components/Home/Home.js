import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const Home = () => {
    const [value, setValue] = useState()
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
                            <form >
                                <input type="text" placeholder="Name" class="input input-bordered w-full mb-5" required /> <br />
                                <input type="email" placeholder="Email" class="input input-bordered w-full mb-5" required />
                                <div class="form-control mb-5">
                                    <label class="input-group">
                                        <input type="number" placeholder="Email verification Code" class="input w-full input-bordered" required />
                                        <button className='btn btn-error'>Send OTP</button>
                                    </label>
                                </div>
                                {/* <div className='flex justify-center content-center'> */}
                                {/* <input type="text" value={"BD (+880)"} class="input input-bordered w-24 lg:w-24 text-xs" required /> */}
                                <PhoneInput
                                    country={'bd'}
                                    value={value}
                                    onChange={setValue}
                                    className="mb-5 w-full container"
                                    placeholder="Mobile Number"
                                    required
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
                                        <input type="number" placeholder="Mobile Verification Code" class="input w-full input-bordered" required />
                                        <button className='btn btn-error'>Send OTP</button>
                                    </label>
                                </div>
                                <input type="text" placeholder="Subject" class="input mb-5 input-bordered w-full " required /> <br />
                                <textarea type='text' class="textarea textarea-bordered w-full" placeholder="Bio" required></textarea>
                                <div className='text-left mt-3'>
                                    <button type='submit' class="btn btn-error">Button</button>
                                </div>
                            </form>

                        </div>

                    </div>
                    <Footer></Footer>
                </div >

            </div >

        </>
    );
};

export default Home;