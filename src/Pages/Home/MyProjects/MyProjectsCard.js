import React from 'react';
import { Link } from 'react-router-dom';

const MyProjectsCard = ({project}) => {
    const {name,discription,photoURL,url} = project;
  return (
    <div>
      <div className="card projects-card w-11/12 m-3 bg-base-100 shadow-xl">
        <figure className=' pt-5'>
          <img src={photoURL} alt="Shoes" className='h-56 ' />
        </figure>
        <div className="card-body h-60">
          <h2 className="card-title">
            {name}
          
          </h2>
          
          <p> {discription.slice(0,50)}.... </p>
          <Link to='/' className='text-warning '> See Detials </Link>
          
          <div className=" mt-3 flex justify-end items-end ">
        
           <a href={url} > <button className='btn btn-sm bg-primary button hover:bg-secondary border-none text-slate-100' > Live projects </button> </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MyProjectsCard;
