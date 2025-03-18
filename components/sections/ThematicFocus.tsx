"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/animation/variants";
import { useInView } from "react-intersection-observer";

import { GiGreenPower } from "react-icons/gi";
import { MdEnergySavingsLeaf } from "react-icons/md";
import { FaMoneyBillTransfer, FaRecycle } from "react-icons/fa6";
import { PiLightbulbFilamentBold } from "react-icons/pi";
import { SiCodeclimate } from "react-icons/si";
import { TbSocial } from "react-icons/tb";

const ThematicFocus = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [refImage, inViewImage] = useInView({ triggerOnce: false });

  return (
    <motion.div
      variants={fadeIn("left", 0)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      exit="hidden"
    >
      <section
        ref={ref}
        id="thematic-focus"
        className="flexCenter flex-col mt-16"
      >
        <div className=" padding-container container w-full ">
          {/* <p className="uppercase regular-18 mb-3 text-green-50">
            We provide various services
          </p> */}

          <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
            <h2 className="bold-40 lg:bold-64 xl:max-w-[500px]">
              Thematic Focus
            </h2>
          </div>
        </div>

        <motion.div
          variants={fadeIn("up", 0)}
          initial="hidden"
          animate={inViewImage ? "show" : "hidden"}
          exit="hidden"
        >
          <div
            ref={refImage}
            className="flexCenter md:container relative w-full"
          >
            <div id="features" className="mx-auto max-w-7xl">
              <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
                <li className="rounded-xl outline-2 px-6 py-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)]">
                  <FaRecycle className="mx-auto h-16 w-16 text-green-50" />

                  <h3 className="my-3 font-display font-medium">
                    Waste & Resource Management
                  </h3>
                </li>
                <li className="rounded-xl bg-white px-6 py-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)]">
                  <FaMoneyBillTransfer className="mx-auto h-16 w-16 text-green-50" />

                  <h3 className="my-3 font-display font-medium">
                    Circular Economy
                  </h3>
                </li>
                <li className="rounded-xl bg-white px-6 py-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)]">
                  <a href="/pricing" className="group">
                    <GiGreenPower className="mx-auto h-16 w-16 text-green-50" />

                    <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                      Sustainable Consumption & Production{" "}
                    </h3>
                  </a>
                </li>
                <li className="rounded-xl bg-white px-6 py-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)]">
                  <MdEnergySavingsLeaf className="mx-auto h-16 w-16 text-green-50" />

                  <h3 className="my-3 font-display font-medium">
                    Sustainability
                  </h3>
                </li>
                <li className="rounded-xl outline-2 px-6 py-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)]">
                  <PiLightbulbFilamentBold className="mx-auto h-16 w-16 text-green-50" />

                  <h3 className="my-3 font-display font-medium">
                    Eco-Innovation
                  </h3>
                </li>
                <li className="rounded-xl bg-white px-6 py-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)]">
                  <SiCodeclimate className="mx-auto h-16 w-16 text-green-50" />

                  <h3 className="my-3 font-display font-medium">
                    Climate Change Adaptation & Mitigation
                  </h3>
                </li>
                <li className="rounded-xl bg-white px-6 py-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)]">
                  <TbSocial className="mx-auto h-16 w-16 text-green-50" />

                  <h3 className="my-3 font-display font-medium">
                    ESG (Environmental, Social, and Governance)
                  </h3>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default ThematicFocus;
