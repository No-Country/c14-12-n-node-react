const api = "users";

//fetch(`https://marlui-map4che.koyeb.app/api/${api}`)
const database = fetch(`http://localhost:4000/api/${api}`)
  .then((res) => res.json())
  .then((res) => console.log(res));

export { database };
