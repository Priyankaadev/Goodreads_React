import Login from "Pages/Auth/Login";
import Signup from "Pages/Auth/Signup";
import BookDescription from "Pages/BookDescription";
import Dashboard from "Pages/Dashboard";
import Home from "Pages/Home";
import NotFound from "Pages/NotFound";
import { Route, Routes } from "react-router-dom";

export default function MainRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/book/description' element={<BookDescription />}></Route>
            <Route path='*' element={<NotFound />}></Route>
        </Routes>
    )
}