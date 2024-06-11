// import React from 'react';
import HomeItem from "../component/HomeItem";
import {useSelector} from "react-redux";

const Home =()=>{
 const items = useSelector(store => store.items);
 console.log("got items", items);

  return (
    <main>
    <div className="items-container">
      {items.map((item)=>
    <HomeItem key={item.id} item ={item}></HomeItem>
      )}
    </div>
  </main>
  )
}

export default Home;

