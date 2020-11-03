import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Button, makeStyles, Theme } from "@material-ui/core";
import { getPetById, removePet } from "../../api/api";
import PetModel from "../../models/PetModel";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        margin: theme.spacing(2)
    },
    title: {
        fontSize: '1.5rem',
        textAlign: 'center',
        fontFamily: '"Pacifico", cursive'
    },
    body: {
        display: 'flex',
        justifyContent: 'center'
    },
    photo: {
        borderRadius: '1rem',
        width: '30rem',
        height: '22rem'
    },
    description: {
        marginLeft: '1rem',

        "& button": {
            backgroundColor: '#32D443',
            color: '#FFF',
            fontWeight: '600',
            fontSize: '1rem',
            width: '10rem',
            height: '3rem',
            marginTop: '1rem',

            "&:hover": {
                backgroundColor: 'green',
            }
        }
    }
}));

const Pet:React.FC = () => {
    const classes = useStyles();
    const location = useLocation();
    const history = useHistory();

    const [pet, setPet] = useState<PetModel>();

    useEffect(() => {
        //@ts-ignore
        const { id } = location.state;
        
        if(!id) {
            history.push("/");
        }

        getPetById(id)
            .then(({data}) => {    
                setPet(data.pet);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const handleAdoption = (id: number) => {
        removePet(id)
            .then(() => {
                toast.success("❤️ Adotado com sucesso");
                history.push("/");
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className={classes.root}>
            {
                pet &&
                (
                <>
                    <div className={classes.title}>
                        <h1>{pet.name}</h1>
                    </div>
                    <div className={classes.body}>
                        <div>
                            <img className={classes.photo} src={pet.photo} alt="pet foto"/>
                        </div>
                        <div className={classes.description}>
                            <h2 style={{marginTop: 0}}>Espécie: {pet.specie}</h2>
                            <h2>Raça: {pet.breed}</h2>
                            <h2>Sexo: {pet.sex}</h2>
                            <h2>Idade: {pet.age}</h2>
                            <h2>Vacinado: {pet.vaccinated ? "Sim" : "Não"}</h2>
                            <h2>Castrado: {pet.age ? "Sim" : "Não"}</h2>
                            <Button onClick={() => handleAdoption(pet.id)} variant="contained">
                                Adotar
                            </Button>
                        </div>
                    </div>
                </>
                )
            }
        </div>
    );
}

export default Pet;