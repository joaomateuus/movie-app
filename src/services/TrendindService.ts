import { Api } from "./api"


export const TrendingService = async  () => {
    try {
        const response = await Api.get(`/3/trending/all/day?api_key=${import.meta.env.VITE_REACT_API_KEY}`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const popularMoviesService = async () => {
    try {
        const response = await Api.get(`/3/movie/popular?api_key=${import.meta.env.VITE_REACT_API_KEY}`)
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const popularSeriesService = async () => {
    try {
        const response = await Api.get(`/3/tv/popular?api_key=${import.meta.env.VITE_REACT_API_KEY}`)
        return response.data;
    } catch (error) {
        console.log(error);
    }
}