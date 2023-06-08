import React, { useState } from 'react';

import { Navbar, Article, Footer } from '../components';
import { abubakarAbdullahi, kechiOkpala, paulEnejo, musaMohammed } from '../assets';
import { IoIosAdd, IoIosClose } from 'react-icons/io';


const Experts =  ({ imgsource, name, detail }) => {
    const [toggleParagraph, setToggleParagraph] = useState(false);


  return (
    <div class="relative h-96 overflow-y-hidden md:h-[28rem]">
          <img 
             src={imgsource} 
             alt="Abubakar-Abdullahi"
             className="object-cover"
             style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                color: 'transparent'
                }}
            />  
            
              <div class="relative h-full w-full">
              <div
          class={`absolute bottom-0 ${
            toggleParagraph && 'bottom-[6rem] transition-all duration-500'
          } w-full  bg-gradient-to-b from-black/25 via-black/75 to-black
           text-white h-[2rem] duration-500 ease-in-out translate-y-[calc(100%-2.5rem)]`}
        >
          <div class="flex items-center justify-between">
            <span class="font-semibold uppercase text-[1.2rem] items-center justify-center">
              {name}
            </span>
            <button
              class="ease transform transition duration-200"
              onClick={() => setToggleParagraph(!toggleParagraph)}
            >
              {toggleParagraph ? (
                <IoIosClose size={35} />
              ) : (
                <IoIosAdd size={35} />
              )}
            </button>
          </div>
                          <p
                          className="transition-all h-[100vh] duration-500  bg-gradient-to-b from-black/25 via-black/75 to-black
                          "
                          >{detail}</p>
                  </div>
             </div>
    </div>
  );
  
}







const ResidentExperts = () => {
    return ( 
        <>
  <Navbar />
  <main>
                <div class="wrapper">
                    <div class="fixed bottom-0 z-30 flex h-screen w-full items-center justify-center bg-theme" style={{ transform: "scaleY(0) translateZ(0)" }} ></div>
                    <div class="relative mb-8 md:mb-16">
                        <div class="my-24 flex justify-center md:mt-40">
                            <span>
                                <h1 class="text-4xl font-bold uppercase md:text-5xl">
                                    Resident <br/>Experts
                                </h1>
                            </span>
                        </div>
                        <div class="">
                            <div class="col-[2]">
                                <span>
                                    <p class="md:text-center">Ideosphere draws on an army of the best professionals with a broad diversity of educational and professional backgrounds—all bound by a shared passion for problem-solving. Our team members have prior experience as reporters, lawyers, economists, television producers, campaign operatives and crisis professionals. As a result, the firm brings a unique perspective to a large portfolio of clients across all industries and institutions.</p>
                                </span>
                              </div>
                              <div class="col-span-full my-8 grid grid-cols-1 sm:grid-cols-2 md:my-16 md:grid-cols-4 md:gap-0">
                                 <Experts imgsource={abubakarAbdullahi} name="Abubakar Abdullahi" detail="Abubakar Abdullahi is a dynamic and energetic communications executive with strategic, solutions-driven experience. For over a decade, Abubakar has provided political and strategic counsel to executives of Fortune 500 companies, elected officials, and governmental and nonprofit organizations. Over the years, he has consistently demonstrated the ability to build value that differentiates. He is highly knowledgeable regarding the Nigerian terrain, having worked, schooled and lived in 33 states of the Federation." />

                                 <Experts imgsource={kechiOkpala} name="Kechi Okpala" detail="Abubakar Abdullahi is a dynamic and energetic communications executive with strategic, solutions-driven experience. For over a decade, Abubakar has provided political and strategic counsel to executives of Fortune 500 companies, elected officials, and governmental and nonprofit organizations. Over the years, he has consistently demonstrated the ability to build value that differentiates. He is highly knowledgeable regarding the Nigerian terrain, having worked, schooled and lived in 33 states of the Federation." />

                                 <Experts imgsource={paulEnejo} name="Paul Enejo" detail="Paul Enejo is a shareholder and Principal Partner at Ideosphere and leads investor relations and public affairs practices. With more than 12 years of communication experience in Nigeria and internationally, Paul has managed corporate and investor communication programs for a broad range of organizations in diverse markets. He is an expert in the field of strategic corporate communication specializing in investor relations, financial communication and issues management and is well-regarded within the finance industry." />
                                 
                                 <Experts imgsource={musaMohammed} name="Musa Mohammed" detail="Musa Mohammed leads Ideosphere’s dedicated International Projects practice, with 13 years of experience in the resource sector throughout the Middle East. Since joining Ideosphere in 2010, Musa has provided issues and crisis management support to a broad cross-section of local, national and international organizations. His work in this area is complemented by specialist skills in the areas of corporate positioning and strategy, communication training, internal/change communication and stakeholder engagement." />
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

export default ResidentExperts;