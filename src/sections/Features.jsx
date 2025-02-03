import { Element } from "react-scroll";
import { details, features } from "../constants/index.jsx";
import Button from "../components/Button.jsx";

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
                {/* Add the caption  */}
                <p className="caption mb-5 max-md:mb-6">{caption}</p>
                {/* Add the title  */}
                <h2 className="max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-md:h5">
                  {title}
                </h2>
                {/* Add the text  */}
                <p className="mb-11 body-1 max-md:mb-8 max-md:body-3">{text}</p>
                {/* Add the reusable button */}
                <Button icon={button.icon}>{button.title}</Button>
              </div>
            ))}

            {/* Add detailed features of the XORA AI Video Editor*/}
            <ul className="relative flex justify-around flex-grow px-[5%] border-2 border-s3 rounded-7xl max-md:hidden">
              <div className="absolute bg-s3/20 top-[38%] left-0 right-0 w-full h-[1px] z-10" />
              {details.map(({ id, icon, title }) => (
                <li key={id} className="relative pt-16 px-4 pb-14">
                  {/*Add vertical lines separating each detailed feature*/}
                  <div className="absolute top-0 bottom-0 left-1/2 bg-s3/20 w-[1px] h-full z-10" />
                  {/*Add a circle icon around each detailed feature icon with a hover effect*/}
                  <div className="flex items-center justify-center mx-auto mb-3 border-2 border-s2 rounded-full hover:border-s4 transition-all duration-500 shadow-500 size-20">
                    {/*Add the icons*/}
                    <img
                      src={icon}
                      alt={title}
                      className="size-17/20 object-contain z-20"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Element>
    </section>
  );
};
export default Features;
