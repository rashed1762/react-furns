import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Cssfile/living.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import Fotercomp from '../components/Foter/Fotercomp';


const Living = () => {
    return (
        <div>
             <div className='contact'>
                <h1>Living Room</h1>
                <h6 ><Link to="/home">HOME</Link>  / <Link to="/about"> ABOUT</Link></h6> 
            </div>


            <div >
            <FontAwesomeIcon className='icon' icon={faBagShopping} />
            <h1 className='text-center mt-3'>There are no products!</h1>
            </div>

            <section>
                <Fotercomp></Fotercomp>
            </section>
        </div>
    );
};

export default Living;