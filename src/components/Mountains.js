import React from 'react'

import '../styles/mountains.css'

export default function Mountains() {
    return (
        <div className="mountains-container">
            <div id="mtg1" className="mountain-group1">
                <div className="mountain mt1"></div>
                <div className="mountain mt2"></div>
                <div className="mountain mt3"></div>
                <div className="mountain mt4"></div>
            </div>

            <div id="mtg2" className="mountain-group2">
                <div className="mountain mt11"></div>
                <div className="mountain mt21"></div>
                <div className="mountain mt31"></div>
                <div className="mountain mt41"></div>
            </div>
        </div>
    )
}
