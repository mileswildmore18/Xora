import clsx from "clsx";
import Marker from "./Marker.jsx";
// Create a reusable button for the website
const Button = ({
  icon,
  children,
  href,
  containerClassName,
  onClick,
  markerFill,
}) => {
  const Inner = () => (
    <>
      {/* Add content to the button  */}
      <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        {/* Add a marker to the button  */}
        <span className="absolute -left-[1px]">
          <Marker markerFill={markerFill} />
        </span>
        {/* Add an icon to the button  */}
        {icon && (
          <img
            src={icon}
            alt="circle"
            className="size-10 mr-5 object-contain z-10"
          />
        )}
        {/* Add the child to the button*/}
        <span className="relative z-2 font-poppins base-bold text-p1 uppercase">
          {children}
        </span>
      </span>
    </>
  );
  // Determine if the button is a link or a button
  return href ? (
    <a
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName,
      )}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName,
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};
export default Button;
