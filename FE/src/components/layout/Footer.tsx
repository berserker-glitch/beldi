import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground mt-auto zelij-pattern-dark">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">B</span>
              </div>
              <span className="text-lg font-bold">BELDI</span>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Morocco's authentic bazaar for traditional crafts and artisan goods. Shop handmade, support local artisans.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200 focus:outline-none focus:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/search"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200 focus:outline-none focus:underline"
                >
                  Search
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200 focus:outline-none focus:underline"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200 focus:outline-none focus:underline"
                >
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-base font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:support@moroccomarket.ma"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200 focus:outline-none focus:underline"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200 focus:outline-none focus:underline"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors duration-200 focus:outline-none focus:underline"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-base font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary-foreground/10 hover:bg-primary flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                aria-label="Visit our Facebook page"
              >
                <Facebook size={20} aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary-foreground/10 hover:bg-primary flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                aria-label="Visit our Twitter page"
              >
                <Twitter size={20} aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary-foreground/10 hover:bg-primary flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                aria-label="Visit our Instagram page"
              >
                <Instagram size={20} aria-hidden="true" />
              </a>
              <a
                href="mailto:support@moroccomarket.ma"
                className="w-10 h-10 rounded-lg bg-secondary-foreground/10 hover:bg-primary flex items-center justify-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                aria-label="Send us an email"
              >
                <Mail size={20} aria-hidden="true" />
              </a>
            </div>
            <p className="text-xs text-secondary-foreground/70 mt-4">
              Stay updated with the latest businesses and offers
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-secondary-foreground/20 text-center">
          <p className="text-sm text-secondary-foreground/70">
            © {currentYear} BELDI. Supporting local businesses across Morocco.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
