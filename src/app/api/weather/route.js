// src/app/api/weather/route.ts
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city') || 'New York'; // Default to New York if no city is provided
  const apiKey = process.env.WEATHER_API_KEY; // Your weather API key

  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

    if (!res.ok) {
      return NextResponse.json({ message: 'City not found' }, { status: 404 });
    }

    const weatherData = await res.json();
    return NextResponse.json(weatherData);
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Error fetching weather data:', error);

    return NextResponse.json({ message: 'Error fetching weather data' }, { status: 500 });
  }
}