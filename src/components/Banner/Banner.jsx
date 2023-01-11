import React from 'react'
import './banner.css'
import bannerImg from '../../img/banner.png'

function Banner() {
  return (
    <div className='banner flex relative' style={{height: '500px', zIndex: '1'}}>
        <section className="banner-inner flex absolute container" style={{top: '0', bottom: '0', right:'0', left: '0', background: 'rgba(0,0,0,.5)', color: 'white'}}>
            <aside className="banner-text flex v-flex">
                <h1>
                Transforming marketing efforts into tangible results.
                </h1><p></p>
                <a href="#service">
                    <button className="btn btn-warning flex j-c-c"><small>See Our Services</small></button>
                </a>
            </aside>
            <aside className="empty-space"></aside>
        </section>
        <img src={bannerImg} alt="f" className='img-fit'/>
        
    </div>
  )
}

export default Banner