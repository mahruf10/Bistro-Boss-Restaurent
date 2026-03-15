import React from 'react';

const SectionTitle = ({heading,subheading}) => {

    return (
        <div className='mx-auto md:w-4/12 my-5 text-center'>
           <p className='text-yellow-600'>---{subheading}--- </p> 
           <h2 className='text-3xl uppercase border-y mb-8  p-2'>{heading}</h2>
        </div>
    );
};

export default SectionTitle;