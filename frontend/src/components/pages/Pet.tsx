import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { getPetById } from "../../api/api";
import PetModel from "../../models/PetModel";

const Pet:React.FC = () => {
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
                setPet(data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <div className="">Pet</div>
    );
}

export default Pet;