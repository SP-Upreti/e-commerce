import banner from "../../public/banner.png"
export default function Banner() {
    return (
        <section className="px-16 ">
            <div className="flex justify-end border overflow-hidden h-[50vh] banner rounded-2xl">
                {/* <img src="banner.png" alt="" className="w-full" /> */}
                <div className="px-20 flex gap-4 flex-col justify-center ">
                    <h2 className="text-4xl font-bold text-blue-600">Sale upto 50% off</h2>
                    <p className="text-center">12 inch HD display</p>
                    <div className="flex gap-4 justify-center items-center mt-4">
                        <button className="border text-xl  px-4 py-[2px] bg-[var(--primary)]  border-[var(--primary)] text-white rounded-lg">buy</button>
                        <button className="border  text-xl px-4 py-[2px] rounded-lg border-[var(--secondary)]">more</button>
                    </div>
                </div>
            </div>
        </section>
    )
}