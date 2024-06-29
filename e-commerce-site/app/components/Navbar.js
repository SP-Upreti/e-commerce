"use client"

import { useState } from "react";

export default function Navbar() {
    const [searchData, setSearchData] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(searchData + " is out of stock.")
        setSearchData("");
    }
    return (
        <nav className="fixed w-screen z-[99] " style={{ top: 0 }}>
            <div className="flex justify-between items-center px-16 py-4 bg-[var(--secondary)] text-white">
                <div className="flex gap-20 items-center">
                    <div className="">
                        <img src="logo 1.png" alt=""  className="h-[30px]"/>
                    </div>
                    <div className="">
                        <form onSubmit={handleSubmit}>
                            <div className="flex items-center">
                                <input type="text"
                                    name=""
                                    id=""
                                    value={searchData}
                                    onChange={(e) => { setSearchData(e.target.value) }}
                                    placeholder="search"
                                    className=" px-4 py-1 text-lg  border-none outline-none h-[35px] text-black"
                                    required />
                                <div className="bg-[var(--primary)] h-[35px] px-3 flex items-center capitalize cursor-pointer">
                                    <button type="submit">search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="">
                    <ul className="flex items-center gap-10">
                        <li>Login</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
            <div className="px-16 py-1 flex justify-between items-center bg-slate-300">
                <div className="">
                    <ul className="flex gap-12">
                        <li>Computers</li>
                        <li>Mobile</li>
                        <li>Camera</li>
                        <li>Utilities</li>
                    </ul>
                </div>
                <div className="">
                    <p>30 days free return</p>
                </div>
            </div>
        </nav>
    )
}