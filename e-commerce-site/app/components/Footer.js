import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

// library.add(faFacebookF);

export default function Footer() {
    return (
        <footer className="p-16 bg-blue-100">
            <div className="bg-white p-10 rounded-xl flex justify-evenly items-center gap-8">
                <div className="">
                    <h2 className="font-bold text-2xl">Subscribe newsletter</h2>
                </div>
                <div className="newsletter flex items-center rounded-lg">
                    <input type="email" name="" id="" placeholder="Enter email" className="bg-[var(--primary)] px-2 py-1 text-lg rounded-lg" />
                    <div className="plane pe-4">
                        <button><FontAwesomeIcon icon={faPaperPlane} width={"20px"} /></button>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="">
                        <img src="vector.png" alt="" />
                    </div>
                    <div className="">
                        <h2 className="font-semibold">Call us</h2>
                        <p>+977-9812345678</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between mt-10 gap-12">
                <ul className="items-center w-[350px]">
                    <li><img src="logo-1 1.png" alt="" /></li>
                    <li className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, iste atque. Deleniti maiores velit dolores!</li>
                    <li className="mt-4">
                        <ul className="flex gap-5">
                            <li><FontAwesomeIcon icon={faFacebook} width={"20px"} /></li>
                            <li><FontAwesomeIcon icon={faInstagram} width={"20px"} /></li>
                            <li><FontAwesomeIcon icon={faWhatsapp} width={"20px"} /></li>
                        </ul>
                    </li>
                </ul>
                <ul className="items-center">
                    <h2 className="font-bold text-lg">Navigation</h2>
                    <li className="mt-2">Electronics</li>
                    <li>Fashion</li>
                    <li>Utilities</li>
                    <li>Stationary</li>
                    <li>Food</li>
                </ul>
                <ul className="items-center">
                    <h2 className="font-bold text-lg">Help</h2>
                    <li className="mt-2">Contacts</li>
                    <li>Privacy Policy</li>
                    <li>Return Policy</li>
                    <li>Payment policy</li>
                    <li>About us</li>
                </ul>
                <ul className="items-center">
                    <h2 className="font-bold text-lg">About US</h2>
                    <li className="mt-2">News</li>
                    <li>Service</li>
                    <li>Our Policy</li>
                    <li>Customer Care</li>
                    <li>FAQ's</li>
                </ul>
            </div>
        </footer>
    )
}