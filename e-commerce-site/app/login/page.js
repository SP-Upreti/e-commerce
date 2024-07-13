"use client"
import Link from "next/link";

export default function Page() {
    return (
        <section>
            <div className="h-screen w-screen absolute t-0 l-0 bg-white z-[99] flex justify-center items-center">
                <div className=" h-[300px]">
                    <h2 className="text-lg font-bold">Login to your account</h2>
                    <div className="mt-2">
                        <form
                            action=""
                            onSubmit={(e) => {
                                e.preventDefault();
                            }}>
                            <div className="flex flex-col gap-4">
                                <input className="border border-black px-2 py-[2px] rounded" type="email" placeholder="email" name="" id="" required />
                                <input className="border border-black px-2 py-[2px] rounded" type="password" placeholder="password" name="" id="" required />
                                <Link href={"./"} className="border border-black py-[2px] rounded cursor-pointer flex justify-center"><input className="" type="submit" name="" id="" /></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}