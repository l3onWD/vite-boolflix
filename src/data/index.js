const api = {
    key: 'd3a65bacb8cd5d801f89b557096b67e3',
    uri: 'https://api.themoviedb.org/3/',
    language: 'it-IT'
}

const mediaSettings = {
    posterBasePath: 'https://image.tmdb.org/t/p/',
    posterSize: 'w342',
    posterPlaceholder: 'https://marcolanci.it/utils/poster-placeholder.png',
    languageFlags: ['it', 'en']
}

const filtersSettings = {
    voteOptions: [
        { value: 1, text: '&starf;' },
        { value: 2, text: '&starf;&starf;' },
        { value: 3, text: '&starf;&starf;&starf;' },
        { value: 4, text: '&starf;&starf;&starf;&starf;' },
        { value: 5, text: '&starf;&starf;&starf;&starf;&starf;' }
    ]
}


export { api, mediaSettings, filtersSettings };