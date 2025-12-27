import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';

const Contact = () => {
    return (
        <Layout>
            <div className="bg-dark-bg min-h-screen py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold uppercase mb-4 text-white">
                            Get In <span className="text-neon-green">Touch</span>
                        </h1>
                        <p className="text-gray-400">We're here to help you start your fitness journey.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ x: -30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className="space-y-8"
                        >
                            <div className="bg-charcoal p-8 rounded-2xl border border-white/5">
                                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start text-gray-300">
                                        <MapPin className="text-neon-cyan mt-1 mr-4 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Address</h4>
                                            <p>123 Elite Ave, Fitness City, FC 90210</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start text-gray-300">
                                        <Phone className="text-neon-cyan mt-1 mr-4 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Phone</h4>
                                            <p>+1 (555) 123-4567</p>
                                            <p>+1 (555) 987-6543</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start text-gray-300">
                                        <Mail className="text-neon-cyan mt-1 mr-4 flex-shrink-0" />
                                        <div>
                                            <h4 className="font-bold text-white mb-1">Email</h4>
                                            <p>info@elitefitnesshub.com</p>
                                            <p>support@elitefitnesshub.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-charcoal p-8 rounded-2xl border border-white/5">
                                <h3 className="text-2xl font-bold text-white mb-6">Opening Hours</h3>
                                <div className="flex items-start text-gray-300">
                                    <Clock className="text-neon-green mt-1 mr-4 flex-shrink-0" />
                                    <div className="w-full space-y-2">
                                        <div className="flex justify-between">
                                            <span>Monday - Friday</span>
                                            <span className="font-bold text-white">5:00 AM - 11:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Saturday</span>
                                            <span className="font-bold text-white">6:00 AM - 10:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Sunday</span>
                                            <span className="font-bold text-white">7:00 AM - 9:00 PM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ x: 30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className="bg-charcoal p-8 md:p-10 rounded-3xl border border-white/5 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-20 h-20 bg-neon-green/20 blur-3xl rounded-full"></div>

                            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400">Full Name</label>
                                        <input type="text" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all" placeholder="John Doe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400">Email</label>
                                        <input type="email" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all" placeholder="john@example.com" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400">Phone</label>
                                        <input type="tel" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all" placeholder="+1 (555) 000-0000" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400">Subject</label>
                                        <input type="text" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all" placeholder="Membership Inquiry" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">Message</label>
                                    <textarea rows="4" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all resize-none" placeholder="How can we help you?"></textarea>
                                </div>

                                <Button variant="primary" className="w-full py-4 text-base mt-2">
                                    Send Message <Send size={18} className="ml-2" />
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
