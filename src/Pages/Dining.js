import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import diningdata from '../components/datapart/diningdata';
import Fotercomp from '../components/Foter/Fotercomp';
import {  useCart } from "react-use-cart";

const Dining = () => {
    const { addItem } = useCart();
    const [dining,setDining]=useState(diningdata);
    return (
        <div>
            <div className='contact'>
                <h1>DINING</h1>
                <h6 ><Link to="/home">HOME</Link>  / <Link to="/about"> ABOUT</Link></h6> 
            </div>


            
            <div className='container mt-5' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
            <div className="row">
                {
                    dining.map((diningvalue)=>{
                        const {img,price,title}=diningvalue;
                        return(
                            <div className="col-md-3 ct" >
                            <Card className='crdstyle'  style={{ width: '18rem' }}>
      <Card.Img className='crdimg' variant="top" src={img} />
      <Card.Body className='crdbody'>
        <div className='d-flex btn'>

       <Link to={`/dining/${diningvalue.id}`} ><Button variant="outline-danger">Details</Button>{' '}</Link> 
       <Button onClick={()=>addItem(diningvalue)} variant="outline-danger">ADD TO CART</Button>
        </div>
       
      </Card.Body>
      <Card.Body className='crdbody2' >
        <Card.Title className='fs-6'>{title}</Card.Title>
        <Card.Text>
         {price}
        </Card.Text>
        
      </Card.Body>
    </Card>
                            </div>
                        )
                    })
                }
            </div>
            </div>

            <section>
                <Fotercomp></Fotercomp>
            </section>
           
        </div>
    
    );
};

export default Dining;