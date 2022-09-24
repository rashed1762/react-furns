import React, { useEffect, useState } from 'react';
import './Cardcomp.css';
import data from './data';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {
  Link
} from "react-router-dom";
import featuredata from './featuredata';
import onsaledata from './onsaledata';
import trendingdata from './trendingdata';
import Aos from 'aos';

const Cardcomp = () => {
    const [newArival,setNewAraival]=useState(data);
    const [feature,setFeature]=useState(featuredata);
    const [onsale,setOnsale]=useState(onsaledata);
    const [trending,setTrending]=useState(trendingdata);

    useEffect(()=>{
      Aos.init({});
    },[]);
    return (
        <div>
            <div className='our-product' data-aos="fade-right" >
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

    <TabPanel >
        <div className="container mt-5">
    <div className="row">
      {
        newArival.map((value)=>{
            const {img,title,price}=value;
            return(
                <>
                        
                            <div className="col-md-3 ct" data-aos="zoom-in" >
                            <Card className='crdstyle'  style={{ width: '18rem' }}>
      <Card.Img className='crdimg' variant="top" src={img} />
      <Card.Body className='crdbody'>
        <div className='d-flex btn'>

       <Link to={`/home/${value.id}`} ><Button variant="outline-danger">Details</Button>{' '}</Link> 
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
        <div className="container">
        <div className="row">
      {
        feature.map((featurevalue)=>{
            const {img,title,price}=featurevalue;
            return(
                <>
                        
                            <div className="col-md-3 ct" 
                            data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="300"
                            data-aos-offset="0">
                            <Card className='crdstyle'  style={{ width: '18rem' }}>
      <Card.Img className='crdimg' variant="top" src={img} />
      <Card.Body className='crdbody'>
        <div className='d-flex btn'>

       <Link to={`/home/${featurevalue.id}`} ><Button variant="outline-danger">Details</Button>{' '}</Link> 
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
      <div className="container">
      <div className="row">
      {
        onsale.map((onsalevalue)=>{
            const {img,title,price}=onsalevalue;
            return(
                <>
                        
                            <div className="col-md-3 ct" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" >
                            <Card className='crdstyle'  style={{ width: '18rem' }}>
      <Card.Img className='crdimg' variant="top" src={img} />
      <Card.Body className='crdbody'>
        <div className='d-flex btn'>

       <Link to={`/home/${onsalevalue.id}`} ><Button variant="outline-danger">Details</Button>{' '}</Link> 
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
      <div className="container">
      <div className="row">
      {
        trending.map((trendingvalue)=>{
            const {img,title,price}=trendingvalue;
            return(
                <>
                        
                            <div className="col-md-3 ct" data-aos="fade-up-left" >
                            <Card className='crdstyle'  style={{ width: '18rem' }}>
      <Card.Img className='crdimg' variant="top" src={img} />
      <Card.Body className='crdbody'>
        <div className='d-flex btn'>

       <Link to={`/home/${trendingvalue.id}`} ><Button variant="outline-danger">Details</Button>{' '}</Link> 
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
  </Tabs>
            </div>
            
        </div>
    );
};

export default Cardcomp;