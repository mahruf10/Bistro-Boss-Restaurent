import React from 'react';

const MenuItems = ({items})=>{
    // console.log(items);
    const {name,image,price,recipe}=items
    return (
       
  <div className='flex gap-4 space-y-3'>
            
            <img className='w-26.5 rounded-b-4xl rounded-r-4xl ' src={image} alt="" />
            <div>
                <h3 className='uppercase'>{name}----------</h3>
                <p className='text-gray-300'>{recipe}</p>
               
            </div>
             <p className='flex items-center text-yellow-600'>${price}</p> 
        </div>
          
     
    );
};

export default MenuItems;