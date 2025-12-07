import React from 'react';

interface MovieCardProps {
    title: string;
    posterUrl: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, posterUrl }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={posterUrl} alt={title} className="w-full h-64 object-cover" />
            <div className="p-4">
                <h3 className="text-lg font-semibold">{title}</h3>
            </div>
        </div>
    );
};

export default MovieCard;