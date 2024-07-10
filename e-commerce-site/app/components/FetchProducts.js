"use client"

import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react"


export default function FetchProducts() {


    const [dataNum, setDataNum] = useState(8);
    const [data, setData] = useState([]);
    const [id, setId] = useState(null);


    const url = `https://fakestoreapi.com/products?limit=${dataNum}`;

    const fetchData = async () => {
        const req = await fetch(url);
        const res = await req.json();
        setData(res);
    }

    useEffect(
        () => {
            fetchData();
        },
        [dataNum]
    )
    return (
        <div className="">
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
                                        <Link href={`/products/${_data.id}`}><button className="border px-5 py-[3px] bg-[var(--primary)] text-white rounded flex gap-2 items-center"><span><FontAwesomeIcon icon={faShoppingBag} /></span><span>buy</span></button></Link>
                                        <button className="border px-4 py-[2px] rounded border-[var(--secondary)]">details</button>
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
        </div>
    )
}