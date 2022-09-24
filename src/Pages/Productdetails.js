import React from 'react';
import Button from 'react-bootstrap/Button';
import {Link, useParams } from 'react-router-dom';
import data from '../components/Card/data';
import '../components/Cssfile/Productdetail.css';

const Productdetails = () => {
    const {productId}=useParams();
    const value=data.find((value)=>value.id==productId);
    const {img,title,desc,price}=value;
    return (
        <div className='productdetails'>
        <section className='section-product'>
            <div className='d-flex style'>
                <div data-aos="flip-up">
                <img className='img-style' src={img} alt={title} />
                </div>
            
            <div className='info' data-aos="zoom-out">
            <h4>{title}</h4>
                <p>{desc}</p>
                <h6>{price}</h6>
                <label htmlFor="">Color</label>
                <br />
                <select className='w-50'>
                    <option value="">Grey</option>
                    <option value="">Green</option>
                    <option value="">Cholocate</option>
                </select>
                    <br />
                    <br />


                <label htmlFor="">size</label>
                <br />
                <select className='w-50'>
                <option value="">Double</option>
                    <option value="">Single</option>
                    <option value="">Semi-double</option>
                </select>
                <br />
                    <br />
                <label htmlFor="">Material</label>

                    <br />
                <select className='w-50'>
                    <option value="">Wood</option>
                    <option value="">Metal</option>
                    <option value="">Steal</option>
                </select>
                <br />
                <br />
                
                
                


            </div>
            </div>
            <div className='mt-5'>
            <Link to="/home"><Button variant="outline-primary">Back to home</Button>{' '}</Link>
                <Link to="/about"><Button variant="outline-info">Back to about</Button>{' '}</Link>
                <Link to="/dining"><Button variant="outline-warning">Back to dining</Button>{' '}</Link>
                <Link to="/bed"><Button variant="outline-danger">Back to bedroom</Button>{' '}</Link>
                <Link to="/living"><Button variant="outline-secondary">Back to living room</Button>{' '}</Link>
            </div>
           
            
            
            
        </section>
            
        </div>
    )
}
export default Productdetails;