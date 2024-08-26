"use client"
import React, { useEffect } from 'react'
import MovieCart from './MovieCart';
import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieAsync } from '@/redux/movie/moviesSlice';

function MovieList() {
    const dispatch = useDispatch<AppDispatch>()
    const { movies, status } = useSelector((state: RootState) => state.movie)
    const { favorite } = useSelector((state: RootState) => state.auth)
    const searchQuery = useSelector((state: RootState) => state.filter.searchQuery);
    const searchGenre = useSelector((state: RootState) => state.filter.genre);

    useEffect(() => {
        dispatch(fetchMovieAsync())
    }, [])

    if (status === "loading") {
        return <h1>loading...</h1>
    }

    const filteredMovies = movies.filter((movie) => {
        return (
          (searchGenre === '' || movie.genre.includes(searchGenre)) &&
          (searchQuery === '' || movie.title.toLowerCase().includes(searchQuery.toLowerCase()))
        );
      });
    return (
        <div className='my-10 px-14'>
            <h1 className='text-white font-bold text-2xl my-10'>Recently Added</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                {filteredMovies.map(movie => {
                    const isFev = favorite.some(fev => fev.movieId === movie.id)
                    return <MovieCart
                        key={movie.id}
                        isFev={isFev}
                        {...movie}
                    />
                }
                )}
            </div>
        </div>
    )
}

export default MovieList;
