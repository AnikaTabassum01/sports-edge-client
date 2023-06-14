import { useEffect, useState } from "react";



const PopularInstructor = () => {

    const [instructor, setInstructor] = useState([]);

    useEffect(() => {
        fetch('https://sports-edge-server.vercel.app/instructor')
            .then(res => res.json())
            .then(data => setInstructor(data))
    }, [])

    return (
        <>
        
        <div>
            <div className='text-4xl font-bold text-orange-500 text-center mt-16 mb-8'>
                <h2>--- Popular Instructor ---</h2>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-5 mx-auto'>
                    {
                        instructor.map(instructor =>
                            <div key={instructor._id} className="card w-80 glass shadow-2xl group">
                                <figure><img className='group-hover:scale-110' src={instructor.instructorImage} alt={instructor.name} /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{instructor.name}</h2>
                                    <p className='font-semibold'>Email: <span className='font-normal'>{instructor.instructorEmail}</span></p>
                                </div>
                            </div>)
                    }
                </div>

        </div>
        </>
    );
};

export default PopularInstructor;