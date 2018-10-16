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
    ]
}

export class Skills extends React.Component {
    render() {
        return (
            <div className='skills-container'>
                <h1> Skills </h1>
                <div className='techSkills'>
                    <h3> Tech Skills </h3>
                    <ul>
                        {
                            skills.techSkills.map( skill => <li> {skill} </li>)
                        }
                    </ul>
                </div>
                <div className='softSkills'>
                    <h3> Soft Skills </h3>
                    <ul>
                        {
                            skills.softSkills.map( skill => <li> {skill} </li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}