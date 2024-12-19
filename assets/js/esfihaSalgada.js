const esfihaSalgada = [
    {
        "title": "Atum",
        "price": "R$ 4,60"
      },
      {
        "title": "Atum c/ Mussarela",
        "price": "R$ 5,60"
      },
      {
        "title": "Atum c/ Catupiry",
        "price": "R$ 5,60"
      },
      {
        "title": "Bacon",
        "price": "R$ 4,60"
      },
      {
        "title": "Baiana",
        "price": "R$ 5,60"
      },
      {
        "title": "Bauru",
        "price": "R$ 4,60"
      },
      {
        "title": "Brócolis c/ Catupiry",
        "price": "R$ 4,60"
      },
      {
        "title": "Brócolis c/ Mussarela",
        "price": "R$ 4,60"
      },
      {
        "title": "Caipiria",
        "price": "R$ 4,60"
      },
      {
        "title": "Calabresa",
        "price": "R$ 2,50"
      },
      {
        "title": "Calabresa c/ Catupiry",
        "price": "R$ 4,60"
      },
      {
        "title": "Calabresa c/ Mussarela",
        "price": "R$ 4,60"
      },
      {
        "title": "Camarão c/ Catupiry",
        "price": "R$ 5,60"
      },
      {
        "title": "Carne",
        "price": "R$ 2,50"
      },
      {
        "title": "Carne c/ Mussarela",
        "price": "R$ 4,60"
      },
      {
        "title": "Carne c/ Catupiry",
        "price": "R$ 5,60"
      },
      {
        "title": "Catupiry",
        "price": "R$ 4,60"
      },
      {
        "title": "Catumilho",
        "price": "R$ 4,60"
      },
      {
        "title": "Combo 01",
        "ingredients": "5 Carne, 5 Mussarela, 5 Calabresa, 5 Frango",
        "price": "R$ 46,00"
      },
      {
        "title": "Combo 02",
        "ingredients": "10 Carne, 10 Mussarela, 10 Calabresa",
        "price": "R$ 70,00"
      },
      {
        "title": "Dois Queijos",
        "price": "R$ 4,60"
      },
      {
        "title": "Escarola c/ Catu",
        "price": "R$ 4,60"
      },
      {
        "title": "Escarola c/ Mussarela",
        "price": "R$ 4,60"
      },
      {
        "title": "Frango",
        "price": "R$ 2,50"
      },
      {
        "title": "Frango c/ Catupiry",
        "price": "R$ 4,60"
      },
      {
        "title": "Frango c/ Mussarela",
        "price": "R$ 4,60"
      },
      {
        "title": "Mussarela c/ Milho",
        "price": "R$ 4,60"
      },
      {
        "title": "Palmito c/ Mussarela",
        "price": "R$ 5,60"
      },
      {
        "title": "Palmito c/ Catupiry",
        "price": "R$ 5,60"
      },
      {
        "title": "Portuguesa",
        "price": "R$ 5,60"
      },
      {
        "title": "Quatro Queijos",
        "price": "R$ 5,60"
      },
      {
        "title": "Queijo Fresco",
        "price": "R$ 2,50"
      },
      {
        "title": "Queijo Mussarela",
        "price": "R$ 2,50"
      },
      {
        "title": "Rúcula c/ Mussarela",
        "price": "R$ 5,60"
      }
];

// Seleciona o contêiner onde os itens serão adicionados
const containerEsfihaSalgada = document.getElementById("esfihaSalgadaContainer");

// Função para criar os elementos HTML para cada item
esfihaSalgada.forEach(item => {
const link = document.createElement("a");
link.className = "list-group-item list-group-item-action";

const div = document.createElement("div");
div.className = "d-flex w-100 justify-content-between";

const title = document.createElement("h5");
title.className = "mb-1";
title.textContent = item.title;

const price = document.createElement("small");
price.textContent = item.price;

const ingredients = document.createElement("p");
ingredients.className = "mb-1";
ingredients.textContent = item.ingredients;

// Monta a estrutura
div.appendChild(title);
div.appendChild(price);
link.appendChild(div);
link.appendChild(ingredients);
containerEsfihaSalgada.appendChild(link);
});

