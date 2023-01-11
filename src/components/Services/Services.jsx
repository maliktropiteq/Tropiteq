import React from 'react'
import './service.css'

import serImg1 from '../../img/service1.png'
import serImg2 from '../../img/service2.png'
import serImg3 from '../../img/service3.png'

function Services() {
  return (
    <div className='services'>
        <div className="service-head">
            <h4>We provide the following Services</h4>
        </div>
        <div className="services-inner">
            <div className="service-cards flex j-c-b a-i-s">
                <aside className="servideCard shadow flex v-flex j-c-c a-i-c">
                    <div className="serviceImg">
                        <img src={serImg1} alt="h" className='img-fit'/>
                    </div>
                    <div className="serviceText flex v-flex a-i-c j-c-c">
                        <h6 className='cardHeaders'>Marketing & PR</h6>
                        <section className="flex v-flex j-c-c a-i-c">
                            <small>Blogging</small>
                            <small>Branding</small>
                            <small>Media buying</small>
                            <small>Public relations</small>
                            <small>Media planning</small>
                            <small>Corporate stories</small>
                            <small>Event organization</small>
                            <small>Search engine optimization (SEO)</small>
                            <small>Social Media Account Management</small>
                        </section>
                    </div>
                </aside>
                <aside className="servideCard shadow flex v-flex j-c-c a-i-c">
                    <div className="serviceImg">
                        <img src={serImg2} alt="j" className='img-fit'/>
                    </div>
                    <div className="serviceText flex v-flex a-i-c j-c-c">
                        <h6 className='cardHeaders'>Tech Services</h6>
                        <section className="flex v-flex j-c-c a-i-c">
                            <small>Prototyping</small>
                            <small>Wireframing</small>
                            <small>IT consulting</small>
                            <small>User interface (UI) design</small>
                            <small>E-commerce development</small>
                            <small>User experience (UX) design</small>
                            <small>Tech support and maintenance</small>
                            <small>Custom software development</small>
                            <small>Website design and development</small>
                            <small>Mobile app design and development</small>
                            <small>Content management systems (CMS) </small>
                        </section>
                    </div>
                </aside>
                <aside className="servideCard shadow flex v-flex j-c-c a-i-c">
                    <div className="serviceImg">
                        <img src={serImg3} alt="u" className='img-fit'/>
                    </div>
                    <div className="serviceText flex v-flex a-i-c j-c-c">
                        <h6 className='cardHeaders'>Advertising</h6>
                        <section className="flex v-flex j-c-c a-i-c">
                            <small>Printing</small>
                            <small>Brand activation</small>
                            <small>Digital marketing</small>
                            <small>Brand positioning</small>
                            <small>Graphic designing</small>
                            <small>Product Research</small>
                            <small>Product Branding</small>
                            <small>Advertising( offline & Digital)</small>
                        </section>
                    </div>
                </aside>
            </div>
        </div>
        
    </div>
  )
}

export default Services