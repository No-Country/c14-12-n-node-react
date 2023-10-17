const api = "users";

const database = fetch(`http://localhost:4000/api/${api}`)
  .then((res) => res.json())
  .then((res) => console.log(res));

export { database };
