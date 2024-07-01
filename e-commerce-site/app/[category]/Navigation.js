export default function Navigation() {
    return (
        <div className="w-[14rem]  h-[70vh] ">
            <div className="fixed w-[14rem]">
                <ul className="flex flex-col gap-3">
                    <div className="flex justify-between text-lg px-1">
                        <h2 className="font-bold">Categories</h2>
                        <p>items</p>
                    </div>
                    <li className="cursor-pointer flex justify-between items-center border-b border-transparent pb-1 hover:bg-slate-300 p-1 font-semibold"><span>All</span><span className="font-bold">15</span></li>
                    <li className="cursor-pointer flex justify-between items-center border-b border-transparent pb-1 hover:bg-slate-300 p-1 font-semibold"><span>Mens Fashion</span><span className="font-bold">20</span></li>
                    <li className="cursor-pointer flex justify-between items-center border-b border-transparent pb-1 hover:bg-slate-300 p-1 font-semibold"><span>Women's Fashion</span><span className="font-bold">16</span></li>
                    <li className="cursor-pointer flex justify-between items-center border-b border-transparent pb-1 hover:bg-slate-300 p-1 font-semibold"><span>Jewelery</span><span className="font-bold">22</span></li>
                    <li className="cursor-pointer flex justify-between items-center border-b border-transparent pb-1 hover:bg-slate-300 p-1 font-semibold"><span>Electronics</span><span className="font-bold">18</span></li>
                </ul>
            </div>
        </div>
    )
}