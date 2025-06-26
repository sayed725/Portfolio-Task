import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaQuoteLeft } from "react-icons/fa";
import Autoplay from "embla-carousel-autoplay";

const Reviews = () => {

  const testimonials = [
    {
      name: "Rodolfo E. Shannon",
      title: "CEO & Founder",
      quote:
        "Their team delivered exceptional designs that perfectly aligned with our brand vision.",
      image: "/random-1.avif",
    },
    {
      name: "Maria G. Lopez",
      title: "CTO & Founder",
      quote:
        "Their team delivered exceptional designs that perfectly aligned with our brand vision.",
      image: "/randol-2.jpg",
    },
    {
      name: "James T. Carter",
      title: "CEO & Founder",
      quote:
        "Their team delivered exceptional designs that perfectly aligned with our brand vision.",
      image: "/random-1.avif",
    },
    {
      name: "Sarah K. Patel",
      title: "CTO & Founder",
      quote:
        "Their team delivered exceptional designs that perfectly aligned with our brand vision.",
      image: "/randol-2.jpg",
    },
    {
      name: "James T. Carter",
      title: "CEO & Founder",
      quote:
        "Their team delivered exceptional designs that perfectly aligned with our brand vision.",
      image: "/random-1.avif",
    },
    {
      name: "Sarah K. Patel",
      title: "CTO & Founder",
      quote:
        "Their team delivered exceptional designs that perfectly aligned with our brand vision.",
      image: "/randol-2.jpg",
    },
  ];

  return (
    <div className="w-11/12 mx-auto my-10 bg-black">
      <div className="max-w-7xl mx-auto py-20">
        {/* title  */}
        <div className="lg:text-center">
          <p className="text-gray-400 text-base sm:text-lg tracking-wider mb-4 lg:text-center">
            Clients Testimonials
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-wider text-white mb-6">
            Hear From My <span className="text-[#c8f21d]">1253+</span> Satisfied{" "}
            <span className="text-[#c8f21d]">Clients</span>
          </h1>
        </div>

        {/* sliders  */}
        <Carousel

         plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
          opts={{
            align: "start",
            slidesToScroll: 1,
            slidesToShow: 1,
          }}
          className="w-9/12 sm:w-10/12 lg:w-full py-5 mx-auto"
         
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="basis-2/2 lg:basis-1/3">
                <div className="bg-black hover:bg-[#1f1f1f] border-2 border-[#1f1f1f] rounded-lg shadow-lg text-center px-4 sm:px-6 md:px-8 py-15 md:py-20">
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-full object-cover"
                      />
                      <span className="absolute -top-2 -left-2 w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 bg-[#c8f21d] rounded-full flex items-center justify-center text-black text-xs sm:text-sm">
                        <FaQuoteLeft />
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-4">
                    {testimonial.quote}
                  </p>
                  <h3 className="text-white text-base sm:text-lg md:text-xl">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                    {testimonial.title}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-black text-white hover:bg-[#c8f21d] hover:text-black" />
          <CarouselNext className="bg-black text-white hover:bg-[#c8f21d] hover:text-black" />
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;