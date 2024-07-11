"use client"
export default function Page() {
    return (
        <section>
            <div className="h-screen w-screen absolute t-0 l-0 bg-white z-[99] flex justify-center items-center">
                <div className=" h-[300px]">
                    <h2 className="text-lg font-bold">Login to your account</h2>
                    <div className="mt-2">
                        <form action="" onSubmit={(e) => { e.preventDefault(); alert("Login failed") }}>
                            <div className="flex flex-col gap-4">
                                <input className="border border-black px-2 py-[2px] rounded" type="email" placeholder="email" name="" id="" />
                                <input className="border border-black px-2 py-[2px] rounded" type="password" placeholder="password" name="" id="" />
                                <input className="border border-black py-[2px] rounded cursor-pointer" type="submit" name="" id="" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}