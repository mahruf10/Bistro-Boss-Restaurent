import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../Section/SectionTitle';
const Category=()=>{

    return (
      <section>
        <section >
          <SectionTitle 
          subheading={'From 11:00am to 10:00pm'}
          heading={'Order online'}
      
          >

          </SectionTitle>
        </section>
      <div className=' mx-auto mb-24 size-1/2'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={img1} alt="" />
            <h3 className='text-3xl text-center -mt-12 uppercase'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
             <h3 className='text-3xl text-center -mt-12 uppercase'>Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" />
             <h3 className='text-3xl text-center -mt-12 uppercase'>soups</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img4} alt="" />
             <h3 className='text-3xl text-center -mt-12 uppercase'>desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img5} alt="" />
             <h3 className='text-3xl text-center -mt-12 uppercase'>salads</h3>
        </SwiperSlide>
      </Swiper>
        </div>
      

      </section>
        
    )
}
export default Category;