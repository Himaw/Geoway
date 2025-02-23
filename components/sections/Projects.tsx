"use client";
import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "@/animation/variants";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [refImage, inViewImage] = useInView({ triggerOnce: false });

  return (
    <motion.div
      variants={fadeIn("left", 0)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      exit="hidden"
    >
      <section ref={ref} id="projects" className="flexCenter flex-col mt-16">
        <div className=" padding-container container w-full ">
          <p className="uppercase regular-18 mb-3 text-green-50">
            We prioritize quality
          </p>

          <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
            <h2 className="bold-40 lg:bold-64 xl:max-w-[500px]">Projects</h2>
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
                <li className="relative rounded-xl overflow-hidden outline-2 px-6 py-2 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)]">
                  <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
                    <div
                      className="relative overflow-hidden bg-cover bg-no-repeat"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                    >
                      <img
                        className="rounded-lg"
                        src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                      </a>
                    </div>
                    <div className="p-6 text-surface dark:text-white">
                      <h5 className="mb-2 text-xl font-medium leading-tight">
                        Project Name
                      </h5>
                      <p className=" mt-1.5 text-sm leading-6 text-secondary-500 text-gray-500">
                        Harnessing research-based data to inform sustainable
                        solutions.
                      </p>
                      {/* <button
                        type="button"
                        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                      >
                        Button
                      </button> */}
                    </div>
                  </div>
                </li>
                <li className="relative rounded-xl overflow-hidden outline-2 px-6 py-2 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)]">
                  <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
                    <div
                      className="relative overflow-hidden bg-cover bg-no-repeat"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                    >
                      <img
                        className="rounded-lg"
                        src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                      </a>
                    </div>
                    <div className="p-6 text-surface dark:text-white">
                      <h5 className="mb-2 text-xl font-medium leading-tight">
                        Project Name
                      </h5>
                      <p className=" mt-1.5 text-sm leading-6 text-secondary-500 text-gray-500">
                        Harnessing research-based data to inform sustainable
                        solutions.
                      </p>
                      {/* <button
                        type="button"
                        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                      >
                        Button
                      </button> */}
                    </div>
                  </div>
                </li>
                <li className="relative rounded-xl overflow-hidden outline-2 px-6 py-2 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)]">
                  <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
                    <div
                      className="relative overflow-hidden bg-cover bg-no-repeat"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                    >
                      <img
                        className="rounded-lg"
                        src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                        alt=""
                      />
                      <a href="#!">
                        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                      </a>
                    </div>
                    <div className="p-6 text-surface dark:text-white">
                      <h5 className="mb-2 text-xl font-medium leading-tight">
                        Project Name
                      </h5>
                      <p className=" mt-1.5 text-sm leading-6 text-secondary-500 text-gray-500">
                        Harnessing research-based data to inform sustainable
                        solutions.
                      </p>
                      {/* <button
                        type="button"
                        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                        data-twe-ripple-init
                        data-twe-ripple-color="light"
                      >
                        Button
                      </button> */}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Projects;
