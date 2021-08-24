import axios from 'axios';

const searchMovieByKeyword = async (keyword, page = 1) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=cfe422613b250f702980a3bbf9e90716&page=${page}`;
    const response = await axios.get(url);
    const result = await response.status === 200 ? await response.data : {};
    return result;
}
export const movieApi = {
    searchMovieByKeyword
}