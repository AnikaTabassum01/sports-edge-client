import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaUserAlt } from 'react-icons/fa';
import { RiAdminFill } from 'react-icons/ri';
import Swal from "sweetalert2";


const AllUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/allUsers')
        return res.json();
    })

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                    Swal.fire({
                        icon: 'success',
                        text: 'Role updated Successfully',
                    })
            }
        })
    }

    const handleDelete = user => {

    }
    return (
        <>
            <Helmet>
                <title>Sports Edge || All Users</title>
            </Helmet>
            <div className='w-11/12 py-10 px-5 bg-base-300 shadow-2xl my-10'>
                <p className='text-3xl font-bold my-5 text-center'>All Users: {users.length}</p>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Make Admin</th>
                                <th>Make Instructor</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                          {
                            users.map((user, index) =>   <tr key={user._id}>
                                <th>{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{ user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className='btn btn-neutral text-white'><FaUserAlt className='w-5 h-5' /></button>}</td>
                                    <td><button className='btn btn-neutral text-white'><RiAdminFill className='w-5 h-5' /></button></td>

                            </tr>)
                          }
                          
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default AllUsers;