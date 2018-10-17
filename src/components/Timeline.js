import React from 'react';

export const Timeline = (props) => {
    const width = props.windowWidth;
    
    const timeLines = {
        display: 'inline-block',
        zIndex: 101,
        width: 140,
        margin: 0,
        padding: 0,
        fontSize: 10, 
        position: 'absolute',
        top: -10,
        transform: 'rotate(-40deg)',
        transformOrigin: '0% 0%',
        borderBottom: '1px solid #1bd6cf',
        textAlign: 'center',
        transition: 'fontSize 1s',
    }
    const yearOf = {
        display: 'inline-block',
        textAlign: 'center',
        width: '32%',
        margin: 0,
        padding: 10,
        paddingTop: 80,
        fontSize: 10, 
        position: 'absolute',
        left: '34%',
        top: 1,
        borderLeft: '1px solid #1bd6cf',
        borderRight: '1px solid #1bd6cf',
        borderBottom: '1px solid #1bd6cf',
        borderRadius: 10

    }
    const yearStyle = {
        zIndex: 100,
        backgroundColor: '#ecebeb',
        borderRadius: 10,
        padding: 10
    }
    const spanStyle = {
        fontSize : 10,
    }
    if(width > 590){
        return (

            <div className='timeline-container'>
                <h4 style={{margin: 50}}> Timeline </h4>
                <div style={{width: '90%', margin: '0 auto'}}>
                    <div style={{margin: '150px 0px', position: 'relative'}}>
                        <p style={Object.assign({left:'28%'}, timeLines)}> Start learning HTML and CSS </p>
                        <p style={Object.assign({left:'33%'}, timeLines)}> Start learning JavaScript </p>
                        <p style={yearOf}> Continue learning,<br/> become confused,<br /> take a break,<br /> REPEAT! </p>
                        <p style={Object.assign({left:'65%'}, timeLines)}> Leave my job of 5 years </p>
                        <p style={Object.assign({left:'72%'}, timeLines)}> Move to Austin, Texas </p>
                        <p style={Object.assign({left:'85%'}, timeLines)}> Attend Austin Coding Academy </p>
                        <div style={{border: '1px solid #413f3f', display: 'relative',}} className='line'>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <h6 style={yearStyle}> 2016 </h6>
                            <h6 style={yearStyle}> 2017 </h6>
                            <h6 style={yearStyle}> 2018 </h6>
                            <h6 style={yearStyle}> 2019 </h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className='timeline-container'>
        <h4 style={{margin: 10}}> Timeline </h4>
        <div style={{width: '90%', margin: '0 auto'}}>
            <div style={{margin: '0px 0px', position: 'relative'}}>
                <h4 style={yearStyle}> 2016 </h4>
                    <h6 style={{width: '80%', margin: '10px auto'}}> July </h6>
                    <ul style={{width: '70%', margin: '0 auto'}}>
                        <li> Start learning HTML and CSS </li>
                    </ul>
                    <h6 style={{width: '80%', margin: '10px auto'}}> August </h6>
                    <ul style={{width: '70%', margin: '0 auto'}}>
                        <li> Start learning JavaScript </li>
                    </ul>
                <h4 style={yearStyle}> 2017 </h4>
                <h6 style={{width: '80%', margin: '10px auto'}}> January - Decemeber </h6>
                <ul style={{width: '70%', margin: '0 auto'}}>
                    <li> Continue learning </li>
                    <li> Become confused </li>
                    <li> Take a break </li>
                    <li> REPEAT </li>
                </ul>
                <h4 style={yearStyle}> 2018 </h4>
                <h6 style={{width: '80%', margin: '10px auto'}}> January </h6>
                <ul style={{width: '70%', margin: '0 auto'}}>
                    <li> Leave my job at Ditch Witch </li>
                </ul>
                <h6 style={{width: '80%', margin: '10px auto'}}> April </h6>
                <ul style={{width: '70%', margin: '0 auto'}}>
                    <li> Move to Round Rock, Texas </li>
                </ul>
                <h6 style={{width: '80%', margin: '10px auto'}}> July </h6>
                <ul style={{width: '70%', margin: '0 auto'}}>
                    <li> Begin Austin Coding Academy <span style={spanStyle}>JavaScript Full Stack (Intermediate)</span> </li>
                </ul>
                <h6 style={{width: '80%', margin: '10px auto'}}> Septemeber </h6>
                <ul style={{width: '70%', margin: '0 auto'}}>
                    <li> Complete Austin Coding Academy <span style={spanStyle}>JavaScript Full Stack (Intermediate)</span> </li>
                </ul>
                <h4 style={yearStyle}> 2019 </h4>
                <h6 style={{width: '80%', margin: '10px auto'}}> January </h6>
                <ul style={{width: '70%', margin: '0 auto'}}>
                    <li> Pending... </li>
                </ul>
            </div>
        </div>
    </div>
    )
    
}