import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import {useLoaderData} from 'react-router-dom';
import './MyProductsDetails.css';
// react photoview css link 
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';


const MyProjectsDetails = () => {
  const project = useLoaderData ();
  const {client,details,name,liveUrl,photo1,photo2,photo3,photo4,photo5,photoURL,server} = project;
  console.log (project);

  return (
    <section className='w-11/12 mx-auto'>
      <h2 className="text-3xl text-center font-bold mt-3"> Projects Details </h2>
      <div>
        <div className="card  bg-base-100 shadow mt-6">
          <figure className='w-5/6 mx-auto'>
            <img src={photoURL} className="w-full" alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className=" text-2xl font-bold lg:ml-12 ml-5 "> {name} </h2>
            <div className='flex gap-4 text-xl flex-col lg:ml-12 md:ml-5 '>
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
              <a href={liveUrl}><button className="btn text-warning bg-primary
               hover:bg-secondary">Live Site</button></a>
              <a href={client}><button className="btn text-warning bg-primary 
               hover:bg-secondary">Client Repo</button></a>

             <a href={server} >  <button className="btn text-warning bg-primary hover:bg-secondary">Server Repo</button></a>
            </div>
          </div>
        </div>
      </div>
      {/* more image of this  projecs  */}
      <section className='mt-12 rounded-lg bg-primary shadow px-8 py-6 mb-20 ' >
        <h1 className='text-3xl font-bold text-center mt-5 mb-8'> More image of this projects page  </h1>
        <div className='grid lg:grid-cols-2 grid-cols-1  gap-x-6 gap-y-16 mt-4'>

      
        <figure className='w-11/12'>
            <PhotoProvider > 
               <PhotoView  src={photo1}>
                  <img src={photo1} alt="" className="w-full h-96 rounded-md projects-img" />
                </PhotoView>
             </PhotoProvider>
         </figure>


            {/* <figure className='w-11/12'>
                <img src={photo2} className="w-full h-96 rounded-md projects-img" alt="" />
            </figure> */}
         <figure className='w-11/12'>
            <PhotoProvider > 
               <PhotoView  src={photo2}>
                  <img src={photo2} alt="" className="w-full h-96 rounded-md projects-img" />
                </PhotoView>
             </PhotoProvider>
            </figure>

            {
                photo3 && 
             <figure className='w-11/12'>
                <PhotoProvider > 
                   <PhotoView  src={photo3}>
                      <img src={photo3} alt="" className="w-full h-96 rounded-md projects-img" />
                    </PhotoView>
                 </PhotoProvider>
             </figure>
            }
            
            {
                photo4 && 
             <figure className='w-11/12'>
                <PhotoProvider > 
                   <PhotoView  src={photo4}>
                      <img src={photo4} alt="" className="w-full h-96 rounded-md projects-img" />
                    </PhotoView>
                 </PhotoProvider>
             </figure>
            }
            
            
            {
                photo5 && 
                <figure className='w-11/12'>
                <PhotoProvider > 
                   <PhotoView  src={photo5}>
                      <img src={photo5} alt="" className="w-full h-96 rounded-md projects-img" />
                    </PhotoView>
                 </PhotoProvider>
             </figure>
            }
           

        </div>
      </section>
    </section>
  );
};

export default MyProjectsDetails;
