import React from 'react';

import '../styles/skills.css'
import react from '../images/react.png'
import html5 from '../images/html5.png'
import js from '../images/js.png'
import materialUI from '../images/materialUI.png'
import postgres from '../images/postgres.png'
import git from '../images/git.png'
import express from '../images/express.png'
import node from '../images/node.png'
import ror from '../images/ror.png'
import css from '../images/css.svg'
export class Skills extends React.Component {
    render() {
        return (
            <div className="section" id="skills">
                <h2>Skills</h2>
                <div className="skills-container">
                    <ul className="faces">
                        <li>
                            <span className="image"><img src={react} alt="react" /></span>
                            <h3>React</h3>
                        </li>
                        <li>
                            <span className="image"><img src={html5} alt="html5" /></span>
                            <h3> HTML5</h3>
                        </li>
                        <li>
                            <span className="image"><img src={css} alt="css" /></span>
                            <h3> CSS3 </h3>
                        </li>
                        <li>
                            <span className="image"><img src={js} alt="JS" /></span>
                            <h3>JavaScript</h3>
                        </li>
                        <li>
                            <span className="image"><img src={node} alt="nodejs" /></span>
                            <h3>NodeJS</h3>
                        </li>
                        <li>
                            <span className="image"><img src={express} alt="express" /></span>
                            <h3> ExpressJS</h3>
                        </li>
                        <li>
                            <span className="image"><img src={materialUI} alt="materialUI" /></span>
                            <h3> Material-UI </h3>
                        </li>
                        <li>
                            <span className="image"><img src={git} alt="git" /></span>
                            <h3> GIT</h3>
                        </li>
                        <li>
                            <span className="image"><img src={postgres} alt="postgres" /></span>
                            <h3> postgres</h3>
                        </li>
                        <li>
                            <span className="image"><img src={ror} alt="ror" /></span>
                            <h3> ruby on rails</h3>
                        </li>



                    </ul>

                </div>
            </div>
        )
    }
}

