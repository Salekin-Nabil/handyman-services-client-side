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