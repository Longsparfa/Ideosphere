import React from 'react';

import { Navbar, Footer } from '../components';

const TheRightWay = () => {
    return ( 
<>
<Navbar />
<main />
            <div className="wrapper">
                <div className="fixed bottom-0 z-30 flex h-screen w-full items-center justify-center bg-theme" style={{ transform: "scaleY(0) translateZ(0px)" }}></div>
                <div className="relative mb-8 md:mb-16">
                    <div className="my-24 flex justify-center md:mt-40">
                        <span style={{ opacity: 1, transform: "translateY(0%) translateZ(0px)" }}>
                            <h1 className="text-4x1 font-bold uppercase md:text-5x1">
                                Strategic
                                <br />
                                Insights</h1>
                        </span>
                    </div>


                    <div className='grid grid-cols-mobile md:grid-cols-standard'>
                        <div className="relative col-span-full h-[500px] w-full bg-black">
                            <img src="brand-positioning-definition.jpg" alt="Brand Positioning Definition" />
                        </div>
                        <div className="col-[2]">
                                <h1 className="mt-8 text-center text-3xl font-bold leading-tight md:text-4xl md:leading-normal">The Right Way to Communicate Risk</h1>
                                <p className="mt-4">Most organizations can cope with straightforward bad news, and so can most people. We absorb the shock, and move on. But what happens when we don’t know how bad the news actually is?</p>
                                <p className="mt-4">When it comes to crises, the news companies must deliver is often potential bad news. How should a technology company react when it learns that it might have suffered a breach of your data, or a supermarket discovers it might have sold you contaminated lettuce, or a medical device maker learns that patients may have a defective hip replacement? Communicating about uncertainty — what people call ‘risk communications’ in practice — has become one of the most important challenges faced by anyone who needs to convey or consume information.</p>
                                <p className="mt-4">Risk communications are more important than ever during the current pandemic. Scientists, policy-makers, and companies alike are uncertain of many basic facts about Covid-19 with crucial implications for personal and societal decisions. How infectious is this new virus? How likely is it to kill people? What will be its long-term economic, social, and cultural consequences?</p>
                                <p className="mt-4">Even before Covid-19 hit, communications were increasingly becoming an important part of corporate and organizational management. Consider the following scenario involving a data privacy violations: A company discovers that sensitive data about a user is exposed in an unencrypted database for 24 hours. Has anyone accessed it? If so, what can they do with it right now? What will they be able to do with it five years from now, with machine learning techniques that will be available at that time? The answers are typically, we don’t really know. That is not an assessment that most organizations or individuals know how to deliver in an effective way. This has major consequences for individual firms and for firms collectively. The tech sector, in particular, has suffered a large and growing trust deficit with users, customers, and regulators, in part because tech companies struggle to communicate what they do and do not know about the side effects of their products in ways that are transparent and meaningful.</p>
                                <p className="mt-4">When we talked to experts across eight industry sectors, we uncovered a common dilemma: firms facing the question of whether and how to communicate risk often err too far in either direction. When organizations alert their customers to every potential risk, they create notification fatigue. Customers tend to tune out after a short while, and firms lose an opportunity to strengthen a trust relationship with the subset of customers who really might have been at most risk.</p>
                                <p className="mt-4">When firms do the opposite — for example by waiting too long to communicate in an effort to shield users from unnecessary worry — there is also a price. Customers interpret time lags as incompetence, or worse, as obfuscation and protection of corporate reputations at the expense of protecting customers. The more mis-steps firms make in either direction, the greater the trust deficit becomes, and the harder it is to thread the needle and get the communications right.</p>
                                <p className="mt-4">To make matters worse, individual firms have a collective effect when they communicate about uncertainty with customers and other stakeholders. The average citizen and customer is the target of many such communications coming from a variety of sources – with a cumulative impact on notification fatigue and ultimately the level of ambient trust between firms and the public. It’s an ugly bundle of negative externalities that compound an already difficult problem.</p>
                                <p className="mt-4">We believe it doesn’t have to continue this way. Decision science and cognitive psychology have produced some reliable insights about how people on both sides of an uncertainty communication can do better.</p>
                                <p className="mt-4">The inherent challenge for risk communicators is people’s natural desire for certainty and closure. An experimental Russian roulette game illustrates this most poignantly: forced to play Russian roulette with a 6-chamber revolver containing either 1 bullet or 4 bullets, most people would pay a lot more to remove the single bullet in the first instance than to remove a single bullet in the second instance (even though the risk reduction is the same). Kahneman and Tversky called this “the certainty effect,” and it explains why zero-deductible insurance policies are over-priced and yet people still buy them.</p>
                                <p className="mt-4">But while they don’t like it, people can process uncertainty, especially if they are armed with some standard tools for decision making. Consider the “Drug Facts Box,” developed by researchers at Dartmouth.</p>
                                <p className="mt-4">As far back as the late 1970s, behavioral scientists criticized the patient package inserts that were included with prescription drugs as absurdly dense and full of jargon. The drug facts box (developed in the 1990s) reversed the script. It built on a familiar template from people’s common experience (the nutrition fact box that appears on food packaging) and was designed to focus attention on the information that would directly inform decision-making under uncertainty. It uses numbers, rather than adjectives like ‘rare,’ ‘common,’ or ‘positive results.’ It addresses risks and benefits, and in many cases compares a particular drug to known alternatives. Importantly, it also indicates the quality of the evidence to-date. It’s not perfect, but research suggests that it works pretty well, both in extensive testing with potential users through randomized trials and in practice where it has been shown to improve decision making by patients.</p>
                                <p className="mt-4">So why aren’t basic principles from the science of risk communications being applied more widely in technology, finance, transportation, and other sectors? Imagine an “Equifax data breach fact box” created to situate the 2017 data-breach incident and the risks for customers. The fact box could indicate whether the Equifax breach was among the 10 largest breaches of the last 5 years. It would provide a quantitative assessment of the consequences that follow from such breaches, helping people assess what to expect in this case. For example: “In the last five data breaches of over 100 million records, on average 3% of people whose records were stolen reported identity theft within a year.”</p>
                                <p className="mt-4">Or, imagine a “Deepwater Horizon fact box,” that listed for the public the most important potential side effects of oil spills on marine and land ecosystems, and a range for estimating their severity. We’ve come to the view that these two examples and countless others didn’t happen that way, largely because most people working in communications functions don’t believe that users and customers can deal reasonably with uncertainty and risk.</p>
                                <p className="mt-4">Of course, the Equifax breach and Deepwater Horizon oil spills are extreme examples of crisis-level incidents, and in the Equifax case, disclosure was legally mandated. But firms make decisions everyday about whether and how to communicate about less severe incidents, many of which do not have mandated disclosure requirements. In the moment, it’s easy for companies to default to a narrow response of damage control, instead of understanding risk communications as a collective problem, which, when done well, can enhance trust with stakeholders.</p>
                                <p className="mt-4">To start to repair the trust deficit will require a significant retrofit of existing communications practices. Here are three places to start.</p>
                                <p className="mt-4">
                                    <em className="italic">Stop improvising</em>
                                    . Firms will never be able to reduce uncertainty to zero, but they can commit to engaging with customers around uncertainty in systematic, predictable ways. A standard framework would provide an empirically proven, field-tested playbook for the next incident or crisis. Over time, it would set reasonable expectations among users and customers for what meaningful and transparent communication looks like under uncertainty, help increase the public’s risk fluency, and limit the damage inflicted by nefarious actors who prey on the public’s anxieties about risk. Ideally, this standard would be created by a consortium of firms across different sectors. Widespread adoption by organizations would level the playing field for all firms, and raise the bar for smaller firms that lack the required competencies in-house.
                                </p>
                                <p className="mt-4">
                                    <em className="italic">Change the metric for success, and measure results</em>
                                    . Avoiding negative press should not be the primary objective for firms that are faced with communicating uncertainty. In the short term, the primary goal should be to equip customers with the information they need to interpret uncertainty and act to manage their risk. In the long term, the goal should be to increase levels of ambient trust and to reduce risks where possible. Communicators need to demonstrate that what they are doing is working, by creating yardsticks that rigorously measure the effectiveness of communications against both these short and long term goals.
                                </p>
                                <p className="mt-4">
                                    <em>Design for risk communications from the beginning</em>
                                    . Consider what it would mean if every product were built from the start with the need to communicate uncertainty about how it will perform when released into the wild — that is, “risk communication by design.” If risk communications were pushed down through organizations into product development, we’d see innovation in user experience and user interface design for communicating about uncertainty with customers. We’d see cognitive psychology and decision science skills integrated into product teams. And we’d see feedback loops built directly into products as part of the design process, telling firms whether they are meaningfully improving customers’ ability to make informed choices.
                                </p>
                                <p className="mt-4">People are naturally inclined to prefer certainty and closure, but in a world where both are in short supply, trust deficits aren’t an inevitable fact of nature. We’re optimistic that organizations can do better collectively by making disciplined use of the existing science.</p>
                            </div>
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

export default TheRightWay;