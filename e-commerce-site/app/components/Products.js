"use client"

import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react"

export default function Products() {
    const [dataNum, setDataNum] = useState(8);
    const [data, setData] = useState([]);

    const url = `https://fakestoreapi.com/products?limit=${dataNum}`;

    const fetchData = async () => {
        const req = await fetch(url)
        const res = await req.json();
        setData(res)
    }

    useEffect(
        () => {
            fetchData()
        },
        [dataNum]
    )
    return (
        <section className="w-[89%] mx-auto py-16">
            <div className="flex justify-between items-center gap-8 flex-wrap">
                <div className="">
                    <h2 className="font-semibold text-2xl">Popular Products</h2>
                </div>
                <div className="">
                    <select name="sort" id="sort">
                        <option value="" selected disabled>Sort</option>
                        <option value="asc">asc</option>
                        <option value="desc">des</option>
                    </select>
                </div>
            </div>

            <div className="flex gap-5 mt-8  items-center flex-wrap">
                {
                    data.map(
                        (_data, key) => {
                            return (
                                <div key={key} className="w-[20rem] rounded-lg border border-slate-300 p-3">
                                    <div className="mx-auto w-fit h-[100px] overflow-hidden mb-4">
                                        <img src={_data.image} alt="camera" className="w-32 " />
                                    </div>
                                    <div className="flex justify-between mt-4 items-center">
                                        <h2 className="text-[var(--secondary)] font-bold text-lg ">{_data.title.slice(0, 15)}...</h2>
                                        <p>Rs. {_data.price}</p>
                                    </div>
                                    <div className="">
                                        <p>{_data.description.slice(0, 60)}...</p>
                                    </div>
                                    <div className="flex gap-4 items-center mt-4">
                                        <button className="border px-4 py-[2px] bg-[var(--primary)] text-white rounded-lg flex gap-2 items-center"><span><FontAwesomeIcon icon={faShoppingBag} /></span><span>buy</span></button>
                                        <button className="border px-4 py-[2px] rounded-lg border-[var(--secondary)]">details</button>
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
            <div className="">
                <div className="flex gap-4 items-center mt-4">
                    <button className="border px-4 py-[2px] rounded-lg border-[var(--secondary)]" onClick={() => { setDataNum(dataNum + 8) }}>see more</button>
                </div>
            </div>
        </section>
    )
}