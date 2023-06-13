import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { FaTrashAlt } from 'react-icons/fa';

import useSelectClass from '../../../Hooks/useSelectClass/useSelectClass';
import { Link } from 'react-router-dom';


const MySelectedClasses = () => {
    const [selectClass, refetch] = useSelectClass();

    const total = selectClass.reduce((sum, item) => item.price + sum, 0)

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/selectedClass/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <>
            <Helmet>
                <title>Sports Edge || My Selected Classes</title>
            </Helmet>
            <div className='w-11/12 py-10 px-5'>
                <div className='flex'>
                    <p className='text-2xl font-bold my-5 ml-2 mr-80'>My Selected Classes : {selectClass.length}</p>
                    <p className='mt-6 ml-16 font-bold text-xl text-orange-700'>Total: ${total}</p>
                    <button className="btn btn-sm btn-primary mx-auto mt-6">Pay</button>
                </div>


                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-slate-600 text-white'>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Instructor Name</th>
                                <th>Available Seats</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {selectClass.map((classes, index) =>
                                <tr key={classes._id} className='hover'>
                                    <th>{index + 1}</th>
                                    <td><img className='w-20 h-[70px]' src={classes?.singleClass?.classImage} alt="" /></td>
                                    <td>{classes?.singleClass?.className}</td>
                                    <td>{classes?.singleClass?.instructorName}</td>
                                    <td>{classes?.singleClass?.seats}</td>
                                    <td>{classes?.singleClass?.price}</td>
                                    <td className='flex justify-between mt-4'><button onClick={() => handleDelete(classes?._id)} className='btn btn-error btn-sm'><FaTrashAlt></FaTrashAlt></button><Link to='/'><button className='btn  btn-success btn-sm ml-2'>pay</button></Link></td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default MySelectedClasses;

