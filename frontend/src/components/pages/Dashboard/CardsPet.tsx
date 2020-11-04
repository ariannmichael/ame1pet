import React, { useEffect, useState } from "react";
import CardPet from "./CardPet";
import { getAllPets } from "../../../api/api";
import PetModel from "../../../models/PetModel";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'start'
    }
});

const CardsPet: React.FC = () => {
    const classes = useStyles();
    const [pets, setPets] = useState<PetModel[]>([]);

    useEffect(() => {
        getAllPets()
            .then(({data}) => {
                setPets(data.pets);        
            })
            .catch(err => {
                console.log(err);
            });
    }, [])

    return (
        <div className={classes.root}>
            {
                pets.map((element:PetModel, index:number) => (
                    <CardPet key={index} pet={element}/>
                ))
            }
        </div>
    );
}

export default CardsPet;