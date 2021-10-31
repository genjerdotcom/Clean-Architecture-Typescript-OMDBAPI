
import MovieFetch from "../rests/MovieFetch";
import ActivityRepository from "../repositories/mysql/ActivityRepository";
import { ActivityName } from "../domain/activity";
import { 
    IMovies, 
    IMoviesUseCase 
} from "../domain/movies";

class MovieUseCase implements IMoviesUseCase{
    get = async (req: any): Promise<IMovies> => {
        const { query, params, useragent } = req
        const fetch = await new MovieFetch(query, params).search()

        await ActivityRepository.store({
            useragent: useragent,
            type_name: ActivityName.GET_SEARCH,
            status_code: fetch.status,
            message: fetch.statusText
        })

        return fetch.data
    }
    getById = async (req: any): Promise<IMovies> => {
        const { query, params, useragent } = req
        const fetch = await new MovieFetch(query, params).detail()

        await ActivityRepository.store({
            useragent: useragent,
            type_name: ActivityName.GET_DETAIL,
            status_code: fetch.status,
            message: fetch.statusText
        })

        return fetch.data
    }
}

export default new MovieUseCase();