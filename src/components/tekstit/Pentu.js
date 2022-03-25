import { Paper } from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    text:{
        color:'white',
        opacity:1,
        margin: 20,
        fontSize: 18
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
        
    }
}));

export default function Intro(){

    const classes = useStyles();

    return(
        <Paper className={classes.paper}>
            <h1 className={classes.h1}>Kasvatit ja pentuja</h1>
            <Typography className={classes.text}>
                Pentuja, 2 narttua ja 3 urosta, syntynyt 23.03.2022
                Yhdistelmästä Mutton buster's the end x Särkivaaran öö kiitti moi                   
            </Typography>
            <Typography className={classes.text}>
                Suunnitelmissa HK1 JK1 EK1 BH Särkivaaran nyt ja tässä x Rinochet Teddy Teddy
                Keväällä 2022
            </Typography>
        </Paper>

    );
}