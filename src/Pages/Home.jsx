import Logo from 'Assets/Images/logo-goodreads.png'

function Home() {
    return (
        <div className="flex flex-col items-center gap-24 justify-center h-[100vh]">
            <div className='h-[250px] w-[280px]'>
                <img
                    className='w-full h-full'
                    src={Logo}
                    alt="logo"
                />
            </div>
            <div className='flex justify-center gap-20 items-center  text-3xl'>
                <div className='w-1/2 text-center font-semibold'>
                    <h1 className='text-[#271D43]'>
                        Book Buzz<br />
                        <span className='text-[#4E36AF] tracking-wide leading-normal'>
                            Your personal library and social network for bookworms
                        </span>
                    </h1>
                </div>
                <div className='flex gap-5'>
                    <button 
                    className='bg-white text-[#271D43] border border-[#271D43] rounded-md px-4 py-2 text-2xl hover:text-white hover:bg-[#271D43]'>
                    Register
                    </button>
                    <button 
                    className='bg-white text-[#271D43] border border-[#271D43] rounded-md px-4 py-2 text-2xl hover:text-white hover:bg-[#271D43]'>
                    Login
                    </button>
                </div>
            </div>
        </div>

    )
}
export default Home;