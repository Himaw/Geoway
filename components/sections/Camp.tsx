"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";
import campsiteData from "../Camp/CampSiteData";
import CampSite from "../Camp/CampSite";

import { motion } from "framer-motion";
import { fadeIn } from "@/animation/variants";
import { useInView } from "react-intersection-observer";

const Camp = () => {
  const [ref, inView] = useInView({ triggerOnce: false });

  return (
    <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      exit="hidden"
    >
      <section ref={ref} className="w-full select-none py-10">
        <Swiper
          slidesPerView={"auto"}
          className="my-swiper-1 h-full w-full object-cover "
          navigation={{
            enabled: true,
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          modules={[Navigation]}
        >
          <div className="swiper-button-prev">
            <FaCircleChevronLeft className="bg-white rounded-full" />
          </div>
          {campsiteData.map((data, index) => (
            <SwiperSlide key={index}>
              <CampSite {...data} />
            </SwiperSlide>
          ))}
          <div className="swiper-button-next">
            <FaCircleChevronRight className="bg-white rounded-full" />
          </div>
        </Swiper>
      </section>
    </motion.div>
  );
};

export default Camp;
