import { defineStore } from "pinia";

const url = "https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10";

export const useSearchStore = defineStore("searchStore", {
  state: () => ({
    loader: false,
    movies: [],
  }),
  actions: {
    async getMovies(search) {
      this.loader = true;

      const res = await fetch(`${url}&token=D85R22X-HKHM5RZ-MK3AGW1-Z1J9PEJ&query=${encodeURIComponent(search)}, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }`);

      const data = await res.json();
      this.movies = data.docs; // Измените на data.docs, если это структура ответа API
    },
  },
});