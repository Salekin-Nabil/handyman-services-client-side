import React from 'react';
import house from '../../assets/images/handyman_2nd.jpg';
import PrimaryButton from '../Shared/PrimaryButton';

const Hero = () => {
    return (
            <div className="hero min-h-screen lg:mt-[-70px] lg:mb-[-160px]">
                     <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={house} className="max-w-sm rounded-xl shadow-2xl" />
                         <div>
                             <h1 className="text-5xl font-black">Transforming Your To-Do List into Done!</h1>
                             <p className="py-6 text-3xl font-bold">No Job Too Big, No Task Too Small. Call us, and we will be there. From Fixes to Facelifts – We Bring Your Home Back to Life! We’re the Handyman Heroes – Rescuing Homes One Repair at a Time!</p>
                             <PrimaryButton>Get Started</PrimaryButton>
                         </div>
                     </div>
            </div>
        
    );
};

export default Hero;