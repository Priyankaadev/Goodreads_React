import { Link } from "react-router-dom";
import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs'

export default function Footer(){
    return (
        <footer className="relative bottom-0 h-[10vh] flex flex-col sm:flex-row items-center justify-between text-black bg-primary-content sm:px-20 ">
           <section>
            Copyright 2023 | All rights reserved
           </section>
           <section className="flex items-center gap-5 text-2xl text-white">
            <Link className="hover:text-yellow-500 transition-all ease-in-out flex duration-300 text-black">
            <BsFacebook />
            </Link>
            <Link className="hover:text-yellow-500 transition-all ease-in-out flex duration-300 text-black">
            <BsInstagram />
            </Link>
            <Link className="hover:text-yellow-500 transition-all ease-in-out flex duration-300 text-black">
            <BsTwitter />
            </Link>
            <Link className="hover:text-yellow-500 transition-all ease-in-out flex duration-300 text-black">
            <BsLinkedin />
            </Link>

           </section>
        </footer>
    )
}