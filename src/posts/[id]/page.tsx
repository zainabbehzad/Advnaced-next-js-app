import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface Weather {
  id: number;
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
}

const fetchWeather = async (id: string): Promise<Weather | null> => {
  const apiKey = process.env.WEATHER_API_KEY;
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&units=metric`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
};

export default async function WeatherPage({ params }: { params: { id: string } }) {
  const weather = await fetchWeather(params.id);

  if (!weather) {
    notFound();
    return null;
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="text-5xl font-bold mb-6 text-navyBlue">{weather.name}</h1>
      <Image
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={`Weather icon for ${weather.name}`}
        width={100}
        height={100}
        className="w-auto h-auto mb-6"
      />
      <p className="text-lg text-gray-700">Temperature: {Math.round(weather.main.temp)}°C</p>
      <p className="text-lg text-gray-700">Humidity: {weather.main.humidity}%</p>
      <p className="text-lg text-gray-700">Condition: {weather.weather[0].description}</p>
      <div className="mt-6">
        <Link href="/weather" className="text-lightBlue font-semibold hover:text-navyBlue transition-colors duration-300">
          Back to Weather Dashboard
        </Link>
      </div>
    </div>
  );
}