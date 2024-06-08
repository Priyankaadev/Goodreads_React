import BookImage from 'Assets/Images/shopbook.webp';
import { BiUser } from 'react-icons/bi'

export default function BookCard({ title, author, description }) {
    return (
        <div className="card card-side bg-base-200 mt-5 w-9/12  shadow-xl h-80">
            <figure className='h-full'>
                <img src={BookImage} className='h-full' alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-3xl">{title}</h2>
                <div className='mt-32 flex  items-center justify-between'>
                    <div className=' flex flex-col gap-5 text-xl'>
                    <div className='flex justify-start gap-3 items-center'>
                        <div>
                            <BiUser />
                        </div>
                        <div>
                            {author}
                        </div>
                    </div>
                    <div>
                        {description}
                    </div>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">More Details</button>
                    </div>
                </div>


            </div>
        </div>
    )
}