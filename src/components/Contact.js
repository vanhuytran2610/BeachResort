import React from 'react'
import Title from './Title'
import { FaFacebook, FaInstagram } from "react-icons/fa";


export default function Contact() {
    return (
        <section id="contact" className="contact">
                <Title title="About Us" />
                <div className="contact-center">
                    <div>
                        <h4>Introduction</h4>
                        <p>Welcome to VietnamTravel. Here, we will provide useful, interesting, detailed and exact informations for those who want to learn and explore tourism.</p>
                    </div>
                    <div className="information">
                        <h4>Contact Info</h4>
                        <p>0776957352 - 0787746181</p>
                        <p>54 Nguyen Luong Bang,</p>
                        <p>Lien Chieu District, Da Nang City</p>
                    </div>
                    <div className="mxh">
                        <h4>Social Network</h4>
                        <a href="https://www.facebook.com/Vietnam-Travel-105408271944559" target="_blank" rel="noreferrer noopener"><FaFacebook/> Facebook</a>
                        <a href="https://www.instagram.com/___vietnam.travel/" target="_blank" rel="noreferrer noopener"><FaInstagram/> Instagram</a>
                    </div>
                </div>
            </section>
    )
}
