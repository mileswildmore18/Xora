import { Link as LinkScroll } from "react-scroll";
import { useEffect, useState } from "react";
import clsx from "clsx";
const NavLink = ({ title }) => (
  <LinkScroll className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5">
    {title}
  </LinkScroll>
);
const Header = () => {
  // Check is user scrolled through the website
  const [hasScrolled, setHasScrolled] = useState(false);

  // Update the scroll event on every render
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 32);
    };
    // Add scroll event listener if user scrolled
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Remove scroll event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Make button responsive on click
  const [isOpen, setIsOpen] = useState(false);
  return (
    // Add header on top of all the content and make it reusable on different size devices
    <header
      /* Add scroll effect from useEffect is user scrolled down from the top*/
      className={clsx(
        "fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4",
        hasScrolled && "py-2 bg-black-100 backdrop-blur-[8px]",
      )}
    >
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img src="/images/xora.svg" width={115} height={55} alt="logo" />
        </a>

        {/* Add Navigation and make it responsive on different screen sizes */}
        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none",
          )}
        >
          {/* Add Navigation and make it responsive on mobile devices */}
          <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="features" />
                  <div className="dot" />
                  <NavLink title="pricing" />
                </li>

                <li className="nav-logo">
                  {/* Add logo scroll effect to scroll to a section the user wants to go to*/}
                  <LinkScroll
                    to="hero"
                    offset={-100}
                    /*highlight active link*/
                    spy
                    /*add smooth scroll*/
                    smooth
                    /*Make logo hidden on mobile view nav options*/
                    className={clsx(
                      "max-lg:hidden transition-transform duration-500 cursor-pointer",
                    )}
                  >
                    <img
                      src="/images/xora.svg"
                      width={160}
                      height={55}
                      alt="logo"
                    />
                  </LinkScroll>
                </li>

                <li className="nav-li">
                  <NavLink title="faq" />
                  <div className="dot" />
                  <NavLink title="download" />
                </li>
              </ul>
            </nav>
            {/* Add outline as well as pictures filling the background with the nav bar on mobile view */}
            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 mix-blend-soft-light opacity-5"
              />
            </div>
          </div>
        </div>

        {/* View Hamburger icon for mobile view and hidden on desktop */}
        <button
          /* Make button respond to click */
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          {/* Add Hamburger icon */}
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt="magic"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};
export default Header;
