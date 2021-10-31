import { Request, Response } from "express";
import MovieUseCase from "../../../useCase/MovieUseCase";

class MoviesController {
    
    get = async (req: Request, res: Response): Promise<Response> => {
        try{
            const useCase = await MovieUseCase.get(req);
            return res.status(200).send(useCase)
        } catch(err: any){
            return res.status(err.response.status).send(err)
        }
    }

    detail = async (req: Request, res: Response): Promise<Response> => {
        try{
            const useCase = await MovieUseCase.getById(req);
            return res.status(200).send(useCase)
        } catch(err: any){ 
            return res.status(err.response.status).send(err)
        }
    }
    
}

export default new MoviesController();

