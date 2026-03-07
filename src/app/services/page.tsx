import ServiceCard from "@/components/ui/ServiceCard";
import { Scale, Activity, Apple, HeartPulse, Sparkles, Brain } from "lucide-react";

export const metadata = {
  title: "Services & Programs | Dr. Prashant Nutritionist",
  description: "Explore personalized nutrition services including weight loss, diabetes management, and lifestyle coaching.",
};

export default function Services() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="bg-emerald-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=2065&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
            Comprehensive, science-backed nutritional programs tailored precisely to your unique biology, goals, and lifestyle.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Weight Loss Program"
              description="A sustainable approach to fat loss without hunger. Learn to balance macros, manage portions gently, and lose weight while still enjoying food."
              icon={<Scale className="w-8 h-8" />}
              href="/contact"
            />
            
            <ServiceCard 
              title="Weight Gain Program"
              description="Healthy, muscle-focused weight gain strategies for underweight individuals or athletes looking to bulk up nutritiously."
              icon={<Activity className="w-8 h-8" />}
              href="/contact"
            />
            
            <ServiceCard 
              title="Diabetes Diet Plan"
              description="Specialized glycemic control meal plans designed to stabilize blood sugar, manage insulin resistance, and improve HBA1C levels."
              icon={<HeartPulse className="w-8 h-8" />}
              href="/contact"
            />
            
            <ServiceCard 
              title="Personalized Consultation"
              description="A 60-minute deep-dive diagnostic session to review your medical history, current diet, and map out a pathway to your goals."
              icon={<Sparkles className="w-8 h-8" />}
              href="/contact"
            />
            
            <ServiceCard 
              title="Healthy Lifestyle Coaching"
              description="Comprehensive mentoring focusing on diet, sleep hygiene, stress reduction, and building lifelong healthy habits."
              icon={<Apple className="w-8 h-8" />}
              href="/contact"
            />
            
            <ServiceCard 
              title="Gut Health & Digestion"
              description="Targeted nutritional therapy for IBS, bloating, acid reflux, and overall microbiome restoration."
              icon={<Brain className="w-8 h-8" />}
              href="/contact"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-b border-stone-100 pb-20">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-stone-900 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery Call", desc: "Brief introductory chat to understand your core health concerns." },
              { step: "02", title: "Assessment", desc: "Detailed review of your bloodwork, lifestyle, and dietary habits." },
              { step: "03", title: "Custom Plan", desc: "Creation of a highly personalized meal and protocol blueprint." },
              { step: "04", title: "Ongoing Support", desc: "Weekly check-ins, adjustments, and continuous motivation." }
            ].map((s, i) => (
              <div key={i} className="relative text-center">
                <div className="w-16 h-16 mx-auto bg-stone-100 rounded-full flex items-center justify-center font-heading font-bold text-2xl text-emerald-600 mb-6">
                  {s.step}
                </div>
                <h3 className="font-bold text-stone-900 text-xl mb-3">{s.title}</h3>
                <p className="text-stone-600">{s.desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-8 left-1/2 w-full h-2px bg-stone-100 -z-10 ml-8"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
