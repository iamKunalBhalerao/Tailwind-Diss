import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./components/COntainer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <div className="flex flex-col items-center h-screen relative [background:radial-gradient(125%_100%_at_50%_0%,_#FFF_6.32%,_#E0F0FF_29.28%,_#E7EFFD_68.68%,_#FFF_100%)]">
                <div className="max-w-5xl mx-auto absolute inset-0 h-full w-full">
                <div className="pointer-events-none z-0 absolute inset-y-0 left-0 h-full w-px bg-gradient-to-b from-neutral-200 to-transparent" />
                <div className="pointer-events-none z-0 absolute inset-y-0 right-0 h-full w-px bg-gradient-to-b from-neutral-200 to-transparent" />
                </div>
                <Container className="w-full max-w-5xl mx-auto px-4 md:py-4 relative z-10">
                  <Navbar />
                  <Hero />
                </Container>
                <div className="relative w-full flex flex-col items-center">
                  <div className="h-px w-full absolute inset-x-0 bg-gradient-to-r from-neutral-300/50 via-neutral-200 to-transparent pointer-events-none z-0" />
                  <img src="public\assets\banner.webp" alt="dashboard" className="rounded-xl shadow-2xl mt-4 mask-b-from-0 to-100%" width={1000} height={1000} />
                </div>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
