
import  React from 'react';

import { Navbar, Footer } from '../components';

const CorCulture = () => {
    return ( 
<>
    <Navbar />
    <main>
            <div className="wrapper">
                <div className="fixed bottom-0 z-30 flex h-screen w-full items-center justify-center bg-theme" style={{ transform: "scaleY(0) translateZ(0px)" }}></div>
                <div className="relative mb-8 md:mb-16">
                    <div className="my-24 flex justify-center md:mt-40">
                        <span style={{ opacity: 1, transform: "translateY(0%) translateZ(0px)" }}>
                            <h1 className="text-4x1 font-bold uppercase md:text-5x1">
                                Strategic
                                <br />
                                Insights
                            </h1>
                        </span>
                    </div>


                    <div className='grid grid-cols-mobile md:grid-cols-standard'>
                        <div className="relative col-span-full h-[500px] w-full bg-black">
                            <img src="brand-positioning-definition.jpg" alt="Brand Positioning Definition" />
                        </div>
                        <div className="col-[2]">
                                <h1 className="mt-8 text-center text-3xl font-bold leading-tight md:text-4xl md:leading-normal">Corporate Culture depends on what your CEO says</h1>
                                <p className="mt-8">“CEOs are unique personas and the face of their companies and employees. CEOs are powerful. Their management team and employees respond to them, often dropping everything regardless of whether the CEO was thinking out loud or actually directing them to execute an action. In some situations, the rookie CEO does not realize or is not aware of this power and how it affects people.”</p>
                                <p className="mt-4">That first paragraph is the opening of my “introduction” section in my book, The Rookie CEO, You Can’t Make This Stuff Up! Many CEOs do not realize to what extent that their words matter and each word is scrutinized by employees, be it the management team or the lowest level of employee. Keep in mind that not all communications are verbal, so CEOs must also consider non-verbal communications because everyone is watching as well as listening!</p>
                                <p className="mt-4">Consider major points of CEO communications:</p>
                                <h2 className="my-4 text-2xl font-medium">Corporate Communications</h2>
                                <p className="mt-4">Communications spans every meeting (see this post on CEO Insights), internal and external, and becomes a core competency within the company culture. This is why CEO communications are so important. As the leader, the CEO sets the stage for how the senior leadership team and other managers will communicate. The CEO can coach those who need guidance to improve their communications skills.</p>
                                <h2 className="my-4 text-2xl font-medium">Communications that can destroy the company</h2>
                                <p className="mt-4">Poor communications are closed where the CEO shares little to no information or the information the CEO shares is ambiguous and difficult for employees to decipher. It can also be “secretive” communications where only a small number of the CEO’s circle are fully informed. An additional major point is never to lie. A CEO caught in a lie will kill the culture, damage his/her credibility and integrity, and lose complete control. Poor communications can damage culture, company reputation, employee and customer satisfaction, and can be the seed of dangerous rumors.</p>
                                <h2 className="my-4 text-2xl font-medium">Communications that can take the company to the next level</h2>
                                <p className="mt-4">Excellent CEO communications provide clarity to his/her vision, strategy, expectations, priorities, employee gratitude and recognition, and more. They use tools such as dashboards to share information on company performance and agendas and minutes with actions and owners for meetings. Employees respond when they understand what they are working on is an important part of the overall company strategy and direction and how it will impact company success.</p>
                                <p className="mt-4">The CEO needs to understand that his/her employees may not say anything directly to them if there are communications issues from the CEO fearing their relationship or their job. If you are the CEO, ask your most trusted leaders in your “1-on-1” meetings for feedback on your communications.</p>
                                <h2 className="my-4 text-2xl font-medium">Listening</h2>
                                <p className="mt-4">My final communications point is that it includes “listening” as a key element. You can’t have a core competency of communications without excellent listening skills. In my experience, the best CEOs I have worked for ask a lot of questions and listens to the answers. The CEO is always listening and paying attention, regardless of how busy they are at the time. I don’t mean have “eyes and ears” listening for them and passing the information back to them second hand, but the CEO must do this him/her self. Why? Information and context of information are often translated incorrectly which can negatively impact people and provide the wrong message to the CEO</p>
                                <h2 className="my-4 text-2xl font-medium">Summary</h2>
                                <ol className="ml-4 mt-4 list-decimal">
                                    <li>Communicate openly, honestly, directly, frequently – it is respected and appreciated</li>
                                    <li>Communication is more than words, it includes listening and non-verbal emotions – people are watching</li>
                                    <li>A relatively trivial issue may be brought to the forefront of how the organisation is perceived by the public.</li>
                                    <li>Every Word is important – people are listening</li>
                                </ol>
                                <p className="mt-4">Thank you for stopping by! Do you have any good CEO Communications stories?</p>
                            </div>
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

export default CorCulture;