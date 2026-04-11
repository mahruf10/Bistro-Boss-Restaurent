import SharedBanner from "../Home/SharedBanner";
import shopcover from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../Home/shared/usemenu";
import OrderCard from "./OrderCard";
import FoodCard from "./FoodCard";
const OurShop=()=>{
  const [index,setIndex]=useState(0)
  const [menu,isLoading,,]=useMenu()
    if(isLoading){
        <h1 className="text-4xl text-center">Please wait..</h1>
    }
    const derssertItems=menu.filter(items=>items.category=='dessert')
    const pizzaItems=menu.filter(items=>items.category=='pizza')
    const saladItems=menu.filter(items=>items.category=='salad')
    const soupItems=menu.filter(items=>items.category=='soup')
    const drinksItem=menu.filter(items=>items.category=='drinks')
    return (
        <div>
      <div>
        <SharedBanner
        heading='our shop'
        subheading='WOULD YOU LIKE TO TRY A DISH ?'
        img={shopcover}
        ></SharedBanner>
      </div>
      <div className="flex justify-center">
        <Tabs defaultIndex={1} onSelect={(index) => setIndex(index)} className={' justify-center mt-5'}>
  <TabList>
    <Tab>SALAD</Tab>
    <Tab>PIZZA</Tab>
    <Tab>SOUPS</Tab>
    <Tab>DESSERTS</Tab>
    <Tab>DRINKS</Tab>
  </TabList>
  <TabPanel >
   <FoodCard
    item={saladItems}
   ></FoodCard>
    </TabPanel>

  <TabPanel>
    <FoodCard
    item={pizzaItems}
    ></FoodCard>
  </TabPanel>
  <TabPanel>
    <FoodCard
    item={soupItems}></FoodCard>
  </TabPanel>

  <TabPanel>
    <FoodCard item={derssertItems}></FoodCard>
  </TabPanel>

  <TabPanel>
    <FoodCard
    item={drinksItem}></FoodCard>
  </TabPanel>
</Tabs>
      </div>
        </div>
    )
}
export default OurShop;