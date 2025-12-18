import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <div>
                <h3 className="text-lg font-display font-bold leading-tight">
                  Mahavir Tours
                </h3>
                <p className="text-xs text-secondary-foreground/70 -mt-1">& Travels</p>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80 max-w-xs">
              Your trusted partner for comfortable and reliable travel across India. 
              Experience the journey, not just the destination.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                Our Fleet
              </Link>
              <Link to="/about" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+919876543210" className="flex items-center gap-3 text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                +91 98765 43210
              </a>
              <a href="mailto:info@mahavirtravels.com" className="flex items-center gap-3 text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                info@mahavirtravels.com
              </a>
              <div className="flex items-start gap-3 text-sm text-secondary-foreground/80">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>123 Travel Lane, Mumbai,<br />Maharashtra 400001</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} Mahavir Tours and Travels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
