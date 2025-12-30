import React from 'react';
import Layout from '../components/layout/Layout';
import { ShoppingBag } from 'lucide-react';

const Store = () => {
    return (
        <Layout>
            <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
                <div className="w-24 h-24 bg-charcoal-light rounded-full flex items-center justify-center mb-8 border border-white/5 shadow-neon">
                    <ShoppingBag size={48} className="text-neon-cyan" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold uppercase mb-4 text-white">
                    Elite <span className="text-neon-green">Store</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mb-8">
                    Premium gear and supplements to fuel your journey.
                    <br />
                    <span className="text-neon-cyan font-semibold mt-2 block">Coming Soon</span>
                </p>

                <div className="p-1 px-4 rounded-full bg-white/5 border border-white/10 text-sm text-gray-500">
                    Stay tuned for launch
                </div>
            </div>
        </Layout>
    );
};

export default Store;
