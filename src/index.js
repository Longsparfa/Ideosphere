import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { Root, About, ServicesOverview, ResidentExperts, DeliveryHistory, StrategicInsights, ContactUs, CommStrategy, CorCulture, BusNeedsChange, HowToWin, TheRightWay, YouNeedBoth, PrivacyPolicy } from './routes/index';
import ErrorPage from './error-page';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/about",
    element: <About />,            
  },

  {
    path: "/services",
    element: <ServicesOverview />,
  },

  {
    path: "/resident-experts",
    element: <ResidentExperts />,
  },

  {
    path: "/delivery-history",
    element: <DeliveryHistory />,
  },

  {
    path: "/insights",
    element: <StrategicInsights />,
  },

  {
    path: "/insights/communication-strategy-to-win-litigation",
    element: <CommStrategy />,
  },

  {
    path: "/insights/corporate-culture-depends-on-what-your-ceo-says",
    element: <CorCulture />,
  },

  {
    path: "/insights/your-business-needs-change",
    element: <BusNeedsChange />,
  },

  {
    path: "/insights/the-right-way-to-communicate-risk",
    element: <TheRightWay />,
  },

  {
    path: "/insights/how-to-win-with-alternatives",
    element: <HowToWin />,
  },

  {
    path: "/insights/you-need-both-grassroots-and-grasstops",
    element: <YouNeedBoth />,
  },

  {
    path: "/contact",
    element: <ContactUs />,
  },

  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  

]);



const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
