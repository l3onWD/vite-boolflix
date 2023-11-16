const api = {
    key: import.meta.env.VITE_TMDB_API_KEY,
    uri: 'https://api.themoviedb.org/3/',
    language: 'it-IT'
}


const mediaSettings = {
    posterBasePath: 'https://image.tmdb.org/t/p/',
    posterSize: 'w342',
    posterPlaceholder: 'https://marcolanci.it/utils/poster-placeholder.png',
    languageFlags: ['it', 'en']
}

/*** YEAR OPTIONS CREATION ***/
let years = [];
const minYear = 1950;
const maxYear = new Date().getFullYear();

for (let i = maxYear; i >= minYear; i--) {
    years.push({ value: i, text: i });
}

const filtersSettings = {
    voteOptions: [
        { value: 1, text: '&starf;' },
        { value: 2, text: '&starf;&starf;' },
        { value: 3, text: '&starf;&starf;&starf;' },
        { value: 4, text: '&starf;&starf;&starf;&starf;' },
        { value: 5, text: '&starf;&starf;&starf;&starf;&starf;' }
    ],
    yearOptions: years
}


export { api, mediaSettings, filtersSettings };