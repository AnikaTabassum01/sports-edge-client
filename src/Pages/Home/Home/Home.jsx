import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <PopularClasses></PopularClasses>
           <PopularInstructor></PopularInstructor>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;