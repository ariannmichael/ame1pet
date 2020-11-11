import React from "react";
import Card from 'react-bootstrap/Card';
import PetModel from "../../../models/PetModel";
import { Button, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles({
    root: {
        width: '18rem',
        height: '14rem',
        margin: '1rem',
        border: 'none',
        borderRadius: '1rem',
        position: 'relative',
        "&:hover $description": {
            visibility: 'visible',
            opacity: 1
        }
    },
    photo: {
        width: 'inherit',
        height: 'inherit',
        borderRadius: '1rem',
    },
    description: {
        position: 'absolute',
        borderRadius: '1rem',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(0, 0, 0, 0.82)',
        color: '#FFFF',
        visibility: 'hidden',
        opacity: 0,
        width: 'inherit',
        height: 'inherit',

        "& h5": {
            marginTop: '1rem',
            marginLeft: '1rem'
        },
        "& button": {
            width: '12rem',
            marginLeft: '17%',
            marginTop: '12%'
        }
    }
});

interface CardPetProps {
    pet: PetModel
}

const CardPet:React.FC<CardPetProps> = ({ pet }) => {
    const classes = useStyle();
    const history = useHistory();

    return (
        <Card className={classes.root}>
            <Card.Img variant="top" src={pet.photo} className={classes.photo}/>
            <div className={classes.description}>
                <h5>Nome: {pet.name}</h5>
                <h5>Espécie: {pet.specie}</h5>
                <h5>Raça: {pet.breed}</h5>
                <Button onClick={() => history.push("/pet", {id: pet.id})} variant="contained" color="primary">
                    Saber Mais
                </Button>
            </div>
        </Card>
    );
}

export default CardPet;