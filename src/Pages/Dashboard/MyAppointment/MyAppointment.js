import { useQuery } from '@tanstack/react-query';
// import React, { useContext } from 'react';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../../../contexts/AuthProvider';

const MyAppointment = () => {
    // const { user } = useContext(AuthContext);
    const [appointments, setAppoinments] = useState([]);
    const [user, loading, error] = useAuthState(auth);

    const url = `http://localhost:7000/bookings?email=${user?.email}`;

    // const { data: bookings = [] } = useQuery({
    //     queryKey: ['bookings', user?.email],
    //     queryFn: async () => {
    //         const res = await fetch(url, {
    //             headers: {
    //                 authorization: `bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         });
    //         const data = await res.json();
    //         return data;
    //     }
    // })

    useEffect(() => {
        if(user) {
            fetch(url)
            .then(res => res.json())
            .then(data => setAppoinments(data));
        }
    }, [user]);

    return (
        <div className='mb-[60px] mx-[20px]'>
            <h3 className="text-3xl mb-5 font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary text-center uppercase">My Appointments</h3>
            <div className="overflow-x-auto rounded-xl shadow-xl shadow-[gray]">
                <table className="table-zebra w-full">
                    <thead className='bg-gradient-to-br from-accent to-secondary text-white'>
                        <tr>
                            <th className='py-5'></th>
                            <th className='py-5'>Name</th>
                            <th className='py-5'>Service</th>
                            <th className='py-5'>Date</th>
                            <th className='py-5'>Time</th>
                            {/* <th>Payment</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments &&
                            appointments?.map((appointment, i) => <tr key={appointment._id}>
                                <th className='text-center py-5'>{i + 1}</th>
                                <td className='text-center py-5'>{appointment.username}</td>
                                <td className='text-center py-5'>{appointment.service}</td>
                                <td className='text-center py-5'>{appointment.appointmentDate}</td>
                                <td className='text-center py-5'>{appointment.slot}</td>
                                {/* <td>
                                    {
                                        booking.price && !booking.paid && <Link
                                            to={`/dashboard/payment/${booking._id}`}
                                        >
                                            <button
                                                className='btn btn-primary btn-sm'
                                            >Pay</button>
                                        </Link>
                                    }
                                    {
                                        booking.price && booking.paid && <span className='text-green-500'>Paid</span>
                                    }
                                </td> */}
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;

// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { Link, Outlet } from 'react-router-dom';
// import auth from '../../../firebase.init';
// // import useAdmin from '../../hooks/useAdmin';

// const MyAppointment = () => {
//     const [user] = useAuthState(auth);
//     // const [admin] = useAdmin(user);
//     return (
//         <div className="">
//             <h1>My Appointment</h1>
//         </div>
//     );
// };

// export default MyAppointment;