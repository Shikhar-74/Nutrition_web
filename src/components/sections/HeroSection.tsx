"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { HeartPulse } from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // GSAP Context for easy cleanup
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1.2 } });

      // Initial state wrapper
      gsap.set([headlineRef.current, textRef.current, ctaRef.current, metricsRef.current], { 
        y: 50, 
        opacity: 0 
      });
      gsap.set(imageRef.current, { scale: 1.1, opacity: 0 });
      gsap.set(badgeRef.current, { scale: 0.8, opacity: 0, rotation: -10 });

      // Animation sequence
      tl.to(headlineRef.current, { y: 0, opacity: 1, duration: 1.5 })
        .to(textRef.current, { y: 0, opacity: 1 }, "-=1.2")
        .to(ctaRef.current, { y: 0, opacity: 1 }, "-=1.2")
        .to(metricsRef.current, { y: 0, opacity: 1 }, "-=1.0")
        .to(imageRef.current, { scale: 1, opacity: 1, duration: 1.8, ease: "power4.out" }, "-=1.5")
        .to(badgeRef.current, { scale: 1, opacity: 1, rotation: 0, duration: 1, ease: "back.out(1.7)" }, "-=1.0");

    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full overflow-hidden bg-background min-h-[95vh] flex items-center pt-24 pb-16 lg:py-0"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-[#E8EDE5] lg:rounded-l-[120px] opacity-40 z-0"></div>
      
      {/* Premium Noise / Texture overlay on background elements */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>

      <div className="absolute -top-24 -right-24 w-96 h-96 bg-nutrition-accent rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob"></div>
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#E8EDE5] rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-blob" style={{ animationDelay: "2s" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <div className="max-w-2xl">
            <span className="inline-block py-1.5 px-4 rounded-full bg-nutrition-primary/10 text-nutrition-primary text-xs sm:text-sm font-bold mb-6 tracking-widest uppercase backdrop-blur-md">
              Expert Nutritionist & Dietitian
            </span>
            
            <h1 ref={headlineRef} className="font-heading text-6xl sm:text-7xl lg:text-[5rem] font-bold leading-[1.05] tracking-tight mb-6 text-foreground">
              Eat right, <br/>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-nutrition-primary to-[#458561]">
                live brilliant.
              </span>
            </h1>
            
            <p ref={textRef} className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg font-light">
              Transform your health with personalized nutrition plans and expert guidance tailored to your unique lifestyle.
            </p>
            
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
              <a 
                href="https://wa.me/917408856265?text=Hello%20Dr.%20Prashant%2C%20I%20would%20like%20to%20book%20a%20nutrition%20consultation." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative inline-flex justify-center items-center px-9 py-4 bg-nutrition-dark text-white rounded-full font-semibold text-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-nutrition-primary/30 hover:-translate-y-1 w-full sm:w-auto"
              >
                <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                <span className="relative">Book Consultation</span>
              </a>
              <Link 
                href="/services" 
                className="inline-flex justify-center items-center px-9 py-4 bg-transparent text-nutrition-primary border-2 border-[#E8EDE5] rounded-full font-semibold text-lg hover:bg-[#E8EDE5]/50 transition-all duration-300 w-full sm:w-auto"
              >
                View Diet Plans
              </Link>
            </div>
            
            <div ref={metricsRef} className="mt-14 flex items-center gap-6 pt-6 border-t border-muted">
              <div className="flex -space-x-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-background bg-muted overflow-hidden">
                    <Image 
                      src={`https://i.pravatar.cc/100?img=${i+10}`} 
                      alt="Patient" 
                      width={48} 
                      height={48} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-2 border-background bg-nutrition-accent flex items-center justify-center text-nutrition-dark text-sm font-bold backdrop-blur-sm z-10">
                  5k+
                </div>
              </div>
              <div className="text-sm font-medium text-muted-foreground">
                <span className="block font-bold text-foreground text-base">Happy Patients</span>
                Trust our expertise
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none pt-12 lg:pt-0">
            <div ref={imageRef} className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-nutrition-dark/10 bg-white aspect-4/5 sm:aspect-3/4 lg:aspect-4/5 group border border-white/40">
              <div className="absolute inset-0 bg-nutrition-primary/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
              <Image 
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop"
                alt="Premium healthy nutrition meal"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
              />
            </div>
            
            {/* Floating Badge */}
            <div ref={badgeRef} className="absolute bottom-10 -left-8 sm:-left-12 glass p-4 sm:p-5 rounded-2xl shadow-xl flex items-center gap-4 animate-float sm:flex z-20">
              <div className="bg-nutrition-accent p-3 rounded-full text-nutrition-dark shadow-inner">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div className="pr-2">
                <p className="font-extrabold text-foreground leading-none mb-1 text-lg">10+ Years</p>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">Experience</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
