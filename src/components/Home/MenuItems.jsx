const MenuItems = ({ items }) => {
  const { name, image, price, recipe } = items;
  return (
    <div className='flex gap-4 items-start justify-between space-y-0'>
      <img className='w-20 sm:w-24 md:w-28 rounded-b-4xl rounded-r-4xl shrink-0' src={image} alt="" />
      <div className='flex-1'>
        <h3 className='uppercase border-b border-dashed border-gray-500 pb-1'>{name}</h3>
        <p className='text-gray-300 text-sm'>{recipe}</p>
      </div>
      <p className='text-yellow-600 shrink-0'>${price}</p>
    </div>
  );
};

export default MenuItems;