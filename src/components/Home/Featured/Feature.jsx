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
            <div className='flex flex-col md:flex-row gap-6 justify-center items-center pb-20 pt-12 px-6 sm:px-16 md:px-24 lg:px-36 bg-slate-600/30'>
                <div className='w-full md:w-1/2'>
                    <img className='w-full rounded' src={featurdimg} alt="" />
                </div>
                <div className='w-full md:w-1/2 text-white space-y-3'>
                    <p>Aug 29, 2029</p>
                    <p className='uppercase font-semibold'>Where can i get some?</p>
                    <p className='text-sm sm:text-base text-gray-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, tempore adipisci temporibus est odio in praesentium maiores quos eligendi quis.</p>
                    <button className='btn btn-outline border-0 border-b-4'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Feature;