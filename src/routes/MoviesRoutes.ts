import BaseRoutes from "../domain/baseRoutes";
import MoviesController from "../delivery/http/controllers/MoviesController";

/*================== Validator =================*/
import validate from "../delivery/http/middleware/validator/SearchValidator";

class MoviesRoutes extends BaseRoutes{
    public routes():void{
        this.router.get("/search", validate, MoviesController.get)
        this.router.get("/detail/:id", MoviesController.detail)
    }
}

export default new MoviesRoutes().router;