"use client"
import { resetFilters, setGenre, setSearchQuery } from '@/redux/filter/filterSlice';
import { AppDispatch, RootState } from '@/redux/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const FilterComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchQuery = useSelector((state:RootState)=>state.filter.searchQuery);
  const searchGenre = useSelector((state:RootState)=>state.filter.genre);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setGenre(e.target.value));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  return (
    <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-md ">
      <div className="flex flex-col gap-2">
        <label className="text-gray-700 font-semibold">Search</label>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
          className="p-2 border border-gray-300 text-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="text-gray-700 font-semibold">Genre</label>
        <select
          value={searchGenre}
          onChange={handleGenreChange}
          className="p-2 border border-gray-300 text-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Genres</option>
          <option value="action">Action</option>
          <option value="cartoon">Cartoon</option>
          <option value="drama">Drama</option>
        </select>
      </div>
      <button
        onClick={handleResetFilters}
        className="py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-200"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterComponent;
