import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, HeartPulse, Activity, Apple, Scale, CalendarCheck } from "lucide-react";
import ServiceCard from "@/components/ui/ServiceCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import TransformationCard from "@/components/ui/TransformationCard";
import DietCategoryCard from "@/components/ui/DietCategoryCard";
import BlogCard from "@/components/ui/BlogCard";
import FAQAccordion from "@/components/ui/FAQAccordion";
import BMICalculator from "@/components/ui/BMICalculator";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-stone-50 min-h-[90vh] flex items-center">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50 rounded-l-[100px] opacity-50 hidden lg:block z-0"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold mb-6 tracking-wide uppercase">
                Expert Nutritionist & Dietitian
              </span>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-stone-900">
                Eat right, <br/>
                <span className="text-emerald-600">live brilliant.</span>
              </h1>
              <p className="text-lg sm:text-xl text-stone-600 mb-8 leading-relaxed max-w-lg">
                Transform your health with personalized nutrition plans and expert guidance tailored to your unique lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/917408856265?text=Hello%20Dr.%20Prashant%2C%20I%20would%20like%20to%20book%20a%20nutrition%20consultation." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex justify-center items-center px-8 py-4 bg-emerald-600 text-white rounded-full font-semibold text-lg hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-200 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Book Consultation
                </a>
                <Link href="/services" className="inline-flex justify-center items-center px-8 py-4 bg-white text-emerald-700 border border-emerald-200 rounded-full font-semibold text-lg hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300">
                  View Diet Plans
                </Link>
              </div>
              
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-stone-200 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Patient" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-bold">
                    5k+
                  </div>
                </div>
                <div className="text-sm font-medium text-stone-600">
                  <span className="block font-bold text-stone-900">Happy Patients</span>
                  Trust our expertise
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-lg lg:max-w-none pt-12 lg:pt-0">
            <div className="relative rounded-2rem overflow-hidden shadow-2xl shadow-emerald-900/10 border-8 border-white/50 bg-white aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] group">
  <img 
    src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop"
    alt="Premium healthy nutrition meal"
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
  />
</div>
              {/* Floating Badge */}
              <div className="absolute bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow border border-stone-100  sm:flex">
                <div className="bg-emerald-100 p-3 rounded-full text-emerald-600">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-stone-900 leading-none mb-1">10+ Years</p>
                  <p className="text-sm text-stone-500">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
         <div className="aspect-square sm:aspect-4/5 rounded-2rem overflow-hidden shadow-2xl relative">
  <img 
    src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070&auto=format&fit=crop" 
    alt="Nutrition consultation" 
    className="w-full h-full object-cover"
  />
