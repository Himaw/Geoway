"use client";
import { HiStar } from "react-icons/hi2";
import { HiPlay, HiX } from "react-icons/hi";
import Button from "../common/Button";

import { motion } from "framer-motion";
import { fadeIn } from "@/animation/variants";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [refInfo, inViewInfo] = useInView({ triggerOnce: false });
  const [refMap, inViewMap] = useInView({ triggerOnce: false });

  return (
    <motion.div
      variants={fadeIn("up", 0)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      exit="hidden"
      className="xl:container"
    >
      <section
        ref={ref}
        id="home"
        className="container flex flex-col gap-20 py-10 md:gap-28 lg:py-20 xl:flex-row mt-24"
      >
        <div className="hero-map" />

        <div
          ref={refInfo}
          className="relative z-20 flex flex-1 flex-col xl:w-1/2"
        >
          <h1 className="bold-52 lg:bold-64 xl:whitespace-nowrap tracking-tighter">
            People Projects and Impact
          </h1>
          <p className="regular-16 mt-6 text-gray-30 xl:max-w-[32.5rem]">
            Connecting People and Projects for Sustainable Impact
          </p>

          <div className="my-11 flex flex-wrap gap-5">
            {/* <div className="flex items-center gap-2">
              {Array(5)
                .fill(1)
                .map((_, index) => (
                  <HiStar key={index} size={24} className="text-yellow-400" />
                ))}
            </div>

            <p className="bold-16 lg:bold-20 text-amber-500">
              +1k
              <span className="regular-16 lg:regular-20 text-gray-1 ml-2">
                Clients Worldwide
              </span>
            </p> */}
          </div>

          <div className="flex flex-col w-full gap-3 sm:flex-row">
            <Button
              type="button"
              title="Services"
              variant="btn_dark"
              onClick={() => {
                const servicesSection = document.getElementById("services");
                if (servicesSection) {
                  const offsetTop =
                    servicesSection.getBoundingClientRect().top +
                    window.scrollY;
                  window.scrollTo({ top: offsetTop, behavior: "smooth" });
                }
              }}
            />
            <Button
              type="button"
              title="Learn More?"
              variant="btn_white_text"
              icon_start={<HiPlay size={32} className="text-green-600" />}
              onClick={() => {
                const learnMoreSection = document.getElementById("our-mission");
                if (learnMoreSection) {
                  const offsetTop =
                    learnMoreSection.getBoundingClientRect().top +
                    window.scrollY;
                  window.scrollTo({ top: offsetTop, behavior: "smooth" });
                }
              }}
            />
          </div>
        </div>

        {/* <div ref={refMap} className="relative flex flex-1 items-start">
          <div className="relative z-20 flex w-[16.75rem] flex-col gap-8 rounded-3xl bg-gray-1 px-7 py-8 mt-5">
            <div className="flex flex-col">
              <div className="flexBetween">
                <p className="regular-16 text-gray-20">Stat 1</p>
                <HiX size={20} className="text-white" />
              </div>
              <p className="bold-20 text-white">Trilha Inca</p>
            </div>

            <div className="flexBetween">
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">Stat 2</p>
                <p className="bold-20 text-white">52.44 </p>
              </div>

              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">Stat 3</p>
                <p className="bold-20 text-white">2.043 </p>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </motion.div>
  );
};

export default Hero;
