"use client"
import AdminLayout from '@/app/components/admin/AdminLayout'
import MoviesModal from '@/app/components/admin/MoviesModal';
import { deleteAsync, fetchMovieAsync } from '@/redux/movie/moviesSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { Movie } from '@/utils';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export default function page() {
  const dispatch = useDispatch<AppDispatch>()
  const { status, movies } = useSelector((state: RootState) => state.movie)

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);

  useEffect(() => {
    dispatch(fetchMovieAsync())
  }, [])

  const handleEdit = (movie: Movie) => {
    setCurrentMovie(movie);
    setIsEditModalOpen(true);
  };

  const handleSave = (updatedMovie: Movie) => {
    setIsEditModalOpen(false);
  };


  const handleDelete = async (id: string) => {
    await dispatch(deleteAsync({ id }))
  };
  
  return (
    <AdminLayout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Manage Movies/Shows</h1>
        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="bg-green-500 text-white px-4 py-2 mb-4"
        >
          Create New Movie/Show
        </button>
        {status === "loading" ? <h1>loading...</h1> :
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">ID</th>
                  <th className="py-2 px-4 border-b">Title</th>
                  <th className="py-2 px-4 border-b">Description</th>
                  <th className="py-2 px-4 border-b">Genre</th>
                  <th className="py-2 px-4 border-b">Release Date</th>
                  <th className="py-2 px-4 border-b">Featured</th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie) => (
                  <tr key={movie.id}>
                    <td className="py-2 px-4 border-b">{movie.id}</td>
                    <td className="py-2 px-4 border-b">{movie.title}</td>
                    <td className="py-2 px-4 border-b line-clamp-2">{movie.description}</td>
                    <td className="py-2 px-4 border-b">{movie.genre}</td>
                    <td className="py-2 px-4 border-b">{movie.release}</td>

                    <td className="py-2 px-4 border-b">
                      <button
                        onClick={() => handleEdit(movie)}
                        className="bg-blue-500 text-white px-2 py-1 mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(movie.id!)}
                        className="bg-red-500 text-white px-2 py-1"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        }
      </div>
      {isEditModalOpen && currentMovie && (
        <MoviesModal
          movie={currentMovie}
          onSave={handleSave}
          onClose={() => setIsEditModalOpen(false)}
        />
      )}

      {/* create a movie */}
      {isCreateModalOpen && (
        <MoviesModal
          onClose={() => setIsCreateModalOpen(false)}
        />
      )}
    </AdminLayout>
  )
}
