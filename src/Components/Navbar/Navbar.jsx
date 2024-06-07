import { Link } from "react-router-dom";

export default function Navbar(){
return (
    <div className="navbar bg-primary-content">
        <div className="flex-1">
            <Link to='/dashboard' className="btn btn-ghost normal-case text-xl">Book Buzz</Link>
        </div>
        <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
            <li><Link>Buzz</Link></li>
            <li>
                <details>
                    <summary>Options</summary>
                    <ul className="p-2 bg-base-100">
                        <li><Link > Logout </Link></li>
                    </ul>
                </details>
            </li>
        </ul>
        </div>
    </div>
)
}