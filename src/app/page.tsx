"use client"
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function Home() {
  const { user, status, error } = useSelector((state: RootState) => state.auth);
  console.log(user, status, error)
  return (
    <main>
      Main page
    </main>
  );
}
