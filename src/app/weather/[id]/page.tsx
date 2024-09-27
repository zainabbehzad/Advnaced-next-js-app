import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Weather = {
  temp: number;
  humidity: number;
  description: string;
  icon: string;
};

const provinceNames: { [key: string]: string } = {
  '101': 'Kabul',
  '102': 'Herat',
  '103': 'Kandahar',
  '104': 'Balkh',
  '105': 'Nangarhar',
  '106': 'Laghman',
  '107': 'Logar',
  '108': 'Paktia',
  '109': 'Ghor',
  '110': 'Badakhshan',
  '111': 'Samangan',
  '112': 'Takhar',
  '113': 'Bamyan',
  '114': 'Parwan',
  '115': 'Kunar',
  '116': 'Nuristan',
  '117': 'Panjshir',
  '118': 'Zabul',
  '119': 'Urozgan',
  '120': 'Daykundi',
  '121': 'Jowzjan',
  '122': 'Faryab',
  '123': 'Sar-e Pol',
  '124': 'Badghis',
  '125': 'Ghazni',
  '126': 'Wardak',
  '127': 'Khost',
  '128': 'Nimroz',
  '129': 'Helmand',
  '130': 'Farah',
  '131': 'Kapisa',
  '132': 'Paktika',
};

// Simulated function to generate weather data
const getWeatherData = (): Weather => {
  const temp = Math.floor(Math.random() * (35 - 10 + 1)) + 10;
  const humidity = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
  const conditions = [
    { description: "clear sky", icon: "01d" },
    { description: "partly cloudy", icon: "02d" },
    { description: "sunny", icon: "01d" },
    { description: "overcast", icon: "04d" },
    { description: "light rain", icon: "10d" },
    { description: "rain", icon: "09d" },
    { description: "fog", icon: "50d" },
    { description: "drizzle", icon: "09d" },
    { description: "storm", icon: "11d" },
  ];
  const condition = conditions[Math.floor(Math.random() * conditions.length)];
  return { temp, humidity, ...condition };
};

// Fetch weather data function
async function fetchWeather(id: string): Promise<Weather | null> {
  return getWeatherData(); // Always return simulated weather data
}

export default async function WeatherPage({ params }: { params: { id: string } }) {
  const { id } = params;

  console.log("Fetching weather for ID:", id); // Debugging log

  // Fetch weather data
  const weather: Weather | null = await fetchWeather(id).catch((error) => {
    console.error("Error fetching weather data:", error);
    notFound();
    return null;
  });

  console.log("Weather data:", weather); // Debugging log

  if (!weather) {
    return <div>Error: Weather data not found.</div>;
  }

  const provinceName = provinceNames[id] || 'Unknown Province';

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="text-5xl font-bold mb-6">{provinceName}</h1>
      <Image
        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
        alt={`Weather icon for ${provinceName}`}
        width={100}
        height={100}
        className="w-auto h-auto mb-6"
      />
      <p className="text-lg">Temperature: {Math.round(weather.temp)}°C</p>
      <p className="text-lg">Humidity: {weather.humidity}%</p>
      <p className="text-lg">Condition: {weather.description}</p>
      <Link href="/weather" className="text-blue-500 font-semibold hover:text-blue-700 transition-colors duration-300">
        Back to Weather Dashboard
      </Link>
    </div>
  );
}