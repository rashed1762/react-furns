import React from 'react';
import './fotercomp.css';
import Button from 'react-bootstrap/Button';

const Fotercomp = () => {
    return (
        <div className='foter'>
            <div className="container">
            <div className="row">
                <div className="col-md-3 mt-5">
                    <h4>About us</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, quasi, quia sapiente omnis atque vel iste at, eligendi corrupti quo dicta et enim fugiat facere vitae aliquid mollitia optio? Corporis.</p>
                </div>
                <div className="col-md-3 mt-5">
                    <h4>INFORMATION</h4>
                    <p>About us</p>
                    <p>Manufactrue</p>
                    <p>Tracking Order</p>
                    <p>Privacy Order</p>
                    <p>Terms & Conditions</p>

                </div>
                <div className="col-md-3 mt-5">
                <h4>MY ACCOUNT</h4>
                    <p>Login</p>
                    <p>My cart</p>
                    <p>Wishlist</p>
                    <p>Compare</p>
                    <p>My account</p>
                </div>
                <div className="col-md-3 mt-5">
                    <h4>NEWSLATTER</h4>
                    <input type="text" placeholder='enter your email' />
                    <br />
                    <Button variant="outline-info">Subscribe</Button>{' '}
                    
                </div>
            </div>
            </div>
           
        </div>
    );
};

export default Fotercomp;