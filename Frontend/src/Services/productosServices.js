const URL = "http://localhost:4000/api";

export async function getAll() {
  //GET por productos
  return await fetch(`${URL}/product`).then((res) => res.json());
}

export async function getSales() {
  //GET por ofertas
  return await fetch(`${URL}/sales`).then((res) => res.json());
}

export async function getElementById(id) {
  //GET por ID
  return await fetch(`${URL}/:${id}`).then((res) => res.json());
}
