import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (

        <div className="ml-60">
            <img className="h-[500px]" src="https://i.pinimg.com/originals/ee/e6/49/eee6497eb3b97566443273b0485fbac5.gif" alt="" />
           <Link to='/'> <button className="btn btn-warning mt-0 mb-4 normal-case text-xl text-white ml-60">Back to Home </button></Link>
        </div>
        
    );
};

export default ErrorPage;