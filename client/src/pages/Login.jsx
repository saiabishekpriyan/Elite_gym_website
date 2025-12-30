import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const { login, error } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await login(formData.email, formData.password);
        if (user) {
            if (user.role === 'admin') {
                navigate('/admin');
            } else {
                navigate('/');
            }
        }
    };

    return (
        <div className="bg-dark-bg min-h-screen flex items-center justify-center py-20 px-6 bg-[url('https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center relative">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0"></div>

            <div className="bg-charcoal p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl w-full max-w-md relative z-10">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
                    <p className="text-gray-400">Login to access your elite profile</p>
                </div>

                {error && (
                    <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded-lg mb-6 text-sm text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium text-gray-300 ml-1">Password</label>
                            <Link to="#" className="text-xs text-neon-cyan hover:underline">Forgot Password?</Link>
                        </div>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <div className="flex items-center">
                        <input type="checkbox" id="remember" className="w-4 h-4 rounded bg-black/40 border-white/20 text-neon-cyan focus:ring-neon-cyan" />
                        <label htmlFor="remember" className="ml-2 text-sm text-gray-400">Remember me</label>
                    </div>

                    <Button variant="gradient" className="w-full py-4 text-base font-bold tracking-wide">
                        Login
                    </Button>
                </form>

                <div className="mt-8 text-center space-y-4">
                    <p className="text-gray-400 text-sm">
                        Don't have an account? <Link to="/signup" className="text-neon-green font-bold hover:underline">Sign Up</Link>
                    </p>
                    <div className="border-t border-white/5 pt-4">
                        <button className="text-sm text-gray-500 hover:text-white transition-colors">
                            Login with OTP
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
