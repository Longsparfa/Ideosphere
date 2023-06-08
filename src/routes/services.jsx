import React, { useState } from 'react';

import { Navbar, Article, Footer } from '../components';
import { services01, services02, services03, services04, services05, services06, services07, services08 } from '../assets/index';
import { IoIosAdd, IoIosClose } from 'react-icons/io';




const Services =  ({ imgsource, name, detail }) => {
    const [toggleParagraph, setToggleParagraph] = useState(false);


  return (
    <div class="relative h-96 overflow-y-hidden md:h-[28rem]">
          <img 
             src={imgsource} 
             alt=""
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











const ServicesOverview = () => {

    return ( 
        <>
          <Navbar />
          <div className="wrapper">
                <div className="fixed bottom-0 z-30 flex h-screen w-full items-center justify-center bg-theme" style={{ transform: "scaleY(0) translateZ(0)" }}></div>
                <div className="relative mb-8 md:mb-16">
                        <div className="my-24 flex justify-center md:mt-40">
                            <span>
                                <h1 className="text-4xl font-bold uppercase md:text-5xl">
                                    Services <br/>Overview
                                </h1>
                            </span>
                        </div>
                        <div className=''>
                    
                            <div className="col-[2]">
                                <span>
                                    <p className="md:text-center">At Ideosphere, our strategic consulting is backed by real-world results. We don &#x27;t just talk the talk - we walk the walk. With our expertise, we can help you reach your goals and ensure that your brand is properly positioned to maximize its potential. Let us help you make a meaningful impact with your communication and branding strategy today.</p>
                                </span>
                            </div>
                            <div className="col-span-full my-8 grid grid-cols-1 sm:grid-cols-2 md:my-16 md:grid-cols-4">
                                <Services imgsource={services01} name="Transaction Communications" detail="From initial public offerings and negotiated transactions to take-private deals, bankruptcy filings or even hostile transactions, we understand the critical issues. Such mission-critical occasions occur only rarely in the lives of most corporations and require seasoned communications expertise to help structure the communications components of these processes ensuring these deals work out." />


                                <Services imgsource={services02} name="Proxy Solicitation" detail="Ideosphere provides proxy solicitation services to rally shareholder support at AGMs, General Meetings, and as part of mergers and acquisition (M &amp;A) activity to secure favourable voting in situations requiring shareholder approval. Together with our clients and their advisers, we develop communication strategies that inspire positive shareholder sentiment and voting outcomes." />


                                <Services imgsource={services03} name="Investors Relations" detail="Achieving cut-through in a competitive investor environment is crucial to delivering stakeholder/shareholder value. The Ideosphere Investor Relations team has a depth of experience in financial markets and a network of global contacts to help clients protect and enhance enterprise value through financial storytelling and best-practice IR programming. Our extensive history and worldwide distribution media outlets ensure maximum communication between your company and a vast targeted audience of investors and decision-makers." />


                                <Services imgsource={services04} name="Corporate (Re) Positioning" detail="Positioning an organization appropriately in its marketplace is the lynchpin for a successful future and continued growth. We work closely with our clients in developing and managing corporate positioning programs to shape an individual’s or institution’s image among its key constituencies" />


                                <Services imgsource={services05} name="CEO Communications" detail="The CEO is the leader of the business and as such, is expected to be an excellent communicator. This means more than just being eloquent, it means delivering meaningful content leveraging every available media. Ideosphere works with top CEOs and heads of key government institutions to deliver excellent communication programs that will advance their bottom-line." />


                                <Services imgsource={services06} name="Litigation Communications" detail="Our strategic communications team partners with litigation firms, public/private organizations and individuals helping defend and enhance corporate and individual perceptions/reputations amid complex disputes and litigation matters. More than 50 law firms in Africa have called upon us to advise on a wide range of litigation and reputational matters." />


                                <Services imgsource={services07} name="Crisis and Risk Communications" detail="We are well accustomed to stepping into fast-moving, pressure situations where the reputations of corporations, governments and executives are put into question and the value of major brands is at stake. We help clients manage serious issues and crisis situations by working with them to develop and execute a clear and strategic communications plan." />


                                <Services imgsource={services08} name="Media Relations" detail="As media relations experts, we have a strong track record of getting our clients’ messages on the radar screens of journalists and generating positive media coverage. Over the years, our team has developed solid relationships with journalists working at national and regional newspapers, magazines, TV stations, radio stations, and online publications, as well as trade outlets." />

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
        
      


            <Footer />

        </>
     );
}

export default ServicesOverview;