import { Api } from "./api"


export const TrendingService = async  () => {
    try {
        const response = await  Api.get(`/3/trending/all/day?api_key=9e0f1a1e85871bab9d7684241977ed12`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.log(error);
    }
   
}