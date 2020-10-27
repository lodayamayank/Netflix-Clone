const API_KEY = "976ba3b099e8f2c64e8408e8630a535f"


const requests = {
    fetchTrending :  `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/tv?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/tv?api_key=${API_KEY}&with_genres=27`,
    fetchRomanticMovies: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
}

export default requests;