</div>
              <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-emerald-50 rounded-full"></div>
            </div>
            
            <div>
              <h2 className="text-emerald-600 font-semibold tracking-wide uppercase mb-3">About Dr. Prashant</h2>
              <h3 className="font-heading text-4xl sm:text-5xl font-bold text-stone-900 mb-6 leading-tight">
                Your partner in achieving complete wellness.
              </h3>
              <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                With over a decade of experience in clinical nutrition and holistic health, I believe that food is medicine. My approach isn't about restrictive diets; it's about finding real, sustainable balance that works for your body and your lifestyle.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Certified Clinical Nutritionist",
                  "Personalized Diet Programs",
                  "Focus on Sustainable Habits",
                  "Holistic Lifestyle Guidance"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-stone-700 font-medium">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <Link href="/about" className="inline-flex items-center text-lg font-semibold text-emerald-600 hover:text-emerald-700 group">
                More about my philosophy
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-24 bg-stone-50 w-full relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-emerald-600 font-semibold tracking-wide uppercase mb-3">What We Offer</h2>
            <h3 className="font-heading text-4xl sm:text-5xl font-bold text-stone-900 mb-6">
              Services tailored to your goals
            </h3>
            <p className="text-lg text-stone-600">
              Whether you're looking to lose weight, manage a medical condition, or simply boost your daily energy, we have a specialized program for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              title="Weight Management"
              description="Sustainable weight loss or gain programs designed around your lifestyle, without starving."
              icon={<Scale className="w-7 h-7" />}
              href="/services"
            />
            <ServiceCard 
              title="Medical Nutrition"
              description="Specialized diets for Diabetes, PCOS, Thyroid, and other clinical conditions."
              icon={<Activity className="w-7 h-7" />}
              href="/services"
            />
            <ServiceCard 
              title="Lifestyle Coaching"
              description="Holistic guidance combining diet, sleep, and stress management for optimal health."
              icon={<Apple className="w-7 h-7" />}
              href="/services"
            />
            <ServiceCard 
              title="1-on-1 Consultation"
              description="Personalized deep-dive sessions to understand your body and plan your wellness journey."
              icon={<HeartPulse className="w-7 h-7" />}
              href="/services"
            />
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-900 shadow-sm border border-stone-200 rounded-full font-semibold hover:border-emerald-500 hover:shadow-md transition-all duration-300">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* BMI Calculator Section */}
      <section className="py-20 bg-emerald-50 w-full relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-emerald-600 font-semibold tracking-wide uppercase mb-3">Health Check</h2>
              <h3 className="font-heading text-4xl sm:text-5xl font-bold text-stone-900 mb-6">
                Know where you stand.
              </h3>
              <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                Body Mass Index (BMI) is a simple calculation using a person's height and weight. The formula is BMI = kg/m2 where kg is a person's weight in kilograms and m2 is their height in metres squared.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-stone-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                  Quick and easy health indicator
                </li>
                <li className="flex items-center text-stone-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                  Helps determine weight category
                </li>
                <li className="flex items-center text-stone-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mr-3 shrink-0" />
                  First step towards a personalized plan
                </li>
              </ul>
            </div>
            <div>
              <BMICalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Diet Plan Categories */}
      <section className="py-24 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-emerald-600 font-semibold tracking-wide uppercase mb-3">Specialized Programs</h2>
            <h3 className="font-heading text-4xl sm:text-5xl font-bold text-stone-900 mb-6">
              Diet Plans for Every Need
            </h3>
            <p className="text-lg text-stone-600">
              Browse our most popular nutrition programs, designed specifically to address unique health challenges and lifestyle goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DietCategoryCard 
              title="Weight Loss Diet"
              description="A balanced, sustainable approach to shedding fat without losing energy or starving yourself."
              image="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop"
            />
            <DietCategoryCard 
              title="PCOS Diet"
              description="Hormone-balancing nutrition to manage PCOS symptoms, regulate cycles, and improve metabolism."
              image="https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=2006&auto=format&fit=crop"
            />
            <DietCategoryCard 
              title="Diabetes Diet"
              description="Low glycemic index meals that keep your blood sugar stable while satisfying your cravings."
              image="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=1974&auto=format&fit=crop"
            />
            <DietCategoryCard 
              title="Weight Gain Diet"
              description="Calorie-dense, nutrient-rich meal plans for healthy and sustainable weight and muscle gain."
              image="https://images.unsplash.com/photo-1543352632-5a4b24e4d2a6?q=80&w=2050&auto=format&fit=crop"
            />
            <DietCategoryCard 
              title="Muscle Gain Diet"
              description="High-protein tailored plans for athletes and gym-goers looking to bulk up cleanly."
              image="https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?q=80&w=2070&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* Before / After Transformation Section */}
      <section className="py-24 bg-stone-50 w-full relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-emerald-600 font-semibold tracking-wide uppercase mb-3">Real Results</h2>
            <h3 className="font-heading text-4xl sm:text-5xl font-bold text-stone-900 mb-6">
              Incredible Transformations
            </h3>
            <p className="text-lg text-stone-600">
              See what dedication and the right nutritional guidance can achieve. Real people, real life-changing results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TransformationCard 
              beforeImage="https://images.unsplash.com/photo-1534260933201-158eb0939523?w=500&auto=format&fit=crop"
              afterImage="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&auto=format&fit=crop"
              resultDetails="Lost 22 kg in 8 months"
              testimonial="I never thought I could feel this energetic. This wasn't a diet; it was a total lifestyle reset."
            />
            <TransformationCard 
              beforeImage="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop"
              afterImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop"
              resultDetails="PCOS reversed in 6 months"
              testimonial="My cycles are regular for the first time in years, and I've shed the stubborn weight!"
            />
            <TransformationCard 
              beforeImage="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop"
              afterImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop"
              resultDetails="Gained 8kg Lean Muscle"
              testimonial="From skinny-fat to confident. The high-protein Indian diet plan worked wonders for my physique."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-emerald-600 font-semibold tracking-wide uppercase mb-3">Testimonials</h2>
            <h3 className="font-heading text-4xl sm:text-5xl font-bold text-stone-900">
              Stories of Transformation
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Sarah Jenkins"
              role="Lost 15kg in 6 months"
              content="Dr. Prashant completely changed how I look at food. I never felt deprived, and for the first time in my life, I have a healthy relationship with eating."
              image="https://i.pravatar.cc/150?img=32"
            />
            <TestimonialCard 
              name="Michael R."
              role="Diabetes Management"
              content="My HBA1c dropped from 8.2 to 5.9 in just 4 months. The personalized meal plans are practical, cultural, and actually taste amazing."
              image="https://i.pravatar.cc/150?img=11"
            />
            <TestimonialCard 
              name="Priya Patel"
              role="PCOS Fighter"
              content="After years of struggling with PCOS symptoms, the lifestyle and diet changes suggested by Dr. Prashant finally brought my cycle back to normal."
              image="https://i.pravatar.cc/150?img=5"
            />
            <TestimonialCard 
              name="Ananya Sharma"
              role="Weight Loss Journey"
              content="I was tired of yo-yo dieting. The sustainable approach and constant support helped me drop 10 kilos without giving up my favorite foods."
              image="https://i.pravatar.cc/150?img=42"
            />
            <TestimonialCard 
              name="Rahul Verma"
              role="Cholesterol Control"
              content="A wake-up call from my doctor led me here. Three months of disciplined eating, and my lipid profile is completely normal."
              image="https://i.pravatar.cc/150?img=13"
            />
            <TestimonialCard 
              name="Neha Gupta"
              role="Postpartum Weight Loss"
              content="Losing pregnancy weight seemed impossible while nursing. Dr. Prashant's nutrient-dense plan gave me energy and helped me get back in shape!"
              image="https://i.pravatar.cc/150?img=9"
            />
          </div>
        </div>
      </section>

      {/* Blog / Nutrition Tips Section */}
      <section className="py-24 bg-stone-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-emerald-600 font-semibold tracking-wide uppercase mb-3">Nutrition Tips</h2>
              <h3 className="font-heading text-4xl sm:text-5xl font-bold text-stone-900">
                Latest from the Blog
              </h3>
            </div>
            <Link href="#" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 group">
              View All Articles
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BlogCard 
              title="10 Foods for Fast Weight Loss"
              description="Incorporate these metabolism-boosting superfoods into your daily diet to accelerate fat burn..."
              image="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053&auto=format&fit=crop"
              readTime="4 min read"
            />
            <BlogCard 
              title="Best Diet for PCOS"
              description="Struggling with PCOS? Here is the ultimate guide to eating right for hormone balance..."
              image="https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=2006&auto=format&fit=crop"
              readTime="6 min read"
            />
            <BlogCard 
              title="Healthy Morning Detox Drinks"
              description="Kickstart your metabolism and flush out toxins with these 5 easy morning elixirs..."
              image="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1964&auto=format&fit=crop"
              readTime="3 min read"
            />
            <BlogCard 
              title="High Protein Indian Foods"
              description="Vegetarian? No problem. Discover the best plant-based protein sources for your fitness journey..."
              image="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop"
              readTime="5 min read"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-emerald-600 font-semibold tracking-wide uppercase mb-3">Got Questions?</h2>
            <h3 className="font-heading text-4xl sm:text-5xl font-bold text-stone-900 mb-6">
              Frequently Asked Questions
            </h3>
          </div>
          <FAQAccordion 
            faqs={[
              {
                question: "How long does it take to see results from a diet plan?",
                answer: "Results vary depending on your starting point, metabolism, and adherence to the plan. However, most of our clients report feeling more energetic within the first week, and noticeable weight / measurement changes within 3 to 4 weeks."
              },
              {
                question: "Are the diet plans restrictive or hard to follow?",
                answer: "Not at all! We believe in sustainable nutrition. Your plan will include local, culturally appropriate foods that you enjoy. The focus is on portion control and balance, not starvation."
              },
              {
                question: "Do you offer online consultations?",
                answer: "Yes, we offer fully online consultation and coaching. We use WhatsApp, video calls, and our app to stay connected, track your progress, and support you no matter where you live."
              },
              {
                question: "Can diabetics follow your diet plans?",
                answer: "Absolutely. We specialize in Medical Nutrition Therapy. We formulate low GI, balanced plans specifically designed to manage blood sugar levels and improve HBA1c over time."
              }
            ]}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 w-full relative overflow-hidden bg-emerald-900">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="font-heading text-4xl sm:text-6xl font-bold text-white mb-6">
            Ready to start your health journey?
          </h2>
          <p className="text-xl text-emerald-100 mb-10 leading-relaxed max-w-2xl mx-auto">
            Book a complimentary 15-minute discovery call to discuss your goals and how we can achieve them together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/917408856265?text=Hello%20Dr.%20Prashant%2C%20I%20would%20like%20to%20book%20a%20nutrition%20consultation." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex justify-center items-center px-8 py-4 bg-emerald-500 text-white rounded-full font-bold text-lg hover:bg-emerald-400 hover:shadow-lg transition-all duration-300"
            >
              <CalendarCheck className="w-5 h-5 mr-2" />
              Book Appointment
            </a>
          </div>
        </div>
      </section>
    </div>

  );
}
