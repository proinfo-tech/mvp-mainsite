import React from 'react';
import { motion } from 'framer-motion';
import {AboutUsImg, MissionVisionImg, AboutUsBanner} from '@/assets';
import ContactUsPage from './ContactUsPage';
// --- Reusable Motion Variants ---
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
} as const;


const AboutUsPage: React.FC = () => {
 

    return (
        <div className="bg-white min-h-screen flex flex-col font-sans">
            <main>

                {/* --- Hero Section --- */}
                <motion.section
                    className="relative h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center text-white"
                    style={{ backgroundImage: `url(${AboutUsBanner})` }} // Add this image to your assets
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="absolute inset-0 bg-black opacity-40" />
                    <motion.h1
                        className="relative text-4xl md:text-6xl font-bold"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        About Us
                    </motion.h1>
                </motion.section>

                {/* --- About Us Content --- */}
                <motion.section
                    className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="w-full h-64 md:h-full rounded-lg flex items-center justify-center">
                        <img src={AboutUsImg} className='rounded-lg w-200' alt="WHO WE ARE" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-[#164B88] mb-4">WHO WE ARE</h2>
                        <p className="text-gray-600 leading-relaxed">
                           MVP Materials (Most Valuable Partner) is the digital platform focused on securing the global circular economy for critical materials. We solve the multi-billion-dollar problem of supply chain trust and compliance.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                           We're a team of industry veterans with over 100 years of combined experience in global trading, recycling, automotive, and deep blockchain technology. 
                        </p>
                    </div>
                </motion.section>

                {/* --- Mission & Vision --- */}
                <motion.section
                    className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-12">
                            {/* <div>
                                <h2 className="text-3xl font-bold text-[#164B88] mb-4">WHO WE ARE</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    MVP Materials (Most Valuable Partner) is the digital platform focused on securing the global circular economy for critical materials. We solve the multi-billion-dollar problem of supply chain trust and compliance.
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    We're a team of industry veterans with over 100 years of combined experience in global trading, recycling, automotive, and deep blockchain technology. 
                                </p>
                            </div> */}
                            <div>
                                <h2 className="text-3xl font-bold text-[#164B88] mb-4">OUR MISSION</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    Driving a sustainable, circular economy through digital innovation.
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-64 md:h-full flex items-center justify-center">
                              <img src={MissionVisionImg} className='rounded-lg' alt="Mission & Vision" />
                        </div>
                    </div>
                </motion.section>

                {/* --- Get In Touch Section --- */}
                <ContactUsPage/>
            </main>
        </div>
    );
};

export default AboutUsPage;