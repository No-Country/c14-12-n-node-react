//const URL = "http://localhost:4000/api";
const URL = "https://marlui-map4che.koyeb.app/api";
export async function getBanner() {
  return await fetch(`${URL}/banner`).then((res) => res.json());
}
