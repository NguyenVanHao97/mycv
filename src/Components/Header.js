import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Avatar,
    Grid,
    Box,
} from "@material-ui/core"
import avatar from '../avatar.jpg';
import Typed from 'react-typed'


const useStyle = makeStyles(theme=>({
    avatar:{
        width:theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title:{
        color:'tomato',
    },
    subtitle:{
        color:'tan',
        marginBottom:'3rem'
    },
    typeContent:{
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%,-50%)",
        width:"100vw",
        textAlign:"center",
        zIndex:1
    }
}))

const Header = () => {

    const classes = useStyle()

    return (
        <Box className={classes.typeContent}>
            <Grid container justify="center">
            <Avatar className={classes.avatar} src={avatar} alt="hao"/>
            </Grid>
            <Typography   variat="h4">
                <Typed strings={["XIN CHÀO"]} typeSpeed={40} className={classes.title}/>
            </Typography>
            <br/>
            <Typography variat="h5" className={classes.subtitle}>
                <Typed strings={["TÔI LÀ","NGUYỄN VĂN HẢO"]} typeSpeed={40} backSpeed={50}/>
            </Typography>
            
        </Box>
    )
}

export default Header
