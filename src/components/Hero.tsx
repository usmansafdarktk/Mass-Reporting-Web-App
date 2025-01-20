import { SmoothScrollHero } from "./SmoothScrollHero";
import { FlipWords } from "./FlipWords";

function Hero() {
  const words = ["safer", "smarter", "efficient", "secure"];

  return (
    <>
      <div className="pt-36 flex justify-center items-center px-4 bg-white">
        <div className="max-sm:text-4xl text-6xl mx-auto font text-black text-center">
          Make roads
          <FlipWords words={words} /> <br />
          with <span className="font-semibold">Mass Reporting System</span>
        </div>
      </div>

      <SmoothScrollHero />
    </>
  );
}

export default Hero;
