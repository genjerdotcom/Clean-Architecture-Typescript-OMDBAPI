type MoviesType = { 
    id: string;
    keyword: string;
};

interface IMovies {
    search(params: MoviesType): any;
    detail(params: MoviesType): any;
}

interface IMoviesUseCase {
    get(params: any): IMovies | Promise<IMovies>;
    getById(params: any): IMovies | Promise<IMovies>;
}
    
export {
    IMoviesUseCase,
    IMovies,
    MoviesType
}
