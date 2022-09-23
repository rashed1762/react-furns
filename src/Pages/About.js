import React from 'react';
import '../components/Cssfile/About.css';
import { Link } from 'react-router-dom';
import img1 from '../assests/about1.jfif';
import img2 from '../assests/about2.jfif';
import Fotercomp from '../components/Foter/Fotercomp';

const About = () => {
    return (
        <div>
            <div className='text-center  about'>
            <h1 className='pt-5'>ABOUT US</h1>
            <h6 ><Link to="/home">HOME</Link>  / ABOUT</h6> 
            </div>

            <div className='container mt-5'>
                <h1>Furns is a global furniture destination for somethings. We sell cutting-edge furniture and offer a wide variety of fashion-related content.</h1>
            </div>

            <div className='container'>
                <div className="row">
                    <div className="col-md-6">
                        <img className='aboutimg1' src={img1} alt="" />
                        <div className='mt-5'>
                            <h5>Our Stories</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi magni unde quia non at, iste autem maxime temporibus eaque expedita repudiandae fugiat deserunt doloremque eum quibusdam accusamus. Voluptatibus aperiam incidunt placeat dolor fugit magni culpa, saepe beatae aut dolorem ut quae corrupti commodi ex eaque et quaerat voluptate soluta voluptas.</p>
                            
                        </div>

                    </div>
                    <div className="col-md-6">
                        <img className='aboutimg2' src={img2} alt="" />
                        <div className='mt-5'>
                            <h5>Our Nission</h5>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi magni unde quia non at, iste autem maxime temporibus eaque expedita repudiandae fugiat deserunt doloremque eum quibusdam accusamus. Voluptatibus aperiam incidunt placeat dolor fugit magni culpa, saepe beatae aut dolorem ut quae corrupti commodi ex eaque et quaerat voluptate soluta voluptas.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            <section className='mt-5'>
                <Fotercomp></Fotercomp>
            </section>

            
            
        </div>
    );
};

export default About;