import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react";

export const metadata = {
  title: "Contact Us | Dr. Prashant Nutritionist",
  description: "Get in touch to book a consultation, ask questions, or visit our clinic.",
};

export default function Contact() {
  return (
    <div className="flex flex-col w-full bg-stone-50 min-h-screen pb-24">
      {/* Page Header */}
      <section className="bg-emerald-900 py-20 relative overflow-hidden mb-16">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">Let&apos;s Connect</h1>
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
            Have questions about our programs or ready to start your journey? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Information & Map */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-2rem shadow-sm border border-stone-100">
              <h3 className="font-heading text-2xl font-bold text-stone-900 mb-6">Contact Details</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mr-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-stone-900 mb-1">Clinic Address</span>
                    <span className="text-stone-600 text-sm leading-relaxed">123 Wellness Avenue<br/>Health City, HC 40521<br/>Suite 300</span>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mr-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-stone-900 mb-1">Phone Number</span>
                    <span className="text-stone-600 text-sm">+1 (555) 123-4567<br/>+1 (555) 987-6543</span>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mr-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-stone-900 mb-1">Email Address</span>
                    <span className="text-stone-600 text-sm">hello@drprashant.com<br/>appointments@drprashant.com</span>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mr-4">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-semibold text-stone-900 mb-1">Working Hours</span>
                    <span className="text-stone-600 text-sm">Mon - Fri: 9:00 AM - 6:00 PM<br/>Saturday: 10:00 AM - 2:00 PM<br/>Sunday: Closed</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Map Placeholder */}
            <div className="bg-stone-200 h-64 rounded-2rem overflow-hidden relative shadow-sm border border-stone-200 group">
              <div className="absolute inset-0 bg-stone-100 flex flex-col items-center justify-center text-stone-500 hover:bg-stone-50 transition-colors">
                <Globe className="w-10 h-10 mb-3 text-stone-400 group-hover:text-emerald-500 transition-colors" />
                <span className="font-semibold text-stone-600">Interactive Map Integration</span>
                <span className="text-xs mt-1">Google Maps API required</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 sm:p-12 rounded-2rem shadow-sm border border-stone-100 h-full">
              <h2 className="font-heading text-3xl font-bold text-stone-900 mb-2">Send a Message</h2>
              <p className="text-stone-500 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-stone-900 mb-2">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-5 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder-stone-400"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-stone-900 mb-2">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-5 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder-stone-400"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-stone-900 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-5 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder-stone-400"
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-stone-900 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="w-full px-5 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder-stone-400"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-stone-900 mb-2">Interested Service</label>
                  <select 
                    id="service" 
                    className="w-full px-5 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all text-stone-600"
                  >
                    <option value="">Select a service...</option>
                    <option value="weight-loss">Weight Loss Program</option>
                    <option value="diabetes">Diabetes Management</option>
                    <option value="consultation">1-on-1 Consultation</option>
                    <option value="other">Other / General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-stone-900 mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-5 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all placeholder-stone-400 resize-none"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button 
                  type="button" 
                  className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-200 transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-3" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
