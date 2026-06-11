import React, { useEffect, useState } from 'react';
import SectionTitle from '../Section/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('../../../../reviews.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])

    return (
        <div className='my-22'>
            <section>
                <SectionTitle
                    heading='testimonials'
                    subheading='what our client say'
                />
            </section>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {review.map(item =>
                    <SwiperSlide key={item._id}>
                        <div className='my-8 mx-4 sm:mx-12 md:mx-24 flex flex-col items-center px-4 sm:px-9'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={item.rating}
                                readOnly
                            />
                            <p className='py-6 text-sm sm:text-base text-center text-gray-300'>{item.details}</p>
                            <p className='text-center text-orange-400'>{item.name}</p>
                        </div>
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
};

export default Testimonial;