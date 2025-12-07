import { NextResponse } from 'next/server';

export async function GET() {
    const res = await fetch('https://api.example.com/movies'); // Replace with the actual API endpoint
    const movies = await res.json();

    return NextResponse.json(movies);
}