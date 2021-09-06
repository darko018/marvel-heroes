
let endpoint = "http://gateway.marvel.com/v1/public/characters?apikey=dec71767811e0b39551ff4306d184b57"

export const getHeroes = () => {
    return fetch(endpoint)
        .then(response => response.json())
        .then(res => res.data.results)
}