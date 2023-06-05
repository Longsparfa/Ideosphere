import React from 'react';

import { socialMedia } from '../../constants';
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 

    <footer class="bg-[#1B252E] px-8 pt-16 pb-32 font-medium uppercase text-white md:px-16">
        <div class="flex flex-col text-xs md:items-center md:text-base">
                    <Link href="https://www.ideosphere.com/contact">Please Click this link so we can start talking.</Link>
                    <div class="mt-2 w-full border-b-2 border-white md:w-1/2" />
        </div>
        <div class="mt-16 flex flex-col gap-y-8 text-sm md:flex-row">
                    <div class="grow basis-0 justify-start md:flex">
                    <ul class="md:text-center">
                            <li>+234 291 0050</li>
                            <li className="flex flex-col md:items-center">
                                <a href="mailto:office@thecorporation.xyz">office@thecorporation.xyz</a>
                                <div className="mt-1 w-[75%] border-b border-white" />
                            </li>
                        </ul>
            </div>
            <p className="md:text-center">
                        "8 IBM Haruna Street " 
                        <br/>
                        Utako District
                        <br/>
                        Abuja
            </p>
            <div className="grow basis-0 md:flex md:justify-end">
                    <ul className="space-y-1 md:text-center">
                        {socialMedia.map((social, index) => (
                            <li
                            key={social.id}
                            >
                             <a href={social.id} className="border-b border-white pr-2 md:pl-2" >
                                {social.title}
                             </a>
                            </li>
                        ))}
                    </ul>
            </div>
            
                        
    </div>
                
                <div className="mt-[22rem] flex flex-col items-start text-xs md:flex-row md:items-center md:text-sm">
                    <ul className="grow basis-0">© 2023 Ideosphere Limited</ul>
                    <a className="text-center" href="/privacy-policy">privacy</a>
                    <div className="flex grow basis-0 justify-end">
                        <a href="https://theaustere.xyz">credits</a>
                    </div>
                </div>
            </footer>
     );
}

export default Footer;