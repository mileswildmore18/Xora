import { Element } from "react-scroll";
import { features } from "../constants/index.js";

const Features = () => {
  return (
    <section>
      <Element name="features">
        <div className="container">
          {/* Make features responsive on different screen sizes*/}
          <div className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3">
            {/* Add features from the index.js file  */}
            {features.map(({ id, icon, caption, title, text, button }) => (
              <div
                key={id}
                className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320"
              >
                <div className="w-full flex justify-start items-start">
                  {/*  Make the lines connect to the icons*/}
                  <div className="-ml-3 mb-12 flex items-center justify-center flex-col">
                    {/* Add lines going towards the icons*/}
                    <div className="w-0.5 h-16 bg-s3" />
                    <img
                      src={icon}
                      className="size-28 object-contain"
                      alt={title}
                    />
                  </div>
                </div>
                <p className="caption mb-5 max-md:mb-6 max-md:h5">{caption}</p>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </section>
  );
};
export default Features;
