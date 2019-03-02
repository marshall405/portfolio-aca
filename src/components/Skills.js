import React from 'react';

 
const skills = {
    techSkills: [
        'JavaScript',
        'CSS',
        'HTML',
        'ReactJS',
        'Git',
        'GitHub'
    ],
    softSkills: [
        'Strong work ethic',
        'Leadership',
        'Team player',
        'Attentive'
    ],
    inProgess: [
        'NodeJS',
        'Express',
        'MongoDB',
        'MySQL'
    ]
}

export class Skills extends React.Component {
    componentDidMount() {
        let nav = document.getElementsByTagName('nav');
        let navHeight = nav[0].offsetHeight;
        let section = document.getElementById('section');
        section.style.display = 'relative';
        section.style.top = navHeight + 10 +'px';
    }
    render() {
        return (
            <div id='section' className='section container'>
                <div id='skills' className='skills-container'>
                    <h1> Skills </h1>
                    <div className='techSkills'>
                        <h3> Tech Skills </h3>
                        <ul>
                            {
                                skills.techSkills.map( (skill, index) => <li key={index} style={{display:'block'}}> {skill} </li>)
                            }
                        </ul>
                    </div>
                    <div className='softSkills'>
                        <h3> Soft Skills </h3>
                        <ul>
                            {
                                skills.softSkills.map( (skill, index) => <li key={index} style={{display:'block'}}> {skill} </li>)
                            }
                        </ul>
                    </div>
                    <div className='inProgess'>
                        <h3> In Progess </h3>
                        <ul>
                            {
                                skills.inProgess.map( (skill, index) => <li key={index} style={{display:'block'}}> {skill} </li>)
                            }
                        </ul>
                    </div>
                    <div style={{
                        margin: '100px 0px 0px 0px', 
                        width: '100%', 
                        backgroundColor: '#413f3f', 
                        color:'white', 
                        borderRadius: 10}}>
                        <h6 style={{
                            width: '50%',
                            margin: '0 auto',
                            textAlign:'center', 
                            padding: 20, 
                            fontSize: 12
                            }}> All skills require practice and consistency. <br />
                            I strive to learn everyday, improve my current skills and gain new skills.<br /> 
                        </h6>
                    </div>
                </div>
            </div>
        )
    }
}