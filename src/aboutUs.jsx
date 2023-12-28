import './aboutUs.css';
import React from 'react';
import {Brand,Deleivery,Cod,Quality } from './res/Icons/Icon';
import Footer from './Components/Footer/footer';
import Header from './Components/Heater/header';

function AboutUs() {
  return (
  <div>
    <Header />
    <div className='py-4'>
 <div className='container px-2'>
      <div className='aboutUsPageDesc flex middle center '>
        <div className='aboutUsBoxDesc flex middle center px-4  '>
            <div className='flex col middle center gap-4'>
                <h1>About Tronix</h1>
                <p>We are here to provide a place special for electronic devices. Although we only operated for 2 years but we always provide the best service for customers and all the sellers who use our website. With the hope that it can help improve a better life using various electronic goods with the latest technology, we are all ears to any suggestion from our dear customers.</p>
                </div>
                </div>
                </div>
 </div>
 <div className='flex col px-2 py-4'>
 <div className='imageBox flex middle center'>
  </div>
 </div>
<div className='container specificationsBox flex col gap-2 px-2 pt-6 middle center'>
<span>Why Choosing Us</span>
<div className='flex row gap-4 middle center wrap pt-4'>
<div className='brandBox flex col gap-1 middle center p-2'><Brand /><span>54 Brands</span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. </p></div>
<div className='brandBox flex col gap-1 middle center p-2'><Deleivery /><span>Fast Delivery</span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p></div>
<div className='brandBox flex col gap-1 middle center p-2'><Cod /><span>COD Service</span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. </p></div>
<div className='brandBox flex col gap-1 middle center p-2'><Quality /><span>100% Original Products</span><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. </p></div>
</div>
</div>
<div className='container teamBox flex col gap-4 px-2 py-4 middle center'>
  <span>Our Team</span>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
  </div>
<div className='flex row gap-4 wrap middle center'>
  <div className='profileBox flex text-center'>
    <div className='flex col gap-3'>
      <div className='profileImage'></div>
      <div className='flex col gap-1'>
      <span>Sam Alabama</span>
      <p>Team Member</p>
      </div>
    </div>
    </div>
    <div className='profileBox flex text-center'>
    <div className='flex col gap-3'>
      <div className='profileImage'></div>
      <div className='flex col gap-1'>
      <span>Athen Kamsia</span>
      <p>Team Member</p>
      </div>
  </div>
  </div>

  <div className='profileBox flex text-center'>
    <div className='flex col gap-3'>
      <div className='profileImage'></div>
      <div className='flex col gap-1'>
      <span>Jack Lentera</span>
      <p>Team Member</p>
      </div>
  </div>
  </div>

  <div className='profileBox flex text-center'>
    <div className='flex col gap-3'>
      <div className='profileImage'></div>
      <div className='flex col gap-1'>
      <span>Ahmad Pucelle</span>
      <p>Team Member</p>
      </div>
  </div>
  </div>

</div>
</div>
 <Footer />
 </div>

  )
}
export default AboutUs;