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
      {/* Subtle Hero Background Image with Blue Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image 
          src="/hero-bg.png"
          alt="Healthy food background"
          fill
          priority
          className="object-cover object-center opacity-15"
        />
        {/* Soft Blue Tint Overlay */}
        <div className="absolute inset-0 bg-[#E0F2FE]/40 mix-blend-multiply"></div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-[#E8EDE5] lg:rounded-l-[160px] opacity-40 z-0"></div>

      {/* Premium Noise / Texture overlay on background elements */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>

      <div className="absolute -top-24 -right-24 w-96 h-96 bg-nutrition-accent rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob"></div>
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#E8EDE5] rounded-full mix-blend-multiply filter blur-[100px] opacity-50 animate-blob" style={{ animationDelay: "2s" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div className="max-w-2xl">
            <div className="inline-flex items-center py-2 px-4 rounded-full bg-nutrition-primary/10 text-nutrition-primary text-xs sm:text-sm font-bold mb-8 tracking-widest uppercase backdrop-blur-md border border-nutrition-primary/5">
              <span className="w-2 h-2 rounded-full bg-nutrition-primary mr-2 animate-pulse"></span>
              Expert Nutritionist & Dietitian
            </div>

            <h1 ref={headlineRef} className="font-heading text-5xl sm:text-7xl lg:text-[5.5rem] font-bold leading-[1.02] tracking-tight mb-8 text-foreground">
              Eat <span className="relative inline-block px-2">
                right
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-nutrition-accent/60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                </svg>
              </span>, <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-nutrition-primary via-[#458561] to-nutrition-primary">
                live brilliant.
              </span>
            </h1>

            <p ref={textRef} className="text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed max-w-lg font-light">
              Personalized programs for <span className="font-medium text-foreground underline decoration-nutrition-accent decoration-2 underline-offset-4">Weight Loss</span>, <span className="font-medium text-foreground underline decoration-nutrition-accent decoration-2 underline-offset-4">PCOS</span>, and <span className="font-medium text-foreground underline decoration-nutrition-accent decoration-2 underline-offset-4">Medical Nutrition</span>.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-5 items-center sm:items-start mb-16">
              <a
                href="https://wa.me/917408856265?text=Hello%20Dr.%20Prashant%2C%20I%20would%20like%20to%20book%20a%20nutrition%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex justify-center items-center px-10 py-5 bg-nutrition-dark text-white rounded-full font-bold text-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-nutrition-primary/30 hover:-translate-y-1 w-full sm:w-auto"
              >
                <span className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                <span className="relative">Book Consultation</span>
              </a>
              <Link
                href="/services"
                className="inline-flex justify-center items-center px-10 py-5 bg-white text-nutrition-primary border-2 border-nutrition-accent/30 rounded-full font-bold text-lg hover:bg-nutrition-accent/10 hover:border-nutrition-accent transition-all duration-300 w-full sm:w-auto"
              >
                View Diet Plans
              </Link>
            </div>

            <div className="flex flex-col gap-6">
              <div ref={metricsRef} className="flex items-center gap-6 p-1">
                <div className="flex -space-x-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-14 h-14 rounded-full border-4 border-background bg-muted overflow-hidden transition-transform hover:scale-110 hover:z-20 cursor-pointer">
                      <Image 
                        src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                        alt="Patient" 
                        width={56} 
                        height={56} 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                  ))}
                  <div className="w-14 h-14 rounded-full border-4 border-background bg-nutrition-accent flex items-center justify-center text-nutrition-dark text-sm font-bold shadow-sm z-10 transition-transform hover:scale-110">
                    5k+
                  </div>
                </div>
                <div className="h-10 w-px bg-muted"></div>
                <div className="text-sm font-medium text-muted-foreground">
                  <span className="block font-bold text-foreground text-lg">Happy Patients</span>
                  Trust our expertise
                </div>
              </div>

              {/* Relocated Experience Badge */}
              <div ref={badgeRef} className="inline-flex items-center gap-4 py-3 px-5 glass rounded-[1.5rem] border border-white/50 w-fit">
                <div className="bg-nutrition-accent p-2.5 rounded-xl text-nutrition-dark shadow-inner">
                  <HeartPulse className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-foreground leading-none text-xl">10+ Years Experience</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none pt-12 lg:pt-0">
            {/* Background Circle Blur */}
            <div className="absolute -inset-10 bg-nutrition-accent/20 rounded-full blur-[80px] -z-10 animate-pulse"></div>

            <div ref={imageRef} className="relative rounded-[3rem] lg:rounded-[4rem] overflow-hidden shadow-2xl shadow-nutrition-dark/20 bg-white aspect-4/5 sm:aspect-3/4 lg:aspect-4/5 group border-8 border-white/50 transition-all duration-500">
              <div className="absolute inset-0 bg-nutrition-primary/5 pointer-events-none z-10 transition-opacity duration-700"></div>
              <Image 
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop"
                alt="Premium healthy nutrition meal"
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
          </div>

        </div>
      </div>
    </section>
  );
}
