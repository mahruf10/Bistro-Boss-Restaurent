import React from 'react';
import SectionTitle from '../Section/SectionTitle';
import featurdimg from '../../../assets/home/featured.jpg'
import './featured.css'

const Feature = () => {
    return (
        <div className='featured-item bg-fixed pt-8 my-20'>
            <section>
                <SectionTitle subheading='Check it out' heading='Featured Item'></SectionTitle>
            </section>
            <div className='md:flex gap-4 justify-center items-center pb-20 pt-12 px-36 bg-slate-600/30'>
                <div className='w-3/2'>
                    <img  src={featurdimg} alt="" />
                </div>
      <div >
                <p>Aug 29,2029</p>
                <p className='uppercase'>Where can i get some?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, tempore adipisci temporibus est odio in praesentium maiores quos <br /> eligendi quis.</p>
          
          <button className='btn btn-outline border-0 border-b-4'>Order Now</button>
            </div>
            </div>
            
        </div>
    );
};

export default Feature;