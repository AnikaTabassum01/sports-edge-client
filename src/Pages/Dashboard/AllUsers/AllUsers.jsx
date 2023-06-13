import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";


const AllUsers = () => {
    const { data: allUsers = [], refetch } = useQuery(['users'], async() => {
            const res = await('http://localhost:5000/allUsers');
            return res.data;
    
    });
    return (
        <>
            <Helmet>
                <title>Sports Edge || All Users</title>
            </Helmet>
            <div className='w-11/12 py-10 px-5 bg-base-300 shadow-2xl my-10'>
                <p className='text-3xl font-bold my-5 text-center'>All Users: {allUsers.length}</p>
                <div className="overflow-x-auto">
                    <table className="tab le">
                        {/* head */}
                        <thead className='bg-slate-600 text-white'>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Make Instructor</th>
                                <th>Make Admin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allUsers.map((user, index) =>
                                <tr key={user._id} className='hover'>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    {/* <td><button disabled={user.role === 'instructor'} onClick={() => handleUpdate(user._id, 'instructor')} className='btn btn-neutral text-white'><FaUserAlt className='w-5 h-5' /></button></td>
                                    <td><button disabled={user.role === 'admin'} onClick={() => handleUpdate(user._id, 'admin')} className='btn btn-neutral text-white'><RiAdminFill className='w-5 h-5' /></button></td> */}

                                </tr>)}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default AllUsers;