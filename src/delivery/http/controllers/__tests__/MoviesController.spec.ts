import MoviesController from "../MoviesController";
import MovieUseCase from "../../../../useCase/MovieUseCase";

jest.useFakeTimers()

describe('MoviesController', () => {

    afterEach(() => {
        jest.resetAllMocks();
    });

    describe("get", () => {

        it('should get data movies and send response correctly', async () => {
            // const mMoviesObject: any = expect.objectContaining({
            //     Response: expect.any(String),
            //     Error: expect.any(String),
            // });
            // jest.spyOn(MovieUseCase, 'get').mockResolvedValueOnce(mMoviesObject);

            jest.spyOn(MovieUseCase, 'get') 
            const mReq: any = {
                query: {
                    keyword: 'batman'
                }
            }
            const mRes: any = { status: jest.fn().mockReturnThis(), send: jest.fn() };
            await MoviesController.get(mReq, mRes);
            expect(MovieUseCase.get).toBeCalledWith(mReq); 
            expect(mRes.status).toBeCalledWith(200);
            expect(mRes.send).toBeCalledWith(
                expect.objectContaining({
                    Search: expect.arrayContaining([
                        expect.objectContaining({
                            Title: expect.any(String),
                            Year: expect.any(String),
                            imdbID: expect.any(String),
                            Type: expect.any(String),
                            Poster: expect.any(String)
                        }),
                    ]),
                    totalResults: expect.any(String),
                    Response: expect.any(String)
                })
            );
            
        });

    })

    describe("detail", () => {
        
        it('should get detail movies and send response correctly', async () => {

            jest.spyOn(MovieUseCase, 'getById')
            const mReq: any = {
                params: {
                    id: 'tt0372784' 
                }
            }
            const mRes: any = { status: jest.fn().mockReturnThis(), send: jest.fn() };
            await MoviesController.detail(mReq, mRes);
            expect(MovieUseCase.getById).toBeCalledWith(mReq);
            expect(mRes.status).toBeCalledWith(200); 
            expect(mRes.send).toBeCalledWith(
                expect.objectContaining({
                    Response: "True"
                })
            );
        });

    })
    
});

