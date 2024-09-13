
"use client"
import { useContext } from "react";
import { Globalcontext } from "./context";



export default function Home() {
const {user}=useContext(Globalcontext)
console.log(user);

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
  <h1>Ecomers webpage</h1>
    </main>
  );
}
