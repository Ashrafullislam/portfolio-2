import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import {useLoaderData} from 'react-router-dom';

const MyProjectsDetails = () => {
  const project = useLoaderData ();
  const {discription,client,details,name,liveUrl,photo1,photo2,photoURL,server} = project;
  console.log (project);

  return (
    <section className='w-11/12 mx-auto'>
      <h2 className="text-3xl text-center font-bold"> Projects Details </h2>
      <div>
        <div className="card  bg-base-100 shadow mt-6">
          <figure className='w-10/12 mx-auto'>
            <img src={photoURL} className="w-full" alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className=" text-2xl font-bold ml-12 "> {name} </h2>
            <div className='flex gap-4 text-2xl flex-col ml-12'>
            <p className='flex items-center gap-2'> <FaCheckCircle className='text-warning' /> {details?.one} </p>
            <p className='flex items-center gap-2'> <FaCheckCircle className='text-warning' /> {details?.two} </p>
            <p className='flex items-center gap-2'> <FaCheckCircle className='text-warning' /> {details?.three} </p>
            <p className='flex items-center gap-2'> <FaCheckCircle className='text-warning' /> {details?.four} </p>
            <p className='flex items-center gap-2'> <FaCheckCircle className='text-warning' /> {details?.five} </p>
            <p className='flex items-center gap-2'> <FaCheckCircle className='text-warning' /> {details?.six} </p>
            <p className='flex items-center gap-2'> <FaCheckCircle className='text-warning' /> {details?.seven} </p>
            {
                details?.eight && 
                <p className='flex items-center gap-2'> <FaCheckCircle className='text-warning' /> {details?.eight} </p>

            }
            </div>
       
          
            <div className="card-actions justify-end">
              <a href={liveUrl}><button className="btn text-warning bg-primary">Live Site</button></a>
              <a href={client}><button className="btn text-warning bg-primary">Client Repo</button></a>

             <a href={server} >  <button className="btn text-warning bg-primary">Server Repo</button></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProjectsDetails;
