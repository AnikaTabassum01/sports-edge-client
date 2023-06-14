import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from 'react-icons/fc';

const Login = () => {

    const { register, formState: { errors } } = useForm();

    const { signIn, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }

                });
                navigate(from, { replace: true });
            })

    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                const saveUser = { name: user.name, email: user.email }
                fetch('https://sports-edge-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {

                            const loggedInUser = result.user;
                            console.log(loggedInUser);

                            
                   
                        }    
                        navigate(from, { replace: true });                              
                         
                    
                    })
            })
        }
        
    
    return (

            <>
                <Helmet>
                    <title>SportsEdge | Login</title>
                </Helmet>

                <div className='my-10 mx-auto w-2/3 md:w-1/3 bg-gray-200 p-10 shadow-2xl rounded-lg flex flex-col'>

                    <p className='text-3xl font-bold text-center mb-7'>Log in...</p>
                    <form onSubmit={handleLogin} className='flex flex-col'>
                        <label className='text-xl font-semibold mb-3'>Email</label>
                        <input placeholder='Email' className='mb-5 p-3 focus:outline-none' {...register('email', { required: true })} />
                        {/* {errors?.email?.type === 'required' && <p className='text-red-800 mb-2'>This field is required</p>} */}
                        <label className='text-xl font-semibold mb-3'>Password</label>
                        <div className='relative w-full'>
                            <input type="password" placeholder='Password' className='mb-5 w-full p-3 focus:outline-none'  {...register('password', { required: true })} />

                        </div>
                        {errors?.password?.type === 'required' && <p className='text-red-800 mb-2'>This field is required</p>}
                        <p className='mb-3 text-gray-700'><small>Don't have an  account ? <Link to='/signup'><span className='underline text-blue-800'>Create an Account</span></Link></small></p>
                        {/* <p className='text-red-800 py-3'>{error}</p> */}
                        <button type='submit' className='text-xl btn  btn-primary font-bold normal-case'>Log in</button>
                    </form>
                    <div className='divider'>Or</div>
                    <div className='cursor-pointer flex items-center justify-evenly w-full py-3 px-2 md:px-10 mx-auto border-2 mt-3 border-gray-500 rounded-full '><button onClick={handleGoogleSignIn} className='font-bold md:text-xl text-center flex'> <FcGoogle className="mr-4 h-8 w-8"></FcGoogle> Sign in with Google</button></div>

                </div>
            </>
        );
    };

    export default Login;

