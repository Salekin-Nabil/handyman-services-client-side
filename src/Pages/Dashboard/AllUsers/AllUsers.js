// import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Loading from '../../Loading/Loading';
import { useQuery } from 'react-query';

const AllUsers = () => {
    // const {data: users = [], isLoading, refetch} = useQuery({
    //     queryKey: ['users'],
    //     queryFn: async() =>{
    //         const res = await fetch('http://localhost:7000/users');
    //         if(isLoading){
    //           return <Loading></Loading>
    //         }
    //         const data = await res.json();
    //         return data;
    //     }
    // });
    const {data: users, isLoading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:7000/users', {
              method: 'GET',
              headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
              }
            });
            const data = await res.json();
            return data;
        }
    });

    if(isLoading){
      return <Loading></Loading>
    }

    const handleMakeAdmin = email => {
        fetch(`http://localhost:7000/users/admin/${email}`, {
            method: 'PUT', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Make admin successful.')
                refetch();
            }
        })
    }

    const handleDeleteUser = email => {
        fetch(`http://localhost:7000/users/${email}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
                refetch();
        })
        fetch(`http://localhost:7000/bookings/admin/${email}`, {
            method: 'DELETE', 
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
                toast.success('User deleted successfully.')
                refetch();
        })
    }

    return (
        <div className='mb-[60px] mx-[20px]'>
            <h3 className="text-3xl mb-5 font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary text-center uppercase">All Users</h3>
            <div className="overflow-x-auto rounded-xl shadow-xl shadow-[gray]">
              <table className="table-zebra w-full">
                      <thead className='bg-gradient-to-br from-accent to-secondary text-white'>
                        <tr>
                          <th></th>
                          <th className='py-5'></th>
                          <th className='py-5'>Name</th>
                          <th className='py-5'>Email</th>
                          <th className='py-5'>Admin</th>
                          <th className='py-5'>Remove User</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          users.map((user, i) =><tr key={user._id}>
                              <th>
                                <label>
                                  <input type="checkbox" className="checkbox" />
                                </label>
                              </th>
                              <th className='text-center py-5'>{i+1}</th>
                              <td>
                                <div className="flex items-center space-x-3  ml-10">
                                  <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                      <img src={user.photo} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                  </div>
                                  <div>
                                    <div className="font-bold">{user.name}</div>
                                    <div className="text-sm opacity-50">United States</div>
                                  </div>
                                </div>
                              </td>
                              <td className='text-center py-5'>{user.email}</td>
                              <td className='text-center py-5'>{ user?.role !== 'admin' ? <button onClick={() => handleMakeAdmin(user.email)} className='btn btn-xs btn-primary'>Make Admin</button> : "Admin"}</td>
                              <td className='text-center py-5'>{ user?.role !== 'admin' && <button onClick={() => handleDeleteUser(user.email)} className='btn btn-xs btn-danger'>Delete</button>}</td>
                            </tr>)
                        }
      
                      </tbody>
                    </table>
                  </div>
            <Toaster/>
        </div>
    );
};

export default AllUsers;