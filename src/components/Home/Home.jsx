import React from 'react';
import Banner from './Banner';
import Category from './category/Category';
import PopularMenu from './shared/PopularMenu';
import Feature from './Featured/Feature';
import SharedBanner from './SharedBanner';
import Testimonial from './Testimonial/Testimonial';
import ChefRecommend from './ChefRecommend/ChefRecommend';
import { Helmet } from 'react-helmet-async';
import Img from '../../assets/home/chef-service.jpg'
const Home = () => {
    return (
        <div className='p-3'>
            <Helmet>
                <title>Bistro|Home</title>

            </Helmet>
            <Banner></Banner>
          <Category></Category>
          <SharedBanner heading='bistro boss' subheading=' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem br suscipit repellat porro cum nulla nihil dolorem illo officiis deserunt earum!' img={Img} ></SharedBanner>
          <PopularMenu></PopularMenu>
          <ChefRecommend></ChefRecommend>
          <Feature></Feature>
          <Testimonial></Testimonial>
        </div>
    );
};

export default Home;