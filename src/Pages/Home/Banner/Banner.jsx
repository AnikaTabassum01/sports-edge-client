import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel>
            <div>
                <img src="https://media.istockphoto.com/id/1133131910/photo/businessman-playing-chess-game-for-business-strategy-leadership-and-management-concept.jpg?s=612x612&w=0&k=20&c=KbZXodvsYDRb0m3QyfRCsHthSyFEFNZgaIzak38Czc8=" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="https://www.tangolearn.com/wp-content/uploads/2022/04/best-basketball-trraining.jpg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="https://www.littlestepsasia.com/wp-content/uploads/2019/02/Top-Football-Schools-For-Kids-In-Hong-Kong.jpg" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
};

export default Banner;