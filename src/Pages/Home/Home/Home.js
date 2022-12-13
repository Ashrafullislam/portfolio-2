import React from 'react';
import Banner from '../Banner/Banner';
import ContactMe from '../ContactMe/ContactMe';
import MyProjects from '../MyProjects/MyProjects';
import MySkills from '../MySkills/MySkills';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
           <Banner > </Banner>
           <Service > </Service>
           <MyProjects > </MyProjects>
           <ContactMe > </ContactMe>
           <MySkills > </MySkills>
            
        </div>
    );
};

export default Home;