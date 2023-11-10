import React from 'react';
// import doctor from '../../assets/images/doctor.png';
import handyman from '../../assets/images/handyman_pic.png';
import appointment from '../../assets/images/appointment.jpeg';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} 
        className='flex justify-center items-center md:mt-[10rem]'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-93px]' src={handyman} alt="" />
            </div>
            <div className='flex-1 px-5'>
                <h3 className='text-xl text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white py-2'>Make an Appointment Today</h2>
                <p className='text-white pb-2'>Unlock the full potential of your home with the expertise of a professional handyman! A handyman is your one-stop solution, turning your to-do list into done, addressing a range of needs from minor repairs to major installations, ensuring your living space remains in top-notch condition. Why juggle multiple contractors and endless tasks when a single call can bring a skilled handyman to your doorstep, ready to tackle your home improvement needs with precision and care? Choose a handyman service today and experience the joy of a well-maintained home without the hassle!</p>
                <PrimaryButton><a href='/appointment'>Get Started</a></PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;