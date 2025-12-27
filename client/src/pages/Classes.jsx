import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';

const Classes = () => {
    const schedule = {
        Monday: [
            { time: '06:00 AM', name: 'HIIT Training', trainer: 'Marcus Thompson', spots: 5, total: 20 },
            { time: '09:00 AM', name: 'Yoga Flow', trainer: 'Sarah Jenkins', spots: 0, total: 20 },
            { time: '05:30 PM', name: 'Power Lifting', trainer: 'David Martinez', spots: 8, total: 15 },
        ],
        Tuesday: [
            { time: '07:00 AM', name: 'Cardio Blast', trainer: 'Elena Rodriguez', spots: 12, total: 25 },
            { time: '06:00 PM', name: 'CrossFit', trainer: 'David Martinez', spots: 2, total: 20 },
        ],
        Wednesday: [
            { time: '06:00 AM', name: 'HIIT Training', trainer: 'Marcus Thompson', spots: 5, total: 20 },
            { time: '08:00 PM', name: 'Zumba', trainer: 'Elena Rodriguez', spots: 15, total: 30 },
        ],
        Thursday: [
            { time: '10:00 AM', name: 'Pilates', trainer: 'Sarah Jenkins', spots: 4, total: 15 },
        ],
        Friday: [
            { time: '05:00 PM', name: 'Boxing', trainer: 'Marcus Thompson', spots: 0, total: 20 },
        ],
        Saturday: [
            { time: '08:00 AM', name: 'Bootcamp', trainer: 'All Trainers', spots: 20, total: 50 },
        ],
        Sunday: [
            { time: '09:00 AM', name: 'Yoga & Meditation', trainer: 'Sarah Jenkins', spots: 10, total: 25 },
        ],
    };

    const days = Object.keys(schedule);

    return (
        <Layout>
            <div className="bg-dark-bg min-h-screen py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold uppercase mb-4 text-white">
                            Weekly <span className="text-neon-cyan">Schedule</span>
                        </h1>
                        <p className="text-gray-400">Join a class and challenge yourself.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-7 gap-4 overflow-x-auto pb-8">
                        {days.map((day, index) => (
                            <div key={day} className="min-w-[200px] md:min-w-0">
                                <div className="bg-neon-cyan/10 border border-neon-cyan/20 p-3 text-center mb-4 rounded-lg">
                                    <h3 className="text-neon-cyan font-bold uppercase tracking-wider text-sm">{day}</h3>
                                </div>

                                <div className="space-y-4">
                                    {schedule[day].map((cls, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className={`bg-charcoal p-4 rounded-xl border border-white/5 hover:border-white/20 transition-all cursor-pointer ${cls.spots === 0 ? 'opacity-75' : ''}`}
                                        >
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="text-neon-green text-xs font-bold font-mono">{cls.time}</span>
                                                {cls.spots === 0 ? (
                                                    <span className="text-red-500 text-[10px] font-bold border border-red-500/50 px-1.5 py-0.5 rounded">FULL</span>
                                                ) : (
                                                    <span className="text-green-400 text-[10px] font-bold  bg-green-400/10 px-1.5 py-0.5 rounded">{cls.spots} Spots</span>
                                                )}
                                            </div>
                                            <h4 className="text-white font-bold text-sm mb-1">{cls.name}</h4>
                                            <p className="text-gray-500 text-xs">{cls.trainer}</p>
                                        </motion.div>
                                    ))}
                                    {schedule[day].length === 0 && (
                                        <div className="text-center py-8 text-gray-600 text-xs italic">Rest Day</div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Classes;
