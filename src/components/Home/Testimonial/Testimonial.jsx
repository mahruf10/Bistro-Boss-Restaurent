import React, { useEffect, useState } from 'react';
import SectionTitle from '../Section/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
const Testimonial = () => {
    const [review,setReview]=useState([])
    useEffect(()=>{
        fetch('../../../../reviews.json')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[])
    // console.log(review);
    return (
        <div>
            <section>
                <SectionTitle 
                heading='testimonials'
                subheading='what our client say'
                >
                </SectionTitle>
            </section>
            <div>
     
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       
     {review.map(item=>
     <div >
 <SwiperSlide>
    <div className='my-8 mx-24 flex flex-col items-center'>
        
<Rating
         
      style={{ maxWidth: 180 }}
      value={item.rating}
      readOnly
    />
        
         
 <p className='py-8'> {item.details}</p>
 <p className='text-center text-orange-400'>{item.name}</p>
    </div>

    </SwiperSlide>
     </div>

     )}
      </Swiper>
  
            </div>
        </div>
    );
};

export default Testimonial;