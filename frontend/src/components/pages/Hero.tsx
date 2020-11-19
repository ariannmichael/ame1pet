import { Button, createStyles, makeStyles, Theme } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router-dom';
import dogImage from "../../assets/img/karsten-winegeart-oU6KZTXhuvk-unsplash.jpg";

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            backgroundImage: `url(${dogImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '100vh',
            position: 'relative'
        },
        textContainer: {
            backgroundColor: 'rgba(255, 73, 158, 0.8)',
            position: 'absolute',
            left: 0,
            top: '32%',
            padding: '1rem',
            color: 'white',
            width: '40vw',

            "& > h1": {
                fontFamily: '"Pacifico", cursive',
                fontSize: '5vw',
                marginBottom: '2rem'
            }
        },
        buttonContainer: {
            display: 'grid',
            "& button": {
                color: 'white',
                height: '7vh',
                fontSize: '1.5vw',
                fontFamily: 'Rosario',
                fontWeight: 600
            }
        }
    })
);

const Hero:React.FC = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <div className={classes.root}>
            <div className={classes.textContainer}>
                <h1>Seu amor vai vir correndo pra você.</h1> 
                <div className={classes.buttonContainer}>
                    <Button variant="contained" color="primary" onClick={() => history.push("/dashboard")}>
                        Basta Chamar
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Hero;