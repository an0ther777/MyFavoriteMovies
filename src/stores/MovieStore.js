import {defineStore} from 'pinia'

export const useMovieStore = defineStore("movieStore", {
    state: () =>({
        movies: [
            {
                id: 1,
                original_title: 'dsdas',
                overview: 'dsdsdsa',
                poster_path: '/dsadsadsaas.jpg',
                release_date: '2002-04-10',
                isWatched: false,
            },
            {
                id: 2,
                original_title: 'dsdfdas',
                overview: 'dsdsdsdsa',
                poster_path: '/dsadsafddsaas.jpg',
                release_date: '2002-03-10',
                isWatched: true,
            }
        ],
    }),
})