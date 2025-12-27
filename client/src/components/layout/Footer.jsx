import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-charcoal text-white pt-16 pb-8 border-t border-white/10">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="space-y-4">
                    <Link to="/" className="text-2xl font-bold tracking-tighter uppercase">
                        <span className="text-white">Elite</span>
                        <span className="text-neon-cyan mx-1">Fitness</span>
                        <span className="text-white">Hub</span>
                    </Link>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Unleash your potential with world-class equipment, expert trainers, and a supportive community. Join the elite.
                    </p>
                    <div className="flex space-x-4">
                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                            <a key={i} href="#" className="text-gray-400 hover:text-neon-green transition-colors">
                                <Icon size={20} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-6 text-neon-cyan">Quick Links</h3>
                    <ul className="space-y-3">
                        {['Home', 'About Us', 'Membership', 'Trainers', 'Classes', 'Blog'].map((item) => (
                            <li key={item}>
                                <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h3 className="text-lg font-semibold mb-6 text-neon-cyan">Support</h3>
                    <ul className="space-y-3">
                        {['Contact Us', 'FAQ', 'Terms & Conditions', 'Privacy Policy'].map((item) => (
                            <li key={item}>
                                <Link to="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-6 text-neon-cyan">Contact Info</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start spaces-x-3 text-gray-400 text-sm">
                            <MapPin size={18} className="text-neon-green mr-2 mt-0.5 flex-shrink-0" />
                            <span>123 Elite Ave, Fitness City, FC 90210</span>
                        </li>
                        <li className="flex items-center spaces-x-3 text-gray-400 text-sm">
                            <Phone size={18} className="text-neon-green mr-2 flex-shrink-0" />
                            <span>+1 (555) 123-4567</span>
                        </li>
                        <li className="flex items-center spaces-x-3 text-gray-400 text-sm">
                            <Mail size={18} className="text-neon-green mr-2 flex-shrink-0" />
                            <span>info@elitefitnesshub.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 text-center text-gray-500 text-xs">
                <p>&copy; {new Date().getFullYear()} Elite Fitness Hub. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
