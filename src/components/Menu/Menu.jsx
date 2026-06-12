import React from 'react';
import { Helmet } from 'react-helmet-async';
import coverimg from '../../assets/menu/banner3.jpg'
import SharedBanner from '../Home/SharedBanner';
import SectionTitle from '../Home/Section/SectionTitle';
import useMenu from '../Home/shared/usemenu';
import MenuItems from '../Home/MenuItems';
import dessertsimg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import OrderCard from '../Order/OrderCard';
const Menu = () => {
    const [menu,isLoading,refetch]=useMenu()
    if(isLoading){
        <h1 className='text-3xl text-center'>Please wait...</h1>
    }
    const offerdItems=menu.filter(items=>items.category=='offered')
    const derssertItems=menu.filter(items=>items.category=='dessert')
    const pizzaItems=menu.filter(items=>items.category=='pizza')
    const saladItems=menu.filter(items=>items.category=='salad')
    const soupItems=menu.filter(items=>items.category=='soup')
    return (
        
        <div className='p-3'>

             <Helmet>
        <title>Bistro| Menu</title>
      </Helmet>

    <SharedBanner heading='Our Menu' subheading='WOULD YOU LIKE TO TRY A DISH ?'img={coverimg}></SharedBanner> 
        {/* Offererd Items */}
        <div>
       <section>
        <SectionTitle heading="today's offer" subheading="don't miss"></SectionTitle>
    </section>
         <OrderCard
            item={offerdItems}></OrderCard>
   {/* <div className='grid md:grid-cols-2 gap-5 my-6'>
      {offerdItems.map(items=><MenuItems key={items._id} items={items}></MenuItems>)} 
           </div> */}
           {/* <div className='text-center'>
      <button className='btn btn-outline border-0 border-b-4 uppercase my-8'>Order Your favourite food</button> 
           </div> */}
        </div>
          {/* Disserts Items */}
           <div>
            <SharedBanner
            heading='desserts'
            subheading='Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ut molestias quidem in fugiat repellendus totam velit? Modi.'
           img={dessertsimg}
           ></SharedBanner>
              {/* <div className='grid md:grid-cols-2 gap-5 mt-15'>
      {derssertItems.map(items=><MenuItems key={items._id} items={items}></MenuItems>)} 
           </div> */}
            <OrderCard
    item={derssertItems}></OrderCard>
           {/* <div className='text-center'>
      <button className='btn btn-outline border-0 border-b-4 uppercase my-5'>Order Your favourite food</button> 
           </div> */}
           </div>
           {/* Pizza Items */}
           <div>
            <SharedBanner
            heading='pizza'
            subheading=' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eaque nobis rem commodi dolorum in consectetur voluptate error. Cum, omnis?'
            img={pizzaImg}
            ></SharedBanner>
         {/* <div className='grid md:grid-cols-2 gap-5 mt-15'>
      {pizzaItems.map(items=><MenuItems key={items._id} items={items}></MenuItems>)} 
           </div> */}
            <OrderCard
    item={pizzaItems}></OrderCard>
           {/* <div className='text-center'>
      <button className='btn btn-outline border-0 border-b-4 uppercase my-5'>Order Your favourite food</button> 
           </div> */}
           </div>
           {/* Salad Items */}
              <div>
            <SharedBanner
            heading='salads'
            subheading=' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eaque nobis rem commodi dolorum in consectetur voluptate error. Cum, omnis?'
            img={saladImg}
            ></SharedBanner>
         <OrderCard item={saladItems}></OrderCard>
           {/* <div className='text-center'>
      <button className='btn btn-outline border-0 border-b-4 uppercase my-5'>Order Your favourite food</button> 
           </div> */}
           </div>
           {/* Soup Items */}
           <div>
            <SharedBanner
            heading='soups'
            subheading=' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam eaque nobis rem commodi dolorum in consectetur voluptate error. Cum, omnis?'
            img={soupImg}
            ></SharedBanner>
             <OrderCard
    item={soupItems}></OrderCard>
         {/* <div className='grid md:grid-cols-2 gap-5 mt-15'>
      {soupItems.map(items=><MenuItems key={items._id} items={items}></MenuItems>)} 
           </div>
           <div className='text-center'>
      <button className='btn btn-outline border-0 border-b-4 uppercase my-5'>Order Your favourite food</button> 
           </div> */}
           </div>
          
        </div>
    );
};

export default Menu;