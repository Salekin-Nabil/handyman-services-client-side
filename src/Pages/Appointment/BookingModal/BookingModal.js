import { format } from 'date-fns';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    // treatment is just another name of appointmentOptions with name, slots, _id
    const { _id, name, slots } = treatment;
    const date = format(selectedDate, 'PP');

    // const notify = () => toast(`Your Booking is Successfully Enlisted on ${date} at ${slot}`);
    // const notify1 = (data) => toast(`${data}`);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const username = form.username.value;
        const email = form.email.value;
        const phone = form.phone.value;
        // [3, 4, 5].map((value, i) => console.log(value))
        const booking = {
            appointmentDate: date,
            treatmentId: _id,
            treatment: name,
            username: username,
            slot,
            email,
            phone,
        }

        fetch('http://localhost:7000/bookings', {
            method: "POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if (data.acknowledged){
                alert(`Your Booking is Successfully Enlisted on ${date} at ${slot}`);
                // notify();
            }
            else {
                alert(`${data.message}`);
                // notify1(data.message);
            }
            
            refetch();
            setTreatment(null);
        })

        // TODO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" disabled value={date} className="input w-full input-bordered " />
                        <select name="slot" className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name="username" type="text" placeholder="Your Name" className="input w-full input-bordered" required/>
                        <input name="email" type="email" placeholder="Email Address" className="input w-full input-bordered" required/>
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" required/>
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
                
            </div>
            <Toaster/>
        </div>
    );
};

export default BookingModal;