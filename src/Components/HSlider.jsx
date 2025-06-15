import React from "react";
import { useKeenSlider, animation } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { big, small } from "motion/react-client";

const HSlider = () => {
  const animation = { duration: 10000, easing: (t) => t };

  const [sliderRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 4,
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
        className="keen-slider p-0 m-0 mt-[60px] pb-[60px] !w-full "
      >
        <div className="keen-slider__slide number-slide1 ">
          <img src="/logo.png" alt="" className=" w-[400px]  " />
        </div>
        <div className="keen-slider__slide number-slide2">2</div>
        <div className="keen-slider__slide number-slide3">3</div>
        <div className="keen-slider__slide number-slide4">4</div>
        <div className="keen-slider__slide number-slide5">5</div>
        <div className="keen-slider__slide number-slide6">6</div>
      </div>
    </>
  );
};

export default HSlider;
