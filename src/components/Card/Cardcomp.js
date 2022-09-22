import React, { useState } from 'react';
import './Cardcomp.css';
import data from './data';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Cardcomp = () => {
    const [newArival,setNewAraival]=useState(data);
    return (
        <div>
            <div className='our-product'>
            <h1>Our Product</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate suscipit tempora debitis dolorem quasi dolore aliquam ipsa voluptatum veniam, alias esse nam voluptatem eaque placeat, minus est maiores. At, omnis.</p>
            </div>
            <div>
               


            <Tabs>
    <TabList className="tablist mt-5 ">
      <Tab>New Arrival</Tab>
      <Tab>Featured</Tab>
      <Tab>On Sale</Tab>
      <Tab>Trending</Tab>
    </TabList>

    <TabPanel>
        <div className="container mt-5">
    <div className="row">
      {
        newArival.map((value)=>{
            const {img,title,price}=value;
            return(
                <>
                        
                            <div className="col-md-3 ct" >
                            <Card className='crdstyle'  style={{ width: '18rem' }}>
      <Card.Img className='crdimg' variant="top" src={img} />
      <Card.Body className='crdbody'>
        <div className='d-flex btn'>
        <Button variant="outline-danger">Details</Button>{' '}
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
                            
                        </>
                        
                        
                    
            )
        })
      }
      </div>
      </div>
    </TabPanel>
    <TabPanel>
      
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 4</h2>
    </TabPanel>
  </Tabs>
            </div>
            
        </div>
    );
};

export default Cardcomp;