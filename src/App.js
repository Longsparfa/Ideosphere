import React from 'react';



import { Home, About, ServicesOverview, ResidentExperts, DeliveryHistory, StrategicInsights, ContactUs, CommStrategy, CorCulture, BusNeedsChange, HowToWin, TheRightWay, YouNeedBoth } from './components';


import {  
  Route,
  Link,
  Routes
} from 'react-router-dom'; 



const App = () => {
     return (
    <>
      
        <div>
          <Routes>
          <Route 
                  path="/"
                  element={
                    <Home />
                    
                  }
                  
                  
                  />

            <Route 
                path="/about"
                element={
                  <About />
                } 
                
              />
              
            
            <Route 
                path="/services"
                element={
                  <ServicesOverview />
                }
                 
              />
              
            
            <Route 
                path="/resident-experts"
                element={
                  <ResidentExperts />
                } 
                
                />
              
            
            <Route 
                path="/delivery-history"
                element={
                  <DeliveryHistory />
                } 
                
              />
              
            
            <Route 
                path="/insights"
                element={
                  <StrategicInsights />
                } 
                
              />
              
            
            <Route 
                path="/insights/communication-strategy-to-win-litigation"
                element={
                  <CommStrategy />
                }
                
                
              />
              
            
            <Route 
                path="/insights/corporate-culture-depends-on-what-your-ceo-says"
                element={
                  <CorCulture />
                } 
                
              />
              
            
            <Route 
                path="/insights/your-business-needs-change" 
                element={
                  <BusNeedsChange />
                }
                
              />
              
            
            <Route 
                path="/insights/the-right-way-to-communicate-risk"
                element={
                  <TheRightWay />
                }
                exact
                />
              
            
            <Route 
                path="/insights/how-to-win-with-alternatives"
                element={
                  <HowToWin />
                } 
                exact
                />
              
            
            <Route 
              path="/insights/you-need-both-grassroots-and-grasstops"
              element={
                <YouNeedBoth />
              } 
              exact

              />
              
            
            <Route 
                 path="/contact"
                 element={
                  <ContactUs />
                }  
                 
                 />
              

      </Routes>
              
            
            
      
        </div>
      


    </>
      
     );   

}



export default App;

