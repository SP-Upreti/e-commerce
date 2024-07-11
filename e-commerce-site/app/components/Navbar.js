"use client"

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [searchData, setSearchData] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        alert(searchData + " is out of stock.")
        setSearchData("");
    }
    const [category, setCategory] = useState([]);
    const url = "https://fakestoreapi.com/products/categories";

    useState(
        () => {
            async function fetchData() {
                const req = await fetch(url)
                const res = await req.json()
                setCategory(res)
            }
            fetchData(),
                []
        }
    )
    return (
        <nav className=" z-[99] fixed w-screen" >
            <div className="flex justify-between items-center px-16 py-4 bg-[var(--secondary)] text-white">
                <div className="flex gap-20 items-center">
                    <div className="">
                        <Link href={"/"}><img src="logo 1.png" alt="" className="h-[30px]" /></Link>
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
                        <Link href={'/login'}><li>Login</li></Link>
                        <li><FontAwesomeIcon icon={faShoppingCart} width={"30px"} /></li>
                    </ul>
                </div>
            </div>
            <div className="px-16 py-1 flex justify-between items-center bg-slate-300">
                <div className="">
                    <ul className="flex gap-12">
                        {
                            category.map(
                                (data, key) => {
                                    return (
                                        <Link href={`/${data}`} key={key}><li

                                            className="border-b-2 border-transparent cursor-pointer hover:border-blue-900 leading-4"
                                        >{data}</li></Link>
                                    )
                                }
                            )
                        }
                    </ul>
                </div>
                <div className="">
                    <p>30 days free return</p>
                </div>
            </div>
        </nav>
    )
}