import React from 'react';
import { FaArrowRight, FaCogs, FaFigma, FaLaptop, FaLaptopCode, FaReact, FaUserTie} from 'react-icons/fa';
import UnderLine from '../../../UnderLine/UnderLine';
import './Service.css';

const Service = () => {
  return (
    <section className="bg-primary w-full py-8 " >
      <div  className="mt-36 mb-24 w-10/12 mx-auto " >
      <div>
      <UnderLine > </UnderLine>
          <a href="https://drive.google.com/file/d/1r9ppQ-BYCPyTdacUqUcKqTLIbwNcDdIg/view?usp=share_link"> <button className='btn bg-primary border-none shadow hover:bg-secondary text-slate-300 ' > Get My Resume <FaArrowRight className='text-xl text-warning ml-3 ' /> </button> </a>
        </div>
        <div className='mt-10'>
            <h3 className='text-warning mt-3 text-lg'> Feautures  </h3>
            <h1 className='lg:text-5xl md:text-3xl text-2xl font-bold mb-10'> What I Do  </h1>
        </div>
      <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-12 '>

        <div className="card service-card w-11/12 bg-secondary  mx-auto ">
          <div className="card-body">
            <FaLaptopCode  className='text-4xl text-warning' />
            <h2 className="card-title">Web Development </h2>
            <p>I provide web development services. The service is provided according to the client's needs with great efficiency</p>
          </div>
        </div>

        <div className="card service-card w-11/12 bg-secondary mx-auto ">
          <div className="card-body">
          <FaLaptop  className='text-4xl text-warning' />
            <h2 className="card-title"> Front-end Development </h2>
            <p>I provide Front-end development services. The service is provided according to the client's needs with great efficiency</p>
          </div>
        </div>

        <div className="card service-card w-11/12 bg-secondary mx-auto ">
          <div className="card-body">
          <FaCogs  className='text-4xl text-warning' />
            <h2 className="card-title"> Backend Development </h2>
            <p>I provide Backend  development services with by node js and express js. The service is provided according to the client's needs with great efficiency</p>             
          </div>
        </div>

        <div className="card service-card w-11/12 bg-secondary mx-auto ">
          <div className="card-body">
          <FaReact  className='text-4xl text-warning' />
            <h2 className="card-title"> Website Design </h2>
            <p>I provide web development services. The service is provided according to the client's needs with great efficiency</p>  
          </div>
        </div>

        <div className="card service-card w-11/12 bg-secondary mx-auto ">
          <div className="card-body">
          <FaFigma  className='text-4xl text-warning' />
            <h2 className="card-title"> Figma to html  </h2>
            <p>I provide web development services. The service is provided according to the client's needs with great efficiency</p>              
          </div>
        </div>

        <div className="card service-card w-11/12 bg-secondary mx-auto ">
          <div className="card-body">
          <FaUserTie  className='text-4xl text-warning' />
            <h2 className="card-title"> Portfolio Design  </h2>
            <p>I provide web development services. The service is provided according to the client's needs with great efficiency</p>         
          </div>
        </div>

      </div>
      </div>
        
     
    </section>
  );
};

export default Service;
