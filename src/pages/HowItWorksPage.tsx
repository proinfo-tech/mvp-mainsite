import React from 'react';
import { motion } from 'framer-motion';
import { HowItWorksImg, HowItWorksProcessImg } from '@/assets';
const quickLinks = [
  { title: "HOW IT WORKS?", href: "#how-it-works" },
  { title: "WHAT ARE BLOCKCHAIN TRACEABILITY FEATURES?", href: "#traceability-features" },
  { title: "HOW WE SELECT OUR SUPPLIERS?", href: "#select-suppliers" },
  { title: "WHAT IS OUR SUPPLIER ONBOARDING PROCESS?", href: "#onboarding-process" },
  { title: "OUR REQUIRED DOCUMENTATION CHECKLIST", href: "#documentation-checklist" },
];

const qualitySteps = [
  {
    title: "SUPPLIER & DIGITAL SETUP",
    items: [
      "Supplier Blockchain Registration: Unique digital identity creation",
      "Digital Twin Creation: Immutable material profile on blockchain",
      "Quality Standards Encoding: Specifications locked in smart contracts",
    ],
  },
  {
    title: "PRODUCTION & DATA RECORDING",
    items: [
      "Real-time Process Monitoring: Live data hashed to blockchain",
      "Equipment Calibration & Maintenance logs on-chain",
      "Quality Metrics Recording: In-process testing immutably stored",
    ],
  },
  {
    title: "THIRD-PARTY VERIFICATION",
    items: [
      "Independent Laboratory Testing: SGS, Bureau Veritas, Intertek",
      "API Integration: Direct results to blockchain with digital signatures",
      "Smart Contract Validation: Automatic compliance checking",
    ],
  },
];

const traceabilityFeatures = [
  {
    title: "IMMUTABLE AUDIT TRAIL",
    items: [
      "All quality data permanently recorded and unchangeable",
      "Complete historical record of every batch",
      "Timestamped verification events and transfers",
    ],
  },
  {
    title: "AUTOMATED COMPLIANCE",
    items: [
      "Smart contracts automatically enforce quality standards",
      "Real-time compliance monitoring and alerts",
      "Instant certification upon meeting all requirements",
    ],
  },
  {
    title: "TRANSPARENT VERIFICATION",
    items: [
      "Permissioned access to complete quality data",
      "Third-party lab results with digital signatures",
      "Supply chain transparency for all stakeholders",
    ],
  },
];

const supplierSelectionCriteria = [
  {
    category: "QUALITY & COMPLIANCE STANDARDS",
    sections: [
      {
        title: "CERTIFICATIONS REQUIRED",
        items: [
          "ISO 9001 (Quality Management)",
          "ISO 14001 (Environmental Management)",
          "Industry-specific certifications (e.g., IATF 16949 for automotive)",
          "Conflict-free mineral certifications where applicable",
        ],
      },
      {
        title: "QUALITY HISTORY",
        items: [
          "Minimum 2 years of consistent quality performance",
          "Acceptable defect rates (<1% for critical materials)",
          "Proven track record with other major buyers",
        ],
      },
    ],
  },
  {
    category: "PRODUCTION & TECHNICAL CAPABILITY",
    sections: [
      {
        title: "MANUFACTURING CAPACITY",
        items: [
          "Minimum annual production capacity requirements",
          "Scalability to meet growing demand",
          "Backup production facilities or redundancy plans",
          ""
        ],
      },
      {
        title: "TECHNICAL EXPERTISE",
        items: [
          "Qualified technical staff and engineering support",
          "R&D capabilities and continuous improvement programs",
          "Advanced process control systems",
        ],
      },
    ],
  },
  {
    category: "ESG & SUSTAINABILITY PERFORMANCE",
    sections: [
      {
        title: "ENVIRONMENTAL COMPLIANCE",
        items: [
          "Valid environmental permits and compliance history",
          "Carbon footprint reporting capability",
          "Waste management and recycling programs    ",
          ""
        ],
      },
      {
        title: "SOCIAL RESPONSIBILITY",
        items: [
          "Labor practice compliance (no child/forced labor)",
          "Health and safety records (OSHA/equivalent compliance)",
          "Community engagement and development programs",
        ],
      },
    ],
  },
];

