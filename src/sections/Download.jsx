import { Element } from "react-scroll";
import { links } from "../constants/index.jsx";
// Add Download section
const Download = () => {
  return (
    <section>
      <Element
        name="download"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        {/* Add Download section container*/}
        <div className="container">
          {/*  Position the download section*/}
          <div className="flex items-center">
            {/* Make section responsive on different screen sizes*/}
            <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex-256 max-md:flex-100">
              {/*  Wrap the image */}
              <div className="mb-10">
                {/* Add the image  */}
                <img
                  src="/images/xora.svg"
                  width={160}
                  height={55}
                  alt="xora"
                />
              </div>
              <p className="body-1 mb-19 max-w-md">
                Try it now for free on iOS, Android, PC, any Web browser. We got
                you covered
              </p>
              <ul className="flex flex-wrap items-center gap-6">
                {links.map(({ id, url, icon }) => (
                  <li
                    key={id}
                    className="download_tech-link download_tech-link_last-before download_tech-link_last-after"
                  >
                    {url}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};
export default Download;
