import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LayoutDashboard, Users, Calendar, ShoppingBag, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/ui/Button';
import AdminTrainers from '../../components/admin/AdminTrainers';
import AdminClasses from '../../components/admin/AdminClasses';
import AdminProducts from '../../components/admin/AdminProducts';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [stats, setStats] = useState(null);
    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try {
            const res = await axios.get('/admin/stats');
            setStats(res.data);
        } catch (error) {
            console.error('Error fetching stats:', error);
        }
    };

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'dashboard':
                return (
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-white uppercase">Overview</h2>
                        {stats ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <StatCard label="Total Users" value={stats.users} icon={Users} color="text-blue-500" />
                                <StatCard label="Active Trainers" value={stats.trainers} icon={Users} color="text-neon-cyan" />
                                <StatCard label="Scheduled Classes" value={stats.classes} icon={Calendar} color="text-purple-500" />
                                <StatCard label="Store Products" value={stats.products} icon={ShoppingBag} color="text-orange-500" />
                                <StatCard label="Total Revenue" value={`$${stats.revenue.toLocaleString()}`} icon={LayoutDashboard} color="text-neon-green" fullWidth />
                            </div>
                        ) : (
                            <div className="text-gray-400">Loading stats...</div>
                        )}
                    </div>
                );
            case 'trainers':
                return <AdminTrainers />;
            case 'classes':
                return <AdminClasses />;
            case 'products':
                return <AdminProducts />;
            default:
                return null;
        }
    };

    return (
        <div className="flex min-h-screen bg-dark-bg text-gray-100 font-sans">
            {/* Sidebar */}
            <div className="w-64 bg-charcoal border-r border-white/10 p-6 flex flex-col">
                <div className="mb-10 flex items-center space-x-2">
                    <span className="text-2xl font-bold text-white uppercase tracking-tighter">
                        Elite <span className="text-neon-cyan">Admin</span>
                    </span>
                </div>

                <nav className="flex-1 space-y-2">
                    <SidebarItem icon={LayoutDashboard} label="Dashboard" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
                    <SidebarItem icon={Users} label="Trainers" active={activeTab === 'trainers'} onClick={() => setActiveTab('trainers')} />
                    <SidebarItem icon={Calendar} label="Classes" active={activeTab === 'classes'} onClick={() => setActiveTab('classes')} />
                    <SidebarItem icon={ShoppingBag} label="Store" active={activeTab === 'products'} onClick={() => setActiveTab('products')} />
                </nav>

                <div className="mt-auto">
                    <button onClick={handleLogout} className="flex items-center space-x-3 text-red-500 hover:text-red-400 transition-colors w-full px-4 py-3 rounded-lg hover:bg-white/5">
                        <LogOut size={20} />
                        <span className="font-medium">Logout</span>
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8 overflow-y-auto">
                {renderContent()}
            </div>
        </div>
    );
};

const SidebarItem = ({ icon: Icon, label, active, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${active ? 'bg-neon-cyan/10 text-neon-cyan' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
    >
        <Icon size={20} />
        <span className="font-medium">{label}</span>
    </button>
);

const StatCard = ({ label, value, icon: Icon, color, fullWidth }) => (
    <div className={`bg-charcoal-light p-6 rounded-2xl border border-white/5 shadow-lg ${fullWidth ? 'md:col-span-2 lg:col-span-4' : ''}`}>
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-400 font-medium text-sm uppercase tracking-wider">{label}</h3>
            <div className={`p-2 rounded-lg bg-black/40 ${color}`}>
                <Icon size={24} />
            </div>
        </div>
        <div className="text-3xl font-bold text-white">{value}</div>
    </div>
);

export default AdminDashboard;
