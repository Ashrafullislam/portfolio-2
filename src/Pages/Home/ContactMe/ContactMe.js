import React, { useRef, useState } from 'react';
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaPhoneAlt,
} from 'react-icons/fa';
import contact from '../../../Portfolio/contact1.png';
import UnderLine from '../../../UnderLine/UnderLine';
import './ContactMe.css';
// emailjs for receive  email from user 
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const ContactMe = () => {
  // it main source is email.js 
  // user: ashrafull130@gmail.com
  // pass: Ashr@full17#

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // copy the servcie id from email.js 

    emailjs.sendForm('service_2ce5aoz', 'template_1ux0ayk', e.target, 'THr9G3BgjU2Jfxd6U')
      .then((result) => {
          console.log(result.text);
          toast.success(" Your message  has been sent successfully  ")
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };


  return (
    <section id='contact' className="mt-16 mb-16 w-10/12 mx-auto">
      <UnderLine> </UnderLine>
      <h4 className="text-lg  text-warning text-center"> Contact </h4>
      <h1 className=" xl:text-5xl lg:text-5xl md:text-3xl text-3xl font-bold text-center ">
        {' '}Contact With Me{' '}
      </h1>

      <div className="mt-10 flex gap-5 xl:flex-row lg:flex-row md:felx-col flex-col  ">

        <div className="mx-auto">
          <div className="card w-96 bg-base-100 shadow">
            <figure className="px-10 pt-10">
              <img src={contact} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body  ">
              <h2 className="text-2xl font-bold text-center">
                Md.Ashrafull Islam{' '}
              </h2>
              <p>
                {' '}
                Web Developer || Front-end Develper || Mern Stack Developer
                {' '}
              </p>
              <p className="mt-2">
                {' '}
                I code your Dream to reality . I am available for freelance work. Connect with me via and call in to my account.
                {' '}
              </p>
              <p className="flex items-center">
                {' '}
                <span> <FaEnvelope className="text-warning mr-3" /> </span>
                {' '}
                <b> ashrafull130@gmail.com</b>
                {' '}{' '}
              </p>
              <p className="flex items-center">
                {' '}<FaPhoneAlt className="text-warning mr-3 " />
                <b> +88 01778 231817</b>{' '}
              </p>
              <div className="card-actions">
                <div>
                  <h2> Find me with </h2>

                  <div className="flex gap-4 mt-4">

                    <div className="banner-social-icon">

                      <a href="/">
                        {' '}<FaFacebookSquare className="text-2xl" />{' '}
                      </a>
                    </div>
                    <div className="banner-social-icon">
                      <a href="/">
                        {' '}<FaInstagramSquare className="text-2xl" />{' '}
                      </a>
                    </div>
                    <a href="https://www.linkedin.com/in/md-ashrafull-islam-2ba9aa259/">
                      <div className="banner-social-icon">
                        <FaLinkedin className="text-2xl" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div />

        <div className="w-full mx-auto rounded-xl py-5 px-10 bg-primary shadow h-auto">

          <form className="mt-5"   ref={form} onSubmit={sendEmail} >
            <div className="flex justify-between gap-7 ">

              <label class="block w-full">
                <span class="block text-sm font-medium text-slate-400">
                  Your Name
                </span>
                <input
                  type="text"
                  name="name"
                  class="w-full px-4 text-slate-200 h-14 mt-2  bg-secondary  rounded-lg"
                />

              </label>

              <label class="block w-full">
                <span class="block text-sm font-medium text-slate-400">
                  Phone Number{' '}
                </span>
                <input
                  type="number"
                  name="phone"
                  class="w-full px-4 text-slate-200 bg-secondary h-14 mt-2 rounded-lg"
                  required
                />
              </label>
            </div>

            <label class="block w-full mt-3">
              <span class="block text-sm font-medium text-slate-400">
                {' '}Email{' '}
              </span>
              <input
                type="email"
                name="email"
                class="w-full px-4 text-slate-200 bg-secondary h-14 mt-2 rounded-lg"
                required
              />
              <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                Please provide a valid email address.
              </p>
            </label>

            <label class="block w-full">
              <span class="block text-sm font-medium text-slate-400">
                {' '}Subject{' '}
              </span>
              <input
                type="text"
                name="subject"
                class="w-full text-slate-200 px-4 h-14 bg-secondary mt-2 rounded-lg"
              />

            </label>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Message </span>
              </label>
              <textarea  name="message"
                className="textarea  text-slate-200 px-2 h-32 bg-secondary   textarea-bordered "
                placeholder="Please write your message "
              />
             
            </div>
            <input type="submit" value="Send " className='btn w-full h-3 mt-8 bg-secondary text-slate-300 border-slate-600 hover:bg-primary' />
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactMe;
