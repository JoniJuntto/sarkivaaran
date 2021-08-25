import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import mursuEka from './pictures/mursu4.jpg';
import pentu from './pictures/pentu.jpg';
import Intro from './components/tekstit/Intro';
import Pentu from './components/tekstit/Pentu';

const useStyles = makeStyles((theme) => ({


    //Jos mobiililla, laitetaan sinne ilman backgroundia

    div: {
        [theme.breakpoints.down('sm')]:{
            backgroundImage: "url(" + mursuEka + ")",
            backgroundPosition: 'center',
            backgroundSize: '300vh',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
        },

        [theme.breakpoints.up('md')]: {
            backgroundImage: "url(" + mursuEka + ")",
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundSize: '200vh',
            backgroundRepeat: 'no-repeat',
        },
        [theme.breakpoints.up('lg')]: {
            backgroundImage: "url(" + mursuEka + ")",
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundSize: '200vh',
            backgroundRepeat: 'no-repeat',
        },
    },
    div2: {

        [theme.breakpoints.down('sm')]:{
            backgroundImage: "url(" + pentu + ")",
            backgroundPosition: 'center',
            backgroundSize: '300vh',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
        },

        [theme.breakpoints.up('md')]: {
            backgroundImage: "url(" + pentu + ")",
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundSize: '200vh',
            backgroundRepeat: 'no-repeat',
        },
        [theme.breakpoints.up('lg')]: {
            backgroundImage: "url(" + pentu + ")",
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundSize: '200vh',
            backgroundRepeat: 'no-repeat',
        },
    },

    test: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            paddingBottom: 350,
        },
        [theme.breakpoints.up('xl')]: {
            paddingBottom: 500,
        }
    },
    
}));

export default function App(){

    const classes = useStyles();

    return(
        <div>
            <div className={classes.div}>
                <div className={classes.test}>
                    <Intro />
                </div>
            </div>
            <div className={classes.div2}>
                <div className={classes.test}>
                    <Pentu />
                </div>
            </div>
        </div>
    );
}

