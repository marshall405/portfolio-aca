import React from 'react'
// css is in App.css under LINKS
export default function HelpfulLinks() {
    const links = [
        {
            name: 'MDN web docs',
            href: 'https://developer.mozilla.org/en-US/',
            desc: 'Resources for developers, by developers.'
        },
        {
            name: 'Lifehacker on the Command Line',
            href: 'https://lifehacker.com/a-command-line-primer-for-beginners-5633909',
            desc: 'A command line primer for Beginners'
        },

    ]
    return (
        <div className='section'>
            <h2>Helpful Links</h2>
            {
                links.map(link => {
                    return (
                        <div key={link.name} className='links-container'>
                            <a href={link.href} target='blank'><h3> {link.name} </h3></a>
                            <p> "{link.desc}"" </p>
                        </div>
                    )
                })
            }
        </div>
    )
}
