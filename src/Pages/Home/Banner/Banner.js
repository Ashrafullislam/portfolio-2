import React, { useCallback, useEffect } from 'react';
import './Banner.css';
import Image from '../../../Portfolio/banner-img-removebg-preview (2).png';
import { Typewriter } from 'react-simple-typewriter'
import {  FaArrowRight, FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import javascript from '../../../Portfolio/Icon/javascript.png';
import react from '../../../Portfolio/Icon/react-removebg-preview.png';
import node  from '../../../Portfolio/Icon/node-removebg-preview.png';
import mongodb from '../../../Portfolio/Icon/mongo.png';
// react ts particle animation 
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Aos from 'aos';
import 'aos/dist/aos.css'


const Banner = () => {
    const particlesInit = useCallback(async engine => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
      await console.log(container);
  }, []);


  useEffect(()=> {
   Aos.init({duration:1000})
   },[])


    return (
           <section className=''>
           
        
            {/* tsparticles animation code end */}

           
       <div className='banner container '>  
       <div className='animation'>
              
              {/* tsparticles animation code end */}
              <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={{
             
                  fpsLimit: 60,
                  interactivity: {
                      events: {
                          onClick: {
                              enable: true,
                              mode: "push",
                          },
                          onHover: {
                              enable: true,
                              mode: "repulse",
                          },
                          resize: true,
                      },
                      modes: {
                          push: {
                              quantity: 4,
                          },
                          repulse: {
                              distance: 10,
                              duration: 0.6,
                          },
                      },
                  },
                  particles: {
                      color: {
                          value: "#ff004c",
                      },
                      links: {
                          color: "#ff004c",
                          distance: 100,
                          enable: true,
                          opacity: 0.5,
                          width: 1,
                      },
                      collisions: {
                          enable: true,
                      },
                      move: {
                          directions: "none",
                          enable: true,
                          outModes: {
                              default: "bounce",
                          },
                          random: true,
                          speed: 1.5,
                          straight: false,
                      },
                      number: {
                          density: {
                              enable: true,
                              area: 800,
                          },
                          value: 200,
                      },
                      opacity: {
                          value: 0.5,
                      },
                      shape: {
                          type: "circle",
                      },
                      size: {
                          value: { min: 1, max: 5 },
                      },
                  },
                  detectRetina: true,
              }}
          />
  
              </div>
            <div className='banner-left '>
                <div className='p-5 mt-6'>
                    <h3 className='text-xl ' data-aos="fade-down" > Wellcome to my world </h3>
                    <h1 className='lg:text-5xl md:text-3xl text-2xl mt-3 font-bold' data-aos="fade-right"> Hi, I'm <span className ="text-warning" > Ashrafull Islam </span>  </h1>
                    <h1 className='lg:text-5xl md:text-3xl text-2xl font-bold mt-5'>
                        A   
                 <span className=' font-bold lg:text-5xl md:text-3xl text-2xl ml-3'>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={['Web Developer', 'Front-end Developer', 'Mern Stack Developer', 'Node js Developer ', 'React js Developer']}
                        loop={Infinity}
                        cursor
                        cursorStyle='🖊️'
                        typeSpeed={50}
                        deleteSpeed={30}
                        delaySpeed={1000}
                    
                    />
                    </span>
                    </h1>
                    <p className='mt-6 text-xl' data-aos="fade-up">
                    I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.
                    </p>

            {/* banner social icon part  */}
            <div className='mt-14 lg:flex md:flex justify-between'>
              <div>
                 <h2> Find me with </h2>
                    <div className='flex gap-4 mt-4'>
                       <div className='banner-social-icon'> 
                             <a href='/' > <FaFacebookSquare className='text-2xl' /> </a>
                            </div>
                             <div className='banner-social-icon'>
                               <a href='/' > <FaInstagramSquare  className='text-2xl' /> </a>
                             </div>
                             <a href="https://www.linkedin.com/in/md-ashrafull-islam-2ba9aa259/"> 
                             <div className='banner-social-icon'>
                                 <FaLinkedin  className='text-2xl' />
                             </div>
                             </a>
                        </div>
                     </div>
                     
                     {/* banner skill icon part  */}
                     <div>
                  <h2> My best skill in </h2>
                    <div className='flex gap-3 mt-4'>
                       <div className='banner-social-icon'> 
                             <a href='/' > <img src={javascript} alt='' className='w-6 h-6' /> </a>
                            </div>
                             <div className='banner-social-icon'>
                               <a href='/' > <img src={react} alt='' className='w-6 h-6' /> </a>
                             </div>
                             <div className='banner-social-icon'>
                               <a  style={{background:'white',borderRadius:'6px'}} href="/"> <img  src={node} alt='' className='w-6 h-6' /></a>
                             </div>
                             <div className='banner-social-icon'>
                               <a style={{background:'white',borderRadius:'6px'}} href="/"> <img src={mongodb} alt='' className='w-6 h-6 ' /></a>
                             </div>
                        </div>
                     </div>
                  </div>
                </div>
               
                      <div className='lg:ml-4 mt-2 ' >
                      <a href="https://drive.google.com/file/d/1YyFtHDR_23-DhD2l7oGuF5_9Tg0vANNS/view?usp=share_link"> <button className='btn  bg-gradient-to-r from-warning to-primary border-none shadow text-slate-200 hover:bg-gradient-to-r hover:from-primary hover:to-warning ' > Get My Resume <FaArrowRight className='text-xl text-warning ml-3 ' /> </button> </a>
                        </div> 
            </div>

  
          {/* Banner right img part  */}
            <div className="banner-right mt-7  " data-aos="fade-down-left"  data-aos-duration="1500">
            
                <div>
                    <img src={Image} className="w-full h-full" alt="Owner img" />
                </div>
             </div>
          
            </div>
           
           </section>

         
  
  );
};

export default Banner;