"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  stagger?: boolean;
}

export default function Reveal({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 50,
  className = "",
  stagger = false,
}: RevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const elements = stagger 
        ? gsap.utils.toArray(containerRef.current?.children || []) 
        : [containerRef.current];

      gsap.fromTo(
        elements,
        { 
          y: yOffset, 
          opacity: 0,
          scale: 0.98
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: duration,
          delay: delay,
          ease: "power3.out",
          stagger: stagger ? 0.15 : 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [delay, duration, yOffset, stagger]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
