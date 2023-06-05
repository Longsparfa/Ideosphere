import React from 'react';

import { Navbar, Article, Footer } from '../components';
import { Link } from 'react-router-dom';


const ContactUs = () => {
    return (
        
        <>

            <Navbar />

    
<div class="wrapper">
   <div class="relative mb-8 md:mb-16">
            <div class="my-24 flex justify-center md:mt-40">
                <span>
                    <h1 class="text-4xl font-bold uppercase md:text-5xl">
                        Contact <br/>Information
                    </h1>
                </span>
            </div>
            <div className="mt-16 w-full flex-col items-center px-8 md:flex md:justify-center md:px-16">
                <div className="mt-16 md:w-2/3">
                    <span>
                        <p>To ensure we are able to provide you with the best possible service, please complete the form below. However, due to the high volume of inquiries we receive, we unfortunately cannot respond to everyone; we will do our best to respond as soon as possible where we can.</p>
                    </span>
                </div>
                <form className="flex w-full flex-col gap-8 md:w-2/3">
                    <input type="text" placeholder="Name" className="w-full border-b-2 border-black pb-4 pl-[25%] text-xl font-bold outline-none placeholder:font-bold placeholder:uppercase placeholder:text-black md:text-2xl"/>
                    <input type="text" placeholder="Email" className="w-full border-b-2 border-black pb-4 pl-[25%] text-xl font-bold outline-none placeholder:font-bold placeholder:uppercase placeholder:text-black md:text-2xl"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message" className="w-full border-b-2 border-black pb-4 pl-[25%] text-xl font-bold outline-none placeholder:font-bold placeholder:uppercase placeholder:text-black md:text-2xl"></textarea>
                    <div>
                        <input type="checkbox" id="privacy" name="privacy"/>
                        <label for="privacy">
                            <span>I have read the</span>
                            <Link className="underline" to="/privacy-policy">
                               <strong>Privacy Policy</strong>
                            </Link>
                            <span>and agree to its terms</span>
                        </label>
                    </div>
                    <div className="flex w-full flex-row-reverse">
                        <button type="submit" className="text-xl font-bold uppercase md:text-3xl">Shoot!</button>
                    </div>
                </form>
            </div>
            <div className="mt-40 px-8 md:px-16">
                            <section>
                                <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2 md:gap-y-4 lg:grid-cols-3">
                                    <div className="group relative">
                                        <Article title="Communication Strategy To win Litigation" content="In the face of a potential dispute, a communications strategy needs to be as well-planned and disciplined as the litigation strategy." id="/insights/communication-strategy-to-win-litigation" />
                                    </div>
                                    <div className="group relative">
                                        <Article title="Corporate Culture Depends on What Your CEO Says" content="CEOs are unique personas and the face of their companies and employees. CEOs are powerful. Their management team and employees respond to them." id="/insights/corporate-culture-depends-on-what-your-ceo-says" />
                                    </div>
                                    <div className="group relative">
                                        <Article title="Your Business Needs Change - See Why" content="In today's business environment, change is the new normal. Faced with the trends in social and economic change, businesses have to adapt to thrive." id="/insights/your-business-needs-change" />
                                    </div>
                                </div>
                            </section>
                        </div>
                        <ul className="absolute top-0 left-8 hidden text-lg font-bold uppercase leading-none md:left-16 md:block">
                            <li>Strategic</li>
                            <li>Communications</li>
                            <li>Consultancy</li>
                        </ul>
                    </div>
                </div>


    
<Footer />


</>
    );
}

export default ContactUs;