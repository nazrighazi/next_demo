import { useState, useRef, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import Lottie from "lottie-web";
import { Lato, Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const SliderMain = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  const slide1 = useRef<any>(null);

  useEffect(() => {
    const animate = Lottie.loadAnimation({
      container: document.querySelector("#slide1")!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../public/animation/man-with-phone.json"),
    });

    const animate2 = Lottie.loadAnimation({
      container: document.querySelector("#slide2")!,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../public/animation/man-choose.json"),
    });

    return () => {
      animate.destroy();
      animate2.destroy();
    };
  }, []);

  const nextSlide = () => {
    if (instanceRef.current) {
      console.log("curr ", currentSlide);
      if (
        instanceRef?.current?.track?.details?.slides?.length - 1 >
        currentSlide
      ) {
        const newSlide = currentSlide + 1;
        console.log(
          instanceRef?.current?.track?.details?.slides?.length,
          " ",
          currentSlide
        );
        setCurrentSlide((prev) => prev + 1);
        instanceRef.current?.moveToIdx(newSlide);
      } else if (
        instanceRef?.current?.track?.details?.slides?.length - 1 >
        currentSlide
      ) {
      }
    }
  };

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <div className="h-[70vh] lg:h-[90vh] flex flex-col lg:flex-row justify-end lg:justify-start lg:items-center">
              <div className="image lg:w-[700px]" id="slide1"></div>
              <div className="desc lg:flex lg:flex-col lg:justify-center">
                <div
                  className={`${montserrat.className} font-semibold text-xl text-[#2256be]`}
                >
                  Get Device Price{" "}
                  <div className="font-bold text-yellow-500 text-4xl">
                    Interactively
                  </div>
                </div>
                <div className="pt-4 text-start">
                  With PRYCE, customers are able to check the prices and the
                  plans that are available based on the devices.
                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide2">
            <div className="h-[70vh] lg:h-[90vh] flex flex-col lg:flex-row justify-end lg:justify-start lg:items-center">
              <div className="image lg:w-[700px]" id="slide2"></div>
              <div className="desc lg:flex lg:flex-col lg:justify-center">
                <div
                  className={`${montserrat.className} font-semibold text-xl text-[#2256be]`}
                >
                  Highly{" "}
                  <div className="font-bold text-yellow-500 text-4xl">
                    Customizable
                  </div>
                </div>
                <div className="pt-4 te">
                  PRYCE comes with two themes. Dealers are able to choose either
                  Bluecube or Digi theme based on their preference.
                </div>
              </div>
            </div>
          </div>
        </div>
        {loaded && instanceRef.current && (
          <div className="dots">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              );
            })}
          </div>
        )}
      </div>
      <button
        className={` ${lato.className} py-2 px-5 absolute right-6 bottom-20 bg-[#2256be] text-white rounded-full`}
        onClick={() => nextSlide()}
      >
        {instanceRef?.current &&
        instanceRef?.current?.track?.details?.slides?.length - 1 !==
          currentSlide
          ? "Next"
          : "Get Started"}
      </button>
    </>
  );
};

export default SliderMain;
