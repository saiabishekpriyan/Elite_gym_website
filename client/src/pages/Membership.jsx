import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { Check } from 'lucide-react';
import Layout from '../components/layout/Layout';

const Membership = () => {
    const plans = [
        {
            name: 'Basic',
            price: '$29',
            features: ['Gym Floor Access', 'Basic Equipment', 'Locker Room', '2 Group Classes / Week', 'Mobile App Access'],
            borderColor: 'border-white/10',
            glow: '',
            buttonVariant: 'outline'
        },
        {
            name: 'Premium',
            price: '$59',
            period: '/mo',
            label: 'Most Popular',
            features: ['Unlimited Group Classes', 'All Locations', 'Guest Passes', 'Nutrition Consultation', 'Towel Service', 'Priority Booking'], // + Basic included implicity or listed full? "Includes everything in Basic +"
            borderColor: 'border-neon-cyan',
            glow: 'shadow-neon',
            buttonVariant: 'glow'
        },
        {
            name: 'Elite',
            price: '$99',
            features: ['4 Personal Training Sessions', 'Custom Workouts', 'Body Composition Analysis', 'Private Locker', 'Spa & Sauna', 'VIP Events', 'Priority 24/7 Support'],
            borderColor: 'border-neon-green',
            glow: 'shadow-neon-green',
            buttonVariant: 'primary'
        }
    ];

    return (
        <Layout>
            <div className="bg-dark-bg min-h-screen py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold uppercase mb-4 text-white">
                            Membership <span className="text-neon-cyan">Plans</span>
                        </h1>
                        <p className="text-gray-400">Choose the plan that fits your journey.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative bg-charcoal-light rounded-3xl p-8 border-2 ${plan.borderColor} ${plan.glow ? plan.glow : 'hover:border-white/30'} flex flex-col items-center text-center transition-all duration-300`}
                            >
                                {plan.label && (
                                    <div className="absolute -top-4 bg-neon-cyan text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-neon">
                                        {plan.label}
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold text-white mb-2 uppercase">{plan.name}</h3>
                                <div className="mb-8">
                                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                                    <span className="text-gray-500 text-lg">/mo</span>
                                </div>

                                <ul className="space-y-4 mb-10 w-full text-left">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-gray-300 text-sm">
                                            <Check size={18} className={`mr-3 ${index === 2 ? 'text-neon-green' : index === 1 ? 'text-neon-cyan' : 'text-gray-500'}`} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto w-full">
                                    <Button variant={plan.buttonVariant} className="w-full">
                                        {index === 0 ? 'Get Started' : 'Join Now'}
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

export default Membership;
