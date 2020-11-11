import React, { useState } from "react";
import { AppBar, IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { useHistory } from "react-router-dom";
import SideMenu from "./SideMenu";
import ThemeSwitch from "./ThemeSwitch";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    container: {
        backgroundColor: 'var(--headerColor)'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    menuIcon: {
        fontSize: '2rem'
    },
    title: {
      flexGrow: 1,
      fontFamily: '"Pacifico", cursive'
    },
}));

const Header: React.FC = () => {
    const classes = useStyles();
    const history = useHistory();
    const [showMenu, setShowMenu] = useState(false);
    
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.container}>
                <Toolbar>
                    <Typography variant="h4" onClick={() => history.push("/")} className={classes.title}>
                        Ame1pet
                    </Typography>
                    <div className="mr-4">
                        <ThemeSwitch/>
                    </div>
                    <IconButton edge="start" className={classes.menuButton} onClick={() => setShowMenu(true)} 
                        color="inherit" aria-label="menu">
                        <MenuIcon className={classes.menuIcon}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <SideMenu open={showMenu} onClose={() => setShowMenu(false)}/>
        </div>
    );
}

export default Header;