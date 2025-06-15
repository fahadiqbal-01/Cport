import React from "react";
import { useKeenSlider, animation } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { big, small } from "motion/react-client";

const HSlider = () => {
  const animation = { duration: 15000, easing: (t) => 2 - t };

  const [sliderRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 4,
      spacing: 0,
    },
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });

  return (
    <>
      <div
        ref={sliderRef}
        style={{
          width: `${small ? 80 : 100}%`,
        }}
        className="keen-slider mt-[60px] mb-[60px] !w-full "
      >
        <div className="keen-slider__slide number-slide1  ">
          <img src="/logo.png" alt="" className=" w-[400px] rounded-2xl " />
        </div>
        <div className="keen-slider__slide number-slide2 ">
          <img src="/redhood.png" alt="" className=" w-[400px] rounded-2xl " />
        </div>
        <div className="keen-slider__slide number-slide3">
          <img src="/painteye.png" alt="" className=" w-[400px] rounded-2xl " />
        </div>
        <div className="keen-slider__slide number-slide4">
          <img src="/Maverick.png" alt="" className=" w-[400px] rounded-2xl " />
        </div>
        <div className="keen-slider__slide number-slide5">
          <img
            src="/vintagecar.png"
            alt=""
            className=" w-[400px] rounded-2xl "
          />
        </div>
        <div className="keen-slider__slide number-slide5">
          <img src="/porsche.png" alt="" className=" w-[400px] rounded-2xl " />
        </div>
      </div>
    </>
  );
};

export default HSlider;
