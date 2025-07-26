import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
      <div className="hero-root">
        <div className="badge">
          Thinking about incorporating?
          <FaArrowRight className="arrow" />
        </div>
        <h1 className="hero-title">Magically simplify accounting and taxes</h1>
        <p className="hero-description">
          Automated bookkeeping, effortless tax filing, real-time insights. Set
          up in 10 mins. Back to building by 10:47pm.
        </p>
        <div className="hero-cta">
          <button className="nav-button">Start free trial</button>
          <button className="hero-btn">
            Pricing <FaArrowRight className="arrow" />
          </button>
        </div>
          <p className="hero-shortline">
            Currently for US-based Delaware C-Corps.
          </p>
      </div>
    </>
  );
};

export default Hero;
