import axios from "axios";
import PetModel from "../models/PetModel";

const baseURL = "http://localhost:8080/"

export const getAllPets = async() => {
    const url = baseURL + "pets";

    return axios.get(url);
}

export const getPetById = async(id: number) => {
    const url = baseURL + "pets/" + id;

    return axios.get(url);
}

export const postPet = async(body: PetModel) => {
    const url = baseURL + "pets";

    return axios.post(url, body);
}

export const removePet = async(id: number) => {
    const url = baseURL + "pets/" + id;

    return axios.delete(url);
}