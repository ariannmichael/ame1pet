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

        "& h3": {
            marginLeft: '1rem'
        },
        "& button": {
            width: '12rem',
            marginLeft: '17%',
            marginTop: '5%'
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
                <h3>Nome: {pet.name}</h3>
                <h3>Espécie: {pet.specie}</h3>
                <h3>Raça: {pet.breed}</h3>
                <Button onClick={() => history.push("/pet", {id: pet.id})} variant="contained" color="primary">
                    Saber Mais
                </Button>
            </div>
        </Card>
    );
}

export default CardPet;