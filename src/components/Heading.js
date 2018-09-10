import React from 'react';

// import material-ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import '../styles/Heading.css';

export class Heading extends React.Component {
    render() {
        return (
            <AppBar position='fixed' color='default'>
                <Toolbar className='flex-container'>
                        <Typography variant='title'>
                            {this.props.name}
                        </Typography>
                        <div className='nav-container'>
                            <Button color='inherit'>About</Button>
                            <Button color='inherit'>Contact</Button>
                        </div>
                    
                </Toolbar>
            </AppBar>
        )
    }
}