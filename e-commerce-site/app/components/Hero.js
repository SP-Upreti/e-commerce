"use client"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';


export default function Hero() {
    const [data, setData] = useState([]);
    const url = "https://fakestoreapi.com/products/category/electronics?limit=4"

    const fetchData = async () => {
        const req = await fetch(url);
        const res = await req.json();
        setData(res)
    }
    useEffect(
        () => {
            fetchData()
        },
        []
    )

    return (
        <section className=" p-16 mt-20">

            <div className="">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    autoplay={{ delay: 4000 }}
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    className=''

                >
                    {
                        data ? data.map(
                            (_data, key) => {
                                return (
                                    <SwiperSlide key={key}>
                                        <div className="w-[90vw]">
                                            <div className="  flex justify-between items-center  mx-auto  w-fit">
                                                <div className="mx-auto w-1/2">
                                                    <h2 className="font-bold text-4xl text-[var(--secondary)]">{_data.title}</h2>
                                                    <p className="w-[33rem] mt-3 text-lg">{_data.description.slice(0, 100)}...</p>
                                                    <div className="mt-5 flex gap-8 items-center">
                                                        <button className="text-white border-2 border-[var(--primary)] bg-[var(--primary)] px-5 py-1 rounded text-lg ">buy now</button>
                                                        <button className="border-2 border-[var(--secondary)] text-[var(--secondary)] px-5 py-1 rounded text-lg ">view more</button>
                                                    </div>
                                                </div>
                                                <div className="mx-auto relative ">
                                                    <div className="absolute " style={{ bottom: "4rem", left: "-2rem" }}>
                                                        <div className="h-20 w-20 rounded-full bg-[var(--primary)] flex justify-center items-center text-xs text-center font-bold text-white">
                                                            only <br /> Rs. {_data.price}
                                                        </div>
                                                    </div>
                                                    <img src={_data.image} alt="photo" className='h-[350px]' />
                                                </div>
                                            </div></div>
                                    </SwiperSlide>
                                )
                            }
                        ) :
                            "loading"
                    }



                </Swiper>
            </div>




            <div className="flex justify-center gap-10 mt-16 w-[70vw] mx-auto">


                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    autoplay={{ delay: 2000 }}

                    spaceBetween={0}
                    slidesPerView={3}
                    // pagination={{ clickable: true }}
                    // navigation
                    // scrollbar={{ draggable: true }}
                    navigation
                    className=''

                >
                    <SwiperSlide>
                        <div className="w-[20rem] rounded-lg border border-[var(--secondary)] p-4 flex justify-between items-center">
                            <div className="h-16 w-16  rounded-full overflow-hidden flex justify-center items-center">
                                <img src="laptop.png" alt="" className="" />
                            </div>
                            <div className="text-[var(--secondary)]">
                                <h2 className="font-semibold text-lg ">Desktops & Laptops</h2>
                                <p>{"( 12 items )"}</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-[20rem] rounded-lg border border-[var(--secondary)] p-4 flex justify-between items-center">
                            <div className="h-16 w-16  rounded-full  flex justify-center items-center">
                                <img src="speaker.jpg" alt="" className="" />
                            </div>
                            <div className="text-[var(--secondary)]">
                                <h2 className="font-semibold text-lg ">Speakers & mp3</h2>
                                <p>{"( 16 items )"}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-[20rem] rounded-lg border border-[var(--secondary)] p-4 flex justify-between items-center">
                            <div className="h-16 w-16  rounded-full  flex justify-center items-center">
                                <img src="8 1.png" alt="" className="" />
                            </div>
                            <div className="text-[var(--secondary)]">
                                <h2 className="font-semibold text-lg ">DSLR Camera</h2>
                                <p>{"( 7 items )"}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-[20rem] rounded-lg border border-[var(--secondary)] p-4 flex justify-between items-center">
                            <div className="h-16 w-16  rounded-full overflow-hidden flex justify-center items-center">
                                <img src="laptop.png" alt="" className="" />
                            </div>
                            <div className="text-[var(--secondary)]">
                                <h2 className="font-semibold text-lg ">Desktops & Laptops</h2>
                                <p>{"( 12 items )"}</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-[20rem] rounded-lg border border-[var(--secondary)] p-4 flex justify-between items-center">
                            <div className="h-16 w-16  rounded-full  flex justify-center items-center">
                                <img src="speaker.jpg" alt="" className="" />
                            </div>
                            <div className="text-[var(--secondary)]">
                                <h2 className="font-semibold text-lg ">Speakers & mp3</h2>
                                <p>{"( 16 items )"}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-[20rem] rounded-lg border border-[var(--secondary)] p-4 flex justify-between items-center">
                            <div className="h-16 w-16  rounded-full  flex justify-center items-center">
                                <img src="8 1.png" alt="" className="" />
                            </div>
                            <div className="text-[var(--secondary)]">
                                <h2 className="font-semibold text-lg ">DSLR Camera</h2>
                                <p>{"( 7 items )"}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>







            </div>
        </section>
    )
}