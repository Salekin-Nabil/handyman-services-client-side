import React, { useContext, useState, useRef  } from 'react';
import login from "../../assets/images/login.png";
import {useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import google from '../../assets/images/google.png';
import toast, { Toaster } from 'react-hot-toast';
// import { AuthContext } from '../../contexts/AuthProvider';
// import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const emailRef = useRef('');
    // const { signIn } = useContext(AuthContext);
    // const [loginError, setLoginError] = useState('');
    // const [loginUserEmail, setLoginUserEmail] = useState('');
    // // const [token] = useToken(loginUserEmail);

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

    // const [email, setEmail] = useState('');

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const [signInWithEmailAndPassword,user1,loading1,error1] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, error2] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    
    let errorElement;

    if(loading || loading1){
        return <Loading></Loading>
    }

    if (error || error1 || error2) {
        errorElement = <p className='text-red-700  my-4 text-sm'>Error: {error?.message || error1?.message || error2?.message}</p>
    }

    if (user || user1) {
        console.log(user1);
        navigate(from, { replace: true });
    }

    const OnSubmit = data =>{
        console.log(data);
        const email = emailRef.current.value;
        signInWithEmailAndPassword(email, data.password);
    } 

    const notify = () => toast('Email Sent For Password Recovery.');
    const notify1 = () => toast('Please Enter Your Email');

    const resetPassword = async () => {
        const email = emailRef.current.value;
        console.log(email)
        if (email) {
            await sendPasswordResetEmail(email);
            notify();
        }
        else{
            notify1();
        }
    }

    return (
        <div className='h-[800px] flex justify-center items-center place-content-between md:mt-[-120px] font-semibold'>
            {/* <div>
                <img className='mt-[-100px]' src={login} alt="" />
            </div> */}
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center uppercase'>Login</h2>
                {/* <form> */}
                <form onSubmit={handleSubmit(OnSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email"
                            placeholder='Your Email'
                            required
                            ref={emailRef}
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            placeholder='Your Password'
                            {...register("password", 
                            {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password?.type === "required" && <p className='text-red-600'>{errors.password?.message}</p>}
                        {errors.password?.type === "minLength" && <p className='text-red-600'>{errors.password?.message}</p>}
                        <p onClick={resetPassword} className="label cursor-pointer">Forgot password?</p>
                    </div>
                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                    <div>
                        {errorElement}
                        {/* {loginError && <p className='text-red-600'>{loginError}</p>} */}
                    </div>
                </form>
                <p className='text-sm text-center'>New to Handyman Services? <Link className='text-secondary' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline w-full'><img className='w-[20px] mr-2' src={google} alt='' />CONTINUE WITH GOOGLE</button>
            </div>
            <Toaster />
        </div>
    );
};

export default Login;