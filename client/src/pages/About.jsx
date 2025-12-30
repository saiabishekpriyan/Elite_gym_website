import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Trophy } from 'lucide-react';
import Layout from '../components/layout/Layout';

const About = () => {
    const stats = [
        { label: 'Active Members', value: '15K+' },
        { label: 'Expert Trainers', value: '50+' },
        { label: 'Weekly Classes', value: '100+' },
        { label: 'Years of Excellence', value: '9+' },
    ];

    return (
        <Layout>
            {/* Hero Section */}
            <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                        alt="Gym Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold uppercase mb-4 text-white tracking-widest">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-blue-500">Us</span>
                        </h1>
                        <p className="text-gray-300 text-lg md:text-xl tracking-[0.2em] font-light uppercase">
                            Building champions since 2015
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Main Content */}
            <div className="bg-charcoal min-h-screen py-20 relative">
                <div className="container mx-auto px-6">
                    {/* Mission & Vision */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="bg-charcoal-light p-10 rounded-2xl border-l-4 border-neon-green shadow-lg hover:shadow-neon-green/20 transition-all border border-white/5"
                        >
                            <div className="flex items-center mb-6">
                                <Target size={40} className="text-neon-green mr-4" />
                                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                            </div>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                To empower individuals to reach their peak potential through world-class equipment, expert guidance, and a supportive community. We believe fitness is not just a destination, but a journey of self-improvement.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="bg-charcoal-light p-10 rounded-2xl border-l-4 border-neon-cyan shadow-lg hover:shadow-neon/20 transition-all border border-white/5"
                        >
                            <div className="flex items-center mb-6">
                                <Eye size={40} className="text-neon-cyan mr-4" />
                                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                            </div>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                To lead the global fitness industry by setting new standards in training innovation and member experience. We strive to create a world where everyone has access to the tools they need to live a healthier, stronger life.
                            </p>
                        </motion.div>
                    </div>

                    {/* Stats Bar */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-black/40 p-10 rounded-3xl border border-white/10 backdrop-blur-sm shadow-2xl"
                    >
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center group">
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-neon-green transition-colors">
                                    {stat.value}
                                </h3>
                                <p className="text-gray-400 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </Layout>
    );
};

export default About;
