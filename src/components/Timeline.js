import React from 'react';

import '../styles/timeline.css';

export const Timeline = (props) => {    
    const lifeEvents = [
        {
            year: 2006,
            event: 'I graduate highschool and head off to college, leaving the farm life behind! I had no idea what I wanted to do in life but I ended up in Business school for the nexy 4 years!',
            icon: "fas fa-bus"
        },
        {
            year : 2010,
            event: 'I graduate from Oklahoma State University with a Bachelors of Science in Business Administration. I move back home and get my first job as a bookkeeper. After two years I decided to move on and found myself working at Ditch Witch',
            icon: "fas fa-user-graduate"
        },
        {
            year: 2015,
            event: 'I become the Warehouse Lead for the Evening Shift at Ditch Witch. I spend the next 3 years working with a great bunch of people.',
            icon: "fas fa-briefcase"
        },
        {
            year: 2017,
            event: 'I get my first taste of programming when I decide to write a macro in Excel to automate the Date and the days of the weeks for a timesheet. I would spend my lunch breaks working on this excel sheet and would have to wait for the next pay period to see if it would work the way I planned! After weeks and weeks of struggling I finally prevailed and I have been hooked ever since. I ended up looking into web development and started learning JavaScript. I also start using the Command Line - even though it was \'cd this and cd that\' I really felt like I was somebody!',
            icon: "fas fa-laptop-code"
        },
        {
            year: 2018,
            event: 'I decide to move from Oklahoma to Austin, Texas in search of a new career in web development. I also attend the Austin Coding Academy and complete the Intermediate JavaScript course where my group won the Hackathon we had on the last day!',
            icon: "fas fa-route"
        }
    ];
    console.log(lifeEvents[0].img);
    return (
        <div className='timeline-container'>
            <h2> Timeline </h2>
            <ul>
                {lifeEvents.map( lifeEvent => {
                    return (
                        <li key={lifeEvent.year}> <i className={lifeEvent.icon}></i> <b>{lifeEvent.year}</b> - {lifeEvent.event} </li>
                    )
                })}
            </ul>
        </div>
    )
    
}