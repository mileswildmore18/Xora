import clsx from "clsx";
import { useState } from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

const FaqItem = ({ item, index }) => {
  const [activeId, setActiveId] = useState(null);
  const active = activeId === item.id;
  return (
    //  Add items of FAQ
    <div className="relative z-2 mb-16">
      <div
        className="group relative flex cursor-pointer items-center justify-between gap-10 px-7"
        /* Add click event for question*/
        onClick={() => {
          // Toggle active state of question
          setActiveId(activeId === item.id ? null : item.id);
        }}
      >
        <div className="flex-1">
          {/*  Hide the numbers and replace with question */}
          <div className="small-compact mb-1.5 text-p3 max-lg:hidden">
            {/* Add question and answer   */}
            {index < 10 ? "0" : ""}
            {index}
          </div>
          {/* Add question and check if it is active  */}
          <div
            className={clsx(
              "h6 text-p4 transition-colors duration-500 max-md:min-h-20 max-md:items-center",
              active && "max-lg:text-p1",
            )}
          >
            {item.question}
          </div>
        </div>
        {/* Add reusable button for faq  */}
        <div
          /*  Add effect for button when user hovers over it */
          className={clsx(
            "faq-icon relative flex size-12 items-center justify-center rounded-full border-2 border-s2 shadow-400 transition-all duration-500 group-hover:border-s4",
            // Check if question is active and add effect of plus to minus
            active && "before:bg-p1 after:rotate-0 after:bg-p1",
          )}
        >
          {/* Add icon */}
          <div className="g4 size-11/12 rounded-full shadow-300" />
        </div>
      </div>
      {/* Add answer only if current question is active  */}
      <SlideDown>
        {activeId === item.id && (
          <div className="body-3 px-7 py-3.5">{item.answer}</div>
        )}
      </SlideDown>
      <div
        /* Check if question is active or not */
        className={clsx(
          "g5 -bottom-7 top-7 left-0 right-0 -z-1 rounded-3xl opacity-0 transition-opacity duration-500 absolute",
          active && "opacity-100",
        )}
      >
        {/*  Add borders for faq questions*/}
        <div className="g4 absolute inset-0.5 -z-1 rounded-3xl" />
        {/* Add line for any question currently open  */}
        <div className="absolute left-8 top-0 h-0.5 w-40 bg-p1" />
      </div>
    </div>
  );
};
export default FaqItem;
