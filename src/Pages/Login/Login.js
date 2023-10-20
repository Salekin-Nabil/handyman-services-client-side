import React, { useContext, useState } from 'react';
import login from "../../assets/images/login.png";
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import google from '../../assets/images/google.png';
// import { AuthContext } from '../../contexts/AuthProvider';
// import useToken from '../../hooks/useToken';

const Login = () => {
    // const { register, formState: { errors }, handleSubmit } = useForm();
    // const { signIn } = useContext(AuthContext);
    // const [loginError, setLoginError] = useState('');
    // const [loginUserEmail, setLoginUserEmail] = useState('');
    // // const [token] = useToken(loginUserEmail);
    // const location = useLocation();
    // const navigate = useNavigate();

    // const from = location.state?.from?.pathname || '/';

    // // if (token) {
    // //     navigate(from, { replace: true });
    // // }

    // const handleLogin = data => {
    //     console.log(data);
    //     setLoginError('');
    //     signIn(data.email, data.password)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //             setLoginUserEmail(data.email);
    //         })
    //         .catch(error => {
    //             console.log(error.message)
    //             setLoginError(error.message);
    //         });
    // }

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    
    let errorElement;

    if(loading){
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-white bg-red-700  my-4 text-lg'>Error: {error?.message}</p>
    }

    if (user) {
        navigate(from, { replace: true });}

    return (
        <div className='h-[800px] flex justify-center items-center place-content-between md:mt-[-120px]'>
            {/* <div>
                <img className='mt-[-100px]' src={login} alt="" />
            </div> */}
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form>
                {/* <form onSubmit={handleSubmit(handleLogin)}> */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            // {...register("email", {
                            //     required: "Email Address is required"
                            // })}
                            className="input input-bordered w-full max-w-xs" />
                        {/* {errors.email && <p className='text-red-600'>{errors.email?.message}</p>} */}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            // {...register("password", {
                            //     required: "Password is required",
                            //     minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            // })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        {/* {errors.password && <p className='text-red-600'>{errors.password?.message}</p>} */}
                    </div>
                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                    <div>
                        {/* {loginError && <p className='text-red-600'>{loginError}</p>} */}
                    </div>
                </form>
                <p className='text-sm text-center'>New to Handyman Services? <Link className='text-secondary' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline w-full'><img className='w-[20px] mr-2' src={google} alt='' />CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;