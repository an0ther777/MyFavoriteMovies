import { defineStore, setActivePinia } from "pinia";

export const useMovieStore = defineStore("movieStore", {
  state: () => ({
    movies: [
      {
        id: 1,
        original_title: "Spider-Man",
        overview:
          "After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers to become the superhero known as Spider-Man.",
        poster_path: "https://avatars.mds.yanddex.net/i?id=70c21c984e5d2a6bfee29560713a2b5a0c628974-10696040-images-thumbs&n=13",
        release_date: "2002-05-01",
        isWatched: false,
      },
      {
        id: 2,
        original_title: "The Batman",
        overview:
          "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
        poster_path: "https://avatars.mds.yadndex.net/i?id=a5099618a3f3ae28e3b905338cfd5cd1_l-5246403-images-thumbs&n=13",
        release_date: "2022-03-01",
        isWatched: true,
      },
    ],
    activeTab: 2,
  }),
  getters: {
    wathchMovies() {
      return this.movies.filter((el) => el.isWatched === true)
    },
    totalMovies(){
      return this.movies.length
    }
  },
  actions: {
    setActiveTap(id){
      this.activeTab = id
    },
    toggleWathched(id){
      const idx = this.movies.findIndex(el => el.id === id)
      this.movies[idx].isWatched = !this.movies[idx].isWatched
    },
    deleteMovie(id){
      this.movies = this.movies.filter((el) => el.id != id)
    }
  }
});