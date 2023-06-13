import { NavLink, Outlet } from "react-router-dom";
import { FaWallet, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import { BiSelectMultiple } from 'react-icons/bi';


const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden ">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side bg-[rgb(200,225,230)]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80">


                    <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                    <li><NavLink to="/dashboard/addClass"> <FaUtensils></FaUtensils> Add Class</NavLink></li>
                    <li><NavLink to="/dashboard/manageitems"><FaWallet></FaWallet> My Classes</NavLink></li>
                    <li><NavLink to="/"><FaBook></FaBook> Manage Classes</NavLink></li>
                    <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                    <li><NavLink to="/dashboard/mySelectedClasses"><BiSelectMultiple></BiSelectMultiple> My Selected Classes</NavLink></li>

                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/Instructors"> Instructors</NavLink></li>
                    <li><NavLink to="/classes">Classes</NavLink></li>
                </ul>

            </div>
        </div>

    );
};

export default Dashboard;

