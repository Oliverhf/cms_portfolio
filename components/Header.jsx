import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";
import { useRouter } from "next/router";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  const portfolioPaths = "/";

  return (
    <div className="container mx-auto md:px-10 mb-8 z-20">
      <div className="relative flex items-center w-full px-6 sm:px-0 inline-block border-black py-6 border-b ">
        <div className="md:float-left block">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <svg
                width="54"
                height="34"
                viewBox="0 0 54 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ textRendering: "geometricPrecision"}}
              >
                <path
                  d="M48.75 18.2592C48.75 26.1346 42.4156 32.5 34.625 32.5C26.8344 32.5 20.5 26.1346 20.5 18.2592C20.5 10.3838 26.8344 4.01849 34.625 4.01849C42.4156 4.01849 48.75 10.3838 48.75 18.2592Z"
                  stroke="#1A45B8"
                  strokeWidth="3"
                />
                <path
                  d="M36.25 18.2593C36.25 22.6573 32.7138 26.2037 28.375 26.2037C24.0362 26.2037 20.5 22.6573 20.5 18.2593C20.5 13.8612 24.0362 10.3148 28.375 10.3148C32.7138 10.3148 36.25 13.8612 36.25 18.2593Z"
                  stroke="#1A45B8"
                  strokeWidth="3"
                />
                <path
                  d="M17.7891 32.8148L17.7891 4.20154L0.855469 4.20154L1.05078 8.40076H12.5352L12.5352 16.5258H1.61719V20.6859H12.5352L12.5352 32.8148H17.7891Z"
                  fill="#1A45B8"
                />
              </svg>
              <span style={{textRendering: "optimizeLegibility"}} className="relative top-px font-normal text-2xl text-black tacking-widest ml-2">
                Oliver Favalli
              </span>
            </div>
          </Link>
        </div>
        <div className="absolute hidden right-0 md:float-left md:flex">
          {router.pathname != portfolioPaths &&
            categories.map((category) => (
              <Link
                key={category.slug}
                href={`/blog/category/${category.slug}`}
              >
                <span className="cursor-pointer md:float-right mt-2 align-middle text-black ml-4 font-semibold transition ease-out duration-220 hover:text-blueSecondary">
                  {category.name}
                </span>
              </Link>
            ))}
          <Link href={`/blog`}>
            <span className="cursor-pointer md:float-right mt-2 align-middle text-black ml-4 font-semibold transition ease-out duration-220 hover:text-blueSecondary">
              Blog
            </span>
          </Link>
          <Link href={`https://github.com/Oliverhf`}>
            <svg className="md:float-right mt-2 align-middle w-6 h-6 ml-4 cursor-pointer transition ease-out duration-220 hover:scale-125 transform-gpu" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg=""><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
          </Link>
          <Link href={`https://www.linkedin.com/in/oliver-favalli/?locale=en_US`}>
            <svg className="md:float-right mt-2 align-middle w-6 h-6 ml-4 cursor-pointer transition ease-out duration-220 hover:scale-125 transform-gpu" viewBox="0 0 64 64" style={{borderRadius: '50%', fillRule: 'evenodd'}}><g className="social-svg-background" style={{transition: 'fill 170ms ease-in-out 0s', fill: 'transparent'}}><circle cx={32} cy={32} r={31} /></g><g className="social-svg-icon" style={{transition: 'fill 170ms ease-in-out 0s', fill: 'rgb(255, 255, 255)'}}><path d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z" /></g><g className="social-svg-mask" style={{transition: 'fill 170ms ease-in-out 0s', fill: '#0A65C2'}}><path d="M0,0v64h64V0H0z M25.8,44h-5.4V26.6h5.4V44z M23.1,24.3c-1.7,0-3.1-1.4-3.1-3.1c0-1.7,1.4-3.1,3.1-3.1 c1.7,0,3.1,1.4,3.1,3.1C26.2,22.9,24.8,24.3,23.1,24.3z M46,44h-5.4v-8.4c0-2,0-4.6-2.8-4.6c-2.8,0-3.2,2.2-3.2,4.5V44h-5.4V26.6 h5.2V29h0.1c0.7-1.4,2.5-2.8,5.1-2.8c5.5,0,6.5,3.6,6.5,8.3V44z" /></g></svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
