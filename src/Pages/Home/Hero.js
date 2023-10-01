import React from 'react';
import house from '../../assets/images/handyman_2nd.jpg';
import PrimaryButton from '../Shared/PrimaryButton';

const Hero = () => {
    return (
            <div className="hero min-h-screen md:mt-[-50px] md:mb-[-130px]">
                     <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={house} className="max-w-sm rounded-xl shadow-2xl" />
                         <div>
                             <h1 className="text-5xl font-bold uppercase">No job is too big...</h1>
                             <p className="py-6">Call us, and we will be there. From attics to basements, and everything in between. Hire a Handyman for helping around the house.</p>
                             <PrimaryButton>Get Started</PrimaryButton>
                         </div>
                     </div>
            </div>
        
    );
};

export default Hero;