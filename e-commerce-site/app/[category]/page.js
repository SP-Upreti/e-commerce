"use client"

import { useParams } from 'next/navigation';
import FetchProducts from '../components/FetchProducts';

export default function Page() {
    const params = useParams();
    const { category } = params;

    return (
        <section className=' p-16 pt-32'>
            <div className="">
                <h2 className='font-semibold text-xl cursor-pointer'><span>Home </span>/ <span>{category}</span></h2>
            </div>
            <div className="">
                <FetchProducts />
            </div>
        </section>
    )

}