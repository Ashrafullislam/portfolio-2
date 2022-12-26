import React from 'react';
import { Link } from 'react-router-dom';
import './MyProjectsCard';
const MyProjectsCard = ({project}) => {
    const {name,discription,photoURL,id} = project;
  return (
    <div className='projects w-11/12 shadow-xl  m-3 rounded-md' >
      <div className="card  w-full  bg-base-100 "  data-aos="zoom-in-down"  >
        <figure className=' pt-5'>
          <img src={photoURL} alt="Shoes" className='h-56 ' />
        </figure>
        <div className="card-body h-60">
          <h2 className="card-title">
            {name}
          
          </h2>
          
          <p> {discription.slice(0,50)}.... </p>
          
          <div className=" mt-3 flex justify-end items-end ">
        
           {/* <a href={url} > <button className='btn btn-sm bg-primary button hover:bg-secondary border-none text-slate-100' > Live projects </button> </a> */}
          <Link to={`/myprojectsdetails/${id}`} > 
          <button  className='btn btn-md bg-primary button hover:bg-secondary border-none text-slate-100' > More explore  </button>
           </Link>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MyProjectsCard;
