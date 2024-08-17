"use client";

import MovieCart from "@/app/components/MovieCart";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";


export default function Favorites() {
    const { favorite, status } = useSelector((state: RootState) => state.auth)

    const removeFromWatchlist = (id: string) => {
    };

    if (status === "loading") {
        return <h1>loading...</h1>
    }
    return (
        <div className="p-10">
            <h1 className="text-white font-bold text-3xl mb-8">Watchlist & Favorites</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* {favorite.map(i=>console.log(i))} */}
            {/* {movies.map(movie=><MovieCart
                    key={movie.id}
                    remove={removeFromWatchlist}
                    movie={movie.}
                )} */}
            </div>
        </div>
    );
}
