import Image from "next/image";
import { CheckCircle2, Award, BookOpen, HeartPulse } from "lucide-react";

export const metadata = {
  title: "About Dr. Prashant | Nutritionist & Dietitian",
  description: "Learn more about Dr. Prashant, his experience, and his philosophy on holistic nutrition.",
};

export default function About() {
  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="bg-emerald-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">About Dr. Prashant</h1>
          <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
            Dedicated to transforming lives through the power of clinical nutrition and mindful eating.
          </p>
        </div>
      </section>

      {/* Main Intro */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
<div className="aspect-3/4 rounded-3xl overflow-hidden shadow-2xl relative">
  <img 
    src="/Prashant.jpeg"
    alt="Dr. Prashant"
    className="w-full h-full object-cover"
  />
</div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-emerald-100 rounded-full -z-10"></div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
                Hello, I'm Dr. Prashant. Let's make wellness your new normal.
              </h2>
              <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
                <p>
                  My journey into nutrition began over 12 years ago when I saw firsthand how diet could reverse chronic illnesses that medication alone couldn't fix. Since then, I've dedicated my career to understanding the complex relationship between the human body, lifestyle, and food.
                </p>
                <p>
                  As a Certified Clinical Nutritionist, I focus on evidence-based dietary strategies. However, science alone isn't enough. We need practical, culturally relevant ways to apply this knowledge to your busy life. 
                </p>
                <p>
                  I don't believe in fad diets, extreme calorie restriction, or eliminating your favorite cultural foods. True health is about balance, nourishment, and creating a joyful relationship with what you eat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications & Experience */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-stone-900">Experience & Qualifications</h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-stone-50 p-8 rounded-3xl text-center hover:shadow-lg hover:shadow-emerald-100 transition-all border border-stone-100">
              <div className="w-16 h-16 mx-auto bg-emerald-100 text-emerald-600 flex items-center justify-center rounded-2xl mb-6">
                <BookOpen className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-stone-900 text-xl mb-3">Education</h3>
              <p className="text-stone-600">Ph.D. in Clinical Nutrition<br/>M.Sc. in Dietetics</p>
            </div>
            
            <div className="bg-stone-50 p-8 rounded-3xl text-center hover:shadow-lg hover:shadow-emerald-100 transition-all border border-stone-100">
              <div className="w-16 h-16 mx-auto bg-emerald-100 text-emerald-600 flex items-center justify-center rounded-2xl mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-stone-900 text-xl mb-3">Certifications</h3>
              <p className="text-stone-600">Registered Dietitian (RD)<br/>Board Certified in Sports Dietetics</p>
            </div>
            
            <div className="bg-stone-50 p-8 rounded-3xl text-center hover:shadow-lg hover:shadow-emerald-100 transition-all border border-stone-100">
              <div className="w-16 h-16 mx-auto bg-emerald-100 text-emerald-600 flex items-center justify-center rounded-2xl mb-6">
                <HeartPulse className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-stone-900 text-xl mb-3">Experience</h3>
              <p className="text-stone-600">12+ Years in Private Practice<br/>Ex-Head Dietitian at City Hospital</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-stone-900 mb-8">My Philosophy</h2>
          <div className="bg-white p-10 sm:p-16 rounded-[2.5rem] shadow-sm border border-emerald-100">
            <p className="text-xl sm:text-2xl text-stone-700 italic leading-relaxed mb-8">
              "Nutrition should be a source of joy, healing, and vitality—not stress or restriction. Every body is unique, and our goal is to find the perfect nutritional rhythm that lets you thrive naturally."
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                "Food is medicine",
                "Sustainable lifestyle over quick fixes",
                "No extreme starvation",
                "Science-backed, personalized plans"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center text-stone-700">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
