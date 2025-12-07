import React from 'react';

const Filters: React.FC = () => {
    return (
        <div className="flex space-x-4 mb-4">
            <select className="border rounded p-2">
                <option value="">All Genres</option>
                <option value="action">Action</option>
                <option value="comedy">Comedy</option>
                <option value="drama">Drama</option>
                <option value="horror">Horror</option>
                <option value="romance">Romance</option>
            </select>
            <select className="border rounded p-2">
                <option value="">Sort By</option>
                <option value="popularity">Popularity</option>
                <option value="rating">Rating</option>
                <option value="release_date">Release Date</option>
            </select>
        </div>
    );
};

export default Filters;