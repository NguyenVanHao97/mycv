import React from 'react'
import { makeStyles , withStyles } from '@material-ui/core/styles';
import {
    TextField,
    Typography,
    Button,
    Grid,
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from "@material-ui/core";
import TodayIcon from '@material-ui/icons/Today';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import SendIcon from '@material-ui/icons/Send';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import MailIcon from '@material-ui/icons/Mail';
import DescriptionIcon from '@material-ui/icons/Description';
import Navbar from './Navbar'

const useStyles = makeStyles(theme=>({
    form:{
        top:"50%",
        left:"50%",
        transform:"Translate(-50% , -50%)",
        position:"absolute",
    },
    button:{
        marginTop:"1rem",
        color:"tomato",
        borderColor:"tomato"
    },
    text:{
        color:"#fff"
    },
    icon:{
        color:"#fff"
    }
}))


const Contacts = () => {
    const classes = useStyles();
    return (
        <Box component="div" style={{background:"#233",height:"100vh"}}>
            <Navbar/>
            
            <Grid container justify="center" >
                <Box component="form" className={classes.form}>
                    <Typography variant="h5" style={{color:"tomato", textAlign:"center",textTransform:"uppercase"}}>
                        thông tin liên hệ
                    </Typography>
                    <List className={classes.text}>
                    <ListItem >
                            <ListItemIcon className={classes.icon}>
                                <PermIdentityIcon/>
                            </ListItemIcon>
                            <ListItemText>
                                <Typography >
                                   Nguyễn Văn Hảo
                                </Typography>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon className={classes.icon}>
                                <TodayIcon/>
                            </ListItemIcon>
                            <ListItemText>
                                <Typography>
                                    02/08/1997
                                </Typography>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon className={classes.icon}>
                                <ContactPhoneIcon/>
                            </ListItemIcon>
                            <ListItemText>
                                <Typography>
                                   0971134038
                                </Typography>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon className={classes.icon}>
                                <MailIcon/>
                            </ListItemIcon>
                            <ListItemText>
                                <Typography>
                                   ahung871@gmail.com
                                </Typography>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon className={classes.icon}>
                                <DescriptionIcon/>
                            </ListItemIcon>
                            <ListItemText>
                                <Typography>
                                   Là 1 người có trách nhiệm với công việc, 
                                   hòa đồng và nghiêm túc
                                </Typography>
                            </ListItemText>
                        </ListItem>
                    </List>
                    <Button 
                    variant="outlined" 
                    fullWidth={true} 
                    endIcon={<SendIcon/>} 
                    className={classes.button}>
                            liên hệ 
                    </Button>
                </Box>
            </Grid>
        </Box>
    )
}

export default Contacts
