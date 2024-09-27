export default function Footer() {
  return (
    <footer className="bg-navyBlue text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center py-0 pb-6">
        <p className="font-bold">&copy; {new Date().getFullYear()} Weather Dashboard. All rights reserved.</p>
        <div className="flex space-x-2 mt-1 md:mt-0">
          <a href="/privacy" className="hover:underline text-base">
            Privacy Policy
          </a>
          <a href="/terms" className="hover:underline text-base">
            Terms of Service
          </a>
          <a href="/contact" className="hover:underline text-base">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}