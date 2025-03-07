"use client";
import { FEATURES } from "@/constants";
import Image from "next/image";
import { MdPermIdentity } from "react-icons/md";
import { FaBuildingNgo } from "react-icons/fa6";
import { LiaConnectdevelop } from "react-icons/lia";

import { RiGovernmentLine } from "react-icons/ri";

import { motion } from "framer-motion";
import { fadeIn } from "@/animation/variants";
import { useInView } from "react-intersection-observer";

const Features = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [refFeatures, inViewFeatures] = useInView({ triggerOnce: false });

  return (
    <motion.div
      variants={fadeIn("left", 0)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      exit="hidden"
    >
      <section
        ref={ref}
        id="our-clients"
        className="container flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat my-24"
      >
        <div className="maxContainer relative flex w-full justify-end">
          <div className="flex flex-1 lg:min-h-[700px]">
            <Image
              src="/sustainability.png"
              alt="Phone"
              width={440}
              height={1000}
              className="feature-phone rounded-2xl object-cover object-center mx-5"
            />
          </div>

          <div className="z-20 flex w-full flex-col lg:w-[60%]">
            <h2 className="bold-32 lg:bold-64">Our Clients</h2>
            <motion.div
              variants={fadeIn("right", 0)}
              initial="hidden"
              animate={inViewFeatures ? "show" : "hidden"}
              exit="hidden"
            >
              <ul
                ref={refFeatures}
                className="mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20"
              >
                {FEATURES.map((feature) => (
                  <FeatureItem
                    title={feature.title}
                    key={feature.title}
                    icon={feature.icon}
                    description={feature.description}
                  />
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

interface FeatureItemProps {
  title: string;
  icon: string;
  description: string;
}

const iconMap: { [key: string]: JSX.Element } = {
  RiGovernmentLine: <RiGovernmentLine size={28} />,
  MdPermIdentity: <MdPermIdentity size={28} />,
  FaBuildingNgo: <FaBuildingNgo size={28} />,
  LiaConnectdevelop: <LiaConnectdevelop size={28} />,
};

const FeatureItem = ({ title, icon, description }: FeatureItemProps) => {
  const iconComponent = iconMap[icon] || null;

  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-50 text-white">
        {iconComponent}
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default Features;
