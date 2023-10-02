import React from 'react';
import fence from '../../../assets/images/services_image/fence.jpg';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    
    return (
        <header className='my-6'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={fence} alt="Schedule" className="lg:max-w-xl max-w-sm rounded-lg shadow-2xl" />
                    <div className='mr-6'>
                        <DayPicker 
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            styles={{
                                head_cell: {
                                  width: "70px",
                                  height: "120px"
                                },
                                table: {
                                  maxWidth: "none",
                                },
                                day: {
                                  margin: "auto",
                                },
                              }}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;