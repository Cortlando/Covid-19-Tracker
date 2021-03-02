import React from 'react';
import {Button} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import "../CSS/Hamburger.css"

export default function Hamburger(){
    
    const drawerWidth = 240;



    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
        },
        Drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
                
            },
        },
        USAButton:{
            background: 'linear-gradient(90deg, #eb0a25 0%, #e4e4e4 46%, #001aff 85%)',
           
            
        },

        CountriesButton:{
            background: 'linear-gradient(344deg, #833ab4 36%, #eb1919 73%, #fcb045 100%)'
        },
        ResourcesButton:{
            background: '#f50057'
        }

    }))

    const [mobileOpen, setMobileOpen] = React.useState(false);
    function handleDrawerToggle(){
        setMobileOpen(!mobileOpen)
    }
    const classes = useStyles()
    return(
        <div>
            <IconButton aria-label = "menu" onClick={handleDrawerToggle} className="HamburgerButton">
                <MenuIcon color="primary" />
                <div className="Drawer"> 
                    <Drawer anchor="right" 
                     variant="temporary"
                     open={mobileOpen}
                     onClose={handleDrawerToggle}
                     className= {classes.Drawer}              
                     elevation='10'
                     >
                <div className="DrawerButtons" >

                    <div className="HomeButton">
                        <NavLink to="/">
                        <Button size='large' 
                        href="#text-buttons" 
                        variant="contained" 
                        fullWidth="true" 
                        >
                        Home 
                        </Button>
                        </NavLink>
                    </div>

                    <div class="divider"/>

                    <div className="USAButton">
                        <NavLink to="/USA">
                        <Button size='large' 
                        href="#text-buttons" 
                        variant="contained" 
                        fullWidth="true" 
                        className={classes.USAButton}
                        >
                        USA 
                        </Button>
                        </NavLink>
                    </div>

                    <div class="divider"/>

                    <div className="CountryButton">
                    <NavLink to="/Countries">
                     <Button size='large' 
                    href="#text-buttons" 
                    variant="contained" 
                    fullWidth="true" 
                    className={classes.CountriesButton}> Other Countries</Button>
                    </NavLink>
                    </div>

                    <div class="divider"/>

                    <Button size='large' 
                    href="#text-buttons" 
                    variant="contained" 
                    fullWidth="true" 

                    className={classes.ResourcesButton}> Resources</Button>
                    
                  
                    </div>

                    </Drawer>
                    </div>
            </IconButton>
        </div>
    )
    
}