import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";

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

                    <img className="h-[700px] w-full " src="https://images.ctfassets.net/3s5io6mnxfqz/wfAz3zUBbrcf1eSMLZi8u/c03ac28c778813bd72373644ee8b8b02/AdobeStock_364059453.jpeg" alt="" />

                   <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                   <h2 className="text-5xl font-bold text- -mt-96 ml-20">Join our Summer Camp 
                    <br />
                    and express your creativity. </h2>
                   </div>

                </SwiperSlide>


                <SwiperSlide>
                    <img className="h-[700px] w-full" src="https://media.istockphoto.com/id/497568472/photo/boy-playing-cricket.jpg?s=612x612&w=0&k=20&c=l_5wcAKbTpnBqOb9tHOiyqVZmHJRmjz_3kxHpZRStfM=" alt="" />

                </SwiperSlide>

                <SwiperSlide>
                    <img className="h-[700px] w-full" src="https://st4.depositphotos.com/3917667/20987/i/600/depositphotos_209873190-stock-photo-studio-shot-group-kids-training.jpg" alt="" />

                </SwiperSlide>


            </Swiper>
        </>
    );
};

export default Banner;