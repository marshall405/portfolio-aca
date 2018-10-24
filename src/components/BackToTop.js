import React from 'react';
import ArrowUpward from '@material-ui/icons/ArrowUpward';

const style = {
    zIndex: 102,
    position: 'fixed',
    bottom: 35,
    right: 40
}


export const BackToTop = () => {
    
    return (
        <a href="#top" style={style} className='backToTop'> <ArrowUpward style={{fontSize: 50}}/> </a>
    )


}