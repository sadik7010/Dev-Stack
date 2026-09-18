import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";

import { Suspense, useState } from "react";
import SideBar from "./SideBar";
import TecList from "./TecList";
import type { Itecnologis } from "./types";

const fetchTecnology = async (): Promise<Itecnologis[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};
const tecPromise = fetchTecnology();

const App = () => {
 const [selectToStack,setSelectToStack]=useState<Itecnologis[]>([])

  return (
    <>
      <Navbar />
     
       <Hero />
      
      
      <main>
        <section className="container mx-auto my-5">
          <div className="my-5">
            <h1 className="font-bold text-3xl">
              Explore the{" "}
              <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
                Technologies
              </span>
            </h1>

            <p className="text-[#64748B]">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4 items-start">
            {/* TecList Component */}
           <div className="col-span-3">
             <Suspense fallback={<div className="flex min-h-screen items-center justify-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>}>
              <TecList tecPromise={tecPromise} selectToStack={selectToStack}  setSelectToStack={setSelectToStack}  />
            {/* Sidebar Component */}
            </Suspense>
           </div>
            <div className="col-span-1"><SideBar selectToStack={selectToStack}  setSelectToStack={setSelectToStack} /></div>
          </div>
        </section>
      </main>

      <Footer/>
    </>
  );
};

export default App;
