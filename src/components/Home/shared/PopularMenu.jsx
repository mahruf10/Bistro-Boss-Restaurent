// import { useEffect, useState } from 'react';
import SectionTitle from '../Section/SectionTitle';
import MenuItems from '../MenuItems';
import useMenu from './usemenu';

const PopularMenu = () => {
//    const [menu,setMenu]=useState([])
//       useEffect(()=>{
//           fetch('../../../../menu.json')
//           .then(res=>res.json())
//           .then(data=>{
//               console.log(data);
//               const popularitems=data.filter(item=>item.category=='popular')
//               setMenu(popularitems)
//           })
//           .catch(error=>console.log(error.message))
//   },[])

const [menu,isLoading,refetch]=useMenu()

if(isLoading){
<h1 className='text-3xl text-center'>Please Wait....</h1>
}
const popularItems=menu.filter(items=>items.category=='popular')
    return (
        <div>
       <section>
          <SectionTitle
          subheading={'check it out'}
          heading={'From our menu'}
          ></SectionTitle>
        </section>
        <div className='grid md:grid-cols-2 gap-5 my-6'>
   {popularItems.map(items=><MenuItems key={items._id} items={items}></MenuItems>)} 
        </div>
        <div className='text-center'>
   <button className='btn btn-outline border-0 border-b-4 uppercase my-8'>View full form</button> 
        </div>
     
        <div className='bg-black h-32 flex justify-center items-center rounded-xl'>
       <h2 className=' text-center  text-3xl '> Call Us: +880 1572903850</h2>
       </div>
        </div>
    );
};

export default PopularMenu;