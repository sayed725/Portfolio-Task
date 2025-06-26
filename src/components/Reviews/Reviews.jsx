import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaQuoteLeft } from "react-icons/fa";

const Reviews = () => {
  const testimonials = [
    {
      name: "Rodolfo E. Shannon",
      title: "CEO & Founder",
      quote:
        "At vero eoset accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores",
      image: "/random-1.avif",
    },
    {
      name: "Rodolfo E. Shannon",
      title: "CTO & Founder",
      quote:
        "At vero eoset accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores",
      image: "/randol-2.jpg",
    },
    {
      name: "Rodolfo E. Shannon",
      title: "CEO & Founder",
      quote:
        "At vero eoset accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores",
      image: "/random-1.avif",
    },
    {
      name: "Rodolfo E. Shannon",
      title: "CTO & Founder",
      quote:
        "At vero eoset accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti dolores",
      image: "/randol-2.jpg",
    },
  ];

  return (
    <div className="w-11/12 mx-auto my-10 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 py-10">
        <div className="flex-1 flex flex-col justify-center items-center lg:items-start">
          <p className="text-gray-400 text-base sm:text-lg tracking-wider mb-4">
            Clients Testimonials
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-8">
            I’ve 1253+ Clients <span className="text-[#c8f21d]">Feedback</span>
          </h1>
          <p className="text-gray-500 text-sm sm:text-base mb-8">
            Sed ut perspiciatis unde omnin natus totam rem aperiam eaque
            inventore veritatis
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            slidesToScroll: 2,
            slidesToShow: 2,
          }}
          className="w-full lg:w-2/3 max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="basis-1/2">
                <div className="bg-gray-900 rounded-xl p-6 shadow-lg text-center">
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <span className="absolute -top-2 -left-2 w-6 h-6 bg-[#c8f21d] rounded-full flex items-center justify-center text-black text-xs">
                        <FaQuoteLeft />
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm sm:text-base mb-4">
                    {testimonial.quote}
                  </p>
                  <h3 className="text-white text-lg font-medium">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-gray-800 text-white hover:bg-gray-700" />
          <CarouselNext className="bg-gray-800 text-white hover:bg-gray-700" />
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;