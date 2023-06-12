import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import { Fade, JackInTheBox, Slide } from "react-awesome-reveal";

const Banner = () => {
    return (
        <>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <img className="h-[700px] w-full" src="https://st4.depositphotos.com/3917667/20987/i/600/depositphotos_209873190-stock-photo-studio-shot-group-kids-training.jpg" alt="" />
                    <div className=" -mt-96 ml-20 mb-16 ">
                        <Slide>
                            <h2 className="text-4xl font-bold text-blue-800 bg-gradient-to-r from-[#cdc6c6] to-[rgba(21, 21, 21, 0) p-10 ">
                                Summer camp is an ideal platform  <br />for children and teenagers <br />to learn and have fun. </h2>
                        </Slide>
                        <Fade delay={1e3} cascade damping={2e-1}>
                            <button className="btn btn-primary mt-2 font-bold normal-case text-2xl text-white">Enrol Now</button>
                        </Fade>
                    </div>
                </SwiperSlide>



                <SwiperSlide>
                    <img className="h-[700px] w-full" src="https://media.istockphoto.com/id/497568472/photo/boy-playing-cricket.jpg?s=612x612&w=0&k=20&c=l_5wcAKbTpnBqOb9tHOiyqVZmHJRmjz_3kxHpZRStfM=" alt="" />

                    <div className=" -mt-96 ml-20 ">
                        <Slide><h2 className="text-4xl font-bold text-orange-600 bg-gradient-to-r from-[#63ad7b] to-[rgba(21, 21, 21, 0) p-10 ">
                            Summer camp for students can be  <br />an excellent opportunity for learning and <br />
                            growing outside of the traditional classroom setting. </h2></Slide>

                    </div>

                </SwiperSlide>
                <SwiperSlide>

                    <img className="h-[700px] w-full " src="https://images.ctfassets.net/3s5io6mnxfqz/wfAz3zUBbrcf1eSMLZi8u/c03ac28c778813bd72373644ee8b8b02/AdobeStock_364059453.jpeg" alt="" />

                    <div className=" -mt-96 mb-16 ml-20 ">
                        <Slide><h2 className="text-4xl font-bold text-orange-600 bg-gradient-to-r from-[#342d2d] to-[rgba(21, 21, 21, 0) p-10 ">
                            <JackInTheBox>Join our Summer Camp</JackInTheBox>
                            <br />
                            and express your creativity. </h2></Slide>                        

                    </div>

                </SwiperSlide>




            </Swiper>
        </>
    );
};

export default Banner;