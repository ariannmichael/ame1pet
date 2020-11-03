import React from "react";
import { Button, makeStyles, Theme } from "@material-ui/core";
import { Col, Form } from "react-bootstrap";

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
    }
}))

const AddPet:React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <h1>Adicionar Pet</h1>
            </div>
            <div className={classes.form}>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formName">
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type="text" placeholder="Entre o nome do pet" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formSpecie">
                        <Form.Label>Espécie</Form.Label>
                        <Form.Control type="text" placeholder="Entre a espécie do pet" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formBreed">
                        <Form.Label>Raça</Form.Label>
                        <Form.Control type="text" placeholder="Entre a raça do pet" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formPhoto">
                        <Form.Label>Foto</Form.Label>
                        <Form.Control type="text" placeholder="Entre a url da foto do pet" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formAge">
                        <Form.Label>Idade</Form.Label>
                        <Form.Control type="text" placeholder="Entre a idade do pet"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formSex">
                        <Form.Label>Sexo</Form.Label>
                        <Form.Control as="select">
                            <option>Masculino</option>
                            <option>Feminino</option>
                        </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} id="formVaccinated">
                            <Form.Check type="checkbox" label="Vacinado" />
                        </Form.Group>
                        <Form.Group as={Col} id="formCastrated">
                            <Form.Check type="checkbox" label="Castrado" />
                        </Form.Group>
                    </Form.Row>

                    <br/>
                    <Button variant="contained" type="submit">
                        Adicionar
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default AddPet;