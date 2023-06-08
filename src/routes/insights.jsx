import React from 'react';

import Navbar from '../components/navbar/Navbar';
//import Article from '../components/article/Article';
import Footer from '../components/footer/Footer';
import { Link } from 'react-router-dom';


const Paragraphs = ({id, title, content}) => {
    return ( 
        <>
          <div className="group relative">
            <div className="z-[1] h-0.5 w-full origin-[50%_0%] bg-black"></div>
            <div className="flex h-60 flex-col justify-between pt-2">
                <div className="space-y-4">
                    <Link to={id}>
                        <h2 className="text-2xl font-black uppercase tracking-wide lg:w-4/5 lg:text-3xl">{title}</h2>
                    </Link>
                    <p>{content}</p>
                </div>
                <div>
                <Link className="text-xs font-medium uppercase md:text-sm" to={id}>Read more</Link>
                </div>
            </div>
          </div>
            
        </>
     );
}




const StrategicInsights = () => {
    return ( 
    <>
    <Navbar />
    <main>
        <div className="wrapper">
            <div className="fixed bottom-0 z-30 flex h-screen w-full items-center justify-center bg-theme" style={{transform: "scaleY(0) translateZ(0px)" }}></div> 
            <div className="relative mb-8 md:mb-16">
                 <div className="my-24 flex justify-center md:mt-40">
                    <span style={{ opacity: 1, transform: "translateY(0%) translateZ(0px)" }}>
                       <h1 className="text-4x1 font-bold uppercase md:text-5x1">
                        Strategic
                       <br /> 
                       Insights</h1>
                    </span>
                    
                 </div>
                 <div className=''>
                    <div className="col-[2]">
                        <span style={{ opacity: 1, transform: "translateY(0%) translateZ(0px)" }}>
                            <p className="md:text-center">Explore our collection of thought-provoking think pieces, written by our friends and experts. We've carefully curated this list to ensure that there is no limit to the information you can access. Discover new perspectives and ideas to expand your knowledge.</p>
                        </span>
                    </div>
               </div>
               <section className="my-8 px-8 md:my-16 md:px-16">
                  <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2 md:gap-y-8 lg:grid-cols-3">

            

                    
                    
                
                    <Paragraphs title="Communication Strategy To win Litigation" content="In the face of a potential dispute, a communications strategy needs to be as well-planned and disciplined as the litigation strategy." id="/insights/communication-strategy-to-win-litigation" />
                    
                    <Paragraphs title="Corporate Culture Depends on What Your CEO Says" content="CEOs are unique personas and the face of their companies and employees." id="/insights/corporate-culture-depends-on-what-your-ceo-says" />
                    
                    <Paragraphs title="Your Business Needs Change - See Why" content="In today's business environment, change is the new normal." id="/insights/your-business-needs-change" />
                    
                    <Paragraphs title="The Right way to Communicate risk" content="Most organizations can cope with straightforward bad news, and so can most people. We absorb the shock, and move on. But what happens when we don’t know how bad the news actually is?" id="/insights/the-right-way-to-communicate-risk" />
                    
                    <Paragraphs title="How to win with alternatives" content="Ask leaders how they will respond to a crisis or a massive new opportunity, and they often will tell you they already know what to do." id="/insights/how-to-win-with-alternatives" />
                    
                    <Paragraphs title="You need both grassroots and grasstops" content="There’s no getting around the fact that creating change is difficult. If you have ever tried to change an individual’s mind or preferences, you can imagine the difficulty it takes to change a group of people, or a commonly accepted political stance." id="/insights/you-need-both-grassroots-and-grasstops" />

    </div>
</section>
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

export default StrategicInsights;
