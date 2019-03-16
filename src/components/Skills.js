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
                        
                        <li> Bash Scripts - I recently created a script to automate uploading files to cPanel using SFTP. I also automated the process of having to create the basic html, css and js files when starting a new project and preloads the html file with the basic structure.</li>
                        <li> more coming :)</li>
                    </ul>
                </div>
            </div>
        )
    }
}

