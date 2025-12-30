import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Trash2 } from 'lucide-react';
import Button from '../ui/Button';

const AdminProducts = () => {
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        category: '',
        image: '',
        stock: ''
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const res = await axios.get('/products');
            setProducts(res.data);
        } catch (error) {
            console.error('Error fetching products:', error);
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
            await axios.post('/products', formData);
            setMessage('Product added successfully!');
            setFormData({ name: '', description: '', price: '', category: '', image: '', stock: '' });
            fetchProducts();
        } catch (error) {
            setMessage('Error adding product');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            try {
                await axios.delete(`/products/${id}`);
                fetchProducts();
            } catch (error) {
                console.error('Error deleting product:', error);
            }
        }
    };

    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white uppercase">Manage Store</h2>

            {/* Add Product Form */}
            <div className="bg-charcoal-light p-6 rounded-2xl border border-white/5">
                <h3 className="text-xl font-bold text-white mb-4">Add New Product</h3>
                {message && <p className={`mb-4 ${message.includes('Error') ? 'text-red-500' : 'text-neon-green'}`}>{message}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white w-full focus:border-neon-cyan outline-none" required />
                        <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white w-full focus:border-neon-cyan outline-none" required />
                        <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white w-full focus:border-neon-cyan outline-none" required />
                        <input type="number" name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock Quantity" className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white w-full focus:border-neon-cyan outline-none" required />
                    </div>
                    <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white w-full focus:border-neon-cyan outline-none" required />
                    <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-white w-full focus:border-neon-cyan outline-none h-24" required></textarea>
                    <Button variant="primary" type="submit" className="w-full md:w-auto">
                        {loading ? 'Adding...' : 'Add Product'}
                    </Button>
                </form>
            </div>

            {/* Products List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product._id} className="bg-charcoal-light p-4 rounded-xl border border-white/5 flex flex-col">
                        <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-4" />
                        <div className="flex-1">
                            <h4 className="text-white font-bold">{product.name}</h4>
                            <p className="text-neon-green font-bold">${product.price}</p>
                            <p className="text-gray-400 text-sm">Stock: {product.stock}</p>
                        </div>
                        <button onClick={() => handleDelete(product._id)} className="text-red-500 hover:text-red-400 mt-4 self-end">
                            <Trash2 size={20} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminProducts;
