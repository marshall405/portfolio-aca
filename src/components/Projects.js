import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import colorMashImg from '../images/colormash.png';
import todolistImg from '../images/todolist.png';


const tileData = [
    {
        img : colorMashImg,
        title : 'Color Mash',
        href : 'https://htmlpreview.github.io/?https://github.com/marshall405/colorMash/blob/master/index.html'
    },
    {
        img : todolistImg,
        title : 'To Do List',
        href : '../todolist/build/index.html'
    }
]
export class Projects extends React.Component {
    render(){
        return (
            <div className='projects-container'>
                <h1> Projects </h1>
                <div className='projects'>

                    <GridList cols={1} style={{width: 400, height: 350}}>
                        {tileData.map(tile => (
                            
                            <GridListTile key={tile.img}>
                                <a href={tile.href}><img src={tile.img} alt={tile.title}/></a>
                                <GridListTileBar title={tile.title}/>
                            </GridListTile>
                        
                        ))}
                    </GridList>
                </div>
            </div>
        )
    }
}