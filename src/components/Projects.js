import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

// import todolistImage from '../images/todolist.png';
export class Projects extends React.Component {
    render(){
        return (
            <div className='projects-container'>
                <h2> Projects </h2>
                <GridList>
                    <GridListTile>
                        <h5> Simple To Do List </h5>
                        {/* <img src={todolistImage} alt='to do list' /> */}
                    </GridListTile>
                </GridList>
            </div>
        )
    }
}