import React from "react";
import { TERipple } from "tw-elements-react";
import WhatsappPic from "../../../assets/icons/logos/WhatsApp_icon.png"

const Whatsapp= () => {

  return (
    <>
      {/* <!-- Back to top button --> */}
      
        <TERipple rippleColor="light">
          <a
            type="button"
            href="http://wa.me/+14086670501"
            target="_blank"
            className={`fixed bottom-[40px] right-[40px] p-2 bg-green-800 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out`}
          >
           <img className="w-[30px]" src={WhatsappPic}></img> 
          </a>
        </TERipple>
      
    </>
  );
}

export default Whatsapp;