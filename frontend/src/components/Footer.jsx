import React from 'react'
import { assets } from '../assets/assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

           {/* ------ Left Section ------ */}
             <div>
                  <img className='mb-5 w-80 ' src={assets.logo} alt="" />
                  <p className='w-full md:w-2/3 text-gray-600 leading-6'>HMS connects you with quality healthcare professionals for all your medical needs. Our platform makes it easy to find specialists, book appointments, and manage your health records in one secure place. Join thousands of satisfied patients who trust HMS for their healthcare journey.</p>
             </div>

            {/* ------ Center Section ------ */}
             <div>
                  <p className='texl-xl font-medium mb-5'>COMPANY</p>
                  <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                  </ul>
             </div>

            {/* ------ Right Section ------ */}
             <div>
                   <p className='texl-xl font-medium mb-5'>GET IN TOUCH</p>
                   <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+213-696-250-247</li>
                    <li>HMS@gmail.com</li>
                   </ul>
             </div> 

        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ HMS - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer