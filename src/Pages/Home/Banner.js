// import React from 'react';
// import chair from '../../assets/images/Handyman.jpg';
// import PrimaryButton from '../Shared/PrimaryButton';

// const Banner = () => {
//     return (
//         <div className="hero min-h-screen">
//             <div className="hero-content flex-col lg:flex-row-reverse">
//                 <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
//                 <div>
//                     <h1 className="text-5xl font-bold">Hire a Tasker for helping around the house</h1>
//                     <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
//                     <PrimaryButton>Get Started</PrimaryButton>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Banner;

import React from 'react';
import banner from '../../assets/images/Handyman.jpg';
import house from '../../assets/images/handyman_2nd.jpg';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className='mb-12'>
            <div className="carousel-inner relative w-full overflow-hidden rounded-xl">
                <div className="carousel-item active relative float-left w-full">
                    <img
                        src={banner}
                        className="block w-full md:h-[470px]"
                        alt="..."
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;