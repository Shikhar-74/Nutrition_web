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
import HeroSection from "@/components/sections/HeroSection";
import Reveal from "@/components/ui/Reveal";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />

      {/* Introduction Section */}
      <section className="py-40 bg-background w-full relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-linear-to-b from-[#E8EDE5]/50 to-transparent opacity-30"></div>
        <div className="absolute -left-20 top-1/2 w-64 h-64 bg-nutrition-accent/20 rounded-full blur-[80px] -z-10 animate-blob"></div>
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-2xl shadow-nutrition-dark/20 bg-white aspect-4/5 sm:aspect-3/4 lg:aspect-4/5 group border-8 border-white/50">
                <div className="absolute inset-0 bg-nutrition-primary/5 pointer-events-none z-10 transition-opacity duration-700"></div>
                <Image
                  src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070&auto=format&fit=crop"
                  alt="Nutrition consultation"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-[2s] ease-out"
                />

                {/* Image Overlay Label */}
                <div className="absolute bottom-8 right-8 glass px-6 py-3 rounded-2xl z-20 shadow-xl border border-white/40 group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-nutrition-primary animate-ping"></div>
                    <span className="font-bold text-nutrition-dark">Personalized Coaching</span>
                  </div>
                </div>
              </div>
              <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-[#E8EDE5] rounded-full"></div>
            </div>

            <div>
              <h2 className="text-nutrition-primary font-semibold tracking-wide uppercase mb-3">About Dr. Prashant</h2>
              <h3 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
                Your partner in achieving complete wellness.
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over a decade of experience in clinical nutrition and holistic health, I believe that food is medicine. My approach isn&apos;t about restrictive diets; it&apos;s about finding real, sustainable balance that works for your body and your lifestyle.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Certified Clinical Nutritionist",
                  "Personalized Diet Programs",
                  "Focus on Sustainable Habits",
                  "Holistic Lifestyle Guidance"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-foreground font-medium">
                    <CheckCircle2 className="w-6 h-6 text-nutrition-primary mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/about" className="inline-flex items-center text-lg font-semibold text-nutrition-primary hover:text-nutrition-dark group">
                More about my philosophy
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Services Overview Section */}
      <section className="py-40 bg-[#E8EDE5]/20 w-full relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-full bg-[#E8EDE5]/40 -skew-x-12 translate-x-1/2 -z-10"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-nutrition-accent/10 rounded-full blur-[100px] -z-10 animate-blob" style={{ animationDelay: "4s" }}></div>
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-nutrition-primary font-semibold tracking-wide uppercase mb-3">What We Offer</h2>
            <h3 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Services tailored to your goals
            </h3>
            <p className="text-lg text-muted-foreground">
              Whether you&apos;re looking to lose weight, manage a medical condition, or simply boost your daily energy, we have a specialized program for you.
            </p>
          </div>

          <Reveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" stagger>
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
          </Reveal>

          <div className="text-center mt-16">
            <Link href="/services" className="inline-flex items-center justify-center px-10 py-5 bg-white text-foreground shadow-sm border border-muted rounded-full font-bold text-lg hover:border-nutrition-primary hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              View All Services
            </Link>
          </div>
        </Reveal>
      </section>

      {/* BMI Calculator Section */}
      <section className="py-40 bg-background w-full relative overflow-hidden">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-nutrition-accent/5 rounded-full blur-[120px] -z-10"></div>
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-nutrition-primary font-semibold tracking-wide uppercase mb-3">Health Check</h2>
              <h3 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Know where you stand.
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Body Mass Index (BMI) is a simple calculation using a person&apos;s height and weight. The formula is BMI = kg/m2 where kg is a person&apos;s weight in kilograms and m2 is their height in metres squared.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-foreground font-medium">
                  <CheckCircle2 className="w-5 h-5 text-nutrition-primary mr-3 shrink-0" />
                  Quick and easy health indicator
                </li>
                <li className="flex items-center text-foreground font-medium">
                  <CheckCircle2 className="w-5 h-5 text-nutrition-primary mr-3 shrink-0" />
                  Helps determine weight category
                </li>
                <li className="flex items-center text-foreground font-medium">
                  <CheckCircle2 className="w-5 h-5 text-nutrition-primary mr-3 shrink-0" />
                  First step towards a personalized plan
                </li>
              </ul>
            </div>
            <div>
              <BMICalculator />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Diet Plan Categories */}
      <section className="py-40 bg-[#E8EDE5]/20 w-full relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-nutrition-primary/10 to-transparent"></div>
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-nutrition-primary font-semibold tracking-wide uppercase mb-3">Specialized Programs</h2>
            <h3 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Diet Plans for Every Need
            </h3>
            <p className="text-lg text-muted-foreground">
              Browse our most popular nutrition programs, designed specifically to address unique health challenges and lifestyle goals.
            </p>
          </div>

          <Reveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" stagger>
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
          </Reveal>
        </Reveal>
      </section>

      {/* Before / After Transformation Section */}
      <section className="py-40 bg-background w-full relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-nutrition-accent/10 rounded-full blur-[80px] -z-10"></div>
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-nutrition-primary font-semibold tracking-wide uppercase mb-3">Real Results</h2>
            <h3 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Incredible Transformations
            </h3>
            <p className="text-lg text-muted-foreground">
              See what dedication and the right nutritional guidance can achieve. Real people, real life-changing results.
            </p>
          </div>

          <Reveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" stagger>
            <TransformationCard
              beforeImage="https://images.unsplash.com/photo-1534260933201-158eb0939523?w=500&auto=format&fit=crop"
              afterImage="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&auto=format&fit=crop"
              resultDetails="Lost 22 kg in 8 months"
              testimonial="I never thought I could feel this energetic. This wasn&apos;t a diet; it was a total lifestyle reset."
            />
            <TransformationCard
              beforeImage="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop"
              afterImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop"
              resultDetails="PCOS reversed in 6 months"
              testimonial="My cycles are regular for the first time in years, and I&apos;ve shed the stubborn weight!"
            />
            <TransformationCard
              beforeImage="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop"
              afterImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop"
              resultDetails="Gained 8kg Lean Muscle"
              testimonial="From skinny-fat to confident. The high-protein Indian diet plan worked wonders for my physique."
            />
          </Reveal>
        </Reveal>
      </section>

      {/* Testimonials */}
      <section className="py-40 bg-[#E8EDE5]/20 w-full relative overflow-hidden">
        <div className="absolute -left-20 bottom-0 w-96 h-96 bg-nutrition-accent/20 rounded-full blur-[120px] -z-10"></div>
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-nutrition-primary font-semibold tracking-wide uppercase mb-3">Testimonials</h2>
            <h3 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
              Stories of Transformation
            </h3>
          </div>

          <Reveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" stagger>
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
              content="Losing pregnancy weight seemed impossible while nursing. Dr. Prashant&apos;s nutrient-dense plan gave me energy and helped me get back in shape!"
              image="https://i.pravatar.cc/150?img=9"
            />
          </Reveal>
        </Reveal>
      </section>

      {/* Blog / Nutrition Tips Section */}
      <section className="py-40 bg-background w-full relative overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-24 bg-linear-to-b from-nutrition-primary/20 to-transparent"></div>
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-nutrition-primary font-semibold tracking-wide uppercase mb-3">Nutrition Tips</h2>
              <h3 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
                Latest from the Blog
              </h3>
            </div>
            <Link href="#" className="inline-flex items-center text-nutrition-primary font-semibold hover:text-nutrition-dark group">
              View All Articles
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <Reveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" stagger>
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
          </Reveal>
        </Reveal>
      </section>

      {/* FAQ Section */}
      <section className="py-40 bg-[#E8EDE5]/20 w-full relative overflow-hidden">
        <div className="absolute right-0 top-1/2 w-64 h-64 bg-nutrition-primary/5 rounded-full blur-[100px] -z-10"></div>
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-nutrition-primary font-semibold tracking-wide uppercase mb-3">Got Questions?</h2>
            <h3 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-6">
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
        </Reveal>
      </section>

      {/* CTA Section */}
      <section className="py-40 w-full relative overflow-hidden bg-nutrition-dark">
        <div className="absolute inset-0 bg-radial-gradient from-nutrition-primary/40 to-transparent opacity-60"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-nutrition-accent/20 rounded-full blur-[120px]"></div>
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-nutrition-primary/40 rounded-full blur-[120px]"></div>
        <Reveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="font-heading text-4xl sm:text-6xl font-bold text-white mb-6">
            Ready to start your health journey?
          </h2>
          <p className="text-xl text-nutrition-accent mb-10 leading-relaxed max-w-2xl mx-auto font-light">
            Book a complimentary 15-minute discovery call to discuss your goals and how we can achieve them together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917408856265?text=Hello%20Dr.%20Prashant%2C%20I%20would%20like%20to%20book%20a%20nutrition%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-10 py-5 bg-nutrition-accent text-nutrition-dark rounded-full font-bold text-lg hover:bg-white hover:shadow-2xl hover:shadow-nutrition-accent/30 transition-all duration-300 hover:-translate-y-1"
            >
              <CalendarCheck className="w-5 h-5 mr-2" />
              Book Appointment
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
