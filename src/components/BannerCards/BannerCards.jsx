import React from 'react'
import './bannerCards.css'

import cardImg1 from '../../img/bannerCard1.png'
import cardImg2 from '../../img/bannerCard2.png'
import cardImg3 from '../../img/bannerCard3.png'

function BannerCards() {
  return (
    <div className='banner-cards'>
        <div className="bannerCard-inner flex">
            <section className="all-cards flex">
                <aside className="b-card flex v-flex shadow">
                    <div className="bannerCard-img">
                        <img src={cardImg1} alt="g" className='img-fit'/>
                    </div>
                    <div className="bannerCard-text flex j-c-c">
                        <p>Perfect solution for every business demand</p>
                    </div>
                </aside>
                <aside className="b-card flex v-flex shadow">
                    <div className="bannerCard-img">
                        <img src={cardImg2} alt="g" className='img-fit'/>
                    </div>
                    <div className="bannerCard-text flex j-c-c">
                        <p>Helping businesses around the world</p>
                    </div>
                </aside>
                <aside className="b-card flex v-flex shadow">
                    <div className="bannerCard-img">
                        <img src={cardImg3} alt="g" className='img-fit'/>
                    </div>
                    <div className="bannerCard-text flex j-c-c">
                        <p>What is holding back your business?</p>
                    </div>
                </aside>
            </section>
            
        </div>
    </div>
  )
}

export default BannerCards