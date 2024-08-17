"use client"
import { createMovieAsync, updateMovieAsync } from "@/redux/movie/moviesSlice";
import { AppDispatch } from "@/redux/store";
import { CreateMovie, EditMovieModalProps } from "@/utils";
import { useState } from "react";
import { useDispatch } from "react-redux";


const MoviesModal: React.FC<EditMovieModalProps> = ({ movie, onClose }) => {
    const [title, setTitle] = useState(movie?.title || "");
    const [age, setAge] = useState<number | string>(movie?.age ? movie?.age.toString() : "");
    const [duration, setDuration] = useState<number | string>(movie?.duration ? movie?.duration.toString() : "");
    const [movieUrl, setMovieUrl] = useState(movie?.movieUrl || "");
    const [description, setDescription] = useState(movie?.description || "");
    const [genre, setGenre] = useState(movie?.genre || "");
    const [release, setRelease] = useState(movie?.release || "");
    const [thumbnail, setThumbnail] = useState(movie?.thumbnail || "");
    const dispatch = useDispatch<AppDispatch>()


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const newMovie: CreateMovie = {
            title,
            movieUrl,
            description,
            genre,
            thumbnail,
            release,
            age,
            duration
        };
        try {
            if (movie) {
                return await dispatch(updateMovieAsync({ id: movie.id, update: newMovie }))
            }
            await dispatch(createMovieAsync(newMovie))
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="fixed w-full inset-0 bg-black bg-opacity-50 flex justify-center items-center">/
            <form onSubmit={(e) => handleSubmit(e)} className="bg-white p-4 rounded w-1/2">
                <h2 className="text-xl font-bold mb-4">{movie ? "Edit Movie/Show" : "Create Movie/Show"}</h2>
                <div className="mb-2">
                    <label className="block text-sm">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border px-2 py-1"
                    />
                </div>
                <div className="mb-2">
                    <label className="block text-sm">Thumbnail</label>
                    <input
                        type="text"
                        value={thumbnail}
                        onChange={(e) => setThumbnail(e.target.value)}
                        className="w-full border px-2 py-1"
                    />
                </div>
                <div className="mb-2">
                    <label className="block text-sm">Movie Link</label>
                    <input
                        type="text"
                        value={movieUrl}
                        onChange={(e) => setMovieUrl(e.target.value)}
                        className="w-full border px-2 py-1"
                    />
                </div>
                <div className="mb-2">
                    <label className="block text-sm">Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full border px-2 py-1"
                    />
                </div>
                <div className="mb-2">
                    <label className="block text-sm">Genre</label>
                    <input
                        type="text"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        className="w-full border px-2 py-1"
                    />
                </div>
                <div className="mb-2">
                    <label className="block text-sm">Release Date</label>
                    <input
                        type="date"
                        value={release}
                        onChange={(e) => setRelease(e.target.value)}
                        className="w-full border px-2 py-1"
                    />
                </div>
                <div className="mb-2">
                    <label className="block text-sm">Age</label>
                    <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(Number(e.target.value))}
                        className="w-full border px-2 py-1"
                    />
                </div>
                <div className="mb-2">
                    <label className="block text-sm">Duration</label>
                    <input
                        type="number"
                        value={duration}
                        onChange={(e) => setDuration(Number(e.target.value))}
                        className="w-full border px-2 py-1"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 mr-2"
                >
                    Save
                </button>
                <button
                    onClick={onClose}
                    className="bg-gray-500 text-white px-4 py-2"
                >
                    Cancel
                </button>
            </form>
        </div>
    );
};

export default MoviesModal