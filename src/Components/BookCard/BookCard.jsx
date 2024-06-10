import BookImage from 'Assets/Images/shopbook.webp';
import { BiUser } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';

export default function BookCard({data}) {
    const navigate = useNavigate()
    return (
        <div className="card md:card-side md:h-60 bg-base-200 capitalize mt-5 w-full   shadow-xl">
            <figure className='h-full'>
                <img src={BookImage} className='h-1/5 md:h-full' alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title ">{data.title}</h2>
                <div className='mt-12 flex  items-center justify-between'>
                    <div className=' flex flex-col gap-3 text-xl'>
                    <div className='flex justify-start gap-5 items-center'>
                        <div>
                            <BiUser />
                        </div>
                        <div>
                            {data.author?.name}
                        </div>
                    </div>
                    <div>
                        {data.description}
                    </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button 
                        onClick={()=>{
                            navigate('/book/description', {state: {...data}})
                        }}
                        className="btn btn-primary text-lg">More Details</button>
                    </div>
                </div>


            </div>
        </div>
    )
}