import { CreateMovie, Movie, MoviesState } from "@/utils";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createMovieApi, fetchMovieApi, updateMovieApi, deleteApi } from "./moviesApi";

export const fetchMovieAsync = createAsyncThunk<Movie[]>(
    "movie/fetchMovieApi",
    async (): Promise<Movie[]> => {
        const responce = await fetchMovieApi()
        return responce.data
    }
)

export const createMovieAsync = createAsyncThunk<Movie, CreateMovie>(
    "movie/createMovieApi",
    async (data: CreateMovie): Promise<Movie> => {
        const responce = await createMovieApi(data)
        return responce.data
    }
)

export const updateMovieAsync = createAsyncThunk<Movie, { id: string, update: CreateMovie }>(
    "movie/updateMovieApi",
    async ({ update, id }: { update: CreateMovie, id: string }): Promise<Movie> => {
        const responce = await updateMovieApi({ update, id })
        return responce.data
    }
)

export const deleteAsync = createAsyncThunk<Movie, { id: string }>(
    "movie/deleteApi",
    async ( id : { id: string }): Promise<Movie> => {
        const responce = await deleteApi( id )
        return responce.data
    }
)

const moviesSlice = createSlice({
    name: "movie",
    initialState: {
        movies: [] as Movie[],
        status: 'idle' || "loading",
        error: null as string | null,
    } as MoviesState,
    
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchMovieAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMovieAsync.fulfilled, (state, action: PayloadAction<Movie[]>) => {
                state.status = 'succeeded';
                state.movies = action.payload
            })
            .addCase(createMovieAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createMovieAsync.fulfilled, (state, action: PayloadAction<Movie>) => {
                state.status = 'succeeded';
                console.log(action.payload)
                state.movies.push(action.payload)
            })
            .addCase(updateMovieAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateMovieAsync.fulfilled, (state, action: PayloadAction<Movie>) => {
                state.status = 'succeeded';
                const update = action.payload
                const findIndex = state.movies.findIndex(movie => movie.id === update.id)
                if (findIndex !== -1) {
                    state.movies[findIndex] = action.payload
                }
            })
            .addCase(deleteAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(deleteAsync.fulfilled, (state, action: PayloadAction<Movie>) => {
                state.status = 'succeeded';
                state.movies = state.movies.filter(movie => movie.id !== action.payload.id)
            })
    },
})

export default moviesSlice.reducer