"use client"
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SubcategoryPage() {
    const params = useParams();
    const { category, subcategory } = params;
    const [data, setData] = useState([])
    const [count, setCount] = useState(1)

    const url = `https://fakestoreapi.com/products/${subcategory}`;

    const fetchApi = async () => {
        const req = await fetch(url);
        const res = await req.json()
        setData(res);

    }
    useEffect(
        () => {
            fetchApi(),
                []
        }
    )

    console.log(data)

    return (
        <section className='pt-32 px-16 flex gap-6 items-center justify-center'>
            <div className="flex gap-5">
                <div className="w-1/2 border border-slate-300 h-[20rem] w-[30rem] flex justify-center items-center">
                    <img src={data.image} alt="" className='w-[12rem]' />
                </div>

                <div className="w-[40rem] flex flex-col gap-4">
                    <h2 className='font-bold text-xl'>{data.title}</h2>
                    <p className='font-semibold text-lg'>Rs.{data.price}</p>
                    <div className="flex flex-col gap-3">
                        <p><FontAwesomeIcon icon={faStar} className='text-yellow-500' />
                            <span> {data.rating ? data.rating.rate : "99"} average ratings <span className='font-semibold'> {`(${data.rating ? data.rating.count : "99"}) reviews`}</span></span>
                        </p>
                        <p className="text-lg ">
                            {data.description}
                        </p>
                        <div className="flex gap-4">
                            <span>Size:</span>
                            <p className='flex gap-3 items-center '>
                                {
                                    [...Array(3)].map(
                                        (data, index) => {
                                            return (
                                                <button className='border border-black px-2 hover:bg-slate-300'>
                                                    {index + 12}
                                                </button>
                                            )
                                        }
                                    )
                                }
                            </p>

                        </div>
                        <div className="flex items-center gap-4">
                            <p>Quantity</p>
                            <div className="mt-2 ">
                                <button className='border border-black px-2 hover:bg-slate-300' onClick={() => {
                                    if (count != 1) {
                                        setCount(count - 1)
                                    }
                                }}>+</button>
                                <button className='border border-black px-4 hover:bg-slate-300' >{count}</button>
                                <button className='border border-black px-2 hover:bg-slate-300' onClick={() => { setCount(count + 1) }}>-</button>
                            </div>

                        </div>
                        <div className="  flex gap-4 items-center">
                            <button className='bg-yellow-500 px-5 py-2 text-xl  rounded-full text-white font-semibold'>buy it now</button>
                            <button className='bg-yellow-500 px-5 py-2 text-xl  rounded-full text-white font-semibold'>add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
