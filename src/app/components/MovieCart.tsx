"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BiHeart, BiPlayCircle, BiTrash } from "react-icons/bi";
import { FavoritesProps } from "@/utils";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { ToggleFavoriteAsync } from "@/redux/auth/authSlice";



export const MovieCart: React.FC<FavoritesProps> = ({ id, isFev, description, remove, thumbnail, title, movieUrl, release }) => {
    
    const [isOpen, setOpen] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>()
    const date = new Date(release)

    return (
        <>
            <div className="relative group">
                <div className="w-[300px] h-[150px] relative overflow-hidden rounded-md">
                    <Image
                        src={thumbnail}
                        alt={title}
                        fill
                        className="rounded-md object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3">
                    {remove && <div className="flex justify-end">
                        <button onClick={() => remove(id)}>
                            <BiTrash className="w-5 h-5 text-white" />
                        </button>
                    </div>}
                    <div className="flex justify-between items-center">
                        <button onClick={() => dispatch(ToggleFavoriteAsync({ id }))}>
                            <BiHeart
                                className={`w-6 h-6 ${isFev ? "text-red-500" : "text-white"}`}
                            />
                        </button>
                        <button>
                            <BiPlayCircle className="w-10 h-10 text-white" />
                        </button>
                    </div>
                </div>
                <div className="mt-3 text-white">
                    <h2 className="font-semibold text-lg line-clamp-1">{title}</h2>
                    <div className="flex gap-x-2 text-sm">
                        <span>{date.getFullYear()}</span>
                        {/* <span>{age}+</span>
                        <span>{time}h</span> */}
                    </div>
                    <p className="text-sm text-gray-400 line-clamp-1">{description}</p>
                </div>
            </div>
        </>
    );
}

export default MovieCart;
