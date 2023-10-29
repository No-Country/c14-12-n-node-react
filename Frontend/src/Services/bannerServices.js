const URL = "http://localhost:4000/api";

export async function getBanner() {
  return await fetch(`${URL}/banner`).then((res) => res.json());
}
