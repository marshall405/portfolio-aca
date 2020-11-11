import React, { Component } from 'react';

// import my components
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';
import { Jumbo } from './components/Jumbo';
import HelpfulLinks from './components/HelpfulLinks';

import Mountains from './components/Mountains';

// import styles
import './styles/App.css';

class App extends Component {


  componentDidMount() {
    let ms = document.getElementById('MS')
    let about = document.getElementById('about')
    let skills = document.getElementById('skills')
    let projects = document.getElementById('projects')
    let contact = document.getElementById('contact')

    function clearActiveLinks() {
      let links = [...document.querySelectorAll('#navList a')]
      links.forEach(link => link.classList.remove('active'))
    }
    function isInViewPort(ele) {
      const rect = ele.getBoundingClientRect()
      return (
        rect.top >= 0 || (rect.bottom >= 100)
      )
    }
    function moveMountains() {
      let y = window.scrollY
      let width = window.innerWidth
      let height = document.body.clientHeight
      let px = y * (width / height)

      document.getElementById('mtg1').style.right = `${px / 3}px`
      document.getElementById('mtg2').style.right = `${px}px`

    }
    document.addEventListener('scroll', () => {
      moveMountains()
      if (isInViewPort(ms)) {
        clearActiveLinks()
      } else if (isInViewPort(about)) {
        clearActiveLinks()
        document.querySelector('a[href="#about"').classList.add('active')
      } else if (isInViewPort(skills)) {
        clearActiveLinks()
        document.querySelector('a[href="#skills"').classList.add('active')
      } else if (isInViewPort(projects)) {
        clearActiveLinks()
        document.querySelector('a[href="#projects"').classList.add('active')
      } else if (isInViewPort(contact)) {
        clearActiveLinks()
        document.querySelector('a[href="#contact"').classList.add('active')
      }

    })
  }
  render() {
    return (
      <div className='container'>
        <div className='content-container'>
          <Jumbo />
          <About />
          {/* <div className="break"></div> */}
          <Skills />
          {/* <div className="break"></div> */}
          <Projects />
          {/* <div className="break"></div> */}
          <Contact />
          {/* <div className="break"></div> */}
          <HelpfulLinks />
          {/* <div className="break"></div> */}
        </div>
        <div className='footer'>
          <div className='footer-social'>
            <a href='https://www.linkedin.com/in/marshall-slemp/' target='_blank' rel="noopener noreferrer" className='nav-icon'><i className="fab fa-linkedin-in"></i></a>
            <a href='https://github.com/marshall405' target='_blank' rel="noopener noreferrer" className='nav-icon'><i className="fab fa-github"></i></a>
          </div>
          <h6> Marshall Slemp 2020</h6>
        </div>
        <Mountains />
      </div>
    )
  }
}

export default App;
