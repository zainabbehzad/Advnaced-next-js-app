export default function AboutPage() {
    return (
      <div className="max-w-4xl mx-auto py-10 px-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold mb-6 text-navyBlue text-center">About Weather Dashboard</h1>
        
        <p className="mb-6 text-lg text-gray-700 text-center">
          The Weather Dashboard is your go-to application for staying updated with the latest weather information and forecasts for cities around the world.
        </p>
        
        <h2 className="text-4xl font-semibold mb-4 text-navyBlue">Features</h2>
        <ul className="list-disc list-inside mb-6 text-lg text-gray-700">
          <li>🌍 Real-time weather updates for multiple cities</li>
          <li>🌡️ Detailed forecasts with temperature, humidity, and conditions</li>
          <li>🖥️ User-friendly interface for easy navigation</li>
        </ul>
    
        <h2 className="text-4xl font-semibold mb-4 text-navyBlue">Technology Stack</h2>
        <p className="mb-6 text-lg text-gray-700">
          Built using <strong>Next.js</strong> and powered by the <strong>OpenWeather API</strong>, ensuring fast and reliable weather data.
        </p>
    
        <h2 className="text-4xl font-semibold mb-4 text-navyBlue">About the Developer</h2>
        <p className="mb-6 text-lg text-gray-700">
          Developed by <strong>Zainab Behzad</strong>, a passionate web developer dedicated to providing accurate and user-friendly weather information.
        </p>
    
        <h2 className="text-4xl font-semibold mb-4 text-navyBlue">Contact Us</h2>
        <p className="mb-6 text-lg text-gray-700">
          For support or inquiries, please reach out to us at 
          <a href="mailto:zainabbehzad03@gmail.com" className="text-lightBlue hover:underline"> zainabbehzad03@gmail.com</a>.
        </p>
    
        <h2 className="text-4xl font-semibold mb-4 text-navyBlue">Future Plans</h2>
        <p className="mb-6 text-lg text-gray-700">
          We plan to add more features, including user accounts, personalized weather alerts, and additional geographical data.
        </p>
    
        {/* Add the image here */}
        <div className="mt-8 text-center">
          <img src="/images/R.jpeg" alt="Weather Dashboard" className="mx-auto rounded-lg shadow-md" />
        </div>
      </div>
    );
  }