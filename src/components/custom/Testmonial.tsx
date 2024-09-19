import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { generateTestimonials } from "@/utils/facker";
import { LocateIcon } from "lucide-react";
import Image from "next/image";
// import Autoplay from "embla-carousel-autoplay";
import React from "react";

const Testmonial = () => {
  const testimonial = generateTestimonials(8);
  // const plugin = React.useRef(
  //   Autoplay({ delay: 2000, stopOnInteraction: true })
  // );

  return (
    <div className="pb-2 max-w-6xl mx-auto">
      <section className="">
        <h2 className=" text-4xl font-bold tracking-tight  sm:text-3xl px-5 md:px-0 ">
          Read trusted reviews from our customers
        </h2>
        <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8 lg:py-10">
          <Carousel
          // onMouseEnter={plugin.current.stop}
          // onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="">
              {testimonial.map((item, index) => {
                return (
                  <CarouselItem key={index} className="md:basis-1/3 basis-full">
                    <blockquote
                      className="rounded-lg   border  p-6 shadow-sm sm:p-8 cursor-pointer min-h-[25vh]
                      hover:shadow-md
          hover:scale-105 transition-all duration-300"
                      key={index}
                    >
                      <div className="flex items-center gap-4">
                        <Image
                          width={20}
                          height={20}
                          alt=""
                          src={item?.avatarUrl}
                          //   src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                          className="size-14 rounded-full object-cover"
                        />

                        <div>
                          <div className="flex justify-center gap-0.5 text-green-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="size-5"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>

                          <p className="mt-0.5 text- font-medium text-gray-800 dark:text-gray-230">
                            {item?.name}
                          </p>
                          <div className="flex gap-2 items-center">
                            <LocateIcon className="w-4 h-4 text-gray-400 dark:text-gray-300" />
                            <span className="text-[12px] text-gray-700 dark:text-gray-200  min-h-4 max-h-4">
                              {item?.location.length > 26
                                ? item.location.slice(0, 26) + "..."
                                : item.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="mt-4 text-gray-600 text-sm min-h-12 max-h-12 mb-4 dark:text-gray-300">
                        {item?.testimonial.length > 120
                          ? item.testimonial.slice(0, 100) + "..."
                          : item.testimonial}
                      </p>
                      {/* <div className="  bg-red-300 "> */}
                      <span className="text-[10px] m-2 w-full  block text-right">
                        {item?.date}
                      </span>
                      {/* </div> */}
                    </blockquote>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8"></div>
        </div>
      </section>
    </div>
  );
};

export default Testmonial;
