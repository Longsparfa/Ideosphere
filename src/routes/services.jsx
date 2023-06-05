import React from 'react';

import { Navbar, Article, Footer } from '../components';
import { services01, services02, services03, services04, services05, services06, services07, services08 } from '../assets/index';
import { IoIosAdd } from 'react-icons/io';


const ServicesOverview = () => {
    return ( 
        <>
          <Navbar />
          <div className="wrapper">
                <div className="fixed bottom-0 z-30 flex h-screen w-full items-center justify-center bg-theme" style={{transform: "scaleY(0) translateZ(0)" }}></div>
                <div className="relative mb-8 md:mb-16">
                        <div className="my-24 flex justify-center md:mt-40">
                            <span>
                                <h1 className="text-4xl font-bold uppercase md:text-5xl">
                                    Services <br/>Overview
                                </h1>
                            </span>
                        </div>
                        <div className='grid grid-cols-mobile md:grid-cols-standard'>
                    
                            <div className="col-[2]">
                                <span>
                                    <p className="md:text-center">At Ideosphere, our strategic consulting is backed by real-world results. We don &#x27;t just talk the talk - we walk the walk. With our expertise, we can help you reach your goals and ensure that your brand is properly positioned to maximize its potential. Let us help you make a meaningful impact with your communication and branding strategy today.</p>
                                </span>
                            </div>
                            <div className="col-span-full my-8 grid grid-cols-1 sm:grid-cols-2 md:my-16 md:grid-cols-4">
                                <div className="relative h-96 overflow-y-hidden md:h-[28rem]">
                                    <img alt="services01" src={services01}  className="object-cover"  style={{position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent'}} />
                                    <div className="relative h-full w-full">
                                        <div className="absolute bottom-0 w-full space-y-3 bg-gradient-to-b from-black/25 via-black/75 to-black px-4 py-2 text-white transition-transform duration-200 ease-in-out translate-y-[calc(100%-2.5rem)]">
                                            <div className="flex items-center justify-between">
                                                <span className="font-semibold uppercase">Transaction Communications</span>
                                                <button className="ease transform transition duration-200">
                                                  {IoIosAdd}
                                                </button>
                                            </div>
                                            <p>From initial public offerings and negotiated transactions to take-private deals, bankruptcy filings or even hostile transactions, we understand the critical issues. Such mission-critical occasions occur only rarely in the lives of most corporations and require seasoned communications expertise to help structure the communications components of these processes ensuring these deals work out.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative h-96 overflow-y-hidden md:h-[28rem]">
                                    <img alt="services02" src={services02}  className="object-cover"  style={{position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent'}} />
                                    <div className="relative h-full w-full">
                                        <div className="absolute bottom-0 w-full space-y-3 bg-gradient-to-b from-black/25 via-black/75 to-black px-4 py-2 text-white transition-transform duration-200 ease-in-out translate-y-[calc(100%-2.5rem)]">
                                            <div className="flex items-center justify-between">
                                                <span className="font-semibold uppercase">Proxy Solicitation</span>
                                                <button className="ease transform transition duration-200">
                                                   {IoIosAdd}
                                                </button>
                                            </div>
                                            <p>Ideosphere provides proxy solicitation services to rally shareholder support at AGMs, General Meetings, and as part of mergers and acquisition (M &amp;A) activity to secure favourable voting in situations requiring shareholder approval. Together with our clients and their advisers, we develop communication strategies that inspire positive shareholder sentiment and voting outcomes.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative h-96 overflow-y-hidden md:h-[28rem]">
                                    <img alt="services03" src={services03}  className="object-cover"  style={{position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent'}} />
                                    <div className="relative h-full w-full">
                                        <div className="absolute bottom-0 w-full space-y-3 bg-gradient-to-b from-black/25 via-black/75 to-black px-4 py-2 text-white transition-transform duration-200 ease-in-out translate-y-[calc(100%-2.5rem)]">
                                            <div className="flex items-center justify-between">
                                                <span className="font-semibold uppercase">Investors Relations</span>
                                                <button className="ease transform transition duration-200">
                                                   {IoIosAdd}
                                                </button>
                                            </div>
                                            <p>Achieving cut-through in a competitive investor environment is crucial to delivering stakeholder/shareholder value. The Ideosphere Investor Relations team has a depth of experience in financial markets and a network of global contacts to help clients protect and enhance enterprise value through financial storytelling and best-practice IR programming. Our extensive history and worldwide distribution media outlets ensure maximum communication between your company and a vast targeted audience of investors and decision-makers.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative h-96 overflow-y-hidden md:h-[28rem]">
                                    <img alt="services04" src={services04}  className="object-cover"  style={{position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent'}} />
                                    <div className="relative h-full w-full">
                                        <div className="absolute bottom-0 w-full space-y-3 bg-gradient-to-b from-black/25 via-black/75 to-black px-4 py-2 text-white transition-transform duration-200 ease-in-out translate-y-[calc(100%-2.5rem)]">
                                            <div className="flex items-center justify-between">
                                                <span className="font-semibold uppercase">Corporate (Re) Positioning</span>
                                                <button className="ease transform transition duration-200">
                                                   {IoIosAdd}
                                                </button>
                                            </div>
                                            <p>Positioning an organization appropriately in its marketplace is the lynchpin for a successful future and continued growth. We work closely with our clients in developing and managing corporate positioning programs to shape an individual’s or institution’s image among its key constituencies.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative h-96 overflow-y-hidden md:h-[28rem]">
                                    <img alt="services05" src={services05}  className="object-cover"  style={{position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent'}} />
                                    <div className="relative h-full w-full">
                                        <div className="absolute bottom-0 w-full space-y-3 bg-gradient-to-b from-black/25 via-black/75 to-black px-4 py-2 text-white transition-transform duration-200 ease-in-out translate-y-[calc(100%-2.5rem)]">
                                            <div className="flex items-center justify-between">
                                                <span className="font-semibold uppercase">CEO Communications</span>
                                                <button className="ease transform transition duration-200">
                                                     {IoIosAdd}
                                                </button>
                                            </div>
                                            <p>The CEO is the leader of the business and as such, is expected to be an excellent communicator. This means more than just being eloquent, it means delivering meaningful content leveraging every available media. Ideosphere works with top CEOs and heads of key government institutions to deliver excellent communication programs that will advance their bottom-line.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative h-96 overflow-y-hidden md:h-[28rem]">
                                    <img alt="services06" src={services06}  className="object-cover"  style={{position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent'}} />
                                    <div className="relative h-full w-full">
                                        <div className="absolute bottom-0 w-full space-y-3 bg-gradient-to-b from-black/25 via-black/75 to-black px-4 py-2 text-white transition-transform duration-200 ease-in-out translate-y-[calc(100%-2.5rem)]">
                                            <div className="flex items-center justify-between">
                                                <span className="font-semibold uppercase">Litigation Communications</span>
                                                <button className="ease transform transition duration-200">
                                                   {IoIosAdd}
                                                </button>
                                            </div>
                                            <p>Our strategic communications team partners with litigation firms, public/private organizations and individuals helping defend and enhance corporate and individual perceptions/reputations amid complex disputes and litigation matters. More than 50 law firms in Africa have called upon us to advise on a wide range of litigation and reputational matters.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative h-96 overflow-y-hidden md:h-[28rem]">
                                    <img alt="services07" src={services07}  className="object-cover"  style={{position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent'}} />
                                    <div className="relative h-full w-full">
                                        <div className="absolute bottom-0 w-full space-y-3 bg-gradient-to-b from-black/25 via-black/75 to-black px-4 py-2 text-white transition-transform duration-200 ease-in-out translate-y-[calc(100%-2.5rem)]">
                                            <div className="flex items-center justify-between">
                                                <span className="font-semibold uppercase">Crisis and Risk Communications</span>
                                                <button className="ease transform transition duration-200">
                                                   {IoIosAdd}
                                                </button>
                                            </div>
                                            <p>We are well accustomed to stepping into fast-moving, pressure situations where the reputations of corporations, governments and executives are put into question and the value of major brands is at stake. We help clients manage serious issues and crisis situations by working with them to develop and execute a clear and strategic communications plan.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative h-96 overflow-y-hidden md:h-[28rem]">
                                    <img alt="services08" src={services08}  className="object-cover"  style={{position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent'}} />
                                    <div className="relative h-full w-full">
                                        <div className="absolute bottom-0 w-full space-y-3 bg-gradient-to-b from-black/25 via-black/75 to-black px-4 py-2 text-white transition-transform duration-200 ease-in-out translate-y-[calc(100%-2.5rem)]">
                                            <div className="flex items-center justify-between">
                                                <span className="font-semibold uppercase">Media Relations</span>
                                                <button className="ease transform transition duration-200">
                                                  {IoIosAdd}
                                                </button>
                                            </div>
                                            <p>As media relations experts, we have a strong track record of getting our clients’ messages on the radar screens of journalists and generating positive media coverage. Over the years, our team has developed solid relationships with journalists working at national and regional newspapers, magazines, TV stations, radio stations, and online publications, as well as trade outlets.</p>
                                        </div>
                                    </div>
                                </div>
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