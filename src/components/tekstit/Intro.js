import { Paper } from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core';
import { Typography, Button } from '@material-ui/core';
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
        justifyContent: 'center',
        alignItems: 'center',
        
    }
}));

export default function Intro(){

    const classes = useStyles();

    return(
        <Paper className={classes.paper}>
            <h1 className={classes.h1}>Kennel särkivaaran australian paimenkoirat</h1>
            <Typography className={classes.text}>
                Australian paimenkoirakasvatusta vuodesta 2001. 
            </Typography>
            <Link to="/galleria">
            <Button variant="outlined" color="primary" component={ Link } to='/galleria'>
                tästä galleriaan
            </Button>
            </Link>
        </Paper>

    );
}