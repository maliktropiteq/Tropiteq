/* eslint-disable */
import React, { useEffect, useState } from 'react'
import './footer.css'
import logo from '../../img/TRIANGLE.png'

function Footer() {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
    useEffect(()=>{
        setCurrentYear(new Date().getFullYear())
    },[])
  return (
    <div className='footer flex v-flex pt-3 pb-1'>
        <section className="footer-inner inline-flex j-c-c">
            <aside className="footerInfo-item flex v-flex">
                <div className="footer-logo flex j-c-c" style={{background: '', width: '100px', height: '40px', color: 'black'}}>
                    <img src={logo} alt="" className='img-fit'/>
                </div>
                <p></p>
                <small>Subscribe for our latest articles and news resources</small>
                <div className="flex media j-c-b mt-2">
                    <a href="">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="">
                        <i className="fab fa-youtube"></i>
                    </a>
                    <a href="">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </aside>
            <aside className="footerInfo-item flex v-flex">
                <b>Links</b>
                <a href="#about"><small>About us</small></a>
                <a href="#service"><small>Services</small></a>
                <a href="#project"><small>Projects</small></a>
            </aside>
            <aside className="footerInfo-item flex v-flex">
                <b>Contact</b>
                <a href="tel:+233209517403"><small>0209517403</small></a>
                <a href="mailto:info@forecast5.com"><small>info@forecast5.com</small></a>
            </aside>
            <aside className='footerInfo-item media2 inline-flex a-i-s '>
                <a href="">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="">
                    <i className="fab fa-youtube"></i>
                </a>
                <a href="">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="">
                    <i className="fab fa-twitter"></i>
                </a>
            </aside>
        </section>
        <section className="footer-bottom text-center flex j-c-c ">
            <small>© All Copyright {currentYear} by Forcast5</small>
        </section>
    </div>
  )
}

export default Footer