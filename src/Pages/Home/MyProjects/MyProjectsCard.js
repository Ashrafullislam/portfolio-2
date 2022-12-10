import React from 'react';
import { Link } from 'react-router-dom';

const MyProjectsCard = ({project}) => {
    const {name,discription,photoURL} = project;
  return (
    <div>
      <div className="card projects-card w-11/12 m-3 bg-base-100 shadow-xl">
        <figure>
          <img src={photoURL} alt="Shoes" className='h-56 ' />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
          
          </h2>
          <p> {discription.slice(0,50)}.... </p>
          <div className="card-actions mt-3 justify-end">
            <Link > <button className="btn btn-md bg-primary hover:bg-secondary button border-none text-slate-100" > See Details </button>   </Link>
           <Link > <button className='btn btn-md bg-primary button hover:bg-secondary border-none text-slate-100' > Live projects </button> </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjectsCard;
