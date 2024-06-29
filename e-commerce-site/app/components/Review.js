"use client"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default () => {
    return (
        <div className="pt-16 px-16">
            <div className="p-12 bg-blue-100  my-10 rounded-xl flex justify-evenly items-center gap-12">


                <div className="card flex gap-5 items-center text-[var(--secondary)]">
                    <div className="">
                        <img src="vector1.png" alt="" />
                    </div>
                    <div className="">
                        <h2 className="font-bold text-lg">Free delivery</h2>
                        <p>on order above $50,000</p>
                    </div>
                </div>

                <div className="card flex gap-5 items-center text-[var(--secondary)]">
                    <div className="">
                        <img src="vector3.png" alt="" />
                    </div>
                    <div className="">
                        <h2 className="font-bold text-lg">Best Quality</h2>
                        <p>best quality in low price</p>
                    </div>
                </div>

                <div className="card flex gap-5 items-center text-[var(--secondary)]">
                    <div className="">
                        <img src="vector3.png" alt="" />
                    </div>
                    <div className="">
                        <h2 className="font-bold text-lg">1 year warranty</h2>
                        <p>available 1 year warranty</p>
                    </div>
                </div>

            </div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                autoplay={{ delay: 4000 }}
                spaceBetween={50}
                slidesPerView={3}
                pagination={{ clickable: true }}
                className=''

            >
                {
                    [...Array(6)].map(
                        (data, key) => {
                            return (
                                <SwiperSlide key={key}>
                                    <div className="border border-slate-400 p-4 rounded-xl mb-10">
                                        <div className="flex gap-5 items-center">
                                            <div className="h-16 w-16 rounded-full border-4 border-transparent outline-2 outline-dotted outline-[var(--primary)]">
                                                <img src="Ellipse 4.png" alt="" />
                                            </div>
                                            <div className="">
                                                <h2 className='text-xl font-semibold'>Surendra Upreti</h2>
                                            </div>
                                        </div>
                                        <div className="mt-5 bg-blue-100 p-2 rounded-xl">
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur qui ab est amet quam iusto accusantium at aliquid suscipit et!</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        }
                    )
                }
            </Swiper>
        </div>
    );
};