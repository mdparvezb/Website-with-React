import React from "react";


function Footer() {
  
    return (
      <>
    <div className="font-serif flex item-center flex-col justify-center w-full h-28">
        
        <div className="bg-green-100 p-4">
        <ul className="w-full flex gap-6 justify-center">
                    <li className="cursor-pointer py-2 px-4 hover:underline rounded-md"><a href="">HOME</a></li>
                    <li  className="cursor-pointer py-2 px-4 hover:underline rounded-md"><a href="">ABOUT</a></li>
                    <li  className="cursor-pointer py-2 px-4 hover:underline rounded-md"><a href="">CONTACT</a></li>
                    <li  className="cursor-pointer py-2 px-4 hover:underline rounded-md"><a href="">PRIVACY</a></li>
                </ul> 
        </div>

        <div className="p-2 bg-black flex justify-center text-white">
        <p>All Rights Reserved - 2024</p>
        </div>

    </div>
     
     </>
    )
  }
  
  export default Footer;
  