import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-5xl font-bold mb-6 text-navyBlue text-center">Contact Us</h1>
      <p className="mb-6 text-lg text-gray-700 text-center">
        We’d love to hear from you! If you have any questions, feedback, or inquiries, please fill out the form below or reach out to us directly.
      </p>

      <form className="space-y-4 bg-lightGray p-6 rounded-lg shadow-md">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-black focus:ring-lightBlue focus:border-lightBlue" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-black focus:ring-lightBlue focus:border-lightBlue" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea id="message" required rows={4} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm text-black focus:ring-lightBlue focus:border-lightBlue"></textarea>
        </div>
        <button type="submit" className="w-full bg-lightBlue text-white py-2 rounded hover:bg-navyBlue transition-colors duration-300">
          Send Message
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-lg text-black">Or reach us directly via email:</p>
        <p className="text-black hover:underline">
          <a href="mailto:zainabbehzad03@gmail.com">zainabbehzad03@gmail.com</a>
        </p>
      </div>

      <div className="mt-6 text-center">
        <h2 className="text-2xl font-semibold mb-4 text-black">Follow Us</h2>
        <ul className="flex justify-center space-x-6">
          <li>
            <a href="https://www.linkedin.com/in/zainab-behzad-3126692b5" className="hover:opacity-75 transition-opacity">
              <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: '#0077B5' }} />
            </a>
          </li>
          <li>
            <a href="https://github.com/zainabbehzad" className="hover:opacity-75 transition-opacity">
              <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#333' }} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/z_behzad_?igsh=a2ZuejVsZGp2a2pt" className="hover:opacity-75 transition-opacity">
              <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: '#E1306C' }} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}