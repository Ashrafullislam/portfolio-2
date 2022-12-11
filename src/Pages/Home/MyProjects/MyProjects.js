import React, { useEffect, useState } from 'react';
import UnderLine from '../../../UnderLine/UnderLine';
import MyProjectsCard from './MyProjectsCard';

const MyProjects = () => {
    const [projects,setProjects] = useState([]);

    useEffect(()=> {
        fetch('projects.json')
        .then(res => res.json())
        .then(projects => setProjects(projects))
    },[])
    return (
        <section className='w-full bg-primary py-8'>
         <div className='w-10/12 mx-auto'>
            <div>
                <UnderLine  > </UnderLine>
            </div>
            <h2 className='text-lg text-warning mt-6'> Projects </h2>
            <h2 className='xl:text-5xl lg:text-5xl md:text-3xl text-3xl font-bold mb-6 '>  My projects </h2>
             <div className='grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-5'>
                {
                    projects.map(project => <MyProjectsCard key={project._id} project  = 
                        {project} > 
                        
                    </MyProjectsCard>)
                }
             </div>
        </div>
        </section>
      
    );
};

export default MyProjects;