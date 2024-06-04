import Logo from 'Assets/Images/logo-goodreads.png'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="flex flex-col items-center gap-24 justify-center h-[100vh]">
            <div className='h-[240px] w-[280px]'>
                <img
                    className='w-full h-full'
                    src={Logo}
                    alt="logo"
                />
            </div>
            <div className='flex justify-center  items-center gap-10  text-3xl'>
                <div className='w-1/2 text-center font-semibold'>
                    <h1 className='text-[#271D43]'>
                        Book Buzz<br />
                        <span className='text-[#4E36AF] basis-[30%] tracking-wide leading-normal'>
                            Your personal library and social network for bookworms
                        </span>
                    </h1>
                </div>
                <div className='flex basis-[30%] gap-5'>
                    <button 
                    className='bg-[#4E36AF] text-white rounded-md px-4 py-2 text-2xl hover:text-white hover:bg-[#271D43]'>
                    <Link to='/signup'>Register</Link>
                    </button>
                    <button 
                    className='btn btn-warning text-[#271D43]  rounded-md px-4 py-2 text-2xl hover:text-white hover:bg-[#271D43]'>
                    <Link to='/login'>Login</Link>
                    </button>
                </div>
            </div>
        </div>

    )
}
export default Home;