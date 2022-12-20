import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
          <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <div className="grid grid-flow-col gap-4">
    <Link to='/aboutme' className="link link-hover">About Me</Link> 
    <Link to='/contact' className="link link-hover">Contact Me </Link> 
    <Link to='/blog' className="link link-hover">Blog </Link> 
    <a href='https://drive.google.com/file/d/1kIgGMlRtY5bi3zlpWopgKJezwZZDgy-Q/view?usp=share_link' className="link link-hover"> My CV   </a>
  </div> 
  <div>
    <div className="grid grid-flow-col gap-4">
    <a href="/">
      {' '}<FaFacebookSquare className="text-2xl" />{' '} </a>
      <a href="/"> {' '}<FaInstagramSquare className="text-2xl" />{' '}</a>
      <a href="https://www.linkedin.com/in/md-ashrafull-islam-2ba9aa259/">
                 
          <FaLinkedin className="text-2xl" /> </a>
    </div>
  </div> 
  <div>
    <p>Copyright © 2022 - All right reserved by Ashrafull Islam</p>
  </div>
</footer>
            
        </div>
    );
};

export default Footer;