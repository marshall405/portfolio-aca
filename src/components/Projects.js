import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import colorMashImg from '../images/colormash.png';
export class Projects extends React.Component {
    render(){
        return (
            <div className='projects-container'>
                <h1> Projects </h1>
                <div className='projects'>
                    <GridList cols={1} style={{width: 400, height: 300}}>
                        <GridListTile style={{height: 'auto'}}>
                            <GridListTileBar title='Color Mash'/>
                            <a href='https://htmlpreview.github.io/?https://github.com/marshall405/colorMash/blob/master/index.html'><img src={colorMashImg} alt='color mash' /></a>
                        </GridListTile>
                    </GridList>
                </div>
            </div>
        )
    }
}