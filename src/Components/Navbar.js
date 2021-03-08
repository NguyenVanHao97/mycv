import React , {useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer'
import { Link } from 'react-router-dom';
import Footer from './Footer'

import { 
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    ListItemIcon,
    
} from '@material-ui/core';
import { 
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from '@material-ui/icons'
import avatar from '../avatar.jpg';
// import ListItemIcon from '@material-ui/core/ListItemIcon';

const useStyles = makeStyles(theme => ({
    menuSlideContainer:{
        width:250,
        background:"#511",
        height:'100%'
    },
    avatar:{
        display:'block',
        margin:'0,5rem auto',
        width: theme.spacing(13),
        height:theme.spacing(13)
    },
    listItem:{
        color:"tan"
    }
}));

const menuItems = [
    {
        listIcon : <Home/>,
        listText: "Trang chính",
        listPath:"/"
    },
    {
        listIcon : <AssignmentInd/>,
        listText: "Kĩ năng và học vấn",
        listPath:"/resume"
    },
    {
        listIcon : <Apps/>,
        listText: "Một số sản phẩm",
        listPath:"/portfolio"
    },
    {
        listIcon : <ContactMail/>,
        listText: "Thông tin cơ bản",
        listPath:"/contact",
    },
]

const Navbar = () => {

    const [state, setState] = useState({
        right: false
    });

    const toggleSlider = (slider, open) => () => {
        setState({...state,[slider] : open})
    }

    const classes = useStyles();
    const sideList = slider => (
        <Box 
        component="div" 
        className={classes.menuSlideContainer} 
        onclick={toggleSlider(slider, false )}> 
        <Avatar src={avatar} alt="hao" className={classes.avatar}/>
        <Divider/>
        <List>
            {menuItems.map((icon,key)=>(
            <ListItem Button key={key} component={Link} to={icon.listPath}>
                <ListItemIcon className={classes.listItem}>
                    {icon.listIcon}
                </ListItemIcon>
                <ListItemText className={classes.listItem} primary={icon.listText}/>
            </ListItem>
            ))}
        </List>
    </Box>
    )
    return (
        <>
        <Box component="nav">
            <AppBar position="static" style={{background:"#222"}} >
                <Toolbar>
                    <IconButton onClick={toggleSlider("right", true)}>
                        <ArrowBack style={{color:'tomato'}}/>    
                    </IconButton>
                    <Typography variant="h5" style={{color:"tan"}}>
                        Thông tin cá nhân
                    </Typography>
                    <MobilRightMenuSlider anchor="left" open={state.right} onClose={toggleSlider("right", false)}>
                        {sideList("right")}
                        <Footer/>
                    </MobilRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar
