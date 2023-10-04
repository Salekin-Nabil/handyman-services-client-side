import React from 'react';
import about_1 from '../../assets/images/about_1.png'
import about_3 from '../../assets/images/about_3.png'
import about_4 from '../../assets/images/about_4.png'
import about_bg1 from '../../assets/images/about_bg1.jpeg'
import about_bg2 from '../../assets/images/about_bg2.jpeg'
import about_bg3 from '../../assets/images/about_bg3.jpeg'

const About = () => {
    return (
        <div>
            <h1 className='text-center uppercase font-black text-5xl'>About Our Services</h1>
            <section style={{
            background: `url(${about_bg1})`
        }} 
        className='flex justify-center items-center md:mt-[7rem]'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={about_1} alt="" />
            </div>
            <div className='flex-1 px-5 hover:cursor-pointer'>
                <h3 className='text-2xl text-yellow-300 font-bold'>Maximize Your Time and Property Value: The Power of Professional Handyman Services</h3>
                <h2 className='text-3xl font-black text-white py-2'>Unlock Convenience with Handyman Expertise</h2>
                <p className='text-white pb-2'>At Handyman Service, we pride ourselves on providing comprehensive, reliable, and efficient handyman services tailored to meet the unique needs of every home and business. From minor tweaks to major overhauls, our dedicated team approaches every project with a commitment to excellence and a passion for perfection. We believe that every space deserves the utmost care and attention to detail, which is why our clients trust us to deliver solutions that stand the test of time.</p>
            </div>
        </section>
            <section style={{
            background: `url(${about_bg2})`
        }} 
        className='flex justify-center items-center md:mt-[7rem]'>
            <div className='flex-1 px-5 hover:cursor-pointer'>
                <h3 className='text-2xl text-red-300 font-bold'>Our Commitment</h3>
                <h2 className='text-3xl font-black text-white py-2'>In the World of Fixes, We’re Your Handy Wizard!</h2>
                <p className='text-white pb-2'>At Handyman Service, our passion goes beyond mere repairs. We view every project as an opportunity to enhance the comfort, functionality, and beauty of your spaces. Our commitment is twofold: First, to provide top-notch handyman services using premium materials and cutting-edge techniques. And second, to cultivate lasting relationships with our clients, built on trust, transparency, and a shared vision of quality living. As we navigate the intricate world of home and business repairs, our promise remains unwavering: delivering work that not only fixes but enriches, and service that not only meets but exceeds your expectations.

</p>
            </div>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={about_4} alt="" />
            </div>
        </section>
            <section style={{
            background: `url(${about_bg3})`
        }} 
        className='flex justify-center items-center md:mt-[7rem] md:mb-[10rem]'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={about_3} alt="" />
            </div>
            <div className='flex-1 px-5 hover:cursor-pointer'>
                <h3 className='text-2xl text-orange-300 font-bold'>Appointment</h3>
                <h2 className='text-3xl font-black text-white py-2'>Make an Appointment Today</h2>
                <p className='text-white pb-2'>At Handyman Service, we pride ourselves on providing comprehensive, reliable, and efficient handyman services tailored to meet the unique needs of every home and business. From minor tweaks to major overhauls, our dedicated team approaches every project with a commitment to excellence and a passion for perfection. We believe that every space deserves the utmost care and attention to detail, which is why our clients trust us to deliver solutions that stand the test of time.  Choose Handyman Service and experience the difference of true craftsmanship combined with genuine customer service.</p>
            </div>
        </section>
        </div>
    );
};

export default About;