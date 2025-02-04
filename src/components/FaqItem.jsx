import clsx from "clsx";
import { useState } from "react";

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
        {/* Add icon for faq  */}
        <div
          /*  Add effect for icon when user hovers over it */
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
    </div>
  );
};
export default FaqItem;
