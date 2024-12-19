const pizzaDoce = [
    {
        "title": "Abacaxi com Chocolate",
        "ingredients": "Delicioso chocolate coberto com pedaços de abacaxi.",
        "price": "R$ 45,00"
      },
      {
        "title": "Abacaxi com Doce de Leite",
        "ingredients": "Delicioso doce de leite coberto com pedaços de abacaxi.",
        "price": "R$ 45,00"
      },
      {
        "title": "Abacaxi com Leite Condensado",
        "ingredients": "Delicioso leite condensado coberto com pedaços de abacaxi.",
        "price": "R$ 45,00"
      },
      {
        "title": "Banana com Chocolate",
        "ingredients": "Delicioso chocolate coberto com rodelas de banana e canela.",
        "price": "R$ 45,00"
      },
      {
        "title": "Banana com Doce de Leite",
        "ingredients": "Delicioso doce de leite coberto com rodelas de banana e canela.",
        "price": "R$ 45,00"
      },
      {
        "title": "Banana Com Leite Condensado",
        "ingredients": "Delicioso leite condensado coberto com rodelas de banana e canela",
        "price": "R$ 45,00"
      },
      {
        "title": "Chocolate",
        "ingredients": "Delicioso chocolate coberto com granulado.",
        "price": "R$ 45,00"
      },
      {
        "title": "Dois Amores",
        "ingredients": "Delicioso chocolate preto e branco intercalado.",
        "price": "R$ 45,00"
      },
      {
        "title": "M&M'S",
        "ingredients": "Delicioso chocolate coberto com chocolate colorido Confeti.",
        "price": "R$ 45,00"
      },
      {
        "title": "Morango com Chocolate",
        "ingredients": "Delicioso chocolate coberto com morango.",
        "price": "R$ 45,00"
      },
      {
        "title": "Prestígio",
        "ingredients": "Delicioso chocolate coberto com coco ralado.",
        "price": "R$ 45,00"
      },
      {
        "title": "Romeu e Julieta I",
        "ingredients": "Goiabada derretida coberto com requeijão cremoso Coronata.",
        "price": "R$ 45,00"
      },
      {
        "title": "Romeu e Julieta II",
        "ingredients": "Goiabada derretida com mussarela.",
        "price": "R$ 45,00"
      },
      {
        "title": "Sensação",
        "ingredients": "Delicioso chocolate com pedaços de morango e leite condensado.",
        "price": "R$ 45,00"
      }
];

// Seleciona o contêiner onde os itens serão adicionados
const containerDoce = document.getElementById("pizzaDoceContainer");

// Função para criar os elementos HTML para cada item
pizzaDoce.forEach(item => {
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
containerDoce.appendChild(link);
});

