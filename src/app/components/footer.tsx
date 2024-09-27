export default function Footer() {
  return (
    <footer className="bg-navyBlue text-white py-1 mt-10"> {/* Further decreased padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-xs">&copy; {new Date().getFullYear()} Weather Dashboard. All rights reserved.</p> {/* Smaller text */}
        <div className="flex space-x-2 mt-1 md:mt-0"> {/* Adjusted margin for spacing */}
          <a href="/privacy" className="hover:underline text-xs">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline text-xs">
            Terms of Service
          </a>
          <a href="/contact" className="hover:underline text-xs">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}