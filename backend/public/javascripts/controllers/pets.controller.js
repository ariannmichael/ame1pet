var pets = [{
    "id": 1, "name": "Floquinho", "specie": "Cachorro", "breed": "Lhasa Apso", "sex": "Masculino",
    "photo": "https://veterinariadavinci.com.br/blog/wp-content/uploads/2018/06/lhasa-apso-curiosidades-sobre-a-raca.jpg",
    "age": "5 anos", "vaccinated": true, "castrated": true
}, 
{
    "id": 2, "name": "Malvado", "specie": "Gato", "breed": "Angora", "sex": "Feminino",
    "photo": "https://i.pinimg.com/originals/f8/27/ed/f827ed9a704146f65b96226f430abf3c.png",
    "age": "2 anos", "vaccinated": true, "castrated": false
},
{
    "id": 3, "name": "Caramelo", "specie": "Cachorro", "breed": "Vira-lata", "sex": "Feminino",
    "photo": "https://www.rbsdirect.com.br/imagesrc/25743537.jpg?w=580",
    "age": "indefinido", "vaccinated": true, "castrated": false
},{
    "id": 4, "name": "Louro José", "specie": "Papagaio", "breed": "Papagaio-verdadeiro", "sex": "Masculino",
    "photo": "https://pbs.twimg.com/profile_images/1234461081642455040/CiLc23F9_400x400.jpg",
    "age": "23 anos", "vaccinated": true, "castrated": false
}];

var lastIndex = 4;

exports.getAllPets = async function(req, res) {
    res.status(200).json({ pets });
}

exports.postPet = async function(req, res) {
    const newPet = req.body;

    pets.push({id: ++lastIndex,newPet});
    res.status(200).json({ newPet })
}

exports.getPetById = async function(req, res) {
    const { id } = req.params;

    const pet = pets.find(element => element.id == id);
    res.status(200).json({ pet });
}

exports.removePetById = async function(req, res) {
    const { id } = req.params;

    pets = pets.filter(element => element.id != id);
    res.status(200).send();
}