import React from 'react'
import './project.css'
import pro1 from '../../img/pro1.png'
import pro2 from '../../img/pro2.png'
import pro3 from '../../img/pro3.png'
import pro4 from '../../img/pro4.png'

function Projects() {
  return (
    <div className='projects container flex v-flex pt-3 pb-3'>
        <div className="project-head flex j-c-b">
            <h3>Our recently completed projects list</h3>
            <small>Here are snapshots of some of our recently completed projects.</small>
        </div><br />
        <div className="projects-inner inline-flex">
            <aside className="projectCard relative shadow mr-1">
                <img src={pro1} alt="h" className='img-fit'/>
                <div className="projectCard-text absolute p-2 flex v-flex">
                    <a href="https://crptude.com"><small>Cryptude</small></a>
                    <p>Web design</p>
                </div>
            </aside>
            <aside className="projectCard relative shadow mr-1">
                <img src={pro2} alt="h" className='img-fit'/>
                <div className="projectCard-text absolute p-2 flex v-flex">
                    <a href="#home"><small>Bel Acquah</small></a>
                    <p>Marketing Ad</p>
                </div>
            </aside>
            <aside className="projectCard relative shadow mr-1">
                <img src={pro3} alt="h" className='img-fit'/>
                <div className="projectCard-text absolute p-2 flex v-flex">
                    <a href="#home"><small>Cryptude</small></a>
                    <p>Mobile App design</p>
                </div>
            </aside>
            <aside className="projectCard relative shadow mr-1">
                <img src={pro4} alt="h" className='img-fit'/>
                <div className="projectCard-text absolute p-2 flex v-flex">
                    <a href="#home"><small>God father Grill and Bar</small></a>
                    <p>Marketing & Branding</p>
                </div>
            </aside>

        </div>

        <br /><br />
    </div>
  )
}

export default Projects