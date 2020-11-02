import React from "react";
import { AppBar, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    container: {
        backgroundColor: '#48DEFF'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    menuIcon: {
        fontSize: '2rem'
    },
    title: {
      flexGrow: 1,
      fontFamily: '"Pacifico" ,cursive'
    },
}));

const Header: React.FC = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.container}>
                <Toolbar>
                    <Typography variant="h4" className={classes.title}>
                        Ame1pet
                    </Typography>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon className={classes.menuIcon}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;