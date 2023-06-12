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
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <div className='text-4xl font-bold text-orange-500 text-center my-16'>
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
                            >
                                <div>
                                    <img className='h-20' src="https://i.ibb.co/7yzmKY1/image-asset.png" alt="" />
                                    <div>
                                    <p className='text-xl'>{review.details}</p>
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