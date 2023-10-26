export async function getAll() {
  //GET por productos
   return await fetch(`https://marlui-map4che.koyeb.app/api/product).then((res)=>
    // return await fetch(`http://localhost:4000/api/product`).then((res) =>
       res.json()
    );
  }

  // export async function getElementById(id) {
  //   //GET por ID
  //   return await fetch(`http://localhost:4000/${id}/product/:id`).then((res) =>
  //     res.json()
  //   );
  // }
