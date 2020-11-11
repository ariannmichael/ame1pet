import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";



import CardPet from "./CardPet";

let container: any = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders with or without a pet", () => {
    const mockPets = [{
        "id": 1, "name": "Floquinho", "specie": "Cachorro", "breed": "Lhasa Apso", "sex": "Masculino",
        "photo": "https://veterinariadavinci.com.br/blog/wp-content/uploads/2018/06/lhasa-apso-curiosidades-sobre-a-raca.jpg",
        "age": "5 anos", "vaccinated": true, "castrated": true
    }, 
    {
        "id": 2, "name": "Malvado", "specie": "Gato", "breed": "Angora", "sex": "Feminino",
        "photo": "https://i.pinimg.com/originals/f8/27/ed/f827ed9a704146f65b96226f430abf3c.png",
        "age": "2 anos", "vaccinated": true, "castrated": false
    }];

    act(() => {
        render(<CardPet pet={mockPets[0]} />, container);
    });
    expect(container.textContent).toBe("Nome: FloquinhoEspécie: CachorroRaça: Lhasa ApsoSaber Mais");

    act(() => {
        render(<CardPet pet={mockPets[1]} />, container);
    });
    expect(container.textContent).toBe("Nome: MalvadoEspécie: GatoRaça: AngoraSaber Mais");
});


