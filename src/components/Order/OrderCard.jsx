
import MenuItems from '../Home/MenuItems';
import { Link } from 'react-router-dom';

const OrderCard = ({item}) => {
    
    return (
        <div>
                       
               <div className='grid md:grid-cols-2 gap-5 my-6'>
                  {item.map(items=><MenuItems key={items._id} items={items} ></MenuItems>)} 
                       </div>
                       <div className='text-center'>
                        <Link to={'/ourshop'}>
                         <button className='btn btn-outline border-0 border-b-4 uppercase my-8'>Order Your favourite food</button> 
                        </Link>
                 
                       </div>
                    </div>
       
    );
};

export default OrderCard;