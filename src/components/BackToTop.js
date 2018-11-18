import React from 'react';
import ArrowUpward from '@material-ui/icons/ArrowUpward';

const style = {
    zIndex: 102,
    position: 'fixed',
}

export const BackToTop = (props) => {
    let fontSize = props.width > 510 ? 50 : 25;
    function handleClick(e) {
        // smooth scrolling polyfill
        let scrolling = setInterval( () => {
            let y = window.scrollY;
            console.log(y);
            if(y <= 0) clearInterval(scrolling);
            y = y - 100;
            window.scrollTo(0, y);
        }, 10);
        
    }
    if('scrollBehavior' in document.body.style) {
        return (
            <a href='#top' style={style} className='backToTop'> <ArrowUpward style={{fontSize: fontSize}}/> </a>
        )
    }
    return (
        <a style={style} className='backToTop' onClick={handleClick}> <ArrowUpward style={{fontSize: fontSize}}/> </a>
    )


}