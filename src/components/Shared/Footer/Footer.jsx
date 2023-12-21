import React from 'react';
import { FaFacebook,FaTwitter  } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
const Footer = () => {
    // footer section 
    return (
        <div className='py-5'>
            <footer className="footer p-10 bg-white text-black">
  <nav>
    <header className="footer-title">Whoose</header> 
    <a className="link link-hover">Developers</a>
    <a className="link link-hover">Bankers</a>
    <a className="link link-hover">Teachers</a>
    
  </nav> 
  <nav>
    <header className="footer-title">page</header> 
    <a className="link link-hover">Login</a>
    <a className="link link-hover">Register</a>
    <a className="link link-hover">Home</a>
    
  </nav> 
  <nav>
    <header className="footer-title">Touch us</header> 
    <div className='flex justify-center items-center  align-middle py-10'>
       
    <a href='https://www.google.com/'><h1 className='text-3xl'><FaFacebook></FaFacebook></h1></a>
    <a href='https://www.google.com/'><h1 className='text-3xl px-5'><FaTwitter></FaTwitter></h1></a>
    <a href='https://www.google.com/'><h1 className='text-3xl'><IoLogoInstagram></IoLogoInstagram></h1></a>
    </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;