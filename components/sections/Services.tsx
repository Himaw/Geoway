"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/animation/variants";
import { useInView } from "react-intersection-observer";

import { GiArchiveResearch } from "react-icons/gi";
import { MdAssessment, MdOutlineSupportAgent, MdPolicy } from "react-icons/md";
import { RiChatSettingsFill, RiCustomerService2Line } from "react-icons/ri";
import { IoDocumentsSharp } from "react-icons/io5";
import { FaPeopleCarryBox, FaUsersGear } from "react-icons/fa6";

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [refImage, inViewImage] = useInView({ triggerOnce: false });

  return (
    <motion.div
      variants={fadeIn("left", 0)}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      exit="hidden"
    >
      <section ref={ref} id="services" className="flexCenter flex-col mt-16">
        <div className=" padding-container container w-full ">
          {/* <p className="uppercase regular-18 mb-3 text-green-50">
            We provide various services
          </p> */}

          <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
            <h2 className="bold-40 lg:bold-64 xl:max-w-[500px]">
              Our Services
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
                  <GiArchiveResearch className="mx-auto h-10 w-10 text-green-50" />

                  <h3 className="my-3 font-display font-medium">
                    Research & Data Development
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    Harnessing research-based data to inform sustainable
                    solutions.
                  </p>
                </li>
                <li className="rounded-xl bg-white px-6 py-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)]">
                  <MdOutlineSupportAgent className="mx-auto h-10 w-10 text-green-50" />

                  <h3 className="my-3 font-display font-medium">
                    Project Development Support
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    From conception to execution, we provide guidance,
                    facilitation, and innovative approaches for environmental
                    projects.
                  </p>
                </li>
                <li className="rounded-xl bg-white px-6 py-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)]">
                  <MdPolicy className="mx-auto h-10 w-10 text-green-50" />

                  <h3 className="my-3 font-display font-medium">
                    Policy Development
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    Crafting comprehensive policy background documents,
                    guidelines, roadmaps, and action plans to promote
                    sustainable practices.
                  </p>
                </li>
                <li className="rounded-xl outline-2 px-6 py-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)]">
                  <FaUsersGear className="mx-auto h-10 w-10 text-green-50" />

                  <h3 className="my-3 font-display font-medium">
                    Capacity Development
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    Empowering organizations and individuals through tailored
                    strategies and support.
                  </p>
                </li>
                <li className="rounded-xl bg-white px-6 py-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)]">
                  <RiChatSettingsFill className="mx-auto h-10 w-10 text-green-50" />

                  <h3 className="my-3 font-display font-medium">
                    Strategic Advisory Services
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    Offering strategic advice to governments, development
                    partners, private sectors, and more.
                  </p>
                </li>
                <li className="rounded-xl bg-white px-6 py-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)]">
                  <RiCustomerService2Line className="mx-auto h-10 w-10 text-green-50" />

                  <h3 className="my-3 font-display font-medium">
                    Expert Review & Technical Assistance{" "}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                    Leveraging our expertise to review projects and provide
                    technical guidance.
                  </p>
                </li>
                <li className="rounded-xl bg-white px-6 py-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)]">
                  <a href="/pricing" className="group">
                    <IoDocumentsSharp className="mx-auto h-10 w-10 text-green-50" />

                    <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                      Knowledge Materials Development
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                      Creating science-based knowledge materials, tools, and
                      training programs for environmental analysis.
                    </p>
                  </a>
                </li>
                <li className="rounded-xl bg-white px-6 py-8 shadow-[0_35px_60px_-15px_rgba(0,0.9,0,0.1)]">
                  <a href="/templates" className="group">
                    <MdAssessment className="mx-auto h-10 w-10 text-green-50" />

                    <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                      Baseline Assessment{" "}
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                      Conducting thorough assessments to understand
                      environmental challenges and opportunities.
                    </p>
                  </a>
                </li>
                <li className="rounded-xl bg-white px-6 py-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)]">
                  <a href="/download" className="group">
                    <FaPeopleCarryBox className="mx-auto h-10 w-10 text-green-50" />

                    <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                      Stakeholder Engagement
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                      Engaging stakeholders and communities to foster
                      collaboration and sustainable solutions.
                    </p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Services;
