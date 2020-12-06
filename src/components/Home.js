import React from 'react';
import { useEffect } from 'react';
import CountUp from 'react-countup';
import Aos from 'aos';
import 'aos/dist/aos.css'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Rating from '@material-ui/lab/Rating';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import MenuIcon from '@material-ui/icons/Menu';

import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Banner from '../images/banner.png';
import LogoIndesa from '../images/logo2.png';
import LogoGradien from '../images/gradien.png';
import FotoDesa from '../images/foto.jpg';
import Icon1 from '../images/cave.png';
import Icon2 from '../images/hut.png';
import Icon3 from '../images/property.png';
import Icon4 from '../images/buildings.png';
import Icon5 from '../images/famous.png';
import ComingSoon from '../images/comingsoon2.png';
import Avatar from '../images/avatar.png';
import Administration from '../images/administration.png';
import Map from '../images/map.png';
import Money from '../images/money.png';
import Survey from '../images/survey.png';


const useStyles = makeStyles({
    button: {
        color: 'white',
        background: '#92BD3A',
        border: '2px solid black',
        borderRadius: 3,
        color: 'black',
        fontWeight: 'bold',
        width: 300,
        height: 48,
        padding: '0 30px',
    },
    hashtagTypo: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: 'black',
        margin: '0% 5% 0% 5%',
    },
    image: {
        width: '100%',
        height: '320px',
        marginBottom: '8%',
        borderRadius: '15px',
    },
    text: {
        textAlign: 'justify',
        margin: '1% 7% 3% 0%',
    },
    footer: {
        fontSize: '10pt',
        marginTop: '3%',
        color: 'white',
    },
    gridGradien: {
        background: 'rgba(linear-gradient(270deg, white 10%, #EAEAEA 90%), 0.5)',
    },
    girdWhite: {
        backgroundColor: 'white',
        paddingTop: '2%',
        paddingBottom: '2%',
    },
    gridGrey: {
        backgroundColor: '#EAEAEA',
        paddingTop: '2%',
        paddingBottom: '2%',
    },
    gridGreen: {
        backgroundColor: '#92BD3A',
        paddingTop: '1%',
        paddingBottom: '1%',
    },
    gridBanner: {
        backgroundImage: `url(${Banner})`,
        width: '100%x',
        height: '500px',
    },
    gridFooter: {
        background: '#181A1F',
        height: '100px',
    },
    gridKontak: {
        paddingTop: '4%',
        paddingBottom: '6%',
        backgroundColor: '#92BD3A',
    },
    logoGradien: {
        width: '70px',
        height: '70px',
        margin: '1% 1% 1% 1%',
    },
    icon: {
        widht: '50px',
        height: '50px',
        marginTop: '5%',
    },
    card: {
        margin: '5% 5% 5% 5%',
        height: '200px',
        fontSize: '20px',
        fontWeight: 'bold',
    },
    textBold: {
        fontSize: '12pt',
        fontWeight: 'bold',
    },
    linkText: {
        color: '#003F5C',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '20pt',
    },
    comingSoon: {
        height: '100px',
        width: '100px',
        margin: '10% 2% 10% 2%',
    },
    comingSoon2: {
        height: '100px',
        width: '100px',
        margin: '3% 3% 1% 3%',
    },
    typography: {
        margin: '2% 0% 2% 0%',
    },

});

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function Home() {

    const classes = useStyles();

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    // Drop Down Menu
    const [open, setOpen] = React.useState(false);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    return (
        <div>
            <Grid container spacing={0} className={classes.gridBanner}>

                <Grid item md={1} sm={1} xs={1} lg={1}></Grid>
                <Grid item md={11} sm={10} xs={10} lg={1} style={{ marginTop: '1%' }}>
                    <img src={LogoIndesa} alt="logo" style={{ width: '150px', height: 'auto' }} />
                </Grid>

                {/* Drop Down Menu */}
                {/* <Hidden smUp>
                    <Grid item xs={1} sm={1}>
                        <IconButton onClick={handleClickOpen} >
                            <MenuIcon style={{ marginTop: '45%' }} />
                        </IconButton>
                    </Grid>

                    <Dialog fullScreen open={open} TransitionComponent={Transition} >
                        <Grid container spacing={0}>
                            <Grid item xs={11} sm={11} md={11} lg={11}></Grid>
                            <Grid item xs={1} sm={1} md={1} lg={1}>
                                <IconButton onClick={handleClose} style={{ marginTop: '15%' }}>
                                    <CloseIcon />
                                </IconButton>
                            </Grid>
                        </Grid>

                        <Grid container spacing={0}>

                            <Grid item xs={12} sm={12} md={12} lg={12}></Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}>

                                <List>
                                    <ListItem>
                                        <ListItemText primary="Beranda" />
                                    </ListItem>
                                    <Divider />
                                    <ListItem   >
                                        <ListItemText primary="Kontak Kami" />
                                    </ListItem>
                                    <Divider />
                                    <ListItem   >
                                        <ListItemText primary="FAQ" />
                                    </ListItem>
                                </List>

                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12}></Grid>

                        </Grid>
                    </Dialog>
                </Hidden> */}

                <Grid container spacing={0}>
                    <Grid item xs={2} sm={2} md={2} lg={2}></Grid>
                    <Grid item md={8} sm={8} xs={8} lg={8}>
                        <center>
                            <Typography className={classes.hashtagTypo} style={{ fontSize: '32pt' }}>Membangun Desa dengan Data</Typography>
                            <Typography className={classes.hashtagTypo} style={{ fontSize: '18pt' }}>#TumbuhBarengDesa</Typography>
                            {/* <Typography style={{fontWeight: 'bold', fontSize: '18pt', backgroundColor: '#92BD3A', margin: '0% 35% 1% 35%'}}>#TumbuhBarengDesa</Typography> */}
                        </center>
                    </Grid>
                    <Grid item xs={2} sm={2} md={2} lg={2}></Grid>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12}></Grid>
            </Grid>

            <Grid container spacing={0} className={classes.gridGreen}>
                <Grid item xs={12} sm={12} md={12} lg={12}></Grid>
            </Grid>

            <Grid container spacing={0} className={classes.gridGrey}>
                <Grid container spacing={0}>
                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                    <Grid item xs={10} sm={10} md={10} lg={10} data-aos="fade-up" data-aos-offset="0" >
                        <Typography style={{ fontSize: '24pt', fontWeight: 'bold', marginBottom: '2%' }}>Apa itu InDesa?</Typography>
                    </Grid>
                    <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                    <Grid item sm={1} md={1} xs={1} lg={1}></Grid>
                    <Grid item sm={6} md={6} xs={10} lg={6} data-aos="fade" data-aos-offset="0" >
                        <Typography className={classes.text}>
                            INDESA merupakan sistem informasi berbasis aplikasi dan website untuk mengukur kondisi desa berdasarkan instrumen Indeks Desa Membangun (IDM), Indeks Pembangunan Desa (IPD), dan Potensi Desa (Podes). Pada saat ini INDESA telah merilis versi pertamanya dengan penilaian IDM.
                        </Typography>
                    </Grid>

                    <Hidden smUp>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={1}></Grid>
                    </Hidden>

                    <Grid item sm={4} md={4} xs={10} lg={4}>
                        <Grid container spacing={0}>
                            <Grid item sm={12}>
                                <center>
                                    <img src={FotoDesa} alt="fotodesa" className={classes.image} />
                                </center>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={1} md={1} xs={1} lg={1}></Grid>
                </Grid>
            </Grid>

            <Grid container spacing={0} className={classes.girdWhite}>
                <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                    {/* <center> */}
                    <Typography style={{ fontWeight: 'bold', fontSize: '24pt', }} data-aos="fade-up">Hasil Survei Desa di Tahun 2020</Typography>
                    {/* </center> */}
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1}></Grid>

                <Grid container spacing={0} style={{ margin: '2% 0% 2% 0%' }}>

                    <Grid item xs={1} md={1} sm={1} lg={1}></Grid>
                    <Grid item md={2} xs={12} sm={5} lg={2}>
                        <center>
                            <Card className={classes.card} data-aos="fade">
                                <CardContent>
                                    <img src={Icon1} alt="icon1" className={classes.icon} />

                                    <CountUp start={0} end={2348} delay={0}>
                                        {({ countUpRef }) => (
                                            <div>
                                                <span ref={countUpRef} style={{ color: '#ED553B', fontSize: '28pt' }} />
                                            </div>
                                        )}
                                    </CountUp>
                                    <Typography className={classes.textBold}>Desa Sangat Tertinggal</Typography>
                                </CardContent>

                            </Card>
                        </center>
                    </Grid>
                    <Grid item md={2} xs={12} sm={5} lg={2}>
                        <center>
                            <Card className={classes.card} data-aos="fade">
                                <CardContent>
                                    <img src={Icon2} alt="icon2" className={classes.icon} />

                                    <CountUp start={0} end={13831} delay={0}>
                                        {({ countUpRef }) => (
                                            <div>
                                                <span ref={countUpRef} style={{ color: '#F6D55C', fontSize: '28pt' }} />
                                            </div>
                                        )}
                                    </CountUp>
                                    <Typography className={classes.textBold}>Desa Tertinggal</Typography>
                                </CardContent>

                            </Card>
                        </center>
                    </Grid>

                    <Hidden mdUp>
                        <Grid item sm={1}></Grid>
                        <Grid item sm={1}></Grid>
                    </Hidden>

                    <Grid item md={2} xs={12} sm={5} lg={2}>
                        <center>
                            <Card className={classes.card} data-aos="fade">
                                <CardContent>
                                    <img src={Icon3} alt="icon3" className={classes.icon} />

                                    <CountUp start={0} end={39843} delay={0}>
                                        {({ countUpRef }) => (
                                            <div>
                                                <span ref={countUpRef} style={{ color: '#3CAEA3', fontSize: '28pt' }} />
                                            </div>
                                        )}
                                    </CountUp>
                                    <Typography className={classes.textBold}>Desa Berkembang</Typography>
                                </CardContent>

                            </Card>
                        </center>
                    </Grid>
                    <Grid item md={2} xs={12} sm={5} lg={2}>
                        <center>
                            <Card className={classes.card} data-aos="fade">
                                <CardContent>
                                    <img src={Icon4} alt="icon4" className={classes.icon} />

                                    <CountUp start={0} end={11902} delay={0}>
                                        {({ countUpRef }) => (
                                            <div>
                                                <span ref={countUpRef} style={{ color: '#20639B', fontSize: '28pt' }} />
                                            </div>
                                        )}
                                    </CountUp>
                                    <Typography className={classes.textBold}>Desa Maju</Typography>
                                </CardContent>

                            </Card>
                        </center>
                    </Grid>

                    <Hidden mdUp>
                        <Grid item sm={1}></Grid>
                        <Grid item sm={3}></Grid>
                    </Hidden>

                    <Grid item md={2} xs={12} sm={6} lg={2}>
                        <center>
                            <Card className={classes.card} data-aos="fade">
                                <CardContent>
                                    <img src={Icon5} alt="icon5" className={classes.icon} />

                                    <CountUp start={0} end={1743} delay={0}>
                                        {({ countUpRef }) => (
                                            <div>
                                                <span ref={countUpRef} style={{ color: '#173F5F', fontSize: '28pt' }} />
                                            </div>
                                        )}
                                    </CountUp>
                                    <Typography className={classes.textBold}>Desa Mandiri</Typography>
                                </CardContent>

                            </Card>
                        </center>
                    </Grid>
                    <Grid item md={1} sm={3} lg={1}></Grid>

                </Grid>
            </Grid>

            <Grid container spacing={0} className={classes.gridGrey} style={{ padding: '3% 0% 3% 0%' }}>
                <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                    <Typography style={{ fontWeight: 'bold', fontSize: '24pt', }} data-aos="fade-up">Ekosistem InDesa</Typography>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                <Grid container spacing={0}>
                    <Grid item sm={1} md={1} lg={1}></Grid>
                    <Grid item xs={12} sm md lg style={{ margin: '3% 0% 3% 0%' }} data-aos="fade">
                        <center>

                            <img src={Survey} alt="survey" className={classes.comingSoon} />
                            <Typography style={{ fontSize: '16pt', color: 'grey' }}>Survei Indeks Desa</Typography>
                        </center>
                    </Grid>

                    <Grid item xs={12} sm md lg style={{ margin: '3% 0% 3% 0%' }} data-aos="fade">
                        <center>

                            <img src={Map} alt="map" className={classes.comingSoon} />
                            <Typography style={{ fontSize: '16pt', color: 'grey' }}>Peta Potensi Desa</Typography>
                        </center>
                    </Grid>

                    <Grid item xs={12} sm md lg style={{ margin: '3% 0% 3% 0%' }} data-aos="fade">
                        <center>

                            <img src={Money} alt="money" className={classes.comingSoon} />
                            <Typography style={{ fontSize: '16pt', color: 'grey' }}>Keuangan Desa</Typography>
                        </center>
                    </Grid>

                    <Grid item xs={12} sm md lg style={{ margin: '3% 0% 3% 0%' }} data-aos="fade">
                        <center>

                            <img src={Administration} alt="admin" className={classes.comingSoon} />
                            <Typography style={{ fontSize: '16pt', color: 'grey' }}>Administrasi Desa</Typography>
                        </center>
                    </Grid>
                    <Grid item sm={1} md={1} lg={1}></Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}></Grid>
            </Grid>

            <Grid container spacing={0} className={classes.gridWhite}>
                <Grid item xs={1} sm={1} md={1} lg={1}></Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                    <center>
                        {/* <Card>
                            <CardContent> */}
                        <img src={Avatar} alt="avatar" className={classes.comingSoon2} style={{ borderRadius: '50%', }} />
                        <Typography className={classes.typography} style={{ fontWeight: 'bold' }}>Si Fulan</Typography>
                        <Typography className={classes.typography} style={{ color: 'grey' }}>"Saya senang dengan website ini karena menyajikan data-data yang faktual."</Typography>
                        <Rating name="read-only" value={5} readOnly style={{ marginBottom: '4%' }} />
                        {/* </CardContent>
                        </Card> */}
                    </center>
                </Grid>
                <Grid item xs={1} sm={1} md={1} lg={1}></Grid>

            </Grid>

            <Grid className={classes.gridGrey}>
                <center>
                    <Typography style={{ fontSize: '16pt' }}>Didukung Oleh:</Typography>
                    <Link href='www.gradien.co' >
                        <img src={LogoGradien} className={classes.logoGradien} alt="logogradien" />
                        <Typography className={classes.linkText}>Gradien</Typography>
                    </Link>
                </center>
            </Grid>

            <Grid container spacing={0} className={classes.gridKontak}>
                <Grid item xs={12} md={12} lg={12}>
                    <center>
                        <h3>Punya pertanyaan?</h3>
                        <Button className={classes.button}>
                            Hubungi Kami
                    </Button>
                    </center>
                </Grid>

            </Grid>

            <Grid container spacing={0} className={classes.gridFooter}>
                <Grid item xs={12} md={12} lg={12} >
                    <center>
                        <Typography className={classes.footer}>©2020 by InDesa. All Rights Reserved</Typography>
                    </center>
                </Grid>
            </Grid>
        </div>
    )
}