import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';
import mercedes from '../mercedes.PNG' ;
import hourse from '../hourse.PNG'
import images from '../images.PNG';
import imagesredux from '../imagesredux.PNG'
import {
    Box,
    Grid,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Button,
    CardActionArea,
    TextField
} from '@material-ui/core';

    const useStyles = makeStyles({
        mainContainer:{
            // background:"#233",
            height:"100%"
        },
        cardContent:{
            maxWidth:345,
            margin:"3rem",
            margin:"5rem auto"
        }
    })

const Portfolio = () => {

    const classes = useStyles();

    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar/>
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContent}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="project1"
                        height="140"
                        image={mercedes}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                HTML5-CSS3
                            </Typography>
                            <Typography  variant="body2" color="textSecondary" component="p">
                                project dùng html5 ,css3, SCSS và boostrap 4 
                                xây dựn lại website mercedes 
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary" href="https://nguyenvanhao97.github.io/mercedes/">
                                demo
                            </Button>
                            <Button href="https://github.com/NguyenVanHao97/mercedes">
                                Source
                            </Button>
                        </CardActions>
                    </CardActionArea>
                </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContent}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="project1"
                        height="140"
                        image={hourse}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                HTML5-CSS3
                            </Typography>
                            <Typography  variant="body2" color="textSecondary" component="p">
                                project sử dụng HTML CSS để xây dựng layout 
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary" href="https://nguyenvanhao97.github.io/hourse/">
                                demo
                            </Button>
                            <Button href="https://github.com/NguyenVanHao97/hourse">
                                 Source
                            </Button>
                        </CardActions>
                    </CardActionArea>
                </Card>
                </Grid>
            </Grid>
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContent}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="project1"
                        height="140"
                        image={images}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                REACT HOOKS 
                            </Typography>
                            <Typography  variant="body2" color="textSecondary" component="p">
                                project xây dựng ứng dụng todolist , sử dụng usestate và useEffect của hooks 
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary" href="https://mystifying-volhard-334490.netlify.app/">
                                demo
                            </Button>
                            <Button href="https://github.com/NguyenVanHao97/totolist">
                            Source
                            </Button>
                        </CardActions>
                    </CardActionArea>
                </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContent}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="project1"
                        height="140"
                        image={imagesredux}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                REACT-REDUX
                            </Typography>
                            <Typography  variant="body2" color="textSecondary" component="p">
                                project xây dựng ứng dụng mua hàng nhỏ với tính năng mua hàng , tăng giảm số lượng  , sử dụng redux 
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary" href="https://quirky-poitras-a8dce2.netlify.app/">
                                demo
                            </Button>
                            <Button href="https://github.com/NguyenVanHao97/redux">
                                Source
                            </Button>
                        </CardActions>
                    </CardActionArea>
                </Card>
                </Grid>
            </Grid>
       
        </Box>
    );
};

export default Portfolio;
