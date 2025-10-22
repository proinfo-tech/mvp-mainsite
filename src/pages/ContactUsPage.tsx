// src/pages/ContactUsPage.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import {MapIcon, MailIcon} from '@/assets';
// --- Contact Form Schema ---
const contactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
  agree: z.boolean().refine(val => val === true, 'You must agree to the privacy policy'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactUsPage: React.FC = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    });

    const onFormSubmit = async (data: ContactFormValues) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_APP_API_BASE_URL || 'http://localhost:3000'}/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Something went wrong.');
            }

            toast.success('Message sent successfully!');
            reset();
        } catch (error: any) {
            toast.error(error.message || 'Failed to send message.');
        }
    };

    return (
        <motion.section
            className="bg-[#0137A7] flex flex-col justify-center text-white py-30 h-full px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Form */}
                <div>
                    <h2 className="text-3xl font-bold mb-2">GET IN TOUCH</h2>
                    <p className="text-gray-300 mb-8">We'd love to hear from you. Please fill out this form.</p>
                    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                            <label htmlFor="agree" className="ml-2 text-sm text-gray-300">You agree to our friendly privacy policy.</label>
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
                    <h2 className="text-3xl font-bold mb-15">CONTACT US</h2>
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-white rounded-full flex-shrink-0 flex items-center justify-center">
                                <img src={MailIcon} alt="Email" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Email</h3>
                                <p className="text-white">imura@mvpmaterials.com</p>
                            </div>
                        </div>
                        {/* <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-white rounded-full flex-shrink-0 flex items-center justify-center">
                                <img src={PhoneCallIcon} alt="Phone" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Phone</h3>
                                <p className="text-white">+91-9873556217</p>
                            </div>
                        </div> */}
                        <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-white rounded-full flex-shrink-0 flex items-center justify-center">
                                <img src={MapIcon} alt="Location" />
                                </div>

                            <div>
                                <h3 className="font-semibold">Office location</h3>
                                <p className="text-white">Hong Kong</p>
                                <p className="text-white">Unit 1603, 16th Floor, The L. Plaza 367 - 375 Queen's Road Central Sheung Wan Hong Kong</p>
                            </div>
                        </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-white rounded-full flex-shrink-0 flex items-center justify-center">
                                <img src={MapIcon} alt="Location" />
                                </div>

                            <div>
                                <h3 className="font-semibold">Office location</h3>
                                <p className="text-white">Tokyo</p>
                                <p className="text-white">xLink, 28F, Marunouchi 2-Chome Building, 2-5-1 Marunouchi, Chiyoda-ku, Tokyo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default ContactUsPage;