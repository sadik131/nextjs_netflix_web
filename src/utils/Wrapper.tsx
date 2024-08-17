"use client"
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useDispatch } from "react-redux";
import { createUserAsync, favoritesAsync } from "@/redux/auth/authSlice";
import {CreateUserData} from "@/utils/index"
import { AppDispatch } from "@/redux/store";
import { useRouter } from "next/router";

const SessionWrapper: React.FC = () => {
    const { data: session, status } = useSession();
    const dispatch = useDispatch<AppDispatch>();

    

    useEffect(() => {
        if (status === "authenticated" && session?.user) {
            const name = session.user.name ?? "";
            const email = session.user.email ?? "";
            if (name && email) {
                const userData: CreateUserData = { name, email };
                dispatch(createUserAsync(userData));
                dispatch(favoritesAsync());
            }
        }
    }, [session, status, dispatch]);

    return null;
};

export default SessionWrapper;
