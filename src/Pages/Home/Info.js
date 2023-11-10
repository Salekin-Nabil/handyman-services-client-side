import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import "../Shared/gradient.css"

const Info = () => {

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard cardTitle="Opening Hours" bgClass="gradient_background" img={clock} description="Monday-Friday (8am-8pm)"></InfoCard>
            <InfoCard cardTitle="Our Locations" bgClass="gradient_neutral" img={marker} description="We serve all over the Bay area."></InfoCard>
            <InfoCard cardTitle="Contact Us" bgClass="gradient_background" img={phone} description="408-667-0501 (homehandyhelp@gmail.com)"></InfoCard>
        </div>
    );
};

export default Info;