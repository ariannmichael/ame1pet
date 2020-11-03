import React from "react";
import { makeStyles, Theme } from "@material-ui/core";
import CardsPet from "./CardsPet";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        margin: theme.spacing(4)
    },
    title: {
        fontSize: '1.5rem',
        textAlign: 'center',
        fontFamily: '"Pacifico", cursive'
    },
    cards: {
        margin: theme.spacing(5)
    }
}));

const Dashboard:React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <h1>Pets</h1>
            </div>
            <div className={classes.cards}>
                <CardsPet/>
            </div>
        </div>
    );
}

export default Dashboard;