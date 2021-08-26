import kiukku from '../pictures/kiukku.jpg';
import mursu from '../pictures/mursu1.jpg';
import { Paper } from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme)=>({
    text:{
        color:'white',
        opacity:1,
        margin: 20,
    },
    h1:{
        color: 'white',
        padding: 20,
    },
    paper:{
        [theme.breakpoints.down('sm')]:{
            width: '80%'
        },
        marginTop:100,
        width:'70%',
        height:450,
        opacity: 0.8,
        backgroundColor:'black',
        
    },
    pics:{
        width: '30%',
        height: '30%'
    }
}));

export default function Gallery(){

    const classes = useStyles();

    return(
        <div>
        <Paper className>
            <img className={classes.pics} src={kiukku}/>
        </Paper>
        <Paper className>
            <img className={classes.pics} src={mursu}/>
        </Paper>
        </div>
    );
}