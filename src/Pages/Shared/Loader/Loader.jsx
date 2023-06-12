import { ImSpinner3 } from "react-icons/im";

const Loader = () => {
    return (
        <div><div className="flex justify-center items-center my-5">
            <ImSpinner3 className='w-10 h-10 animate-spin text-black' />
        </div>
        </div>
    );
};

export default Loader;