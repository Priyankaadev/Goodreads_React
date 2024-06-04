import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="h-[100vh] text-[#271D43] flex flex-col items-center justify-center">
            <div>
                <h1 className=" text-5xl"> Login to your account </h1>
            </div>
            <div className="mt-4 ">
                <p >Don't have an account?
                    <Link to='/signup'>
                        <button className="btn btn-success rounded-md px-3 mx-5 py-0.5 hover:text-white ">
                            Sign Up
                        </button>
                    </Link>
                </p>
            </div>
            <div className="w-full" >
                <form className=" flex flex-col justify-center items-center w-3/4 mx-auto" autoComplete="off">

                    <div className="my-5 w-1/3">
                        <input type="email"
                        autoComplete="false"
                            placeholder="Email..."
                            className="px-8 py-3 bg-gray-200 rounded-md w-full text-black "
                        />
                    </div>
                    <div className="my-5 w-1/3">
                        <input type="password"
                        autoComplete="false"
                            placeholder="Password..."
                            className="px-8 py-3 bg-gray-200 rounded-md w-full text-black "
                        />
                    </div>

                    <button className="btn btn-success rounded-md my-4 px-7 py-1 text-lg hover:text-white" type="submit">Login</button>
                </form>

            </div>
        </div>

    )
}