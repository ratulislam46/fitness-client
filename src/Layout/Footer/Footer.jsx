import toast from "react-hot-toast";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {

  const handleSubcribe = (e) => {
    e.preventDefault()
    toast.success('Subscribe successfully!');
  }

  return (
    <footer className="bg-gray-900 text-gray-200 px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Column 1: Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">FitNest</h2>
          <p className="text-gray-400 text-sm">
            Your all-in-one fitness tracking and community platform.
            Smash goals, stay motivated, and transform your life.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-purple-400">Home</Link></li>
            <li><Link to="/classes" className="hover:text-purple-400">Classes</Link></li>
            <li><Link to="/trainers" className="hover:text-purple-400">Trainers</Link></li>
            <li><Link to="/contact" className="hover:text-purple-400">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Follow Us */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-purple-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-purple-400"><FaTwitter /></a>
            <a href="#" className="hover:text-purple-400"><FaInstagram /></a>
            <a href="#" className="hover:text-purple-400"><FaYoutube /></a>
          </div>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Subscribe</h3>
          <p className="text-gray-400 text-sm mb-2">Get weekly fitness tips & motivation in your inbox.</p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              onClick={handleSubcribe}
              className="bg-purple-600 hover:bg-purple-700 text-white py-2 rounded font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} FitNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