const onboardingProcess = [
    { title: "Application & Documents", items: ["Supplier submits basic application", "We check company documents and certificates", "Quick financial health check", "Output: Yes/No decision to proceed"] },
    { title: "Assessment & Audit", items: ["Review quality systems and processes", "Check production facilities (site visit)", "Verify ESG compliance", "Test sample material", "Output: Full capability assessment"] },
    { title: "Blockchain Setup & Trial", items: ["Create supplier digital identity on blockchain", "Platform access and user training", "API integration testing with supplier systems", "Configure smart contracts for material specifications", "Test data submission and blockchain recording"] },
];

const documentationChecklist = [
    { title: "MANDATORY DOCUMENTS", items: ["Business registration and licenses", "Quality management system certificates", "Environmental compliance certificates", "Financial statements (last 3 years)", "Organizational chart and key personnel", "Product specifications and testing reports", "Safety and health compliance records", "Supply chain mapping documentation"] },
    { title: "TECHNICAL DOCUMENTS", items: ["Manufacturing process descriptions", "Equipment lists and capabilities", "Quality control procedures", "Testing methodologies and frequencies", "Calibration and maintenance records"] },
    { title: "ESG DOCUMENTS", items: ["Environmental impact assessments", "Carbon footprint calculations", "Social compliance audit reports", "Waste management procedures", "Energy consumption data"] },
];


// --- Reusable Components ---

const Section: React.FC<{ id: string; title: string; children: React.ReactNode }> = ({ id, title, children }) => (
  <div className='bg-[#FAFAFA]'>
    <motion.section 
        id={id} 
        className="w-full max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
    >
        <h2 className="text-2xl md:text-3xl font-medium text-[#164B88] mb-10">{title}</h2>
        {children}
    </motion.section>
  </div>
);

