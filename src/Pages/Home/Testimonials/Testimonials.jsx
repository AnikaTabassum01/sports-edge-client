import React, { useEffect, useState, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper';

const Testimonials = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://sports-edge-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <div className='text-4xl font-bold text-orange-500 text-center mt-16 mb-8'>
                <h2>--- Testimonials & Reviews ---</h2>
            </div>
            <div>
                <>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
                        className="mySwiper"
                    >
                        
                        {
                            reviews.map(review => <SwiperSlide
                            key={review._id}
                            >   <img className='ml-36 h-[400px] w-[1000px]' src="https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/9/a/a/9aa041e93f971ba830b5b05619a7527bc52cab2c.gif" alt="" />
                                <div className='flex mx-56 -mt-72'>
                                    <img className='h-52 mr-8 pt-16' src={review.photo} alt="" />
                                    <div className='pt-20'>
                                    <p className='text-xl text-orange-500'>{review.details}</p>
                                    <p className='text-xl font-bold text-orange-700'>-- {review.name}</p>
                                    </div>
                                </div>

                            </SwiperSlide> )
                        }
                       
                        <div className="autoplay-progress" slot="container-end">
                            <svg viewBox="0 0" ref={progressCircle}>
                                <circle cx="0" cy="0" r="0"></circle>
                            </svg>
                            <span ref={progressContent}></span>
                        </div>
                    </Swiper>
                </>
            </div>
        </div>
    );
};

export default Testimonials;