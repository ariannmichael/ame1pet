import React from "react";
import { Button, makeStyles, Theme } from "@material-ui/core";
import { Form } from "react-bootstrap";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(15),
        marginLeft: theme.spacing(15),
        borderRadius: '1rem',
        backgroundColor: '#EBEBEB'
    },
    title: {
        fontSize: '1.5rem',
        textAlign: 'center',
        fontFamily: '"Pacifico", cursive'
    },
}))

const AddPet:React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <h1>Adicionar Pet</h1>
            </div>
            <div className="">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="contained" color="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default AddPet;