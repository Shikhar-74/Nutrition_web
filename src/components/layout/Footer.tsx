import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Brand & About */}
          <div className="space-y-6">
            <Link href="/" className="items-center gap-2 group inline-flex">
              <div className="bg-emerald-500/10 p-2 rounded-xl group-hover:bg-emerald-500 transition-colors duration-300">
                <Leaf className="h-6 w-6 text-emerald-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="font-heading font-bold text-2xl text-white">
                Dr. Prashant
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-stone-400">
              Empowering you to live a healthier, happier life through personalized nutrition and expert wellness guidance. Let's start your health journey today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-400 hover:text-emerald-400 transition-colors p-2 hover:bg-stone-800 rounded-full">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-emerald-400 transition-colors p-2 hover:bg-stone-800 rounded-full">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-emerald-400 transition-colors p-2 hover:bg-stone-800 rounded-full">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Diet Plans', 'Blog'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-sm hover:text-emerald-400 transition-colors flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-sm hover:text-emerald-400 transition-colors">Weight Loss Program</Link></li>
              <li><Link href="/services" className="text-sm hover:text-emerald-400 transition-colors">Weight Gain Program</Link></li>
              <li><Link href="/services" className="text-sm hover:text-emerald-400 transition-colors">Diabetes Diet Plan</Link></li>
              <li><Link href="/services" className="text-sm hover:text-emerald-400 transition-colors">Personalized Coaching</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-emerald-500 mr-3 shrink-0 mt-0.5" />
                <span>123 Wellness Avenue, Health City, HC 40521</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-500 mr-3 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-500 mr-3 shrink-0" />
                <span>contact@drprashant.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-stone-500">
            &copy; {new Date().getFullYear()} Dr. Prashant Nutritionist. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-stone-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
