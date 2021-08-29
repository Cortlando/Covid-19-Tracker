import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import "../CSS/Navbar.css"
import Hamburger from './Hamburger'




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  HamburgerButton:{
    float: 'right',
    display: "inline",
  }
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar class="navbar" position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/SARS-CoV-2_without_background.png" className="App-logo" alt="logo" />
          </IconButton>
          <Typography variant="h6" color="inherit">
            COVID-19
          </Typography>
          <div className= "HamburgerButton">
            <Hamburger/>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}