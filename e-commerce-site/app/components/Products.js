"use client"

import { useState } from "react"

export default function Products() {
    const [dataNum, setDataNum] = useState(8);
    return (
        <section className="w-[89%] mx-auto py-16">
            <div className="flex justify-between items-center gap-8 flex-wrap">
                <div className="">
                    <h2 className="font-semibold text-2xl">Popular Products</h2>
                </div>
                <div className="">
                    <ul className="flex gap-4 items-center">
                        <li className="border border-[var(--secondary)] cursor-pointer px-5 rounded-full py-[3px]">Camera</li>
                        <li className="border border-[var(--secondary)] cursor-pointer px-5 rounded-full py-[3px]">Laptops</li>
                        <li className="border border-[var(--secondary)] cursor-pointer px-5 rounded-full py-[3px]">Tablets</li>
                        <li className="border border-[var(--secondary)] cursor-pointer px-5 rounded-full py-[3px]">Mouse</li>
                    </ul>
                </div>
            </div>

            <div className="flex gap-5 mt-8  items-center flex-wrap">
                {
                    [...Array(dataNum)].map(
                        (data, key) => {
                            return (
                                <div className="w-[20rem] rounded-lg border border-slate-300 p-3">
                                    <div className="mx-auto w-fit">
                                        <img src="8 1.png" alt="camera" className="w-32" />
                                    </div>
                                    <div className="flex justify-between mt-4 items-center">
                                        <h2 className="text-[var(--secondary)] font-bold text-lg ">Cannon Camera</h2>
                                        <p>Rs. 15000/-</p>
                                    </div>
                                    <div className="">
                                        <p>Lorem ipsum dolor sit amet conseetur adipisicing elit. Maiores...</p>
                                    </div>
                                    <div className="flex gap-4 items-center mt-4">
                                        <button className="border px-4 py-[2px] bg-[var(--primary)] text-white rounded-lg">buy</button>
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