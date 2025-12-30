import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Trash2 } from 'lucide-react';
import Button from '../ui/Button';

const AdminClasses = () => {
    const [classes, setClasses] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        time: '',
        trainer: '',
        category: '',
        difficulty: 'Beginner',
        totalSpots: 20
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchClasses();
    }, []);

    const fetchClasses = async () => {
        try {
            const res = await axios.get('/classes');
            setClasses(res.data);
        } catch (error) {
            console.error('Error fetching classes:', error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        try {
            await axios.post('/classes', formData);
            setMessage('Class added successfully!');
            setFormData({ name: '', time: '', trainer: '', category: '', difficulty: 'Beginner', totalSpots: 20 });
            fetchClasses();
        } catch (error) {
            setMessage('Error adding class');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this class?')) {
            try {
                await axios.delete(`/classes/${id}`);
                fetchClasses();
            } catch (error) {
                console.error('Error deleting class:', error);
            }
        }
    };

    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white uppercase">Manage Classes</h2>

            {/* Add Class Form */}
            <div className="bg-charcoal-light p-6 rounded-2xl border border-white/5">
                <h3 className="text-xl font-bold text-white mb-4">Schedule New Class</h3>
                {message && <p className={`mb-4 ${message.includes('Error') ? 'text-red-500' : 'text-neon-green'}`}>{message}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Class Name" className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white w-full focus:border-neon-cyan outline-none" required />
                        <input type="text" name="time" value={formData.time} onChange={handleChange} placeholder="Time (e.g. Mon 10:00 AM)" className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white w-full focus:border-neon-cyan outline-none" required />
                        <input type="text" name="trainer" value={formData.trainer} onChange={handleChange} placeholder="Trainer Name" className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white w-full focus:border-neon-cyan outline-none" required />
                        <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white w-full focus:border-neon-cyan outline-none" required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <select name="difficulty" value={formData.difficulty} onChange={handleChange} className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white w-full focus:border-neon-cyan outline-none">
                            <option value="Beginner">Beginner</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                        <input type="number" name="totalSpots" value={formData.totalSpots} onChange={handleChange} placeholder="Total Spots" className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white w-full focus:border-neon-cyan outline-none" required />
                    </div>
                    <Button variant="primary" type="submit" className="w-full md:w-auto">
                        {loading ? 'Adding...' : 'Add Class'}
                    </Button>
                </form>
            </div>

            {/* Classes List */}
            <div className="space-y-4">
                {classes.map((cls) => (
                    <div key={cls._id} className="bg-charcoal-light p-4 rounded-xl border border-white/5 flex items-center justify-between">
                        <div>
                            <h4 className="text-white font-bold text-lg">{cls.name}</h4>
                            <div className="text-gray-400 text-sm flex space-x-4">
                                <span>{cls.time}</span>
                                <span>with {cls.trainer}</span>
                                <span className="text-neon-cyan">{cls.difficulty}</span>
                            </div>
                        </div>
                        <button onClick={() => handleDelete(cls._id)} className="text-red-500 hover:text-red-400 p-2">
                            <Trash2 size={20} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminClasses;
