// import the JSX files here
import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";

const App = () => {
  return (
    // wrap the JSX files here
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
    </main>
  );
};
export default App;
