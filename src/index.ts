import express, { Application, Request, Response } from "express";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import { config as dotenv } from "dotenv";
import useragent from 'express-useragent';

/*================== ROUTES =================*/
import MoviesRoutes from "./routes/MoviesRoutes";

class App {
    public app:Application;
    
    constructor(){
        this.app = express();
        this.plugins();
        this.routes();
        dotenv();
    }

    protected plugins(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(morgan("dev"));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(useragent.express());
        this.app.use(cors());
    }

    protected routes(): void {
        this.app.route("/").get((req: Request, res: Response) => {
            res.send("hooray worked")
        });
        this.app.use("/api/v1/movies", MoviesRoutes);
    }
}

const app = new App().app;
const port = process.env.APP_PORT;
app.listen(port, () => {
    console.log(`Application running on ${port}`)
});
