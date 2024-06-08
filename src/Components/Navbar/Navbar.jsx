import { logout } from "Redux/Slices/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar(){

    const authState = useSelector((state)=> state.auth)
    const dispatch = useDispatch()
    function onLogout(){
        dispatch(logout())

    }


return (
    <div className="navbar bg-primary-content px-14">
        <div className="flex-1">
            <Link to='/dashboard' className="btn btn-ghost normal-case text-xl">Book Buzz</Link>
        </div>
        <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
            { authState.isLoggedIn && <li><Link>Buzz</Link></li>}
            { authState.isLoggedIn && <li><Link>{authState.username}</Link></li>}
            <li>
                <details>
                    <summary>Options</summary>
                    <ul className="p-2 bg-base-200">
                        {authState.isLoggedIn && <li><Link to='/login' onClick={onLogout} > Logout </Link></li>}
                        {!authState.isLoggedIn && <li><Link to='/signup'  > Signup </Link></li>}
                        {authState.isLoggedIn && <li><Link to='/login'  > Signin </Link></li>}
                    </ul>
                </details>
            </li>
        </ul>
        </div>
    </div>
)
}