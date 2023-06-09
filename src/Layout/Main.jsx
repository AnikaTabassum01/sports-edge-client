import { Outlet } from "react-router-dom";
import Footer from "../assets/Pages/Shared/Footer/Footer";
import NavBar from "../assets/Pages/Shared/NavBar/Navbar";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;