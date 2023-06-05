import React from 'react';

import Typed from 'typed.js';
import { useEffect, useRef } from 'react';


const Header = () => {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Transaction Communications Proxy Solicitation Investor Relations", "Corporate (Re) Positioning CEO Communications Litigation Communications","Crisis &amp; Risk Communications Media Relations Advocacy Grassroots"],

            
            typeSpeed: 100,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, [])





    return ( 
<>

      <div className="mt-16 mb-32 md:mt-32 md:mb-32 lg:mt-40 lg:mb-40">
        <div className="animated -z-10 w-full lg:flex lg:justify-center">
            <div className="h-[248px] space-y-4 text-[32px] font-black uppercase leading-none min-[525px]:min-h-[108px] min-[525px]:space-y-0 sm:h-[136px] sm:text-4xl md:ml-44 md:w-[555px] md:text-3xl lg:ml-0 lg:text-4xl xl:h-40 xl:w-[741px] xl:text-5xl"><span ref={el} /></div>
        </div>
        <div id="stringz" className="hidden" style={{display: 'none'}}>
            <div>
                <div className="word space-x-2">
                    <span className="block">Transaction</span>
                    <span className="block">Communications</span>
                </div>
                <div className="word space-x-2">
                    <span className="block">Proxy</span>
                    <span className="block">Solicitation</span>
                </div>
                <div className="word space-x-2">
                    <span className="block">Investor</span>
                    <span className="block">Relations</span>
                </div>
            </div>
            <div>
                <div className="word space-x-2">
                    <span className="block">Corporate</span>
                    <span className="block">(Re) Positioning</span>
                </div>
                <div className="word space-x-2">
                    <span className="block">CEO</span>
                    <span className="block">Communications</span>
                </div>
                <div className="word space-x-2">
                    <span className="block">Litigation</span>
                    <span className="block">Communications</span>
                </div>
            </div>
            <div>
                <div className="word space-x-2">
                    <span className="block">Crisis &amp;Risk</span>
                    <span className="block">Communications</span>
                </div>
                <div className="word space-x-2">
                    <span className="block">Media</span>
                    <span className="block">Relations</span>
                </div>
                <div className="word space-x-2">
                    <span className="block">Advocacy &amp;</span>
                    <span className="block">Grassroots</span>
                </div>
            </div>
        </div>
    </div>
</>
     );
}

export default Header;