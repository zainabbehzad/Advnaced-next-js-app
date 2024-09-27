import Link from 'next/link';

const provinces = [
  { id: '101', name: 'Kabul' },           // Kabul Province
  { id: '102', name: 'Herat' },           // Herat Province
  { id: '103', name: 'Kandahar' },        // Kandahar Province
  { id: '104', name: 'Balkh' },           // Balkh Province
  { id: '105', name: 'Nangarhar' },       // Nangarhar Province
  { id: '106', name: 'Laghman' },         // Laghman Province
  { id: '107', name: 'Logar' },           // Logar Province
  { id: '108', name: 'Paktia' },          // Paktia Province
  { id: '109', name: 'Ghor' },            // Ghor Province
  { id: '110', name: 'Badakhshan' },      // Badakhshan Province
  { id: '111', name: 'Samangan' },        // Samangan Province
  { id: '112', name: 'Takhar' },          // Takhar Province
  { id: '113', name: 'Bamyan' },          // Bamyan Province
  { id: '114', name: 'Parwan' },          // Parwan Province
  { id: '115', name: 'Kunar' },           // Kunar Province
  { id: '116', name: 'Nuristan' },        // Nuristan Province
  { id: '117', name: 'Panjshir' },        // Panjshir Province
  { id: '118', name: 'Zabul' },           // Zabul Province
  { id: '119', name: 'Urozgan' },         // Urozgan Province
  { id: '120', name: 'Daykundi' },        // Daykundi Province
  { id: '121', name: 'Jowzjan' },         // Jowzjan Province
  { id: '122', name: 'Faryab' },          // Faryab Province
  { id: '123', name: 'Sar-e Pol' },       // Sar-e Pol Province
  { id: '124', name: 'Badghis' },         // Badghis Province
  { id: '125', name: 'Ghazni' },          // Ghazni Province
  { id: '126', name: 'Wardak' },          // Wardak Province
  { id: '127', name: 'Khost' },           // Khost Province
  { id: '128', name: 'Nimroz' },          // Nimroz Province
  { id: '129', name: 'Helmand' },         // Helmand Province
  { id: '130', name: 'Farah' },           // Farah Province
  { id: '131', name: 'Kapisa' },          // Kapisa Province
  { id: '132', name: 'Paktika' },         // Paktika Province
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