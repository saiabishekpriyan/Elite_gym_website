import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Button from '../components/ui/Button';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        age: '',
        height: '',
        weight: '',
        gender: 'Male',
        address: '',
        fitnessGoal: 'General Fitness'
    });
    const { signup, error } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        const userData = {
            name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            password: formData.password,
            age: formData.age ? Number(formData.age) : undefined,
            height: formData.height,
            weight: formData.weight,
            gender: formData.gender,
            address: formData.address,
            fitnessGoal: formData.fitnessGoal
        };

        const success = await signup(userData);
        if (success) {
            navigate('/');
        }
    };

    return (
        <div className="bg-dark-bg min-h-screen flex items-center justify-center py-20 px-6 bg-[url('https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center relative font-sans">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-0"></div>

            <div className="bg-charcoal p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl w-full max-w-4xl relative z-10 transition-all hover:shadow-neon/20">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold text-white mb-2">Create Your Profile</h1>
                    <p className="text-gray-400">Join the elite community and track your journey</p>
                </div>

                {error && (
                    <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-2 rounded-lg mb-6 text-sm text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Left Column: Personal Info */}
                        <div className="space-y-5">
                            <h3 className="text-neon-cyan font-semibold uppercase tracking-wider text-sm border-b border-white/5 pb-2">Personal Details</h3>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300 ml-1">Full Name</label>
                                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all outline-none" placeholder="John Doe" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300 ml-1">Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all outline-none" placeholder="john@example.com" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300 ml-1">Phone</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all outline-none" placeholder="+1 (555)..." required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300 ml-1">Address</label>
                                <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all outline-none" placeholder="123 Fitness St." />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 ml-1">Password</label>
                                    <input type="password" name="password" value={formData.password} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all outline-none" placeholder="••••••••" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 ml-1">Confirm</label>
                                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all outline-none" placeholder="••••••••" required />
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Key Stats */}
                        <div className="space-y-5">
                            <h3 className="text-neon-cyan font-semibold uppercase tracking-wider text-sm border-b border-white/5 pb-2">Physical Stats</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 ml-1">Age</label>
                                    <input type="number" name="age" value={formData.age} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all outline-none" placeholder="25" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 ml-1">Gender</label>
                                    <select name="gender" value={formData.gender} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all outline-none appearance-none">
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 ml-1">Height</label>
                                    <input type="text" name="height" value={formData.height} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all outline-none" placeholder="5'10" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-300 ml-1">Weight</label>
                                    <input type="text" name="weight" value={formData.weight} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all outline-none" placeholder="180 lbs" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300 ml-1">Fitness Goal</label>
                                <select name="fitnessGoal" value={formData.fitnessGoal} onChange={handleChange} className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-3 text-white focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all outline-none appearance-none">
                                    <option value="General Fitness">General Fitness</option>
                                    <option value="Weight Loss">Weight Loss</option>
                                    <option value="Weight Gain">Weight Gain</option>
                                    <option value="Muscle Building">Muscle Building</option>
                                    <option value="Endurance">Endurance</option>
                                    <option value="Flexibility">Flexibility</option>
                                </select>
                            </div>

                            <div className="flex items-start pt-5">
                                <input type="checkbox" id="terms" className="mt-1 w-4 h-4 rounded bg-black/40 border-white/20 text-neon-green focus:ring-neon-green" required />
                                <label htmlFor="terms" className="ml-2 text-sm text-gray-400 leading-tight">
                                    I agree to the <Link to="#" className="text-white hover:underline">Terms of Service</Link> and <Link to="#" className="text-white hover:underline">Privacy Policy</Link>
                                </label>
                            </div>
                        </div>
                    </div>

                    <Button variant="gradient" className="w-full py-4 text-base font-bold tracking-wide mt-2">
                        Create Account
                    </Button>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        Already have an account? <Link to="/login" className="text-neon-cyan font-bold hover:underline">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
