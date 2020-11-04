import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core";
import { Col, Form, Button } from "react-bootstrap";
import PetModel from "../../models/PetModel";
import { postPet } from "../../api/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginTop: theme.spacing(4),
        marginRight: theme.spacing(30),
        marginLeft: theme.spacing(30),
        borderRadius: '1rem',
        backgroundColor: '#EBEBEB'
    },
    title: {
        padding: theme.spacing(4),
        fontSize: '1.5rem',
        textAlign: 'center',
        fontFamily: '"Pacifico", cursive'
    },
    form: {
        padding: theme.spacing(5),
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center'
    },
    button: {
        width: '13rem',
        height: '2.5rem',
        fontSize: '1.2rem'
    }
}))

const AddPet:React.FC = () => {
    const classes = useStyles();
    const history = useHistory();

    const [name, setName] = useState('');
    const [specie, setSpecie] = useState('');
    const [breed, setBreed] = useState('');
    const [photo, setPhoto] = useState('');
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('Masculino');
    const [vaccinated, setVaccinated] = useState(false);
    const [castrated, setCastrated] = useState(false);


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const item = {name, specie, breed, photo, age, sex, vaccinated, castrated};
        const newPet = new PetModel(item);        

        postPet(newPet)
            .then((data) => {
                toast.success("🐶 Adicionado com sucesso");
                history.push("/");
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <h1>Adicionar Pet</h1>
            </div>
            <div className={classes.form}>
                <Form onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formName">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" onChange={e => setName(e.target.value)} placeholder="Entre o nome do pet" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formSpecie">
                        <Form.Label>Espécie</Form.Label>
                        <Form.Control type="text" onChange={e => setSpecie(e.target.value)} placeholder="Entre a espécie do pet" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formBreed">
                        <Form.Label>Raça</Form.Label>
                        <Form.Control type="text" onChange={e => setBreed(e.target.value)} placeholder="Entre a raça do pet" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formPhoto">
                        <Form.Label>Foto</Form.Label>
                        <Form.Control type="text" onChange={e => setPhoto(e.target.value)} placeholder="Entre a url da foto do pet" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formAge">
                        <Form.Label>Idade</Form.Label>
                        <Form.Control type="text" onChange={e => setAge(e.target.value)} placeholder="Entre a idade do pet"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formSex">
                        <Form.Label>Sexo</Form.Label>
                        <Form.Control as="select" defaultValue="Masculino" onChange={(e) => setSex(e.target.value)}>
                            <option>Masculino</option>
                            <option>Feminino</option>
                        </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} id="formVaccinated">
                            <Form.Check type="checkbox" onChange={() => setVaccinated(!vaccinated)} label="Vacinado" />
                        </Form.Group>
                        <Form.Group as={Col} id="formCastrated">
                            <Form.Check type="checkbox" onChange={() => setCastrated(!castrated)} label="Castrado" />
                        </Form.Group>
                    </Form.Row>

                    <br/>
                    <div className={classes.buttonContainer}>
                        <Button className={classes.button} variant="success" type="submit">
                            Adicionar
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default AddPet;