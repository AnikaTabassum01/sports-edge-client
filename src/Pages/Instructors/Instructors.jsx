import { useEffect, useState } from "react";


const Instructors = () => {
    const [instructor, setInstructor] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/instructor')
            .then(res => res.json())
            .then(data => setInstructor(data))
    }, [])
    return (
        <div className='w-11/12 px-10 mx-auto'>
            <p className='text-3xl font-bold my-5 text-center'>All Instructors </p>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-5 mx-auto'>
                {
                    instructor.map(instructor =>
                        <div key={instructor._id} className="card w-80 glass shadow-2xl group">
                            <figure><img className='group-hover:scale-110' src={instructor.instructorImage} alt={instructor.name} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{instructor.name}</h2>
                                <p className='font-semibold'>Email: <span className='font-normal'>{instructor.email}</span></p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Instructors;