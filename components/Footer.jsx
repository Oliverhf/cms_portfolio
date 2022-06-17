import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='block bg-white'>
        <div className='relative flex flex-col sm:flex-row items-center container mx-auto py-6 border-t border-black'> 
           <a className='flex mr-4 sm:mr-' href='mailto:oliver.hfavalli@gmail.com'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className='fill-black' d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4ZM20 11L13.65 15.45C12.659 16.1427 11.341 16.1427 10.35 15.45L4 11V8.9L11.35 14.05C11.7409 14.3213 12.2591 14.3213 12.65 14.05L20 8.9V11Z" />
            </svg>
            <span className='text-black ml-2'>
              oliver.hfavalli@gmail.com
            </span>
           </a>
           <div className='flex items-center my-4 sm:m-auto'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='fill-black' d="M17 21C15.3463 20.9986 13.7183 20.5899 12.26 19.81L11.81 19.56C8.70075 17.8883 6.15169 15.3392 4.48 12.23L4.23 11.78C3.42982 10.3134 3.00713 8.67069 3 7V6.33C2.99958 5.79695 3.21196 5.28579 3.59 4.91L5.28 3.22C5.44413 3.05459 5.67581 2.97487 5.90696 3.00425C6.13811 3.03364 6.34248 3.16879 6.46 3.37L8.71 7.23C8.93753 7.62288 8.87183 8.11975 8.55 8.43999L6.66 10.33C6.50304 10.4852 6.46647 10.725 6.57 10.92L6.92 11.58C8.17704 13.9084 10.0893 15.8172 12.42 17.07L13.08 17.43C13.275 17.5335 13.5148 17.497 13.67 17.34L15.56 15.45C15.8802 15.1282 16.3771 15.0625 16.77 15.29L20.63 17.54C20.8312 17.6575 20.9664 17.8619 20.9957 18.093C21.0251 18.3242 20.9454 18.5559 20.78 18.72L19.09 20.41C18.7142 20.788 18.203 21.0004 17.67 21H17Z"/>
            </svg>
            <span className='text-black'>
              +55 11 97555-8597
            </span>
           </div>
           <div className='sm:relative right-0'>
            <address className='text-black font-light'>
              São Paulo, SP | Brazil
            </address>
           </div>
        </div>
    </footer>
  )
}

export default Footer