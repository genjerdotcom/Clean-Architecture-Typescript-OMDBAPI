import MovieUseCase from "../MovieUseCase";
import MovieFetch from "../../rests/MovieFetch";

jest.useFakeTimers()

afterEach(() => {
    jest.resetAllMocks();
});

describe('MovieUseCase', () => {
    describe("get", () => {
        it('should get data movies and send response correctly', async () => {
            const mReq: any = {
                query: {
                    keyword: 'batman'
                },
                params: {
                    id: 0
                }
            }
            const movieFetch = await new MovieFetch(mReq.query, mReq.params)
            jest.spyOn(movieFetch, 'search') 
            const res: any = await MovieUseCase.get(mReq)
            expect(res.Response).toEqual("True");
        })
    })

    describe("getById", () => {
        it('should get detail movies and send response correctly', async () => {
            const mReq: any = {
                query: {
                    keyword: ''
                },
                params: {
                    id: 'tt0372784' 
                }
            }
            const movieFetch = await new MovieFetch(mReq.query, mReq.params)
            jest.spyOn(movieFetch, 'search') 
            const res: any = await MovieUseCase.getById(mReq)
            expect(res.Response).toEqual("True");
        })
    })
})