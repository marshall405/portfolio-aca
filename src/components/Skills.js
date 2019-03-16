import React from 'react';

 
const skills = [
    {
        name: 'HTML',
        progress: 80
    },
    {
        name: 'CSS',
        progress: 75
    },
    {
        name: 'JavaScript',
        progress: 80
    },
    {
        name: 'Git',
        progress: 60
    },
    {
        name: 'ReactJS',
        progress: 55
    },
    {
        name: 'Command Line',
        progress: 60
    },
    {
        name: 'Node JS',
        progress: 40
    },
    {
        name: 'MySQL',
        progress: 50
    },
    {
        name: 'Express',
        progress: 40
    }
];

export class Skills extends React.Component {
    
    componentDidMount() {
        // moves skills section down - header is fixed
        let nav = document.getElementsByTagName('nav');
        let navHeight = nav[0].offsetHeight;
        let section = document.getElementById('section');
        section.style.marginTop = `${navHeight + 10}px`;
    }

    renderSkill(skill) {
        return (
            <li>
                <h2> {skill.name} </h2>
                <div><h3 style={{width: `${skill.progress}%`}}> </h3></div>
            </li>
        )
    }

    render() {
        return (
            <div id='section' className='section container'>
                <div className='skills-container'>
                    <h1> Skills </h1>
                    <div className='skills'>
                    { 
                        skills.map( skill => {
                            return this.renderSkill(skill);
                        })
                    }
                    </div>
                
                    <h3> Other skills in progress... </h3>
                    <ul className='more-skills'>
                        <h6> Bash Scripts (Automation for the Win) </h6>
                        <li> <b>update-portfolio</b> Wrote a script to automate the process of uploading files for my website to cPanel. I learned more about the Here Tag for Bash scripting and connecting with SFTP. </li>
                        <li> <b>create-website</b> Another script I wrote was to automate having to create the basic html, css and js files when starting a new project. Everytime I wanted to start a new website I always had to create the main starting files and folder structure. I would also have to open the index.html file and write in the standard HTML. Now all I have to do is type 'create-website' and hit enter! This script creates the neccesary files and folders and also prefills the starting HTML and links the CSS and JS files. I learned about getting user input when using the Command Line, if statements in Bash and redirecting the output of a command to a file. </li>
                        <li> <b>sqlDB</b> This was the first script I wrote and all it does is connect to my MySQL database through Heroku. I was tired of having to write out the name of the database and the password everytime I wanted to experiment with something!    </li>
                    </ul>
                </div>
            </div>
        )
    }
}

