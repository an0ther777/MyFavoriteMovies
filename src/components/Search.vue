<template>
    <form @submit.prevent="searchStore.getMovies(searchMovie)">
        <input type="text" class="search-input" 
            placeholder="Input movie" v-model="searchMovie">
    </form>
    <h5>Если функционал отсутствует, значит, ссылка на список фильмов устарела</h5>
</template>

<script>
import { ref } from 'vue'
import { useSearchStore } from "../stores/SearchStore"

export default {
    setup() {
        const searchMovie = ref('') // Исправлено название переменной
        const searchStore = useSearchStore(); // Исправлено название функции

        return { searchMovie, searchStore }; // Возвращаем обе переменные
    }
}
</script>

<style scoped>
.search-input {
    border: 1px solid #e7e7e7;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    margin-bottom: 20px;
    border-radius: 10px;
    transition: all 0.5s;
}
.search-input:hover {
    transform: translateY(-3px);
    transform: scale(1.03);
}
</style>