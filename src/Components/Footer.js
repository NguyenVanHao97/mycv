import React from 'react'
import { makeStyles , withStyles } from '@material-ui/core/styles';
import {BottomNavigation,BottomNavigationAction} from "@material-ui/core";
import Facebook from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Instagram from '@material-ui/icons/Instagram';
import GitHub from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
        root:{
            "& .MuiBottomNavigationAction-root":{
                minWidth:0,
                maxWidth:250
            },
            "& .MuiSvgIcon-root":{
                fill:"tan",
                "&:hover" :{
                    fill:"tomato",
                    fontSize:"1,8rem"
                }
            }
        },

})

const Footer = () => {
    const classes = useStyles() 
    return (
        <BottomNavigation width="auto" style={{background:"#222"}}> 
            <BottomNavigationAction
            className={classes.root}
            style={{padding:0}}
            icon={<Facebook/>}
            href="https://www.facebook.com/profile.php?id=100029742394457"
            />
            <BottomNavigationAction
            className={classes.root}
            style={{padding:0}}
            icon={<LinkedInIcon/>}
            href="https://www.linkedin.com/in/h%E1%BA%A3o-nguy%E1%BB%85n-v%C4%83n-060275201/"
            />
            <BottomNavigationAction
            className={classes.root}
            style={{padding:0}}
            icon={<Instagram/>}
            href="https://www.instagram.com/hi_im.hao_/"
            />
            <BottomNavigationAction
            className={classes.root}
            style={{padding:0}}
            icon={<GitHub/>}
            href="https://github.com/NguyenVanHao97"
            />
        </BottomNavigation>
    )
}

export default Footer
