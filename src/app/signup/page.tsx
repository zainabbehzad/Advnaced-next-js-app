export default function SignupPage() {
    return (
      <div className="max-w-md mx-auto py-40 px-6">
        <h1 className="text-4xl font-bold mb-6 text-navyBlue">Sign Up</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-black focus:ring-lightBlue focus:border-lightBlue"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-black focus:ring-lightBlue focus:border-lightBlue"
            />
          </div>
          <button type="submit" className="w-full bg-lightBlue text-white py-2 rounded hover:bg-navyBlue transition-colors duration-300">
            Create Account
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account? <a href="/login" className="text-lightBlue hover:underline">Log in</a>
          </p>
        </div>
      </div>
    );
  }