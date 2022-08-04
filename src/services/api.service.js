export default class ApiService {
  getMovies (page, genre, language) {
    return fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4bfb25898b30c2653e796802adf596ff&page=${page}&with_genres=${genre}&with_original_language=${language}&sort_by=popularity.desc`)
  }

  getSeries (page, genre, language) {
    return fetch(`https://api.themoviedb.org/3/discover/tv?api_key=4bfb25898b30c2653e796802adf596ff&page=${page}&with_genres=${genre}&with_original_language=${language}&sort_by=popularity.desc`)
  }

  getSerie (id) {
    return fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=4bfb25898b30c2653e796802adf596ff`)
  }

  getMovie (id) {
    return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4bfb25898b30c2653e796802adf596ff`)
  }

  getMovieCredits (id) {
    return fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=4bfb25898b30c2653e796802adf596ff`)
  }

  getGenres () {
    return fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=4bfb25898b30c2653e796802adf596ff')
  }

  getLanguages () {
    return fetch('https://api.themoviedb.org/3/configuration/languages?api_key=4bfb25898b30c2653e796802adf596ff&sort_by=english_name.asc')
  }
}
