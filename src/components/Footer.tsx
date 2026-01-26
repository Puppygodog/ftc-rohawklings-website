import { Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import hawkLogo from "@/assets/hawk-logo.png";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 mt-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-light/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <img src={hawkLogo} alt="Hawk Logo" className="h-16 w-16 mb-4" />
            <h3 className="text-xl font-bold mb-2">FTC Rohawklings</h3>
            <p className="text-primary-foreground/80 text-sm text-center md:text-left mb-4">
              Building the future through robotics
            </p>
            <SocialLinks variant="footer" />
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-4 text-gold">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/80">
              <Link to="/about" className="hover:text-gold transition-colors">About Us</Link>
              <Link to="/leadership" className="hover:text-gold transition-colors">Leadership</Link>
              <Link to="/what-we-do" className="hover:text-gold transition-colors">What We Do</Link>
              <Link to="/competitions" className="hover:text-gold transition-colors">Competitions</Link>
            </div>
          </div>

          {/* More Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-4 text-gold">Explore</h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/80">
              <Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link>
              <Link to="/donate" className="hover:text-gold transition-colors">Donate</Link>
              <Link to="/contact" className="hover:text-gold transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold mb-4 text-gold">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-gold" />
                <span>rohawklings@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gold" />
                <span>71 East 94th Street<br />New York, NY 10128</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} FTC Rohawklings. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/60">
            Made by Ronav Shah
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
