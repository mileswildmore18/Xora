import { Element } from "react-scroll";
const Hero = () => {
  return (
    // Add Hero section that appears below the Nav Bar
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 border-2 border-amber-400">
      {/* Add an Element to scroll to the Hero section*/}
      <Element name="hero">
        {/* Add Hero section content*/}
        <div className="container">
          {/* Make section responsive on different screen sizes */}
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              Video Editing
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Amazingly Simple
            </h1>
          </div>
        </div>
      </Element>
    </section>
  );
};
export default Hero;
