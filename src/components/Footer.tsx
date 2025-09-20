import { Phone, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="font-body">© 2025 Harmony Heaven Interiors. All rights reserved.</p>
            <p className="font-body text-sm opacity-90">Designed by Rajan Charaya</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:+919784037296"
              className="flex items-center space-x-2 bg-secondary hover:bg-accent px-4 py-2 rounded-md transition-colors duration-200"
            >
              <Phone className="h-4 w-4" />
              <span className="font-body text-secondary-foreground">Call Us</span>
            </a>
            <a
              href="https://www.instagram.com/harmonyheaveninteriors/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-secondary hover:bg-accent px-4 py-2 rounded-md transition-colors duration-200"
            >
              <Instagram className="h-4 w-4" />
              <span className="font-body text-secondary-foreground">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};