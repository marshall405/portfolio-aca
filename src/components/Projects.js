import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LabelIcon from '@material-ui/icons/Label';


const projects = [
    {
        title : 'Color Mash',
        description: 'One of the first "programs" I wrote! Color Mash will let you combine two colors together and see the result.',
        href : 'https://htmlpreview.github.io/?https://github.com/marshall405/colorMash/blob/master/index.html'
    },
    {
        title : 'To Do List',
        description: 'My first ReactJS App. A simple to do list, lets you add, edit, mark as complete or delete items.',
        href : 'https://marshall405.github.io/todolist/'
    },
    {
        title: 'Clock',
        description: 'Clock app built with just ReactJS. Can be analog or digital, just click on the clock to switch between the two',
        href: 'https://marshall405.github.io/clock-react-app/'
    },
    {
        title: 'Weather App',
        description: 'Created a simple weather app using "openweathermap\'s" API. Again, built using ReactJS',
        href: 'https://marshall405.github.io/another-weather-app/'
    }
]
export class Projects extends React.Component {
    render(){
        return (
            <div className='projects-container'>
                <h1> Projects </h1>
                <div className='projects'>

                    
                        {projects.map((project,index) => (
                            
                            <List key={index}>
                                <a href={project.href}>
                                    <ListItem button divider>
                                        <ListItemIcon>
                                            <LabelIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={project.title} secondary={project.description}/> 
                                    </ListItem>
                                </a>
                            </List>
                        ))}
                        
                    
                </div>
            </div>
        )
    }
}