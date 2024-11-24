import React, { useState } from "react";
import "./Carousel.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const previousSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <>
      <div className="slider">
        <div className="carousel">
          <BsArrowLeftCircleFill
            className="arrow arrow-left"
            onClick={previousSlide}
          />
          {data.map((item, idx) => {
            return (
              <>
              
              
                <img
                  src={item.src}
                  alt={item.alt}
                  key={idx}
                  className={slide === idx ? "slide" : "slide slide-hidden"}
                />
                <div
                  className={slide === idx ? "name" : "name name-hidden"}
                  key={idx}
                >
                  {item.name}
                  <div className="description">
                    {item.description}...This is an Exiting Product....
                  </div>
                  <div className="rating">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="size-5"
                    >
                      {" "}
                      <path
                        fillRule="evenodd"
                        d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                        clipRule="evenodd"
                      />{" "}
                    </svg>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="size-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                        clipRule="evenodd"
                      />{" "}
                    </svg>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="size-5"
                    >
                      {" "}
                      <path
                        fillRule="evenodd"
                        d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                        clipRule="evenodd"
                      />{" "}
                    </svg>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="size-5"
                    >
                      {" "}
                      <path
                        fillRule="evenodd"
                        d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                        clipRule="evenodd"
                      />{" "}
                    </svg>{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                      />{" "}
                    </svg>{" "}
                  </div>
                  <div className="flex gap-6 pt-3">
                    <Link
                      to="/Register"
                      className="text-white w-99  bg-orange-600 transition duration-500 hover:-translate-y-1 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-8 py-2 lg:py-2.5 mr-2 focus:outline-none"
                    >
                      Buy Now
                    </Link>
                    <div className="text-sm  text-white bg-slate-500 h-7 w-20 rounded-xl px-3 py-1 mt-2">
                      {item.price}
                    </div>
                  </div>

                  <Link
                    to="/shop"
                    className="text-white w-99   bg-orange-400 hover:bg-slate-500 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-8 py-2 lg:py-2.5 mr-2 focus:outline-none"
                  >
                    Checkout New Products
                  </Link>
                </div>
              </>
            );
          })}
          <BsArrowRightCircleFill
            className="arrow arrow-right"
            onClick={nextSlide}
          />
          <span className="indicators">
            {data.map((_, idx) => {
              return (
                <button
                  key={idx}
                  className={
                    slide === idx ? "indicator" : "indicator indicator-inactive"
                  }
                  onClick={() => setSlide(idx)}
                ></button>
              );
            })}
          </span>
        </div>
      </div>



    </>
  );
};

export default Carousel;
