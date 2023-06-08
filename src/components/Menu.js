import React from 'react';

const Menu = ({ toggleMenu }) => {
  return (
    <>
      <div
        className={`  left-0 top-0 right-0 absolute bottom-auto text-white h-screen bg-[#1b252e] px-8 py-16 
            transition-all duration-[500ms] ease-in-out md:px-16 md:py-24  z-[50] ${
              toggleMenu
                ? 'translate-y-[0rem] transition-[transform,opacity] duration-500 h-screen overflow-y-hidden'
                : '-translate-y-full duration-500 transition-all'
            } `}
      >
        <div class="mt-28 flex h-full w-full transform flex-col items-center font-bold text-white transition duration-[500ms] ease-out  md:items-center">
          <div class="flex w-full flex-col items-center gap-4 py-2 text-2xl uppercase md:py-4 md:text-4xl">
            <a class="border-b-2 border-white px-4 pb-1" href="/about">
              About Ideosphere
            </a>
            <a class="border-b-2 border-white px-4 pb-1" href="/services">
              Services Overview
            </a>
            <a
              class="border-b-2 border-white px-4 pb-1"
              href="/resident-experts"
            >
              Resident Experts
            </a>
            <a
              class="border-b-2 border-white px-4 pb-1"
              href="/delivery-history"
            >
              Delivery History
            </a>
            <a class="border-b-2 border-white px-4 pb-1" href="/insights">
              Strategic Insights
            </a>
            <a
              class="border-b-2 border-white px-4 pb-1 md:hidden"
              href="/contact"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
