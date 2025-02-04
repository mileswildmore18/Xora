import { Element } from "react-scroll";
import { links, logos } from "../constants/index.jsx";
import Marker from "../components/Marker.jsx";
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
              <p className="body-1 mb-10 max-w-md">
                Try it now for free on iOS, Android, PC, any Web browser. We got
                you covered
              </p>
              {/* Add the download links for each platform */}
              <ul className="flex flex-wrap items-center gap-6">
                {links.map(({ id, url, icon }) => (
                  <li
                    key={id}
                    className="download_tech-link download_tech-link_last-before download_tech-link_last-after"
                  >
                    {/* Add the download links  */}
                    <a
                      href={url}
                      /* Add the border around the download icons */
                      className="size-22 download_tech-icon_before relative flex items-center justify-center rounded-half border-2 border-s3 b-s1 transition-borderColor duration-500"
                    >
                      <span className="absolute -top-2 rotate-90">
                        {/*  Add a marker  */}
                        <Marker />
                      </span>
                      {/*  Add a background image that will appear behind the logo */}
                      <img
                        src={"/images/lines.svg"}
                        alt="lines"
                        className="absolute size-13/20 object-contain"
                      />
                      {/* Add the icon logos for each platform  */}
                      <span className="download_tech-icon">{icon}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Add a download screen on desktop view*/}
            <div className="mb-10 max-md:hidden">
              {/* Add the download screen border */}
              <div className="download_preview-before download_preview-after rounded-40 relative w-[955px] border-2 border-s5 p-6">
                {/* Add the download screen inner border*/}
                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                  {/* Add the dots */}
                  <span className="download_preview-dot left-6 bg-p2" />
                  <span className="download_preview-dot left-11 bg-s3" />
                  <span className="download_preview-dot left-16 bg-p1/15" />
                  {/* Add the download screen */}
                  <img
                    src="/images/screen.jpg"
                    width={855}
                    height={655}
                    alt="screen"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Add the logos of different company platforms*/}
          <ul className="mt-24 flex justify-center max-lg:hidden">
            {/* Add the information of the companys from the index.jsx file*/}
            {logos.map(({ id, url, width, height, title }) => (
              <li key={id} className="mx-10">
                <img src={url} width={width} height={height} alt={title} />
              </li>
            ))}
          </ul>
        </div>
      </Element>
    </section>
  );
};
export default Download;
