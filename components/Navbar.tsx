import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-xl font-bold">Streaming Dashboard</h1>
                <div>
                    <Link href="/" className="text-gray-300 hover:text-white px-4">Home</Link>
                    <Link href="/dashboard" className="text-gray-300 hover:text-white px-4">Dashboard</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;