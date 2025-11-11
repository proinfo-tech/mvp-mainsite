import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import BlockchainTracebilityImg from "../assets/images/blockchain-tracebility.png";
import CertifiedQualityImg from "../assets/images/certified-quality.png";
import ComplianceandEsgImg from "../assets/images/compliance-and-esg.png";
import RecycleImg from "../assets/images/recycle.png";
import RecycleArrowImg from "../assets/images/recycle-arrow.png";

import {
  AutomatedReporting,
  ComprehesiveDashboard,
  EgsFootprint,
  MaterialImg,
  TrustedQuality,
  PasticImg,
} from "@/assets";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section
        className="relative text-white px-4 sm:px-6 lg:px-10 flex justify-center items-center 
             min-h-[300px] md:min-h-[400px] lg:h-[425px] 
             bg-[url('/src/assets/images/globe-rotate.gif')] bg-contain bg-center lg:bg-right border-t-2 border-t-[#164B88]"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(269.67deg,rgba(0,52,179,0)_0.28%,#002C98_55.58%,#00164D_95.59%)]" />

        <div className="relative z-10 mx-auto xl:w-full xl:ml-[100px] 3xl:ml-[200px] xl:mx-0 flex flex-col gap-10 lg:gap-[80px]">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col justify-center items-center lg:items-start lg:justify-start"
          >
            <h1 className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-medium leading-tight text-left mt-10">
              MVP Materials:
            </h1>
            <div className="flex flex-col gap-1 justify-center items-center lg:justify-start lg:items-start">
              <p className="text-base sm:text-xl lg:text-[1.5rem] font-medium text-center lg:text-left">
                Blockchain powered source for traceable &
              </p>
              <p className="text-base sm:text-xl lg:text-[1.5rem] font-medium text-center lg:text-left">
                certified B2B materials
              </p>
            </div>
          </motion.div>

          {/* Feature List */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-3 text-left text-sm sm:text-base lg:text-lg flex gap-10"
          >
            <li className="flex items-center gap-2 flex-col md:flex-row">
              <img
                src={BlockchainTracebilityImg}
                alt="Blockchain Traceability"
                className="w-6 sm:w-8 lg:w-10"
              />
              <span className="text-sm md:text-[1rem] font-medium lg:text-[1.5rem] lg:font-semibold">
                Blockchain Traceability
              </span>
            </li>
            <li className="flex items-center gap-2  flex-col md:flex-row">
              <img
                src={CertifiedQualityImg}
                alt="Certified Quality"
                className="w-6 sm:w-8 lg:w-10"
              />
              <span className="text-sm md:text-[1rem] font-medium lg:text-[1.5rem] lg:font-semibold">
                Certified Quality
              </span>
            </li>
            <li className="flex items-center gap-2  flex-col md:flex-row">
              <img
                src={ComplianceandEsgImg}
                alt="Compliance & ESG"
                className="w-6 sm:w-8 lg:w-10"
              />
              <span className="text-sm md:text-[1rem] font-medium lg:text-[1.8rem] lg:font-semibold">
                Compliance & ESG
              </span>
            </li>
          </motion.ul>
        </div>
      </section>

      <section className="py-8 px-4 sm:px-6 lg:px-10 md:py-10">
        <section className="w-full bg-white">
          <div className="max-w-6xl mx-auto px-4 flex flex-col gap-8">
            {/* Section Title */}
            <h2 className="text-xl sm:text-2xl font-bold text-[#1558A4] text-center">
              Explore Our Material Verticals
            </h2>

            {/* Cards Row */}
            <div className="flex flex-wrap justify-center gap-6">
              {/* Card 1 */}
              <div className="flex flex-col sm:flex-row items-start bg-white rounded-md shadow-md border border-gray-200 w-full max-w-md p-4">
                <img
                  src={MaterialImg}
                  alt="Traceable Battery Materials"
                  className="w-full sm:w-1/3 h-40 object-cover rounded-[10px]"
                />
                <div className="flex flex-col justify-between sm:w-2/3 pl-0 sm:pl-4 mt-4 sm:mt-0">
                  <h3 className="text-lg font-medium text-[#333333] text-shadow-2xs">
                    Traceable Battery Materials:
                  </h3>
                  <p className="text-sm mt-2 font-medium text-[#000000B2]">
                    Your trusted source for traceable and compliant battery
                    materials, including black mass and refined powders.
                  </p>
                  <a href="https://battery.mvpmaterials.com/" target="_blank" className="w-full">
                  <button className="hover:cursor-pointer w-full mt-4 bg-green-600 text-white text-sm font-medium px-4 py-2 rounded hover:bg-green-700 transition font-norma">
                    View All Battery Listings
                  </button>

                  </a>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col sm:flex-row items-start bg-white rounded-md shadow-md border border-gray-200 w-full max-w-md p-4">
                <img
                  src={PasticImg}
                  alt="Traceable Plastics Materials"
                  className="w-full sm:w-1/3 h-40 object-cover rounded-[10px]"
                />
                <div className="flex flex-col justify-between sm:w-2/3 pl-0 sm:pl-4 mt-4 sm:mt-0">
                  <h3 className="text-lg text-[#333333] font-medium text-shadow-2xs">
                    Traceable Plastics Materials:
                  </h3>
                  <p className="text-sm text-[#000000B2] mt-2 font-medium">
                    A secure platform for sourcing certified recycled plastics
                    to meet sustainability goals.
                  </p>
                  <button className="mt-4 bg-green-600 text-white text-sm px-4 py-2 rounded hover:bg-green-700 transition font-medium">
                    View All Plastic Listings
                  </button>
                </div>
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-[#1558A4] text-center text-shadow-xl">
              Buyers Advantage
            </h2>
          </div>
        </section>

        <div className="w-full bg-white">
          <div className="py-10">
            <h2 className="text-xl sm:text-[1.2rem] font-normal text-[#434343] text-center">
              Once a transaction is complete, the buyer gains access to a
            </h2>
            <h2 className="text-xl sm:text-[1.2rem] font-normal text-[#434343] text-center">
              wealth of verifiable data and streamlined processes.
            </h2>
          </div>
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-stretch text-center divide-y sm:divide-x sm:divide-y-0 divide-gray-300">
              <div className="flex-1 flex flex-col items-center gap-4 px-4 py-6">
                <img alt="Trusted Quality" className="h-16 w-16 object-contain" src={TrustedQuality} />
                <p className="font-medium text-gray-800">Trusted<br/>Quality</p>
              </div>

              <div className="flex-1 flex flex-col items-center gap-4 px-4 py-6">
                <img alt="Comprehensive Dashboard" className="h-16 w-16 object-contain" src={ComprehesiveDashboard}/>
                <p className="font-medium text-gray-800">Comprehensive<br/>Dashboard</p>
              </div>

              <div className="flex-1 flex flex-col items-center gap-4 px-4 py-6">
                <img alt="Automated Reporting" className="h-16 w-16 object-contain" src={AutomatedReporting}/>
                <p className="font-medium text-gray-800">Automated<br/>Reporting</p>
              </div>

              <div className="flex-1 flex flex-col items-center gap-4 px-4 py-6">
                <img alt="Enhanced ESG footprint" className="h-16 w-16 object-contain" src={EgsFootprint}/>
                <p className="font-medium text-gray-800">Enhanced<br/>ESG footprint</p>
              </div>
          </div>

        </div>
      </section>

      {/* Enterprise Traceability Section */}
      <section className="relative text-white bg-[url('/src/assets/images/cta-bg.png')] bg-cover bg-center py-16 px-4 sm:px-6 lg:px-10">
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#164B88A6]" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 w-full flex flex-col items-center text-center gap-8 max-w-5xl mx-auto"
        >
          {/* Icon / Image */}
          <div className="relative flex items-center justify-center">
            <img
              src={RecycleArrowImg}
              alt="Reduce Reuse Recycle"
              className="absolute w-10 sm:w-12 lg:w-[55px] left-0 top-[-2px]"
            />
            <img
              src={RecycleImg}
              alt="Eco Trace Prime"
              className="w-24 sm:w-32 lg:w-40"
            />
          </div>

          {/* Text */}
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-[1.5rem] lg:text-3xl font-semibold">
              Explore Our Enterprise Traceability Solutions
            </h2>
            <div>
              <p className="text-base text-wrap sm:text-sm lg:text-[1rem] font-medium">
                Leverage our blockchain platform to manage traceability and
                compliance of your supply chain
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <Button className="bg-[#60B244] border-1 border-white lg:h-[45px] text-white text-sm sm:text-lg lg:text-xl font-semibold px-8 sm:px-12 lg:px-[60px] py-3 lg:py-4 rounded-md hover:bg-[#4fa137]">
            Request Callback
          </Button>
        </motion.div>
      </section>

    </div>
  );
};

export default HomePage;
