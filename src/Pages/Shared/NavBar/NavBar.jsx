import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { BiSelectMultiple } from 'react-icons/bi';
import { FaUser } from 'react-icons/fa';


const NavBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }


    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/classes'>Courses</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/'>

            <button className="">
                <div className="badge badge-secondary">+0</div>
            </button>
        </Link></li>
        {
            user?.photoURL ? <img className='w-10 h-10 mt-2 mx-4 rounded-full' src={user?.photoURL} alt="" /> : <FaUser className='h-5 w-5'></FaUser>
        }

        {
            user ? <>
                <button onClick={handleLogOut} className="btn btn-active btn-ghost normal-case text-xl">Log out</button>
            </> : <>
                <li><Link to='/login'>Login</Link></li> </>
        }
    </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-60 bg-black text-white text-xl max-w-screen-xl bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 font-bold bg-opacity-30 text-xl  rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <div className="flex ml-4">
                        <img className="h-20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Icons8_flat_sports_mode.svg/1024px-Icons8_flat_sports_mode.svg.png" alt="" />
                        <h2 className="font-bold text-orange-500 normal-case text-5xl mt-2">Sports Edge</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal font-bold text-xl text-orange-600">
                        {navOptions}
                    </ul>
                </div>


            </div>
        </>
    );
};

export default NavBar;