const InfoCard: React.FC<{ title: string; items: string[]; variant?: 'primary' | 'secondary' }> = ({ title, items, variant = 'primary' }) => {
    const isPrimary = variant === 'primary';
    const bgColor = isPrimary ? 'bg-[#164B88]' : 'bg-[#E8F3FF]';
    const textColor = isPrimary ? 'text-white' : 'text-[#164B88]';
    const titleColor = isPrimary ? 'text-white' : 'text-[#164B88]';
    const borderColor = isPrimary ? '' : 'border border-blue-200';

    return (
        <div className={`rounded-lg  p-6 ${bgColor} ${borderColor} flex-1`}>
            <h3 className={`text-lg font-bold mb-4 ${titleColor}`}>{title}</h3>
            <ul className="space-y-3">
                {items.map((item, index) => (
                    <li key={index} className={`flex items-start ${textColor}`}>
                        <span className="w-4 h-4 mt-1 mr-3 bg-green-400 rounded-sm flex-shrink-0" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// --- Main Page Component ---

const HowItWorksPage: React.FC = () => {
    return (
        <div className="bg-white min-h-screen flex flex-col font-sans">
            <main>
                {/* Hero/Intro Section */}
                <div className="w-full max-w-7xl mx-auto pt-20 sm:px-6 lg:px-6 grid grid-cols-1 md:grid-cols-1 items-center">
                    <img src={HowItWorksImg} alt="How It Works Banner" />
                    {/* <div className="flex justify-center items-center gap-4 md:gap-8">
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-32 h-32 md:w-48 md:h-48 bg-[#60B244] rounded-2xl flex items-center justify-center shadow-lg">
                                <div className="w-16 h-16 bg-white opacity-50 rounded-md"></div>
                            </div>
                            <span className="text-xl font-semibold text-slate-800">Supplier</span>
                        </div>
                        <div className="flex-shrink-0 text-[#164B88] font-bold text-2xl animate-pulse">→</div>
                         <img src={MainLogo} alt="MVP Materials Logo" className="h-16 md:h-24" />
                        <div className="flex-shrink-0 text-[#164B88] font-bold text-2xl animate-pulse">→</div>
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-32 h-32 md:w-48 md:h-48 bg-[#60B244] rounded-2xl flex items-center justify-center shadow-lg">
                                <div className="w-16 h-16 bg-white opacity-50 rounded-md"></div>
                            </div>
                            <span className="text-xl font-semibold text-slate-800">Buyer</span>
                        </div>
                    </div> */}
                </div>

               <section className="w-full max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  {/* Left Column: Links (7 columns) */}
                  <motion.div
                    className="space-y-8 md:col-span-7"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    {quickLinks.map((link, index) => (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        className="text-xl md:text-2xl font-bold text-[#164B88] block underline hover:text-[#60B244] transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      >
                        {link.title}
                      </motion.a>
                    ))}
                  </motion.div>

                  {/* Right Column: Illustration (5 columns) */}
                  <motion.div
                    className="relative flex items-center justify-center md:col-span-5"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                  >
                    <img src={HowItWorksProcessImg} alt="How It Works Process" />
                  </motion.div>
                </section>


                
                {/* How We Ensure Quality Section */}
                <Section id="how-it-works"  title="HOW WE ENSURE QUALITY THROUGH BLOCKCHAIN?">
                    <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
                        {qualitySteps.map((step, index) => (
                            <div key={index} className="relative flex-1">
                                <InfoCard title={step.title} items={step.items} variant="primary" />
                                <div className="absolute -top-5 -right-3 w-10 h-10 bg-[#60B244] text-white rounded flex items-center justify-center text-xl font-bold shadow-lg">
                                    {index + 1}
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>
                
                {/* Blockchain Traceability Features Section */}
                <Section id="traceability-features" title="WHAT ARE BLOCKCHAIN TRACEABILITY FEATURES?">
                     <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
                        {traceabilityFeatures.map((feature, index) => (
                            <InfoCard key={index} title={feature.title} items={feature.items} variant="secondary" />
                        ))}
                    </div>
                </Section>

                {/* How We Select Suppliers Section */}
                <Section id="select-suppliers" title="HOW WE SELECT OUR SUPPLIERS?">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        
                        {supplierSelectionCriteria.map((category, index) => (
                          <motion.div 
                              key={index} 
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                          >
                              {/* Category Title */}
                              <h3 className="text-lg mb-3 font-semibold text-[#60B244] tracking-wide">
                                  {category.category}
                              </h3>
                              <div className="bg-[#E8F3FF] border border-blue-200 rounded-lg p-8 flex flex-col gap-8">
                                {/* Sections within the category */}
                                {category.sections.map((section, sIndex) => (
                                    <div key={sIndex}>
                                        {/* Dotted Separator (except for the first section) */}
                                        {sIndex > 0 && (
                                            <div className="mb-6 border-t border-dashed border-blue-300" />
                                        )}
                                        
                                        <h4 className="font-bold text-lg text-[#164B88] text-base mb-4">
                                            {section.title}
                                        </h4>
                                        <ul className="space-y-3 text-slate-700">
                                            {section.items.map((item, iIndex) => (
                                                <li key={iIndex} className="flex items-start text-[#164B88]">
                                                    {item !== '' ? <span className="w-4 h-4 mt-1 mr-3 bg-green-400 rounded-sm flex-shrink-0" /> : <span className="w-4 h-4 mt-1 mr-3 flex-shrink-0" />}
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                                </div>
                          </motion.div>
                        ))}
                    </div>
                </Section>

                {/* Onboarding Process Section */}
                <Section id="onboarding-process" title="WHAT IS OUR SUPPLIER ONBOARDING PROCESS?">
                     <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
                        {onboardingProcess.map((process, index) => (
                          <div key={index} className="relative flex">
                              <InfoCard title={process.title} items={process.items} variant="primary" />
                              <div className="absolute -top-5 -right-3 w-10 h-10 bg-[#60B244] text-white rounded flex items-center justify-center text-xl font-bold shadow-lg">
                                  {index + 1}
                              </div>
                          </div>
                        ))}
                    </div>
                </Section>

                {/* Documentation Checklist Section */}
                <Section id="documentation-checklist" title="OUR REQUIRED DOCUMENTATION CHECKLIST">
                     <div className="flex flex-col md:flex-row justify-center items-stretch gap-6">
                        {documentationChecklist.map((list, index) => (
                           <InfoCard key={index} title={list.title} items={list.items} variant="secondary" />
                        ))}
                    </div>
                </Section>
            </main>
        </div>
    );
};

export default HowItWorksPage;