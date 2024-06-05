import { signup } from "Redux/Slices/AuthSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {

    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [signupDetails, setSignupDetails] = useState({
        email: '',
        password: '',
        username: '',
    })

    function resetForm(){
        setSignupDetails({
            email: '',
            password: '',
            username: '',
        })
    }

    function handleFormChange(e) {
        const { name, value } = e.target;
        setSignupDetails({
            ...signupDetails,
            [name]: value,

        })

    }
    async function onFormSubmit(e) {
        e.preventDefault();
        const response = await dispatch(signup(signupDetails))
        if(response?.payload?.data){
            resetForm()
            navigate("/login")
        }


    }

    return (
        <div className="h-[100vh] text-[#271D43] flex flex-col items-center justify-center">
            <div>
                <h1 className=" text-5xl"> Create a new account</h1>
            </div>
            <div className="mt-4 ">
                <p >Already have an account?
                    <Link to='/login'>
                        <button className="btn btn-success rounded-md px-3 mx-5 py-0.5 hover:text-white ">
                            Sign In
                        </button>
                    </Link>
                </p>
            </div>
            <div className="w-full" >
                <form onSubmit={onFormSubmit} className=" flex flex-col justify-center items-center w-3/4 mx-auto" autoComplete="false">
                    <div className="my-5 w-1/3">
                        <input type="text"
                            autoComplete="false"
                            name="username"
                            onChange={handleFormChange}
                            value={signupDetails.username}
                            placeholder="Username..."
                            className="px-8 py-3  bg-gray-200 rounded-md w-full text-black "
                        />
                    </div>
                    <div className="my-5 w-1/3">
                        <input type="email"
                            name="email"
                            onChange={handleFormChange}
                            value={signupDetails.email}
                            autoComplete="false"
                            placeholder="Email..."
                            className="px-8 py-3 bg-gray-200 rounded-md w-full text-black "
                        />
                    </div>
                    <div className="my-5 w-1/3">
                        <input type="password"
                            onChange={handleFormChange}
                            autoComplete="false"
                            name="password"
                            value={signupDetails.password}
                            placeholder="Password..."
                            className="px-8 py-3 bg-gray-200 rounded-md w-full text-black "
                        />
                    </div>

                    <button className="btn btn-success rounded-md px-7 py-1 my-4 text-lg hover:text-white" type="submit">Submit</button>
                </form>

            </div>
        </div>

    )
}