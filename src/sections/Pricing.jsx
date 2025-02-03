import { Element } from "react-scroll";
import { useState } from "react";
import clsx from "clsx";

const Pricing = () => {
  const [monthly, setMonthly] = useState(false);

  return (
    // Add Pricing section
    <section>
      {/* Add an Element to scroll to the Pricing section  */}
      <Element name="pricing">
        {/* Add Pricing section content  */}
        <div className="container">
          {/* Add border around the pricing section as well as adding responsive styles to all size screens*/}
          <div className="max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
            <h3 className="h3 max-lg:h4 max:md:h5 z-3 relative mx-auto mb-14 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">
              Flexible pricing for teams of all sizes
            </h3>
            {/* Add buttons styling for the prices*/}
            <div className="relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] max:md:w-[310px]">
              <button
                /*Add monthly and annual buttons*/
                className={clsx("pricing-head_btn", monthly && "text-p4")}
                onClick={() => setMonthly(true)}
              >
                Monthly
              </button>
              <button
                className={clsx("pricing-head_btn", !monthly && "text-p4")}
                onClick={() => setMonthly(false)}
              >
                Annual
              </button>
            </div>
          </div>
        </div>
      </Element>
    </section>
  );
};
export default Pricing;
