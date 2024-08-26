"use client";

import MovieCart from "@/app/components/MovieCart";
import { deleteFevAsync } from "@/redux/auth/authSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";


export default function Favorites() {
    const { favorite, status } = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch<AppDispatch>()

    const removeFromWatchlist = (id: string) => {
        dispatch(deleteFevAsync({ id }))
    };

    if (status === "loading") {
        return <h1>loading...</h1>
    }
    const movies = favorite.map(item => item.movie)

    if (movies.length === 0) {
        return <h1>Select some movie that you like</h1>
    }
    return (
        <div className="p-10">
            <h1 className="text-white font-bold text-3xl mb-8">Watchlist & Favorites</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    movies.map(movie => (
                        <MovieCart
                            id={movie.id}
                            isFev={true}
                            key={movie.id}
                            age={movie.age}
                            title={movie.title}
                            thumbnail={movie.thumbnail}
                            movieUrl={movie.movieUrl}
                            release={movie.release}
                            description={movie.description}
                            genre={movie.genre}
                            duration={movie.duration}
                        />
                    ))
                }
            </div>
        </div>
    );
}
