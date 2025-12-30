import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus, Trash2 } from 'lucide-react';
import Button from '../ui/Button';

const AdminTrainers = () => {
    const [trainers, setTrainers] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        bio: '',
        specialties: '',
        image: ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchTrainers();
    }, []);

    const fetchTrainers = async () => {
        try {
            const res = await axios.get('/trainers');
            setTrainers(res.data);
        } catch (error) {
            console.error('Error fetching trainers:', error);
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
            // Convert comma separated string to array for specialties if needed, 
            // but backend schema might expect array. Let's send array.
            const dataToSend = {
                ...formData,
                specialties: formData.specialties.split(',').map(s => s.trim())
            };

            await axios.post('/trainers', dataToSend);
            setMessage('Trainer added successfully!');
            setFormData({ name: '', role: '', bio: '', specialties: '', image: '' });
            fetchTrainers();
        } catch (error) {
            setMessage('Error adding trainer');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this trainer?')) {
            try {
                await axios.delete(`/trainers/${id}`);
                fetchTrainers();
            } catch (error) {
                console.error('Error deleting trainer:', error);
            }
        }
    };

    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white uppercase">Manage Trainers</h2>

            {/* Add Trainer Form */}
            <div className="bg-charcoal-light p-6 rounded-2xl border border-white/5">
                <h3 className="text-xl font-bold text-white mb-4">Add New Trainer</h3>
                {message && <p className={`mb-4 ${message.includes('Error') ? 'text-red-500' : 'text-neon-green'}`}>{message}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white w-full focus:border-neon-cyan outline-none" required />
                        <input type="text" name="role" value={formData.role} onChange={handleChange} placeholder="Role (e.g. Head Coach)" className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white w-full focus:border-neon-cyan outline-none" required />
                        <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white w-full focus:border-neon-cyan outline-none" required />
                        <input type="text" name="specialties" value={formData.specialties} onChange={handleChange} placeholder="Specialties (comma separated)" className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white w-full focus:border-neon-cyan outline-none" required />
                    </div>
                    <textarea name="bio" value={formData.bio} onChange={handleChange} placeholder="Bio" className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white w-full focus:border-neon-cyan outline-none h-24" required></textarea>
                    <Button variant="primary" type="submit" className="w-full md:w-auto">
                        {loading ? 'Adding...' : 'Add Trainer'}
                    </Button>
                </form>
            </div>

            {/* Trainers List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trainers.map((trainer) => (
                    <div key={trainer._id} className="bg-charcoal-light p-4 rounded-xl border border-white/5 flex items-center space-x-4">
                        <img src={trainer.image} alt={trainer.name} className="w-16 h-16 rounded-full object-cover" />
                        <div className="flex-1">
                            <h4 className="text-white font-bold">{trainer.name}</h4>
                            <p className="text-gray-400 text-sm">{trainer.role}</p>
                        </div>
                        <button onClick={() => handleDelete(trainer._id)} className="text-red-500 hover:text-red-400 p-2">
                            <Trash2 size={20} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminTrainers;
