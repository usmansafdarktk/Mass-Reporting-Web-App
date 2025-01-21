import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, FC } from "react";

export const SmoothScrollHero: FC = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <ReactLenis
        root
        options={{
          lerp: 0.07,
          syncTouch: true,
          smoothWheel: true,
          duration: 1.2,
        }}
      >
        <Nav />
        <Hero />
        <Text />
      </ReactLenis>
    </div>
  );
};

const Nav: FC = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 text-white">
      {/* Add nav items here */}
    </nav>
  );
};

const SECTION_HEIGHT = 1500;

const Hero: FC = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImage />
      <ParallaxImages />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImage: FC = () => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  return (
    <motion.div
      className="sticky top-0 h-screen w-full"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage: `
          linear-gradient(to bottom, transparent, #1f2937), 
          url(https://images.unsplash.com/photo-1564906158598-041131af6a04?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)
        `,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    />
  );
};

interface ParallaxImgProps {
  className: string;
  alt: string;
  src: string;
  start: number;
  end: number;
}

const ParallaxImages: FC = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="https://images.unsplash.com/photo-1570304815308-1a24e22dce65?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Traffic/Road"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1513537857595-1c1653115e8b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Traffic police"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="A traffic light"
        start={200}
        end={-200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1595801185745-c35f30d63934?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="A road with cars"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

const ParallaxImg: FC<ParallaxImgProps> = ({ className, alt, src, start, end }) => {
  const ref = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      ref={ref}
      style={{ transform, opacity, willChange: "transform, opacity" }}
      loading="lazy"
    />
  );
};

const Text: FC = () => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 pt-24 pb-48"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-6 text-4xl font-black uppercase text-black dark:text-white"
      >
        Smart Traffic Violation Reporting
      </motion.h1>
      <motion.p
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75, delay: 0.25 }}
        className="text-lg text-gray-700 dark:text-gray-300 mb-8"
      >
        Leverage the power of AI and real-time image processing to report traffic violations instantly. Our secure, cloud-based platform ensures accurate evidence validation and seamless scaling, promoting safer roads for everyone.
      </motion.p>
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75, delay: 0.5 }}
      >
        <button
          className="font-bold text-white bg-[#0056D2] hover:bg-white hover:text-[#0056D2] hover:border-[#0056D2] dark:hover:border-[#e7c94d] px-4 py-2 rounded-md border-2 border-transparent"
        >
          Join Us
        </button>
      </motion.div>
    </section>
  );
};
