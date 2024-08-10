"use client"

import { int } from "@/redux/counter/counterSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const counter = useSelector((state: RootState) => state.counter)
  const dispatch = useDispatch()
  return (
    <main>
      <h1>main page</h1>
      <p>{counter.value}</p>
      <button onClick={()=>dispatch(int())}>+</button>
    </main>
  );
}
