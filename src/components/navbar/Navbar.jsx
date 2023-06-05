import { useState } from 'react';




import { navLinks } from '../../constants';
import { Link } from 'react-router-dom';




/*
const Menu = () => {
    return (
        <>
        <div class="fixed left-0 top-0 right-auto bottom-auto h-screen w-full bg-theme px-8 py-16 -translate-y-full z-40 transition-[transform,opacity] duration-[500ms] ease-in-out md:px-16 md:py-24">
          <div class="mt-28 flex h-full w-full transform flex-col items-center font-bold text-white transition duration-[500ms] ease-out -translate-y-full motion-reduce:transition-none md:items-center">
                <div class="flex w-full flex-col items-center gap-4 py-2 text-2xl uppercase md:py-4 md:text-4xl">
                    <a class="border-b-2 border-white px-4 pb-1" href="/about">About Ideosphere</a>
                    <a class="border-b-2 border-white px-4 pb-1" href="/services">Services Overview</a>
                    <a class="border-b-2 border-white px-4 pb-1" href="/resident-experts">Resident Experts</a>
                    <a class="border-b-2 border-white px-4 pb-1" href="/delivery-history">Delivery History</a>
                    <a class="border-b-2 border-white px-4 pb-1" href="/insights">Strategic Insights</a>
                    <a class="border-b-2 border-white px-4 pb-1 md:hidden" href="/contact">Contact Us</a>
                </div>
            </div>
        </div>
        </>
    );
};
*/


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

   
    




    return ( 
        <>
    <nav className='w-full'>
        <div className='h-[120px] md:h-[124px]'>
            <div className='fixed z-50 flex w-full items-center px-8 py-8 top-0 bg-white menu md:px-16'>
                <div className='mt-2 grow basis-0 md:mt-3'>
                        <div className='w-fit'>
                                <Link className='w-fit' to={"/"}>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="73.4985mm" height="13.2111mm" version="1.1" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 1180.16 212.13" xmlnsXlink="http://www.w3.org/1999/xlink" className="h-12 w-32 md:w-40"><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><g id="_1744451745072"><polygon className="fill-theme transition-colors duration-[200] ease-linear" fill-rule="nonzero" points="37.12,121.73 37.12,1.19 7.45,1.19 7.45,121.73 "></polygon>
                                <path className="fill-theme transition-colors duration-[200] ease-linear" fill-rule="nonzero" d="M168.93 61.46c0,-18.96 1.53,-34.33 -12.55,-48.41 -8.31,-8.31 -20.01,-11.87 -32.55,-11.87l-44.76 0 0 120.55 44.76 0c12.55,0 24.25,-3.56 32.55,-11.87 14.07,-14.07 12.55,-29.45 12.55,-48.41zm-29.67 0c0,20.46 -0.85,23.68 -3.22,27.07 -2.71,4.07 -6.78,6.75 -14.24,6.75l-13.05 0 0 -67.65 13.05 0c7.46,0 11.53,2.68 14.24,6.75 2.37,3.39 3.22,6.78 3.22,27.07z"></path><polygon className="fill-theme transition-colors duration-[200] ease-linear" fill-rule="nonzero" points="292.77,121.73 292.77,95.28 240.38,95.28 240.38,74.09 285.14,74.09 285.14,47.64 240.38,47.64 240.38,27.64 292.77,27.64 292.77,1.19 210.71,1.19 210.71,121.73 "></polygon><path className="fill-theme transition-colors duration-[200] ease-linear" fill-rule="nonzero" d="M421.18 61.38c0,-18.14 0.51,-35.1 -12.21,-47.81 -8.82,-8.82 -18.99,-13.56 -33.74,-13.56 -14.75,0 -24.92,4.75 -33.74,13.56 -12.72,12.72 -12.21,29.67 -12.21,47.81 0,18.14 -0.51,35.1 12.21,47.81 8.82,8.82 18.99,13.56 33.74,13.56 14.75,0 24.92,-4.75 33.74,-13.56 12.72,-12.72 12.21,-29.67 12.21,-47.81zm-29.67 0c0,22.04 -1.69,25.94 -4.41,29.5 -2.2,2.88 -6.44,5.42 -11.87,5.42 -5.43,0 -9.66,-2.54 -11.87,-5.42 -2.71,-3.56 -4.41,-7.46 -4.41,-29.5 0,-22.04 1.7,-26.11 4.41,-29.67 2.2,-2.88 6.44,-5.26 11.87,-5.26 5.43,0 9.66,2.37 11.87,5.26 2.71,3.56 4.41,7.63 4.41,29.67z"></path><path className="fill-theme transition-colors duration-[200] ease-linear" fill-rule="nonzero" d="M543.33 84.77c0,-11.19 -2.54,-20.18 -8.99,-26.45 -5.09,-5.09 -12.89,-8.48 -23.74,-10l-14.58 -2.04c-4.24,-0.51 -6.78,-2.03 -8.31,-3.56 -1.87,-1.86 -2.37,-4.07 -2.37,-5.59 0,-5.26 4.24,-11.19 14.58,-11.19 5.26,0 15.26,-0.51 22.89,7.12l18.65 -18.65c-10.34,-10.34 -23.4,-14.41 -40.69,-14.41 -27.47,0 -44.08,16.11 -44.08,38.15 0,10.34 2.71,18.48 8.31,24.24 5.43,5.6 13.56,9.16 24.24,10.68l14.58 2.03c3.9,0.51 6.44,1.7 7.97,3.22 1.7,1.86 2.37,4.24 2.37,7.12 0,6.95 -5.59,10.85 -17.29,10.85 -9.66,0 -20.68,-2.2 -26.96,-8.48l-18.99 18.99c12.21,12.55 27.3,15.94 45.78,15.94 25.43,0 46.63,-13.39 46.63,-37.98z"></path><path className="fill-theme transition-colors duration-[200] ease-linear" fill-rule="nonzero" d="M671.4 39.93c0,-19.75 -14.41,-38.74 -41.2,-38.74l-47.81 0 0 120.55 29.67 0 0 -43.06 18.14 0c26.79,0 41.2,-18.99 41.2,-38.74zm-29.67 0c0,6.24 -4.75,12.12 -12.89,12.12l-16.78 0 0 -24.25 16.78 0c8.14,0 12.89,5.88 12.89,12.12z"></path><polygon className="fill-theme transition-colors duration-[200] ease-linear" fill-rule="nonzero" points="799.65,121.73 799.65,1.19 769.98,1.19 769.98,47.47 738.45,47.47 738.45,1.19 708.78,1.19 708.78,121.73 738.45,121.73 738.45,73.92 769.98,73.92 769.98,121.73 "></polygon><polygon class="fill-theme transition-colors duration-[200] ease-linear" fill-rule="nonzero" points="926.88,121.73 926.88,95.28 874.5,95.28 874.5,74.09 919.25,74.09 919.25,47.64 874.5,47.64 874.5,27.64 926.88,27.64 926.88,1.19 844.82,1.19 844.82,121.73 "></polygon><path className="fill-theme transition-colors duration-[200] ease-linear" fill-rule="nonzero" d="M1062.76 121.73l-26.11 -50.27c9.49,-4.75 19.67,-15.06 19.67,-31.48 0,-19.81 -14.41,-38.8 -41.2,-38.8l-47.81 0 0 120.55 29.67 0 0 -44.87 10 0 21.36 44.87 34.42 0zm-36.11 -81.75c0,6.24 -4.75,12.18 -12.89,12.18l-16.78 0 0 -24.36 16.78 0c8.14,0 12.89,5.91 12.89,12.18z"></path><polygon className="fill-theme transition-colors duration-[200] ease-linear" fill-rule="nonzero" points="1180.16,121.73 1180.16,95.28 1127.77,95.28 1127.77,74.09 1172.53,74.09 1172.53,47.64 1127.77,47.64 1127.77,27.64 1180.16,27.64 1180.16,1.19 1098.1,1.19 1098.1,121.73 "></polygon><path className="fill-[#ff0000]" fill-rule="nonzero" d="M42.19 183.09c0,-9.87 0.08,-17 -5.69,-22.78 -4.01,-4.01 -8.9,-6.26 -15.4,-6.26 -6.5,0 -11.47,2.25 -15.48,6.26 -5.78,5.77 -5.62,12.91 -5.62,22.78 0,9.87 -0.16,17 5.62,22.78 4.01,4.01 8.98,6.26 15.48,6.26 6.5,0 11.39,-2.25 15.4,-6.26 5.78,-5.78 5.69,-12.91 5.69,-22.78z"></path>
                                            </g>
                                        </g>
                                    </svg>
                                </Link>
                </div>
            </div>
            {toggleMenu 
                ? (  <svg width="18" height="18" viewBox="0 0 18 18" fill="#FFF" xmlns="http://www.w3.org/2000/svg" onClick={() => setToggleMenu(false)}>
                <path d="M10.4099 9L16.7099 2.71C16.8982 2.5217 17.004 2.2663 17.004 2C17.004 1.7337 16.8982 1.47831 16.7099 1.29C16.5216 1.1017 16.2662 0.995911 15.9999 0.995911C15.7336 0.995911 15.4782 1.1017 15.2899 1.29L8.99994 7.59L2.70994 1.29C2.52164 1.1017 2.26624 0.995911 1.99994 0.995911C1.73364 0.995911 1.47824 1.1017 1.28994 1.29C1.10164 1.47831 0.995847 1.7337 0.995847 2C0.995847 2.2663 1.10164 2.5217 1.28994 2.71L7.58994 9L1.28994 15.29C1.19621 15.383 1.12182 15.4936 1.07105 15.6154C1.02028 15.7373 0.994141 15.868 0.994141 16C0.994141 16.132 1.02028 16.2627 1.07105 16.3846C1.12182 16.5064 1.19621 16.617 1.28994 16.71C1.3829 16.8037 1.4935 16.8781 1.61536 16.9289C1.73722 16.9797 1.86793 17.0058 1.99994 17.0058C2.13195 17.0058 2.26266 16.9797 2.38452 16.9289C2.50638 16.8781 2.61698 16.8037 2.70994 16.71L8.99994 10.41L15.2899 16.71C15.3829 16.8037 15.4935 16.8781 15.6154 16.9289C15.7372 16.9797 15.8679 17.0058 15.9999 17.0058C16.132 17.0058 16.2627 16.9797 16.3845 16.9289C16.5064 16.8781 16.617 16.8037 16.7099 16.71C16.8037 16.617 16.8781 16.5064 16.9288 16.3846C16.9796 16.2627 17.0057 16.132 17.0057 16C17.0057 15.868 16.9796 15.7373 16.9288 15.6154C16.8781 15.4936 16.8037 15.383 16.7099 15.29L10.4099 9Z" fill="#FFFFFF"/>
                </svg>
                ) : ( 
                <button onClick={() => setToggleMenu(true)} className="group flex flex-col items-center justify-center gap-1.5">
                <div className="h-0.5 w-12 rounded-full bg-theme transition ease transform duration-[700ms] md:w-14 "></div>
                <div className="h-0.5 w-12 rounded-full bg-theme transition ease transform duration-[700ms] md:w-14 "></div>
                </button>
         )}
        {toggleMenu && (
          <div className="fixed left-0 top-0 right-auto bottom-auto h-screen w-full bg-theme px-8 py-16 -translate-y-full z-40 transition-[transform,opacity] duration-[500ms] ease-in-out md:px-16 md:py-24">
          <div className="mt-28 flex h-full w-full transform flex-col items-center font-bold text-white transition duration-[500ms] ease-out -translate-y-full motion-reduce:transition-none md:items-center">
              <div className="flex w-full flex-col items-center gap-4 py-2 text-2xl uppercase md:py-4 md:text-4xl">
                  
                      {navLinks.map((navLink, index) => (
                          <Link to={navLink.id} className={`border-b-2 border-white px-4 pb-1 ${index === navLinks.length - 1 ? 'md:hidden' : ''}`}
                           key={navLink.id}
                           >
                              {navLink.title}
                           </Link>
          
                      ))}
                  
                      </div>
                  </div>
              </div>
        
        
        
        )}
            <div className="hidden grow basis-0 text-right text-[15px] md:block">
                <Link className="text-theme font-bold uppercase" to={"/contact"}>contact us</Link>
                    
            </div>
        </div>
    </div>
    <div className="fixed left-0 top-0 right-auto bottom-auto h-screen w-full bg-theme px-8 py-16 -translate-y-full z-40 transition-[transform,opacity] duration-[500ms] ease-in-out md:px-16 md:py-24">
            <div className="mt-28 flex h-full w-full transform flex-col items-center font-bold text-white transition duration-[500ms] ease-out -translate-y-full motion-reduce:transition-none md:items-center">
                <div className="flex w-full flex-col items-center gap-4 py-2 text-2xl uppercase md:py-4 md:text-4xl">
                    
                        {navLinks.map((navLink, index) => (
                            <Link to={navLink.id} className={`border-b-2 border-white px-4 pb-1 ${index === navLinks.length - 1 ? 'md:hidden' : ''}`}
                             key={navLink.id}
                             >
                                {navLink.title}
                             </Link>
            
                        ))}
                    
                        </div>
                    </div>
                </div>
            </nav>
        </>
     );
}

export default Navbar;