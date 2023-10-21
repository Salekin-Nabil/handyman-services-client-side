import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import handyman from '../../../assets/icons/logos/icon-1.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';

const Navbar = () => {

    const [load, setLoad] = useState(false)
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
      };

    if(load) {
        return <Loading></Loading>
    }
    
    const logout_loader = () => {
        let barWidth = 0;
        setLoad(true);
        setTimeout(() => {
            let intervalID = setInterval(() => {
              if (barWidth === 100) {
                clearInterval(intervalID);
                setLoad(false);
                logout();
              } else {
                barWidth++;
              }
            }); //this sets the speed of the animation
          }, 300);
    }

    const menuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li>{user ? <div className='flex p-0'> <button className='btn btn-ghost' onClick={logout_loader}>Log Out</button> <img className='rounded-full w-[40px] h-[40px]' src={user.photoURL}></img> </div> : <Link to="/login">Login</Link>}</li>
    </React.Fragment>

    return (
        <div className="navbar bg-base-100 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/"><img src={handyman} alt="Handyman" className="btn btn-ghost lg:w-1/4 lg:h-1/4 normal-case text-xl"></img></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;