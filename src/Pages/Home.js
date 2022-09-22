import React from 'react';
import Button from 'react-bootstrap/Button';
import img3 from '../assests/cat1.png';
import img4 from '../assests/cat2.png';
import img5 from '../assests/cat3.png';
import img6 from '../assests/cat4.png';
import img7 from '../assests/cat5.png';
import '../components/Cssfile/Home.css';
import img1 from '../assests/banner1.png';
import img2 from '../assests/banner2.png';
import Carousel from 'react-bootstrap/Carousel';

import {
    Link
  } from "react-router-dom";
import Cardcomp from '../components/Card/Cardcomp';

const Home = () => {
    return (
        <div>
            
            <div>
            <Carousel className='car'>
      <Carousel.Item>
        <img
          className="d-block  img1"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption className='carinfo'>
          <h3>Best Seller</h3>
          <h1 className='bannerh1'>Creative Sofa</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Button variant="danger">Danger</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block img1"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption className='carinfo'>
          <h3>New Product</h3>
          <h1 className='bannerh1'>Flexible chair</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button variant="danger">Danger</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
            </div>
        <br />


{/* .................................................................................................................. */}

        {/* category section */}


        <section className='container cat-part'>
            <div>
                <div className="row">
                    <div className="col-md-1">

                    </div>
                    <div className="col-md-2 ">
                    
                        <img className='img3' src={img3} alt="" />
                    <Link to="/bed"> <h5 className='cath5 ms-5 mt-2'>Bedroom</h5></Link> 
                       
                        
                    </div>
                    <div className="col-md-2">
                  <img className='img3' src={img4} alt="" />
                 <Link to="/living"><h5 className='cath5 ms-5 mt-2'>Livingroom  </h5></Link> 
                    </div>
                    <div className="col-md-2">
                    <img className='img3' src={img5} alt="" />
                   <Link to="/dining"><h5 className='cath5 ms-5 mt-2'>Dining</h5></Link> 
                    </div>
                    <div className="col-md-2">
                    <img className='img3' src={img6} alt="" />
                    <h5 className='cath5 ms-5 mt-2'>Lounge</h5>
                    </div>
                    <div className="col-md-2">
                    <img className='img3' src={img7} alt="" />
                    <h5 className='cath5 ms-5 mt-2'>Office chair</h5>
                    </div>
                    <div  className="col-md-1">

                    </div>
                </div>
            </div>
        </section>
          
  {/* ..........................................................................................................         */}
          
            {/* card section */}
            
        <section className='mt-5'>
            <Cardcomp></Cardcomp>
        </section>

        </div>
    );
};

export default Home;
