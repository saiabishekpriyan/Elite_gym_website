import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { Dumbbell, Users, Utensils, Activity, ArrowRight } from 'lucide-react';
import Layout from '../components/layout/Layout';

const Home = () => {
    const services = [
        { icon: Dumbbell, title: 'Personal Training', desc: 'One-on-one coaching to smash your goals.' },
        { icon: Users, title: 'Group Classes', desc: 'High-energy classes led by expert instructors.' },
        { icon: Utensils, title: 'Nutrition Guidance', desc: 'Custom meal plans to fuel your transformation.' },
        { icon: Activity, title: 'Body Transformation', desc: 'Complete programs for total body change.' },
    ];

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
                        alt="Gym Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-neon-cyan/30 rounded-full px-4 py-1 mb-6">
                            <span className="text-neon-green mr-2">🔥</span>
                            <span className="text-white text-sm font-medium tracking-wide">Transform Your Body Today</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6 text-white leading-tight">
                            Unleash Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-blue-500 drop-shadow-[0_0_15px_rgba(0,231,255,0.5)]">Elite</span> Potential
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
                            Join the ultimate fitness destination. World-class equipment, expert trainers, and a community that pushes you further.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <Button variant="primary" className="w-full sm:w-auto px-8 py-3 text-lg">
                                Join Now
                            </Button>
                            <Button variant="secondary" className="w-full sm:w-auto px-8 py-3 text-lg group">
                                Book Free Trial
                                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-charcoal relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold uppercase mb-4">
                            <span className="text-white">Our</span> <span className="text-neon-green">Services</span>
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto">Everything you need to reach your peak performance.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-charcoal-light p-8 rounded-2xl border border-white/5 hover:border-neon-cyan/50 hover:shadow-neon transition-all group"
                            >
                                <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center mb-6 group-hover:bg-neon-cyan/10 transition-colors">
                                    <service.icon size={32} className="text-neon-cyan" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
