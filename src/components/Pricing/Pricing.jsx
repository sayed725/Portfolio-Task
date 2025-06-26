import React from "react";
import { Button } from "@/components/ui/button";
import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  const plans = [
    {
      name: "Basic Plan",
      save: "20%",
      price: "$19.95",
      features: [
        { name: "Website Design", included: true },
        { name: "Mobile Apps Design", included: true },
        { name: "Product Design", included: true },
        { name: "Digital Marketing", included: false },
        { name: "Custom Support", included: false },
      ],
    },
    {
      name: "Standard Plan",
      save: "35%",
      price: "$39.95",
      features: [
        { name: "Website Design", included: true },
        { name: "Mobile Apps Design", included: true },
        { name: "Product Design", included: true },
        { name: "Digital Marketing", included: true },
        { name: "Custom Support", included: true },
      ],
    },
    {
      name: "Premium Plan",
      save: "45%",
      price: "$99.95",
      features: [
        { name: "Website Design", included: true },
        { name: "Mobile Apps Design", included: true },
        { name: "Product Design", included: true },
        { name: "Digital Marketing", included: true },
        { name: "Custom Support", included: true },
      ],
    },
  ];

  return (
    <div className="py-10 w-11/12 mx-auto">
      <div className="max-w-7xl mx-auto">
        <p className="text-gray-400 text-base sm:text-lg lg:text-center tracking-wider mb-4">
          Pricing Package
        </p>
        {/* title  */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wider lg:text-center  mb-4">
          Amazing <span className="text-[#c8f21d]">Pricing </span>
          For your Projects <br className="hidden lg:block" />
        </h1>
        {/* cards */}
        <div className="bg-black py-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="bg-[#1f1f1f] rounded-lg p-2 text-start"
              >

                {/* plan & prie  */}
                <div className="bg-black p-10 rounded-lg">
                  <h3 className="text-white text-2xl mb-3">{plan.name}</h3>
                  <p className="text-gray-400 mb-10">
                    Try Out Basic Plan Save <span className="text-[#c8f21d]">{plan.save}</span>
                  </p>
                  <p className="text-[#c8f21d] text-5xl mt-2">
                    {plan.price} <span className="text-gray-400 text-base">/month</span>
                  </p>
                </div>

                {/* features  */}
              <div className="p-10">
                  <p className="text-gray-500  mt-2 mb-10">
                  We deliver tailored solutions to meet your unique business needs.
                </p>
                <ul className="mt-4 space-y-8">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-start gap-3 text-white text-semibold text-sm"
                    >
                      {feature.included ? (
                        <FaCheck className="text-[#c8f21d] " />
                      ) : (
                        <FaCheck className="text-gray-400 " />
                      )}
                      {feature.name}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="secondary"
                  className="mt-10 w-2/3 bg-[#363636] lg:text-lg lg:py-6 text-white hover:bg-[#c8f21d] hover:text-black"
                >
                  Choose Package &gt;
                </Button>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
