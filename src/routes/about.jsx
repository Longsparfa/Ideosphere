import React, { useState } from 'react';

import { IoIosAdd, IoIosClose } from 'react-icons/io';
import { Navbar, Article, Footer } from '../components';
import { about, about01, about02, about03, about04 } 
from '../assets/index';


const Overview = ({ title, content }) => {
    return (
        <>
        <div className="z-[1] h-0.5 w-full origin-[50%_0%] bg-black" />
        <h2 className="mt-2 text-2xl font-black uppercase tracking-wide md:text-2x1 lg:w-4/5 lg:text-3xl">{title}</h2>
        <p className='mt-2'>{content}</p>
                        
                        

        </>
    );
}


const Aboutthem =  ({ imgsource, name, detail }) => {
    const [toggleParagraph, setToggleParagraph] = useState(false);





    return (
      <div class="relative h-96 overflow-y-hidden md:h-[28rem]">
            <img src={imgsource} alt="" className="object-cover" style={{position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent'}} />
                <div class="relative h-full w-full">
                      <div class="absolute bottom-0 w-full space-y-3 bg-gradient-to-b from-black/25 via-black/75 to-black px-4 py-2 text-white transition-transform duration-200 ease-in-out translate-y-[calc(100%-2.5rem)]">
                            <div class="flex items-center justify-between">
                              <span class="font-semibold uppercase">{name}</span>
                              <button class="ease transform transition duration-200" onClick={() => setToggleParagraph(!toggleParagraph)} >
                                  {toggleParagraph ?   <IoIosClose /> : <IoIosAdd />}
                              </button>
                            </div>
                            {toggleParagraph && (
                                <p>{detail}</p>
                            )}
                           
                    </div>
               </div>
      </div>
    );
    
  }









const About = () => {
    return (
    <> 
        
            <Navbar />
<main>
<div className="wrapper">
  <div className="fixed bottom-0 z-30 flex h-screen w-full items-center justify-center bg-theme" style={{ transform: "scaleY(0) translateZ(0)" }} /> 
  <div className="relative mb-8 md:mb-16 ">
          <div className="my-24 flex justify-center md:mt-40">
                <span>
                    <h1 className="text-4xl font-bold uppercase md:text-5xl">
                        About <br/>Ideosphere
                    </h1>
                </span>
            </div>
        <div className="grid grid-cols-1 gap-8 px-8 md:grid-cols-2 md:px-16 lg:grid-cols-3">
        <div className="relative md:first:col-span-2 lg:first:col-span-1">
          <Overview title='Purpose' content='To advance African Businesses and Interests by engaging key audiences.' />
        </div>
        <div className="relative md:first:col-span-2 lg:first:col-span-1">
             <Overview title='Vission' content='To be Africas leading Strategic Communications Consultancy.' />
        </div>
        <div className="relative md:first:col-span-2 lg:first:col-span-1">
            <Overview title='Mission' content='To initiate and execute intelligent communication strategies that advance African Businesses and Interests.' />
        </div>
    </div>
    <div className='grid grid-cols-mobile md:grid-cols-standard'>
       <div className="col-[2] space-y-4 md:text-center" />
        <div className="relative col-span-full my-8 h-96 w-full bg-black md:h-[700px] lg:h-[900px]">
          <img alt="Brand Positioning" src={about}  className="object-cover" style={{position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent'}} />
        </div>

        <div className="col-[2] md:text-center">
            <span>
                <p>Ideosphere is a strategic communications advisory firm that believes nothing is more important than effective communication when it comes to influencing perception, driving value, and protecting reputation. Over the years, we have enabled organizations to integrate their disparate messaging efforts; created and distributed communications that, while different in style and purpose, have an inner coherence. Our decades of expertise and integrated approach have helped us to provide a full range of services, across industry sectors and global markets, allowing us to offer effective counsel and programs for multinational corporations, private companies, government institutions, and high-profile individuals on their most pressing political, social and business opportunities and challenges.
                </p>
            </span>
            <span>
                <p className="mt-4">
                Our integrated approach based on decades of experience at state, national and international levels is the key to our client's success. By combining intelligent strategy with a mix of public relations, advertising, earned and paid media, brand management, government affairs, and other range of strategies into a comprehensive, creative communications portfolio, Ideosphere delivers a layered, in-depth series of solutions that cover all strategic bases. Our 1,000 people in more than 20 offices provide strategic communications advice to help clients manage their overall positioning and specific events affecting their reputation, business, and market value.


                </p>
            </span>
        </div>
        <div className="col-[2] mt-16 text-center text-3x1 font-bold uppercase md:text-4x1">
            <span>
                <p>Our Approach</p>
            </span>
        </div>
        <div className="col-span-full mt-8 mb-8 grid grid-cols-1 sm:grid-cols-2 md:mb-16 lg:grid-cols-4">

            <Aboutthem imgsource={about01} name="Gather Information" detail="We apply a diligent, holistic approach to gathering information that will inform strategy."  />

            <Aboutthem imgsource={about02} name="Identify Key Stakeholders" detail="We identify key internal and external audiences and their “What about me?” issues."  />

            <Aboutthem imgsource={about03} name="Develop Narrative" detail="We develop concise, compelling, and empathetic narratives to advance client objectives."  />

            <Aboutthem imgsource={about04} name="Execute Strategy" detail="We partner with our clients to implement communications strategies and tactics that take into account external dynamics."  />
        </div>
    </div>
        <div className="mt-16 px-8 md:px-16">
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
</main>
       

        

            <Footer />

    
        
</>
     );
}

export default About;