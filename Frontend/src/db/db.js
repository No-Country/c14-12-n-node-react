const api = "http://localhost:4000/api/product";

const database = fetch(api)
  .then((res) => res.json())
  .then((res) => console.log(res));

export { database };
