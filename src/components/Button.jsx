import clsx from "clsx";
// Create a reusable button for the website
const Button = ({ icon, children, href, containerClassName, onClick }) => {
  const Inner = () => <>Text</>;
  // Determine if the button is a link or a button
  return href ? (
    <a
      className={clsx(
        "relative, p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName,
      )}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx(
        "relative, p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName,
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};
export default Button;
