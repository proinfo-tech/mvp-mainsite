import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {AboutUsImg, MissionVisionImg, MapIcon, MailIcon, PhoneCallIcon, AboutUsBanner} from '@/assets';
// --- Reusable Motion Variants ---
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
} as const;

// --- Contact Form Schema ---
const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
  agree: z.boolean().refine((val:boolean) => val === true, 'You must agree to the privacy policy'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const AboutUsPage: React.FC = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    });

    const onFormSubmit = (data: ContactFormValues) => {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('Form Data:', data);
                // Here you would typically send the data to a backend API
                alert('Message sent successfully!');
                resolve(true);
            }, 1000);
        });
    };

    return (
        <div className="bg-white min-h-screen flex flex-col font-sans">
            <Header />
            <main className="pt-[70px]">

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
                        <img src={AboutUsImg} className='rounded-lg w-200' alt="About Us" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-[#164B88] mb-4">ABOUT US</h2>
                        <p className="text-gray-600 leading-relaxed">
                            simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
                            <div>
                                <h2 className="text-3xl font-bold text-[#164B88] mb-4">OUR MISSION</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                                </p>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-[#164B88] mb-4">OUR VISION</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-64 md:h-full flex items-center justify-center">
                              <img src={MissionVisionImg} className='rounded-lg' alt="Mission & Vision" />
                        </div>
                    </div>
                </motion.section>

                {/* --- Get In Touch Section --- */}
                <motion.section
                    className="bg-[#0137A7] text-white py-20 px-4 sm:px-6 lg:px-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Form */}
                        <div>
                            <h2 className="text-3xl font-bold mb-2">GET IN TOUCH</h2>
                            <p className="text-white-300 mb-8">We'd love to hear from you. Please fill out this form.</p>
                            <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm font-medium mb-1">First name</label>
                                    <input type="text" id="firstName" {...register('firstName')} className="w-full p-3 rounded-md bg-white text-black border-gray-300 focus:ring-green-400 focus:border-green-400" />
                                    {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName.message}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                                    <input type="email" id="email" {...register('email')} className="w-full p-3 rounded-md bg-white text-black border-gray-300 focus:ring-green-400 focus:border-green-400" />
                                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone number</label>
                                    <input type="tel" id="phone" {...register('phone')} className="w-full p-3 rounded-md bg-white text-black border-gray-300 focus:ring-green-400 focus:border-green-400" />
                                    {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>}
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                                    <textarea id="message" {...register('message')} rows={4} className="w-full p-3 rounded-md bg-white text-black border-gray-300 focus:ring-green-400 focus:border-green-400"></textarea>
                                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
                                </div>
                                <div className="flex items-start">
                                    <input type="checkbox" id="agree" {...register('agree')} className="h-4 w-4 mt-1 text-green-500 border-gray-300 rounded focus:ring-green-400" />
                                    <label htmlFor="agree" className="ml-2 text-sm text-white-300">You agree to our friendly privacy policy.</label>
                                </div>
                                {errors.agree && <p className="text-red-400 text-sm">{errors.agree.message}</p>}
                                <div>
                                    <button type="submit" disabled={isSubmitting} className="w-full py-3 px-6 rounded-md bg-[#60B244] hover:bg-green-600 font-semibold transition-colors disabled:bg-gray-500">
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>
                                </div>
                            </form>
                        </div>
                        {/* Contact Info */}
                        <div className="flex flex-col">
                            <h2 className="text-3xl font-bold mb-2">CONTACT US</h2>
                            <p className="text-white mb-10">Need something cleared up? Here are our most frequently asked questions.</p>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                     <div className="w-10 h-10 bg-white rounded-full flex-shrink-0 flex items-center justify-center">
                                        <img src={MailIcon} alt="Email" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Email</h3>
                                        <p className="text-white">Dummy@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white rounded-full flex-shrink-0 flex items-center justify-center">
                                        <img src={PhoneCallIcon} alt="Phone" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Phone</h3>
                                        <p className="text-white">+91-9873556217</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                     <div className="w-10 h-10 bg-white rounded-full flex-shrink-0 flex items-center justify-center">
                                        <img src={MapIcon} alt="Location" />
                                     </div>

                                    <div>
                                        <h3 className="font-semibold">Office location</h3>
                                        <p className="text-white">Dummy</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>
            </main>
            <Footer />
        </div>
    );
};

export default AboutUsPage;