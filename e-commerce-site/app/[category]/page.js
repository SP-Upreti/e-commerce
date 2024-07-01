"use client"

import { useParams } from 'next/navigation';
import Navigation from './Navigation';
import Products from '../components/Products';

export default function Page() {
    const params = useParams();
    const { category } = params;

    return (
        <section className='flex gap-8 p-16 pt-36'>
            <Navigation />
            <div className="w-[90%]">
                <Products />
            </div>
        </section>
    )

}