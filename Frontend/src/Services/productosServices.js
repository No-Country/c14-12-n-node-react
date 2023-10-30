//const URL = "http://localhost:4000/api";
const URL = "https://marlui-map4che.koyeb.app/api";

export async function getAll() {
  //GET por productos
  return await fetch(`${URL}/product`).then((res) => res.json());
}

export async function getSales() {
  //GET por ofertas
  return await fetch(`${URL}/sales`).then((res) => res.json());
}

export async function getByCategory(category) {
  //Get por Categoria
  const requestBody = { category: category };
  return await fetch(`${URL}/category`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  }).then((res) => res.json());
}

export async function getElementById(id) {
  //GET por ID
  return await fetch(`${URL}/product/${id}`).then((res) => res.json());
}
