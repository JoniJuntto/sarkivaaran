import { Paper } from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import InstagramIcon from '@mui/icons-material/Instagram';

const useStyles = makeStyles((theme) => ({
    text: {
        color: 'white',
        opacity: 1,
        margin: 20,
        fontSize: 18
    },
    h1: {
        color: 'white',
        padding: 20,
    },
    paper: {
        [theme.breakpoints.down('sm')]: {
            width: '80%'
        },
        marginTop: 100,
        width: '70%',
        height: 450,
        opacity: 0.8,
        backgroundColor: 'black',

    }
}));

export default function Yhteystiedot() {

    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <h1 className={classes.h1}>Yhteystiedot</h1>
            <Typography className={classes.text}>
                <AlternateEmailIcon fontSize='large'/> tytti.tarkkanen@£gmail.com
            </Typography>
            <Typography className={classes.text}>
                <InstagramIcon fontSize='large' /> @sarkivaaranaussiet
            </Typography>
        </Paper>

    );
}