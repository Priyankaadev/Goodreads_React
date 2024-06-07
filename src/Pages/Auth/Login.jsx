import { signin } from "Redux/Slices/AuthSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate()



    const [signinDetails, setSigninDetails] = useState({
        email: '',
        password: '',

    })
    function resetForm(){
        setSigninDetails({
            email: '',
            password: '',

        })
    }

    function handleFormChange(e) {
        const {name, value} = e.target;
        setSigninDetails({
            ...signinDetails,
            [name]: value
        })

    }
   async function onFormSubmit(e) {
        e.preventDefault();
        const response = await dispatch(signin(signinDetails))
        if(response?.payload?.data){
             resetForm()
         navigate('/dashboard')
        
        }

    }
    
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
                <form onSubmit={onFormSubmit} className=" flex flex-col justify-center items-center w-3/4 mx-auto" autoComplete="off">

                    <div className="my-5 w-1/3">
                        <input type="email"
                            autoComplete="off"
                            name="email"
                            onChange={handleFormChange}
                            value={signinDetails.email}
                            placeholder="Email..."
                            className="px-8 py-3 bg-gray-200 rounded-md w-full text-black "
                        />
                    </div>
                    <div className="my-5 w-1/3">
                        <input type="password"
                            value={signinDetails.password}
                            autoComplete="off"
                            name="password"
                            onChange={handleFormChange}
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