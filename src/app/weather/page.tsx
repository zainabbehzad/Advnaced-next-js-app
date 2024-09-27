import Link from 'next/link';

const provinces = [
  { id: '101', name: 'Kabul' },
  { id: '102', name: 'Herat' },
  { id: '103', name: 'Kandahar' },
  { id: '104', name: 'Balkh' },
  { id: '105', name: 'Nangarhar' },
  { id: '106', name: 'Laghman' },
  { id: '107', name: 'Logar' },
  { id: '108', name: 'Paktia' },
  { id: '109', name: 'Ghor' },
  { id: '110', name: 'Badakhshan' },
  { id: '111', name: 'Samangan' },
  { id: '112', name: 'Takhar' },
  { id: '113', name: 'Bamyan' },
  { id: '114', name: 'Parwan' },
  { id: '115', name: 'Kunar' },
  { id: '116', name: 'Nuristan' },
  { id: '117', name: 'Panjshir' },
  { id: '118', name: 'Zabul' },
  { id: '119', name: 'Urozgan' },
  { id: '120', name: 'Daykundi' },
  { id: '121', name: 'Jowzjan' },
  { id: '122', name: 'Faryab' },
  { id: '123', name: 'Sar-e Pol' },
  { id: '124', name: 'Badghis' },
  { id: '125', name: 'Ghazni' },
  { id: '126', name: 'Wardak' },
  { id: '127', name: 'Khost' },
  { id: '128', name: 'Nimroz' },
  { id: '129', name: 'Helmand' },
  { id: '130', name: 'Farah' },
  { id: '131', name: 'Kapisa' },
  { id: '132', name: 'Paktika' },
];

export default function WeatherDashboard() {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 min-h-screen flex items-center justify-center py-1">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-5xl font-bold mb-6 text-navyBlue text-center">Welcome to the Weather Dashboard</h1>
        <p className="mb-6 text-lg text-gray-700 text-center">
          Stay updated with the latest weather information and forecasts for your favorite provinces in Afghanistan.
        </p>

        <h2 className="text-3xl font-semibold mb-4 text-center">Featured Provinces</h2>
        <div className="flex flex-col space-y-4">
          {provinces.map((province) => (
            <div key={province.id} className="bg-gray-100 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h3 className="text-xl font-bold text-blue-700">{province.name}</h3>
              <p className="text-gray-600">Get the latest weather updates for {province.name}.</p>
              <Link href={`/weather/${province.id}`} className="text-blue-500 font-semibold hover:text-blue-700 transition-colors duration-300">
                View Weather
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <h2 className="text-3xl font-semibold mb-4">Join Our Weather Community</h2>
          <p className="mb-6">Sign up to receive the latest weather alerts and updates directly to your inbox.</p>
          <Link href="/signup" className="bg-lightBlue text-white py-2 px-4 rounded-lg hover:bg-navyBlue transition-colors duration-300">
            Sign Up Now
          </Link>
        </div>
      </div>
    </div>
  );
}