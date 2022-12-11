import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
          <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <div className="grid grid-flow-col gap-4">
    <a href='/' className="link link-hover">About Me</a> 
    <a href='/' className="link link-hover">Contact Me </a> 
    <a href='/' className="link link-hover">Blog </a> 
    <a href='/' className="link link-hover"> Resume  </a>
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