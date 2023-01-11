import React from 'react'
import './comments.css'

import messIcon from '../../img/messIcon.png'
import ava1 from '../../img/avatar1.png'
import ava2 from '../../img/avatar2.png'
import ava3 from '../../img/avatar3.png'

function Comments() {
  return (
    <div className='comments container flex v-flex pt-3 pb-3'>
        <div className="comments-head">
            <h3>What our clients have to say</h3>
        </div><br />
        <div className="comments-inner inline-flex">
            <aside className="commentCard relative shadow mr-1">
                <div className="messIcon" style={{width: '30px', height:'30px', margin: 'auto'}}>
                     <img src={messIcon} alt="u" className='img-fit'/>
                </div><p></p>
                <div className="messContent flex v-flex j-c-c">
                    <small>
                        Seldom do you find such a great blend of talents from both the tech and marketing arenas in one agency.
                    </small>
                </div><p></p>
                <div className="mess-person p-2 flex v-flex">
                    <section className="person-img" style={{width: '40px', height:'40px', margin: 'auto'}}>
                        <img src={ava1} alt="n" className='img-fit'/>
                    </section><p></p>
                    <section className="personInfo flex v-flex a-i-c j-c-c">
                        <small><b>Boadi</b><br/>Community Lead at Cryptude</small>
                    </section>
                </div>
            </aside>
            <aside className="commentCard relative shadow mr-1">
                <div className="messIcon" style={{width: '30px', height:'30px', margin: 'auto'}}>
                     <img src={messIcon} alt="u" className='img-fit'/>
                </div><p></p>
                <div className="messContent flex v-flex j-c-c">
                    <small>
                        Seldom do you find such a great blend of talents from both the tech and marketing arenas in one agency.
                    </small>
                </div><p></p>
                <div className="mess-person p-2 flex v-flex">
                    <section className="person-img" style={{width: '40px', height:'40px', margin: 'auto'}}>
                        <img src={ava2} alt="n" className='img-fit'/>
                    </section><p></p>
                    <section className="personInfo flex v-flex a-i-c j-c-c">
                        <small><b>Boadi</b><br/>Community Lead at Cryptude</small>
                    </section>
                </div>
            </aside>
            <aside className="commentCard relative shadow mr-1">
                <div className="messIcon" style={{width: '30px', height:'30px', margin: 'auto'}}>
                     <img src={messIcon} alt="n" className='img-fit'/>
                </div><p></p>
                <div className="messContent flex v-flex j-c-c">
                    <small>
                        Seldom do you find such a great blend of talents from both the tech and marketing arenas in one agency.
                    </small>
                </div><p></p>
                <div className="mess-person p-2 flex v-flex">
                    <section className="person-img" style={{width: '40px', height:'40px', margin: 'auto'}}>
                        <img src={ava3} alt="j" className='img-fit'/>
                    </section><p></p>
                    <section className="personInfo flex v-flex a-i-c j-c-c">
                        <small><b>Boadi</b><br/>Community Lead at Cryptude</small>
                    </section>
                </div>
            </aside>
        </div>
    </div>
  )
}

export default Comments