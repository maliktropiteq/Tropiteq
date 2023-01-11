import React from 'react'
import './client.css'
import client1 from '../../img/client1.png'
import client2 from '../../img/client2.png'
import client3 from '../../img/client3.png'
import client4 from '../../img/client4.png'
import client5 from '../../img/client5.png'
import values from '../../img/value.png'

function Clients() {
  return (
    <div className='clients flex v-flex pt-3 pb-3'>
        <div className="client-head">
            <h3>Our Clients</h3>
        </div><br />
        <div className="client-inner inline-flex">
            <aside className="client-logo shadow mr-1">
                <img src={client1} alt="i" className='img-fit'/>
            </aside>
            <aside className="client-logo shadow mr-1">
                <img src={client2} alt="i" className='img-fit'/>
            </aside>
            <aside className="client-logo shadow mr-1">
                <img src={client3} alt="i" className='img-fit'/>
            </aside>
            <aside className="client-logo shadow mr-1">
                <img src={client4} alt="i" className='img-fit'/>
            </aside>
            <aside className="client-logo shadow mr-1">
                <img src={client5} alt="i" className='img-fit'/>
            </aside>

        </div>
        <br /><br />
        <div className="flex our-values container a-i-s">
            <aside className="ourValues-text flex v-flex">
                <h2>Our Core Values</h2><p></p>
                <b><small>At Forecast5, our core believe is central to our performance.</small></b>
                <p></p>
                <small>At the heart of all our values are three basic but fundamental tenets. </small>
                <small>Firstly, Integrity. Acting with strong ethics is a priority for everyone representing Fantasy5 as well as the company’s behavior as a whole.</small>
                <small>Secondly, Teamwork. Companies are judged by the craftsmanship of their products and services, so the highest standards are maintained at all times..</small>
                <small>And lastly,  Promise to our Customers. Creating a great customer experience begins with staying true to the words we speak and the bonds we make.</small>
            </aside>
            <aside className="relative flex">
                <img src={values} alt="i" className='img-fit'/>
                <h6 className='absolute' style={{color: 'white', width: '150px', bottom: '1rem', left:'1rem'}}>We deliver on our promise to our cherished clients.</h6>
            </aside>
        </div>
        
    </div>
  )
}

export default Clients