// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler() {
    let data = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    let jsonData = data.json();
    return jsonData
}
