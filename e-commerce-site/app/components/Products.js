import FetchProducts from "./FetchProducts";

export default function Products() {
    return (
        <section className="p-16 mx-auto ">
            <div className="flex justify-between items-center gap-8 flex-wrap">
                <div className="">
                    <h2 className="font-semibold text-2xl">Popular Products</h2>
                </div>
            </div>
            <div className="">
                <FetchProducts />
            </div>
        </section>
    )
}