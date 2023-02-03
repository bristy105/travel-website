import React from "react";

const Hero = ()=>{
    return(
        <div className="w-full h-screen">
            <img className="top-0 left-0 w-full h-screen object-cover" src="https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg" alt="" />
            <div className="bg-black/30 absolute top-0 left-0  w-full h-screen"></div>
            <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
                <div>
                    <p>All Inclusive</p>
                    <h1>Private Beaches & Gateways</h1>
                </div>

            </div>
        </div>
    )

   
}

export default Hero;