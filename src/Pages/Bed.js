import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import bedroomdata from '../components/datapart/bedroomdata';

const Bed = () => {
    const [bed,setBed]=useState(bedroomdata);
    return (
        <div>
            <div>
            <div className='contact'>
                <h1>Bed Room</h1>
                <h6 ><Link to="/home">HOME</Link>  / <Link to="/about"> ABOUT</Link></h6> 
            </div>


            
            <div className='container mt-5' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <div className="row">
                {
                    bed.map((bedvalue)=>{
                        const {img,price,title}=bedvalue;
                        return(
                            <div className="col-md-3 ct" >
                            <Card className='crdstyle'  style={{ width: '18rem' }}>
      <Card.Img className='crdimg' variant="top" src={img} />
      <Card.Body className='crdbody'>
        <div className='d-flex btn'>

       <Link to={`/bed/${bedvalue.id}`} ><Button variant="outline-danger">Details</Button>{' '}</Link> 
        <Button variant="outline-success">Add to Cart</Button>{' '}
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
           
        </div>
        </div>
    );
};

export default Bed;