import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";


const Classes = () => {
    const [classes, setClasses] = useState([]);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSelect = (singleClass) => {
        console.log(singleClass);
        if (user && user.email) {
            const selectedItem = {selectedId: _id, price, email: user.email}
            fetch('http://localhost:5000/selectedClass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to select class',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            })
        }
    }

    useEffect(() => {
        fetch('http://localhost:5000/allClasses')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])
    return (
        <div className='w-11/12 px-10 mx-auto'>
            <p className='text-3xl font-bold my-5 text-center'>All Instructors </p>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-5 mx-auto'>
                {
                    classes.map(classes =>
                        <div key={classes._id} className="card w-80 glass shadow-2xl group">
                            <figure><img className='group-hover:scale-110 h-64 w-56' src={classes.classImage} alt={classes.name} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{classes.className}</h2>
                                <p className='font-semibold'>Instructor Name: <span className='font-normal'>{classes.instructorName}</span></p>
                                <p className='font-semibold'>Available Seats: <span className='font-normal'>{classes.seats}</span></p>
                                <p className='font-semibold'>Price: <span className='font-normal'>${classes.price}</span></p>
                                <button onClick={() => handleSelect(classes)} className="btn btn-primary normal-case text-xl text-white">Select</button>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Classes;