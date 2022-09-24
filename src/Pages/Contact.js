import React from 'react';
import { Link } from 'react-router-dom';
import '.././components/Cssfile/contact.css';
import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e0upac7', 'template_3v6hllz', form.current, 'oYs0fZ-tmSmHuYr2P')
      .then((result) => {
          console.log(result.text);
          console.log("massage sent")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
    return (
        <div>
            <div className='contact'>
                <h1>CONTACT</h1>
                <h6 ><Link to="/home">HOME</Link>  / <Link to="/about"> ABOUT</Link></h6> 
            </div>

            <div className='container mt-5'>
                <div className="row">
                    <div className="col-md-3 contact-info pt-5">
                        <div className='ms-2'>
                        <h2>Contact Info</h2>
                        <br />
                        <h6 className='infostyle'><b>Phone: <br /> </b>  +8801314540002</h6>
                        <br />
                        <h6 className='infostyle'><b>Email:</b>  rashedul1784islam@gmail.com</h6>
                        <br />
                        <h6 ><b> Address:</b> kewatkhali,moynermor,mymensingh</h6>
                        </div>
                        
                    </div>
                    <div className="col-md-1">

                    </div>
                    <div className="col-md-8 contact-part pt-5">
                        <div className='ps-3 contactstyle'>
                        <h2 >GET IN TOUCH</h2>
                        <form ref={form} onSubmit={sendEmail}>
                     <label>Name</label>
                     <br />
                    <input className='name' type="text" name="user_name" />
                    <br />
                    <br />
                    <label>Email</label>
                    <br />
                    <input className='name' type="email" name="user_email" />
                    <br />
                    <br />
                    <label>Message</label>
                    <br />
                    <textarea className='massage' name="message" />
                    <br />
                    <br />
                    <Button type="submit" variant="light">SEND</Button>{' '}
                    
                   
    </form>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;