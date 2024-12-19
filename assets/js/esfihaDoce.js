const esfihaDoce = [
      {
        "title": "Abacaxi com Doce de Leite",
        "price": "R$ 7,00"
      },
      {
        "title": "Abacaxi com Leite Condensado",
        "price": "R$ 7,00"
      },
      {
        "title": "Banana com Chocolate",
        "price": "R$ 7,00"
      },
      {
        "title": "Banana com Doce de Leite",
        "price": "R$ 7,00"
      },
      {
        "title": "Banana Com Leite Condensado",
        "price": "R$ 7,00"
      },
      {
        "title": "Chocolate",
        "price": "R$ 7,00"
      },
      {
        "title": "Dois Amores",
        "price": "R$ 7,00"
      },
      {
        "title": "M&M'S",
        "price": "R$ 7,00"
      },
      {
        "title": "Chocolate com Morango",
        "price": "R$ 7,00"
      },
      {
        "title": "Prestígio",
        "price": "R$ 7,00"
      },
      {
        "title": "Romeu e Julieta I",
        "ingredients": "Goiabada derretida coberto com requeijão cremoso Coronata.",
        "price": "R$ 7,00"
      },
      {
        "title": "Romeu e Julieta II",
        "ingredients": "Goiabada derretida com mussarela.",
        "price": "R$ 7,00"
      },
      {
        "title": "Sensação",
        "ingredients": "Delicioso chocolate com pedaços de morango e leite condensado.",
        "price": "R$ 7,00"
      }
];

// Seleciona o contêiner onde os itens serão adicionados
const containerEsfihaDoce = document.getElementById("esfihaDoceContainer");

// Função para criar os elementos HTML para cada item
esfihaDoce.forEach(item => {
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
containerEsfihaDoce.appendChild(link);
});

