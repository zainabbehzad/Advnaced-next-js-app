import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-600 min-h-screen flex flex-col items-center justify-center text-white">
      <div className="max-w-2xl mx-auto text-center py-10 px-6 rounded-lg shadow-lg bg-blue-800">
        <h1 className="text-5xl font-bold mb-4">Welcome to the Weather Dashboard</h1>
        <p className="mb-6 text-lg">
          Stay updated with the latest weather information and forecasts for your favorite cities.
        </p>

        <h2 className="text-3xl font-semibold mb-4">Explore Our Features</h2>
        <ul className="mb-6 list-disc list-inside">
          <li>Real-time weather updates</li>
          <li>Customizable alerts</li>
          <li>User-friendly interface</li>
          <li>Access to detailed forecasts</li>
        </ul>

        <div className="mt-10">
          <h2 className="text-3xl font-semibold mb-4">Join Our Weather Community</h2>
          <p className="mb-6">Sign up to receive the latest weather alerts and updates directly to your inbox.</p>
          <Link href="/signup" className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-400 transition-colors duration-300">
            Sign Up Now
          </Link>
        </div>
      </div>
    </div>
  );
}