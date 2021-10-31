import { OmdbApiInstance, AxiosResponse } from "./axios";
import { 
    MoviesType,
    IMovies
} from "../domain/movies";
require("dotenv").config()

class MovieFetch implements IMovies{
    protected apiKey: string;
    private query: MoviesType;
    private params: MoviesType;

    constructor(query: MoviesType, params: MoviesType){
        this.apiKey = `${process.env.KEY_OMDBAPI}`;
        this.query = query
        this.params = params
    }

    search = async (): Promise<any> => {

        let queryObject = {
            apikey: this.apiKey, 
            s: this.query.keyword
        };
        let queryString = new URLSearchParams(queryObject).toString();
        let results: AxiosResponse = await OmdbApiInstance.get(`?${queryString}`);
        return results;
    }

    detail = async (): Promise<any>  => {

        let queryObject = {
            apikey: this.apiKey, 
            i: this.params.id
        };
        let queryString = new URLSearchParams(queryObject).toString();
        let results: AxiosResponse = await OmdbApiInstance.get(`?${queryString}`);

        return results;
    }

}

export default MovieFetch