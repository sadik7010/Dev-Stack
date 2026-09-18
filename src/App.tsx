// import Footer from "./Footer";
// import Hero from "./Hero";
// import Navbar from "./Navbar";

import { Suspense } from "react";
import SideBar from "./SideBar";
import TecList from "./TecList";

const fetchTecnology = async (): Promise<Itecnologis[]> => {
  const res = await fetch("/public/data.json");
  const data = await res.json();
  return data;
};

const App = () => {
  const tecPromise = fetchTecnology();
  return (
    <>
      {/* <Navbar />
      <Hero />
      
      
      <Footer/> */}
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
          <div className="grid grid-cols-4 gap-4">
            {/* TecList Component */}
            <Suspense fallback={<div>Loading....</div>}>
              <TecList tecPromise={tecPromise} />
            </Suspense>
            {/* Sidebar Component */}
            <SideBar />
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
