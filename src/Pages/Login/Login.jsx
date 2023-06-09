import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <div className='my-10 mx-auto w-2/3 md:w-1/3 bg-gray-200 p-10 shadow-2xl rounded-lg flex flex-col'>
               
                <p className='text-3xl font-bold text-center mb-7'>Log in...</p>
                <form className='flex flex-col'>
                    <label className='text-xl font-semibold mb-3'>Email</label>
                    <input placeholder='Email' className='mb-5 p-3 focus:outline-none' {...register('email', {required: true})} />
                    {/* {errors?.email?.type === 'required' && <p className='text-red-800 mb-2'>This field is required</p>} */}
                    <label className='text-xl font-semibold mb-3'>Password</label>
                    <div className='relative w-full'>
                        <input placeholder='Password' className='mb-5 w-full p-3 focus:outline-none'  {...register('password', { required: true })}/>
                        
                    </div>
                    {errors?.password?.type === 'required' && <p className='text-red-800 mb-2'>This field is required</p>}
                    <p className='mb-3 text-gray-700'><small>Don't have an  account ? <Link to='/sign-up'><span className='underline text-blue-800'>Create an Account</span></Link></small></p>
                    {/* <p className='text-red-800 py-3'>{error}</p> */}
                    <button type='submit' className='text-xl btn  btn-primary font-bold normal-case'>Log in</button>
                </form>
                <div className='divider'>Or</div>
                <div className='cursor-pointer flex items-center justify-evenly w-full py-3 px-2 md:px-10 mx-auto border-2 mt-3 border-gray-500 rounded-full'><p className='font-bold md:text-xl text-center'>Sign in with Google</p></div>
            </div>
    );
};

export default Login;