import React from 'react';
import { motion } from 'framer-motion';
import { Clock, User, ArrowRight, Tag } from 'lucide-react';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';

const Blog = () => {
    const featured = {
        title: 'The Ultimate Guide to Building Muscle Mass',
        image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop',
        category: 'Workouts',
        readTime: '8 min read',
        author: 'Marcus Thompson',
        date: 'Dec 15, 2025',
        desc: 'Discover the science-backed strategies to hypertrophy, from progressive overload to nutritional timing. Transform your physique with these proven methods.'
    };

    const articles = [
        {
            title: 'Nutrition 101: Fueling Your Body',
            image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070&auto=format&fit=crop',
            category: 'Nutrition',
            readTime: '5 min read',
            author: 'Elena Rodriguez',
            date: 'Dec 12, 2025',
            desc: 'Understanding macronutrients and micronutrients is key to performance. Learn the basics of a balanced diet.'
        },
        {
            title: 'The Benefits of HIIT Training',
            image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=1925&auto=format&fit=crop',
            category: 'Workouts',
            readTime: '4 min read',
            author: 'Sarah Jenkins',
            date: 'Dec 10, 2025',
            desc: 'Maximize your calorie burn and improve cardiovascular health with High-Intensity Interval Training.'
        },
        {
            title: 'Mental Toughness in Sports',
            image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1974&auto=format&fit=crop',
            category: 'Motivation',
            readTime: '6 min read',
            author: 'David Martinez',
            date: 'Dec 08, 2025',
            desc: 'Your mind gives up before your body does. Learn how to push through the pain barrier.'
        }
    ];

    return (
        <Layout>
            <div className="bg-dark-bg min-h-screen py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold uppercase mb-4 text-white">
                            Fitness <span className="text-neon-cyan">Blog</span>
                        </h1>
                        <p className="text-gray-400">Insights, tips, and motivation from the experts.</p>
                    </div>

                    {/* Featured Article */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 bg-charcoal rounded-3xl overflow-hidden border border-white/5 hover:border-neon-cyan/30 transition-all group"
                    >
                        <div className="h-80 lg:h-auto overflow-hidden">
                            <img
                                src={featured.image}
                                alt={featured.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <div className="flex items-center space-x-4 mb-4 text-xs font-bold uppercase tracking-wider">
                                <span className="text-black bg-neon-cyan px-2 py-1 rounded">{featured.category}</span>
                                <span className="text-gray-400 flex items-center"><Clock size={14} className="mr-1" /> {featured.readTime}</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight group-hover:text-neon-cyan transition-colors">
                                {featured.title}
                            </h2>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {featured.desc}
                            </p>
                            <div className="flex justify-between items-center mt-auto">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-gray-700 mr-3 flex items-center justify-center">
                                        <User size={20} className="text-gray-300" />
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-bold">{featured.author}</p>
                                        <p className="text-gray-500 text-xs">{featured.date}</p>
                                    </div>
                                </div>
                                <Button variant="secondary" className="px-6">Read More</Button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Latest Articles */}
                    <h3 className="text-2xl font-bold text-white mb-8 border-l-4 border-neon-green pl-4">Latest Articles</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-charcoal rounded-2xl overflow-hidden border border-white/5 hover:border-neon-green/30 transition-all hover:shadow-lg group"
                            >
                                <div className="h-56 overflow-hidden relative">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-black/70 backdrop-blur-md text-neon-green text-xs font-bold px-3 py-1 rounded uppercase flex items-center">
                                            <Tag size={12} className="mr-1" /> {article.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center text-gray-500 text-xs mb-3 space-x-3">
                                        <span className="flex items-center"><Clock size={12} className="mr-1" /> {article.readTime}</span>
                                        <span>•</span>
                                        <span>{article.date}</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-neon-green transition-colors leading-tight">
                                        {article.title}
                                    </h4>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                        {article.desc}
                                    </p>
                                    <div className="flex items-center justify-between border-t border-white/5 pt-4">
                                        <span className="text-gray-300 text-xs font-medium">By {article.author}</span>
                                        <button className="text-neon-cyan text-xs font-bold uppercase tracking-wider flex items-center hover:underline">
                                            Read <ArrowRight size={12} className="ml-1" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Blog;
