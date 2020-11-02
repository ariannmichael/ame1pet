import React, { useEffect, useState } from "react";
import { Divider, Drawer, List, ListItem, ListItemText, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import PetsIcon from '@material-ui/icons/Pets';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
    listItemText: {
        marginRight: '2rem',
        "& span": {
            fontSize: '1.3rem',
        }
    }
});

interface SideMenuProps {
    open: boolean,
    onClose: Function
}

const SideMenu:React.FC<SideMenuProps> = ({ open, onClose }) => {
    const classes = useStyles();
    const history = useHistory();
    const [showMenu, setShowMenu] = useState(open || false);

    useEffect(() => {
        setShowMenu(open);
    }, [open]);

    const handleClose = () => {
        setShowMenu(!showMenu);
        onClose();
    }

    return (
        <Drawer anchor={'right'} open={showMenu} onClose={handleClose}>
            <List>
                <Divider />
                <ListItem button key={"Lista de Pets"}
                    onClick={() => history.push('/')}>
                        
                    <PetsIcon style={{ marginRight: 10 }} />
                    <ListItemText className={classes.listItemText} primary={"Lista de Pets"} />
                </ListItem>
                <Divider />
                <ListItem button key={"Adicionar Pet"}
                    onClick={() => history.push('/add')}>
                        
                    <AddIcon style={{ marginRight: 10 }} />
                    <ListItemText className={classes.listItemText} primary={"Adicionar Pet"} />
                </ListItem>
                <Divider />
            </List>
        </Drawer>
    );
}

export default SideMenu;