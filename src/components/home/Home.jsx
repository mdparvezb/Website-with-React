import React from "react";
import { Link, NavLink } from 'react-router-dom'

function Home() {
    return (
        <>
        <div className="w-full h-[100vh]"><img className="w-full h-full" src="https://cdn.pixabay.com/photo/2023/05/31/11/15/fish-8031138_1280.jpg" alt="" /></div>
        
        <div className="flex p-14  ">
        <div className="w-[50%] flex items-center justify-center">
                <img className="rounded w-[500px]" src="https://www.w3schools.com/w3images/tablesetting2.jpg" alt="" />
        </div>

<div className="font-serif p-4 w-[50%] flex flex-col items-center">
    <h2 className="p-4 text-4xl">About Catering</h2>
    <p className="mt-4 mb-6 text-lg">Tradition since 1889</p>
    <p className="stext-lg leading-7">The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
</div> 
<hr />


<div className="font-serif flex p-14">


<div className="w-[50%] pl-14 flex flex-col justify-center">
    <h1 className="text-4xl">Our Menu</h1>

    <h2 className="mt-6 text-lg font-bold px-2 py-4">Bread Basket</h2>
    <p className="py-2 px-2 text-gray-700">Assortment of fresh baked fruit breads and muffins 5.50
</p>
    <h2 className="mt-6 text-lg font-bold px-2 py-4">Honey Almond Granola with Fruits</h2>
    <p className="py-2 px-2 text-gray-700">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00
</p>
    <h2 className="mt-6 text-lg font-bold px-2 py-4">Belgian Waffle</h2>
    <p className="py-2 px-2 text-gray-700">Vanilla flavored batter with malted flour 7.50
</p>
    <h2 className="mt-6 text-lg font-bold px-2 py-4">Scrambled eggs</h2>
    <p className="py-2 px-2 text-gray-700">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50
</p>
    <h2 className="mt-6 text-lg font-bold px-2 py-4">Blueberry Pancakes</h2>
    <p className="py-2 px-2 text-gray-700">With syrup, butter and lots of berries 8.50
</p>
</div>

<div className="w-[50%] flex items-center justify-center">
    <img className="rounded w-[500px]" src="https://www.w3schools.com/w3images/tablesetting.jpg" alt="" />
</div>
</div>
        
   
        </>
    )
}


export default Home;