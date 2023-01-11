import React from 'react'
import './about.css'
import rec from '../../img/rec.png'

function About() {
  return (
    <div className='about relative flex'>
        <img src={rec} alt="t" className='absolute mt-4' style={{top: '0', left: '0'}}/>
        <section className="about-inner" style={{background: 'white'}}>
            <small><b>ABOUT US</b></small><p></p>
            <h5 style={{fontWeight: '500'}}>
                At Forecast5, we are a PR, Marketing and Tech Firm, that provides client impeccable solutions through decades of excellence and experience.
            </h5>
            <div className='flex v-flex'>
                <p>
                    <small>
                        The impact of proper thought through marketing and top-notch PR strategies to solve real-world problems to improve businesses.
                        We are dedicated to developing innovative, user-friendly products and services that meet the needs and exceed the expectations of our clients.
                    </small>
                </p>
                <p>
                    <small>
                        We are committed to delivering high-quality, customized PR and Tech services that align with our clients' values and goals, and to staying at the forefront of industry trends and best practices.
                    </small>
                </p>
                <p>
                    <small>
                        Through our work, we aim to build trust and credibility for our clients in their industries of operation and beyond.
                    </small>
                </p>
                <p>
                    <small>
                        Our team of talented and passionate Tech, Marketing, Public Relations professionals and strategists are committed to continuous learning, growth and to working collaboratively to create a positive, inclusive culture, setting high standards for excellence and integrity in everything we do.
                    </small>
                </p>
            </div>
            <div className="flex mt-5 about-bottom a-i-s j-c-b">
                <aside className="flex v-flex">
                    <small><b>O U R  V I S I O N</b></small>
                    <div>
                        <p>
                            <small>
                            To continue to be the premier choice for businesses consistently delivering exceptional results for our clients through harnessing the power of technology to solve real word problems of businesses or and providing customized marketing and PR tactics/campaigns, strategies that build trust and credibility for business to their clientele base, harnessing the power of technology to solve real-world problems and improve people's lives.
                            </small>
                        </p>
                    </div>
                </aside>
                <aside className="flex v-flex">
                    <small><b>O U R  M I S S I O N</b></small>
                    <div>
                        <p>
                            <small>
                            To help businesses advance, stay on top of trends, effectively communicate and strategically connect with their target audience through technology, innovative marketing, and PR campaigns while setting high standards for excellence and integrity where the clients needs and results come first.
                            </small>
                        </p>
                    </div>
                </aside>
            </div>
        </section>
        <img src={rec} alt="t" className='absolute' style={{bottom: '0', right: '0'}}/>

    </div>
  )
}

export default About