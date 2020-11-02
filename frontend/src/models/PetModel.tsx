class PetModel {
    id: number
    name: string
    specie: string
    breed: string
    photo: string
    age: string
    vaccinated: boolean
    castrated: boolean

    constructor(item: any) {
        this.id = item.id;
        this.name = item.name;
        this.specie = item.specie;
        this.breed = item.breed;
        this.photo = item.photo;
        this.age = item.age;
        this.vaccinated = item.vaccinated;
        this.castrated = item.castrated;
    }

}

export default PetModel;