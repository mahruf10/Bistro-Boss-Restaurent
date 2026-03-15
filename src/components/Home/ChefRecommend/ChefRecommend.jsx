import React from 'react';
import SectionTitle from '../Section/SectionTitle';
import recomimg from '../../../assets/home/slide1.jpg'
const ChefRecommend = () => {
    return (
        <div>
            
            <section className='mt-8'>
                <SectionTitle
                heading={'Chef Recommends'}
                subheading={'should try'}
                ></SectionTitle>
            </section>
            <div className='grid md:grid-cols-3 gap-3 mt-20'>
                <div className="card bg-base-100 shadow-sm h-112">
  <figure className="px-10 pt-10">
    <img
    
      src={recomimg}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Salads</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions">
      <button className="btn btn-outline border-0 border-b-4">Order Now</button>
    </div>
  </div>
</div>
                <div className="card bg-base-100  shadow-sm h-112">
  <figure className="px-10 pt-10">
    <img
      src={recomimg}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Salads</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions">
      <button className="btn btn-outline border-0 border-b-4">Order Now</button>
    </div>
  </div>
</div>
                <div className="card bg-base-100  shadow-sm h-112">
  <figure className="px-10 pt-10">
    <img
      src={recomimg}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Salads</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions">
      <button className="btn btn-outline border-0 border-b-4">Order Now</button>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default ChefRecommend;