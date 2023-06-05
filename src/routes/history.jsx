import React from 'react';

import { Navbar, Article, Footer } from '../components';
import { cbn, ecowas, policeIgp, togo, sec, businessday, nfvcb, eNaira, nspm, titanTrust, nexim, pencom, bayelsaJazzFestival, wef, nirsal, infracorp, cbnCenef, mangoAm } from '../assets';



const Logos =  ({ imgsource }) => {
    return (
    <div className="flex h-36 w-full items-center justify-center">
       <div className="relative h-28 w-28 rounded-full ">
            <img src={imgsource} alt="logo of cbn" className="object-cover" style={{position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent'}} />
         </div>
    </div>
    );
    
  }









const DeliveryHistory = () => {
    return ( 
<>
 <Navbar />
 <main>
                <div className="wrapper">
                    <div className="fixed bottom-0 z-30 flex h-screen w-full items-center justify-center bg-theme" style={{ transform: "scaleY(0) translateZ(0)" }} ></div>
                    <div className="relative mb-8 md:mb-16">
                        <div className="my-24 flex justify-center md:mt-40">
                            <span>
                                <h1 className="text-4xl font-bold uppercase md:text-5xl">
                                   Delivery <br/>History
                                </h1>
                            </span>
                        </div>
                        <div className="grid grid-cols-mobile md:grid-cols-standard">
                            <div className="col-[2]">
                                <span>
                                    <p className="md:text-center">We focus on delivering tangible, measurable results leading to a superior return on investment for our clients. Since the founding of the company in 2010, Ideosphere has been involved in hundreds of transactions with a total value of around $50M. Most of our high-profile clients prefer to remain confidential and we respect their wishes.</p>
                                </span>
                              </div>
                              <div className="mt-8 grid grid-cols-2 gap-8 px-8 sm:grid-cols-2 md:grid-cols-3 md:px-16 lg:grid-cols-6">
                                 <Logos imgsource={cbn}  />

                                 <Logos imgsource={ecowas} />

                                 <Logos imgsource={policeIgp} />
                                 
                                 <Logos imgsource={togo} />

                                 <Logos imgsource={sec} />

                                 <Logos imgsource={businessday} />

                                 <Logos imgsource={nfvcb} />

                                 <Logos imgsource={eNaira} />

                                 <Logos imgsource={nspm} />

                                 <Logos imgsource={titanTrust} />

                                 <Logos imgsource={nexim} />

                                 <Logos imgsource={pencom} />

                                 <Logos imgsource={bayelsaJazzFestival} />

                                 <Logos imgsource={wef} />
                                 
                                 <Logos imgsource={nirsal} />

                                 <Logos imgsource={infracorp} />

                                 <Logos imgsource={cbnCenef} />

                                 <Logos imgsource={mangoAm} />

                              </div>
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
  </main>
  <Footer />
</>
    
        
     );
}

export default DeliveryHistory;