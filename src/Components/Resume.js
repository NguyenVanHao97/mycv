import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Typography,Box} from '@material-ui/core';
import Navbar from './Navbar';

const useStyles = makeStyles(theme=>({
    mainContainer:{
        background:"#233",
    },
    thoiGian:{
        position:"relative",
        padding:"1rem",
        margin:"0 auto",
        "&:before":{
            content:"''",
            position:"absolute",
            height:"100%",
            border:"1px solid tan",
            right:"40px",
            top:0
        },
        "&:after":{
            content:"''",
            display:"table",
            clear:"both"
        },
        [theme.breakpoints.up("md")]:{
            padding:"2rem",
            "&:before":{
                left:"calc(50% - 1px)",
                right:"auto"
            }
        }
    },
    timelineItem:{
        padding:"1rem",
        borderBottom:"2px solid tan",
        position:"relative",
        margin:"1rem 3rem 1rem 1rem",
        clear:"both",
        "&:after":{
            content:"''",
            position:"absolute",
        },
        "&:before":{
            content:"''",
            position:"absolute",
            right:"-0.625rem",
            top:"calc(50% - 5px)",
            borderStyle:"solid",
            borderColor:"tomato tomato transparent transparent ",
            borderWidth:"0.625rem",
            transform:"rotate(45deg)"
        },
        [theme.breakpoints.up("md")]:{
            width:"44%",
            margin:"1rem",
            "&:nth-of-type(2n)":{
                float:"right",
                margin:"1rem",
                borderColor:"tan"
            },
            "&:nth-of-type(2n):before":{
                right:"auto",
                left:"-0.625rem",
                borderColor:"transparent transparent tomato tomato"
            }
        }
    },
    nam:{
        textAlign:"center",
        maxWidth:"9.375rem",
        margin:"0 3rem 0 auto",
        fontSize:"1.8rem",
        background:"tomato",
        color:"white",
        lineHeight:1,
        padding:"0,5rem 0 1rem",
        "&:before":{
            display:"none",
        },
        [theme.breakpoints.up("md")] : {
            textAlign: "center",
            margin:"0 auto",
            "&:nth-of-type(2n)":{
                float:"none",
                margin:"0 auto",
            },
            "&:nth-of-type(2n):before":{
                display:"none"
            }


        }
    },
    heading:{
        color:"tomato",
        padding:"3rem 0 ",
        transform:"uppercase",
        
    },
    subHeading:{
        color:"white",
        padding:"0",
        transform:"uppercase"
    }
}))

const Resume = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar/>
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>
                    k?? n??ng 
                </Typography>
             <Box component="div" className={classes.thoiGian}>
                 <Typography  variant="h2" className={`${classes.nam} ${classes.timelineItem}`}>
                    HTML & CSS
                 </Typography>
                    <Box component="div" className={classes.timelineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            web design
                        </Typography>
                        {/* <Typography variant="body1" align="center" style={{color:"tomato"}}>
                            web design
                        </Typography> */}
                        <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                            c?? kh??? n??ng d??ng html & css ????? x??y d???ng layout website
                        </Typography>
                    </Box>
                    <Typography  variant="h2" className={`${classes.nam} ${classes.timelineItem}`}>
                    REACTJS
                 </Typography>
                    <Box component="div" className={classes.timelineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            web design
                        </Typography>
                        {/* <Typography variant="body1" align="center" style={{color:"tomato"}}>
                            web design
                        </Typography> */}
                        <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                            bi???t c??ch x??y d???ng 1 website d???a tr??n th?? vi???n REACTJS 
                        </Typography>
                    </Box>
                    <Typography  variant="h2" className={`${classes.nam} ${classes.timelineItem}`}>
                    REACT HOOK
                 </Typography>
                    <Box component="div" className={classes.timelineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            web design
                        </Typography>
                        {/* <Typography variant="body1" align="center" style={{color:"tomato"}}>
                            web design
                        </Typography> */}
                        <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                            bi???t c??ch s??? d???ng c??c hoock v?? c??c th?? vi???n b??? tr??? nh?? react-spring
                        </Typography>
                    </Box>
                    <Typography  variant="h2" className={`${classes.nam} ${classes.timelineItem}`}>
                    MATERIAL 
                 </Typography>
                    <Box component="div" className={classes.timelineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                            web design
                        </Typography>
                        {/* <Typography variant="body1" align="center" style={{color:"tomato"}}>
                            web design
                        </Typography> */}
                        <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                            Bi???t s??? d???ng material ui ????? x??y d???ng giao di???n 
                        </Typography>
                    </Box>
                </Box>
            </Box>
            
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>
                    h???c v???n
                </Typography>
             <Box component="div" className={classes.thoiGian}>
                 <Typography  variant="h2" className={`${classes.nam} ${classes.timelineItem}`}>
                   2015-2021
                 </Typography>
                    <Box component="div" className={classes.timelineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                        HCMC university of transport 
                        </Typography>
                        <Typography variant="body1" align="center" style={{color:"tomato"}}>
                            web design
                        </Typography>
                        {/* <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                            lorem1dasfasf adad ad ada DAD DADad
                        </Typography> */}
                    </Box>
                    <Typography  variant="h2" className={`${classes.nam} ${classes.timelineItem}`}>
                        04-10/2020
                    </Typography>
                    <Box component="div" className={classes.timelineItem}>
                        <Typography variant="h5" align="center" className={classes.subHeading}>
                        Cybersoft
                        </Typography>
                        <Typography variant="body1" align="center" style={{color:"tomato"}}>
                            Tham gia 1 kh??a h???c front-end t???i trung t??m tin h???c Cybersoft
                        </Typography>
                        {/* <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                            lorem1dasfasf adad ad ada DAD DADad
                        </Typography> */}
                    </Box>
                </Box>
            </Box>
            
        </>
    )
}

export default Resume
