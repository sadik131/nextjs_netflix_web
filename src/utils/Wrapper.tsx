"use client"
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { createUserAsync, favoritesAsync } from "@/redux/auth/authSlice";
import { CreateUserData } from "@/utils/index"
import { AppDispatch, RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { calcSessionAsync, createSessionAsync } from "@/redux/session/sessionSlice";

const SessionWrapper = ({ children }: { children: React.ReactNode }) => {
    const { data: session, status } = useSession();
    const user = useSelector((state: RootState) => state.auth.currentUser)
    const startTime = useSelector((state: RootState) => state.session.sessionStartTime)
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter()

    useEffect(() => {
        if (status === "loading") return;

        if (!session?.user) {
            router.replace("/pages/auth");
        }
    }, [session, status, router]);

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

        const handleBeforeUnload = async () => {
            if (session?.user) {
                if (startTime) {
                    dispatch(calcSessionAsync({ userId: user?.id!, endTime: Date.now() }));
                }
            }
        };

        window.addEventListener("beforeunload", handleBeforeUnload);
    }, [session, status, dispatch]);

    useEffect(() => {
        if (user?.id) dispatch(createSessionAsync({ userId: user?.id!, startTime: Date.now() }));
    }, [user?.id])

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    return children
};

export default SessionWrapper;
