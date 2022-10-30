import React from 'react';
import footerImage from '../assets/images/footer.png';

const Footer = () => {
    let getFullYear = new Date().getFullYear();
    return (
        <footer style={{
            background: `url(${footerImage})`,
            backgroundSize: 'cover'

        }}>
            <div className="footer p-10 ">
                <div>
                    <span className="footer-title">Services </span>
                    <a className="link link-hover">Emergency Checkup</a>
                    <a className="link link-hover">Monthly Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <a className="link link-hover">Fluoride Treatment</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Teach Whitening</a>
                </div>
                <div>
                    <span className="footer-title">Our Address</span>
                    <a className="link link-hover">Naogaon-4, Rajshahi, Bangladesh</a>
                </div>
            </div>
            <div className='text-center my-4'>
                <p>Copyright © {getFullYear} - All right reserved by Doctors Portal</p>
            </div>
        </footer>
    );
};

export default Footer;