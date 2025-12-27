import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Users, TrendingUp } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';

const Trainers = () => {
    const trainers = [
        {
            name: 'Marcus Thompson',
            image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop',
            cert: 'NASM CPT',
            experience: '8 Years',
            clients: '500+',
            expertise: ['Strength', 'HIIT', 'Building Muscle'],
            rating: 4.9
        },
        {
            name: 'Sarah Jenkins',
            image: 'https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=1974&auto=format&fit=crop',
            cert: 'ACE Specialist',
            experience: '5 Years',
            clients: '300+',
            expertise: ['Yoga', 'Pilates', 'Mobility'],
            rating: 4.8
        },
        {
            name: 'David Martinez',
            image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop',
            cert: 'ISSA Elite',
            experience: '10 Years',
            clients: '1k+',
            expertise: ['CrossFit', 'Endurance', 'Athletics'],
            rating: 5.0
        },
        {
            name: 'Elena Rodriguez',
            image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=2070&auto=format&fit=crop',
            cert: 'NSCA CSCS',
            experience: '6 Years',
            clients: '450+',
            expertise: ['Nutrition', 'Weight Loss', 'Zumba'],
            rating: 4.9
        }
    ];

    return (
        <Layout>
            <div className="bg-dark-bg min-h-screen py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold uppercase mb-4 text-white">
                            Meet Our <span className="text-neon-cyan">Trainers</span>
                        </h1>
                        <p className="text-gray-400">World-class experts dedicated to your success.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {trainers.map((trainer, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-charcoal group relative overflow-hidden rounded-2xl hover:shadow-neon transition-all duration-300"
                            >
                                {/* Image */}
                                <div className="h-80 overflow-hidden relative">
                                    <img
                                        src={trainer.image}
                                        alt={trainer.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-charcoal to-transparent"></div>

                                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full flex items-center border border-neon-green/30">
                                        <Star size={14} className="text-neon-green fill-neon-green mr-1" />
                                        <span className="text-white text-xs font-bold">{trainer.rating}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 relative">
                                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors">{trainer.name}</h3>
                                    <p className="text-neon-cyan text-sm mb-4 font-medium">{trainer.cert}</p>

                                    <div className="flex justify-between items-center mb-6 text-gray-400 text-xs">
                                        <div className="flex items-center">
                                            <Award size={14} className="mr-1.5" />
                                            <span>{trainer.experience} Exp</span>
                                        </div>
                                        <div className="flex items-center">
                                            <Users size={14} className="mr-1.5" />
                                            <span>{trainer.clients} Clients</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {trainer.expertise.map((tag, i) => (
                                            <span key={i} className="text-[10px] uppercase tracking-wider bg-white/5 text-gray-300 px-2 py-1 rounded border border-white/10">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <Button variant="outline" className="w-full text-xs py-2 border-white/10 hover:border-neon-cyan hover:text-neon-cyan">
                                        View Profile
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Trainers;
