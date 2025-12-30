import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { user, logout } = useAuth();

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Membership', path: '/membership' },
        { name: 'Trainers', path: '/trainers' },
        { name: 'Classes', path: '/classes' },
        { name: 'Blog', path: '/blog' },
        { name: 'Store', path: '/store' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold tracking-tighter uppercase group">
                    <span className="text-white">Elite</span>
                    <span className="text-neon-cyan mx-1 group-hover:shadow-neon-cyan transition-all">Fitness</span>
                    <span className="text-white">Hub</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-medium tracking-wide transition-colors duration-300 ${isActive(link.path)
                                ? 'text-neon-green'
                                : 'text-gray-300 hover:text-neon-cyan'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {user ? (
                        <div className="flex items-center space-x-4">
                            <span className="text-white text-sm font-medium tracking-wide">
                                Hi, <span className="text-neon-cyan">{user.name.split(' ')[0]}</span>
                            </span>
                            {user.role === 'admin' && (
                                <Link to="/admin">
                                    <Button variant="glow" className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                                        Admin
                                    </Button>
                                </Link>
                            )}
                            <Button onClick={logout} variant="outline" className="px-5 py-1.5 text-sm border-red-500/50 text-red-500 hover:bg-red-500 hover:text-white hover:border-red-500">
                                Logout
                            </Button>
                        </div>
                    ) : (
                        <Link to="/login">
                            <Button variant="primary" className="px-5 py-1.5 text-sm">
                                Login
                            </Button>
                        </Link>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-neon-cyan"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-xl absolute top-full left-0 w-full border-b border-white/10 md:hidden flex flex-col items-center py-6 space-y-4 animate-fade-in-down">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-lg font-medium ${isActive(link.path) ? 'text-neon-green' : 'text-gray-300'
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {user ? (
                        <div className="flex flex-col items-center space-y-3 mt-4 w-full px-6">
                            <span className="text-white">Logged in as {user.name}</span>
                            {user.role === 'admin' && (
                                <Link to="/admin" onClick={() => setIsOpen(false)}>
                                    <span className="text-neon-cyan font-bold uppercase tracking-widest text-sm">Dashboard</span>
                                </Link>
                            )}
                            <Button onClick={() => { logout(); setIsOpen(false); }} variant="outline" className="w-full border-red-500 text-red-500">
                                Logout
                            </Button>
                        </div>
                    ) : (
                        <Link to="/login" onClick={() => setIsOpen(false)}>
                            <Button variant="primary" className="w-40 mt-2">Login</Button>
                        </Link>
                    )}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
