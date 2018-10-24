import React from 'react';
import ArrowUpward from '@material-ui/icons/ArrowUpward';

const style = {
    zIndex: 102,
    position: 'fixed',
}

export const BackToTop = (props) => {
    let fontSize = props.width > 510 ? 50 : 25;
    return (
        <a href="#top" style={style} className='backToTop'> <ArrowUpward style={{fontSize: fontSize}}/> </a>
    )


}