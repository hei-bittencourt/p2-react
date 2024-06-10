import axios from "axios";

const apiAnime = axios.create({
  baseURL: "https://api.jikan.moe/v4/",
});

export function getCharacter(category) {
  const urls = {
    personagem: "top/characters",
    anime: "top/anime",
  };

  return apiAnime.get(urls[category]);
}
