// import the JSX files here
import React from "react";
import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";

const App = () => {
  return (
    // wrap the JSX files here
    <main className="overflow-hidden">
      <Header />
      <Hero />
    </main>
  );
};
export default App;
