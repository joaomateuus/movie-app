import { Api } from "./api"


export const TrendingService = async  () => {
    try {
        const response = await Api.get(`/3/trending/all/day?api_key=9e0f1a1e85871bab9d7684241977ed12`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const popularMoviesService = async () => {
    try {
        const response = await Api.get(`/3/movie/popular?api_key=9e0f1a1e85871bab9d7684241977ed12`)
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export const popularSeriesService = async () => {
    try {
        const response = await Api.get(`/3/tv/popular?api_key=9e0f1a1e85871bab9d7684241977ed12`)
        return response.data;
    } catch (error) {
        console.log(error);
    }
}