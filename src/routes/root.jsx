import React from 'react';

import { Navbar, Article, Footer } from '../components';
import Header from '../components/header';

const Root = () => {
    return (
        <>
         
        <Navbar />
<main>   
  <div className="wrapper">
  <div className="fixed bottom-0 z-30 flex h-screen w-full items-center justify-center bg-theme" style={{transform: "scaleY(0) translateZ(0);" }} /> 
    <div className="relative mb-8 px-8 md:mb-16 md:px-16">
          
        
           <Header />

    <div>
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

export default Root;