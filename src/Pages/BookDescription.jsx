import Layout from "Layouts/Layout"
import { useEffect } from "react";
import { useLocation } from "react-router-dom"
import BookImage from 'Assets/Images/shopbook.webp'
import { BiUser } from "react-icons/bi";

export default function BookDescription(){
  const {state} = useLocation();
  useEffect(()=>{
    console.log(state);
  })
    return (
      <Layout >
        {
          state._id && (
            <div className="flex  my-5 items-center justify-center gap-3 flex-col md:flex-row">
              <div className="basis-1/3 ">
                <img className="w-full" 
                src={BookImage}
                 alt="Book Image" />
              </div>
              <div className="flex basis-1/3 flex-col items-center justify-center gap-5">
               <div className="text-4xl capitalize"> 
                {state.title}
                </div>
                <div className="text-xl capitalize  ">
                  {state.description}
                </div>
                <div className="flex text-yellow-500 text-xl justify-start gap-5 items-center">
                  <div>
                    <BiUser />
                  </div>
                  <div>
                    {state.author?.name}
                  </div>
                </div>
                <div className="flex tabs tabs-boxed justify-start items-start flex-wrap gap-3">
                  {state.genres.map((genre)=>{
                    return <div key={genre._id} className='tab tab-active text-xl  capitalize'> {genre.name}</div> 
                  })}
                </div>
                <div className="text-xl ">
                  Pages: <span  className="text-yellow-500">{state.pages}</span> 
                </div>
                <div className="text-xl  capitalize">
                  Publish Date: <span className="text-yellow-500">{state.publishDate}</span>
                </div>
               
              </div>
            </div>
          )
        }
      </Layout>
    )
}
